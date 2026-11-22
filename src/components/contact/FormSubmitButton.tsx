"use client";

import React from "react";
import { Send, Loader2 } from "lucide-react";

interface FormSubmitButtonProps {
  isSubmitting: boolean;
  submitText: string;
  submittingText: string;
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  isSubmitting,
  submitText,
  submittingText,
}) => {
  return (
    <div className="pt-3 flex justify-end">
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto min-w-[200px] h-[52px] px-8 rounded-xl bg-navy-950 hover:bg-navy-900 disabled:opacity-75 text-ivory-100 font-medium text-xs tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 btn-sheen cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
            <span>{submittingText}</span>
          </>
        ) : (
          <>
            <span>{submitText}</span>
            <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
          </>
        )}
      </button>
    </div>
  );
};
