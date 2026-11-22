import { ContactCategory } from "@/data/services";
import { ContactFormValues, ContactFormErrors } from "@/lib/contactValidation";

export interface ContactState {
  values: ContactFormValues;
  errors: ContactFormErrors;
  touched: Partial<Record<keyof ContactFormValues, boolean>>;
  status: "idle" | "submitting" | "success" | "error";
  serverErrorCode: string | null;
  isCategoryHighlighted: boolean;
}

export type ContactAction =
  | { type: "SET_FIELD"; field: keyof ContactFormValues; value: any }
  | { type: "SET_ERRORS"; errors: ContactFormErrors }
  | { type: "BLUR_FIELD"; field: keyof ContactFormValues }
  | { type: "SET_CATEGORY_FROM_INTENT"; category: ContactCategory; message?: string }
  | { type: "CLEAR_CATEGORY_HIGHLIGHT" }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_ERROR"; errorCode: string }
  | { type: "RESET_FORM" };

export const initialContactValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  category: "event",
  scale: "",
  timeline: "",
  message: "",
  consent: false,
  website_hp: "",
};

export const initialContactState: ContactState = {
  values: initialContactValues,
  errors: {},
  touched: {},
  status: "idle",
  serverErrorCode: null,
  isCategoryHighlighted: false,
};

export function contactReducer(
  state: ContactState,
  action: ContactAction
): ContactState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: undefined },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "BLUR_FIELD":
      return {
        ...state,
        touched: { ...state.touched, [action.field]: true },
      };
    case "SET_CATEGORY_FROM_INTENT":
      return {
        ...state,
        values: {
          ...state.values,
          category: action.category,
          message:
            action.message && !state.values.message.trim()
              ? action.message
              : state.values.message,
        },
        isCategoryHighlighted: true,
      };
    case "CLEAR_CATEGORY_HIGHLIGHT":
      return { ...state, isCategoryHighlighted: false };
    case "SUBMIT_START":
      return { ...state, status: "submitting", serverErrorCode: null };
    case "SUBMIT_SUCCESS":
      return { ...state, status: "success", serverErrorCode: null };
    case "SUBMIT_ERROR":
      return {
        ...state,
        status: "error",
        serverErrorCode: action.errorCode,
      };
    case "RESET_FORM":
      return {
        ...initialContactState,
        values: initialContactValues,
      };
    default:
      return state;
  }
}
