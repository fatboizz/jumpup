import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "JUMPUP SERVICES CO.,LTD - Corporate Events, Investment & Business Expansion in Vietnam";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#060E1A",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(30, 65, 107, 0.8) 0%, transparent 60%), radial-gradient(circle at 15% 85%, rgba(212, 175, 55, 0.25) 0%, transparent 50%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              border: "2px solid #D4AF37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0B192C",
              marginRight: 20,
            }}
          >
            <span style={{ color: "#D4AF37", fontSize: 28, fontWeight: 900 }}>
              J
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              JUMPUP{" "}
              <span style={{ color: "#D4AF37", fontWeight: 300 }}>
                SERVICES
              </span>
            </span>
            <span
              style={{
                color: "#94A3B8",
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Da Nang • Hanoi • Ho Chi Minh City
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#D4AF37",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Execution Partner in Vietnam
          </span>
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: 44,
              fontWeight: 800,
              lineHeight: 1.25,
              maxWidth: 950,
            }}
          >
            5-Star Hotel Corporate Events & Vietnam Business Expansion
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: 24,
          }}
        >
          <span style={{ color: "#E2E8F0", fontSize: 18, fontWeight: 600 }}>
            Bach Dang Complex, Da Nang, Vietnam
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            <span style={{ color: "#D4AF37", fontSize: 18, fontWeight: 700 }}>
              100–500+ Guests
            </span>
            <span style={{ color: "#94A3B8", fontSize: 18 }}>•</span>
            <span style={{ color: "#D4AF37", fontSize: 18, fontWeight: 700 }}>
              10+ Years Experience
            </span>
            <span style={{ color: "#94A3B8", fontSize: 18 }}>•</span>
            <span style={{ color: "#D4AF37", fontSize: 18, fontWeight: 700 }}>
              EN / JP / VN
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
