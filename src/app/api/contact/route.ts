import { NextResponse } from "next/server";
import { z } from "zod";

// In-Memory Rate Limiter (IP-based, 5 requests per 15 minutes)
interface RateLimitRecord {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

// HTML Escaping Helper to prevent HTML Injection in email templates
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Sanitize email subject header against Carriage Return / Line Feed (CRLF) Injection
function sanitizeHeader(str: string): string {
  return str.replace(/[\r\n]/g, " ").trim();
}

// Server Validation Schema with Zod
const ContactSchema = z.object({
  name: z.string().trim().min(1, "missing_fields").max(100, "err_name_too_long"),
  company: z.string().trim().min(1, "missing_fields").max(150, "err_company_too_long"),
  email: z.string().trim().email("invalid_email").max(150, "err_email_invalid"),
  phone: z.string().trim().max(40).optional().default(""),
  category: z
    .enum(["event", "market", "realestate", "animation", "other"])
    .default("event"),
  scale: z.string().trim().max(100).optional().default(""),
  timeline: z.string().trim().max(100).optional().default(""),
  budget: z.string().trim().max(100).optional().default(""),
  targetDate: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(1, "missing_fields").max(2000, "err_too_long"),
  website_hp: z.string().optional().default(""),
});

export async function POST(request: Request) {
  try {
    // 1. IP extraction and rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown-ip";

    const now = Date.now();
    const rateLimit = rateLimitMap.get(ip);

    if (rateLimit) {
      if (now < rateLimit.resetTime) {
        if (rateLimit.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            {
              errorCode: "rate_limited",
              error: "Too many requests. Please try again after 15 minutes.",
            },
            { status: 429 }
          );
        }
        rateLimit.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    // 2. Parse request JSON
    let rawBody;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        { errorCode: "missing_fields", error: "Malformed request payload." },
        { status: 400 }
      );
    }

    // 3. Schema validation with Zod
    const parseResult = ContactSchema.safeParse(rawBody);
    if (!parseResult.success) {
      const firstIssue = parseResult.error.issues[0];
      return NextResponse.json(
        {
          errorCode: firstIssue.message,
          error: "Validation failed: " + firstIssue.path.join(".") + " - " + firstIssue.message,
        },
        { status: 400 }
      );
    }

    const {
      name,
      company,
      email,
      phone,
      category,
      scale,
      timeline,
      budget,
      targetDate,
      message,
      website_hp,
    } = parseResult.data;

    // 4. Honeypot check: If bot filled it, silently return success
    if (website_hp && website_hp.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Inquiry received.",
      });
    }

    // 5. Sanitize fields for email delivery
    const effectiveScale = scale || budget;
    const effectiveTimeline = timeline || targetDate;

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCategory = escapeHtml(category.toUpperCase());
    const safeScale = escapeHtml(effectiveScale);
    const safeTimeline = escapeHtml(effectiveTimeline);
    const safeMessage = escapeHtml(message);

    const safeSubject = sanitizeHeader(
      `[JUMPUP Website Inquiry] ${safeCategory} - ${company} (${name})`
    );

    // 6. Email dispatch integration (Resend)
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_EMAIL_TO || "jumpupdanang@gmail.com";

    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "JUMPUP Inquiries <noreply@jumpupdanang.com>",
            to: [recipientEmail],
            reply_to: email,
            subject: safeSubject,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0b192c; line-height: 1.6;">
                <h2 style="color: #060e1a; border-bottom: 2px solid #d4af37; padding-bottom: 8px;">
                  New Business Inquiry from JUMPUP Corporate Website
                </h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                  <tr>
                    <td style="padding: 8px; font-weight: bold; width: 140px; background: #f8f9fb;">Name:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; background: #f8f9fb;">Company:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${safeCompany}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; background: #f8f9fb;">Business Email:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; background: #f8f9fb;">Phone / Chat:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${safePhone || "Not specified"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; background: #f8f9fb;">Category:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #a88440;">${safeCategory}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; background: #f8f9fb;">Estimated Scale:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${safeScale || "Not specified"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; background: #f8f9fb;">Target Timeline:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${safeTimeline || "Not specified"}</td>
                  </tr>
                </table>

                <div style="margin-top: 24px;">
                  <h3 style="color: #060e1a; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Inquiry Message:</h3>
                  <div style="background: #f8f9fb; padding: 16px; border-radius: 8px; border-left: 4px solid #d4af37; white-space: pre-wrap;">
                    ${safeMessage}
                  </div>
                </div>

                <p style="margin-top: 32px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 12px;">
                  Delivered securely via JUMPUP SERVICES Corporate Web Gateway.
                </p>
              </div>
            `,
          }),
        });

        if (!resendRes.ok) {
          const errText = await resendRes.text();
          console.error("[Contact API] Resend dispatch returned non-200 status:", errText);
          return NextResponse.json(
            { errorCode: "server_error", error: "Failed to dispatch email." },
            { status: 500 }
          );
        }
      } catch (emailErr) {
        console.error("[Contact API] Failed to send email via Resend:", emailErr);
        return NextResponse.json(
          { errorCode: "server_error", error: "Failed to send email." },
          { status: 500 }
        );
      }
    } else {
      // In production, reject if email gateway is not configured
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          { errorCode: "not_configured", error: "Email delivery service is currently not configured." },
          { status: 503 }
        );
      }
      // In development demo mode:
      console.log("[Contact API Dev Mode] Inquiry received for category:", category, "from:", company);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully delivered. Our executive team will contact you shortly.",
    });
  } catch (error) {
    console.error("[Contact API] Unexpected error:", error);
    return NextResponse.json(
      {
        errorCode: "server_error",
        error: "Internal server error occurred.",
      },
      { status: 500 }
    );
  }
}
