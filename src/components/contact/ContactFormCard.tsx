"use client";

import React from "react";
import { Clock, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useContactForm } from "./useContactForm";
import { FormField } from "./FormField";
import { CategoryChips } from "./CategoryChips";
import { ConsentCheckbox } from "./ConsentCheckbox";
import { FormSuccess } from "./FormSuccess";
import { FormSubmitButton } from "./FormSubmitButton";
import { MAX_MESSAGE_CHARS } from "./contactConstants";

export const ContactFormCard: React.FC = () => {
  const { t } = useLanguage();
  const { state, setField, handleBlur, handleSubmit, resetForm, errorMessage } =
    useContactForm();

  if (state.status === "success") {
    return (
      <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 xl:p-10 shadow-sm flex flex-col justify-between h-full relative">
        <FormSuccess onReset={resetForm} />
      </div>
    );
  }

  const inputClass = (hasError?: boolean) =>
    `w-full h-12 px-4 rounded-xl bg-white border text-base text-navy-950 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-500 placeholder:text-slate-400 ${
      hasError ? "border-rose-500 ring-1 ring-rose-300" : "border-slate-300"
    }`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 xl:p-10 shadow-sm flex flex-col justify-between h-full relative">
      <div>
        {/* Top Gold Accent Bar & Title */}
        <div aria-hidden="true" className="w-10 h-0.5 bg-gold-500 rounded-full mb-3" />
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-navy-950 tracking-tight">
          {t("cont_heading")}
        </h3>

        {/* Guaranteed Response Commitment (Single Prominent Placement) */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-sans mt-2 mb-8">
          <Clock className="w-4 h-4 text-gold-600 flex-shrink-0" />
          <span>{t("form_commitment")}</span>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Honeypot Spam Trap */}
          <div className="sr-only" aria-hidden="true">
            <input
              type="text"
              id="website_hp"
              value={state.values.website_hp}
              onChange={(e) => setField("website_hp", e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-start">
            <FormField
              id="name"
              label={t("form_name_lbl")}
              required
              requiredText={t("form_required_sr")}
              error={state.touched.name ? state.errors.name : undefined}
            >
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={state.values.name}
                onChange={(e) => setField("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                placeholder={t("form_name_ph")}
                aria-invalid={!!state.errors.name}
                className={inputClass(!!state.errors.name)}
              />
            </FormField>

            <FormField
              id="company"
              label={t("form_comp_lbl")}
              required
              requiredText={t("form_required_sr")}
              error={state.touched.company ? state.errors.company : undefined}
            >
              <input
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                value={state.values.company}
                onChange={(e) => setField("company", e.target.value)}
                onBlur={() => handleBlur("company")}
                placeholder={t("form_comp_ph")}
                aria-invalid={!!state.errors.company}
                className={inputClass(!!state.errors.company)}
              />
            </FormField>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-start">
            <FormField
              id="email"
              label={t("form_email_lbl")}
              required
              requiredText={t("form_required_sr")}
              error={state.touched.email ? state.errors.email : undefined}
            >
              <input
                type="email"
                id="email"
                name="email"
                inputMode="email"
                autoComplete="email"
                value={state.values.email}
                onChange={(e) => setField("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                placeholder={t("form_email_ph")}
                aria-invalid={!!state.errors.email}
                className={inputClass(!!state.errors.email)}
              />
            </FormField>

            <FormField
              id="phone"
              label={t("form_phone_lbl")}
              optionalText={t("form_optional")}
              error={state.touched.phone ? state.errors.phone : undefined}
            >
              <input
                type="tel"
                id="phone"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                value={state.values.phone}
                onChange={(e) => setField("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                placeholder={t("form_phone_ph")}
                aria-invalid={!!state.errors.phone}
                className={inputClass(!!state.errors.phone)}
              />
            </FormField>
          </div>

          {/* Row 3: Category Chips */}
          <CategoryChips
            selectedCategory={state.values.category}
            onSelectCategory={(cat) => setField("category", cat)}
            isHighlighted={state.isCategoryHighlighted}
          />

          {/* Row 4: Scale & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-start pt-2">
            <FormField id="scale" label={t("form_budget_lbl")} optionalText={t("form_optional")}>
              <input
                type="text"
                id="scale"
                name="scale"
                value={state.values.scale}
                onChange={(e) => setField("scale", e.target.value)}
                placeholder={t("form_budget_ph")}
                className={inputClass()}
              />
            </FormField>

            <FormField id="timeline" label={t("form_date_lbl")} optionalText={t("form_optional")}>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={state.values.timeline}
                onChange={(e) => setField("timeline", e.target.value)}
                placeholder={t("form_date_ph")}
                className={inputClass()}
              />
            </FormField>
          </div>

          {/* Row 5: Message Textarea */}
          <FormField
            id="message"
            label={t("form_msg_lbl")}
            required
            requiredText={t("form_required_sr")}
            error={state.touched.message ? state.errors.message : undefined}
          >
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={MAX_MESSAGE_CHARS}
                value={state.values.message}
                onChange={(e) => setField("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                placeholder={t("form_msg_ph")}
                aria-invalid={!!state.errors.message}
                className={`w-full min-h-[140px] max-h-[320px] p-4 rounded-xl bg-white border text-base text-navy-950 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-500 placeholder:text-slate-400 resize-y ${
                  state.errors.message ? "border-rose-500 ring-1 ring-rose-300" : "border-slate-300"
                }`}
              />
              <div className="absolute right-3 bottom-3 text-xs font-mono text-slate-400 pointer-events-none select-none">
                {state.values.message.length} / {MAX_MESSAGE_CHARS}
              </div>
            </div>
          </FormField>

          {/* Row 6: Consent Checkbox */}
          <ConsentCheckbox
            id="consent"
            checked={state.values.consent}
            onChange={(checked) => setField("consent", checked)}
            error={state.touched.consent ? state.errors.consent : undefined}
          />

          {/* Server Error Alert */}
          {errorMessage && (
            <div
              role="alert"
              aria-live="assertive"
              className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 7: Standalone Submit Button */}
          <FormSubmitButton
            isSubmitting={state.status === "submitting"}
            submitText={t("form_submit_btn")}
            submittingText={t("form_submitting_btn")}
          />
        </form>
      </div>
    </div>
  );
};
