import { TranslationDictionary } from "@/data/translations";
import { ContactCategory } from "@/data/services";

export interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: ContactCategory;
  scale: string;
  timeline: string;
  message: string;
  consent: boolean;
  website_hp: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export const MAX_MESSAGE_LENGTH = 2000;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^[0-9+\s\-().]{7,20}$/;

export function validateContactForm(
  values: ContactFormValues,
  t: (key: keyof TranslationDictionary) => string
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = t("err_name_required");
  } else if (values.name.trim().length > 100) {
    errors.name = t("err_too_long");
  }

  if (!values.company.trim()) {
    errors.company = t("err_company_required");
  } else if (values.company.trim().length > 150) {
    errors.company = t("err_too_long");
  }

  if (!values.email.trim() || !EMAIL_REGEX.test(values.email.trim())) {
    errors.email = t("err_email_invalid");
  }

  if (values.phone.trim() && !PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = t("err_phone_invalid");
  }

  if (!values.message.trim()) {
    errors.message = t("err_message_required");
  } else if (values.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = t("err_too_long");
  }

  if (!values.consent) {
    errors.consent = t("err_privacy_required");
  }

  return errors;
}

export function mapServerErrorCode(
  code: string | undefined
): keyof TranslationDictionary {
  switch (code) {
    case "missing_fields":
    case "ERR_NAME_REQUIRED":
    case "ERR_COMPANY_REQUIRED":
    case "ERR_MESSAGE_REQUIRED":
      return "err_missing_fields";
    case "invalid_email":
    case "ERR_EMAIL_INVALID":
      return "err_email_invalid";
    case "rate_limited":
    case "ERR_RATE_LIMITED":
      return "err_rate_limited";
    case "network":
      return "err_network";
    case "err_too_long":
      return "err_too_long";
    case "not_configured":
    case "server_error":
    default:
      return "err_server_error";
  }
}
