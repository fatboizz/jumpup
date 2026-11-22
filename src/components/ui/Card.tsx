import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "white" | "navy" | "ivory" | "glass";
  elevation?: "soft" | "card" | "elevated";
  rounded?: "xl" | "2xl" | "3xl";
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "white",
  elevation = "card",
  rounded = "2xl",
  className = "",
}) => {
  const roundedClasses = {
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  }[rounded];

  const elevationClasses = {
    soft: "shadow-soft",
    card: "shadow-card",
    elevated: "shadow-elevated",
  }[elevation];

  const variantClasses = {
    white: "bg-white border border-slate-200/90 text-navy-950",
    navy: "bg-navy-950 border border-white/10 text-white",
    ivory: "bg-ivory-100 border border-slate-200/70 text-navy-950",
    glass: "bg-navy-950/85 backdrop-blur-xl border border-white/15 text-white",
  }[variant];

  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 ${roundedClasses} ${elevationClasses} ${variantClasses} ${className}`}
    >
      {children}
    </div>
  );
};
