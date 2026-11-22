"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  sheen?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  sheen = false,
  icon,
  iconPosition = "right",
  href,
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:opacity-65 disabled:pointer-events-none cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
    md: "px-6 py-3 text-sm rounded-xl gap-2",
    lg: "px-8 py-3.5 sm:py-4 text-sm sm:text-base rounded-xl gap-2.5",
  }[size];

  const variantClasses = {
    primary:
      "bg-navy-950 hover:bg-navy-900 text-white shadow-card hover:shadow-elevated border border-white/10 hover:border-gold-500/40",
    gold: "bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-950 shadow-gold-glow hover:shadow-gold-glow-lg border border-gold-300/40",
    secondary:
      "bg-white/10 hover:bg-white/15 text-white backdrop-blur-md border border-white/20 hover:border-white/40 shadow-soft",
    outline:
      "bg-transparent hover:bg-navy-900/5 text-navy-900 border border-slate-300 hover:border-navy-900 shadow-soft",
    ghost: "bg-transparent hover:bg-white/10 text-slate-200 hover:text-white",
  }[variant];

  const sheenClass = sheen ? "btn-sheen" : "";
  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${sheenClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
