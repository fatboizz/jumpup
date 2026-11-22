import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "navy" | "glass" | "outline" | "success";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  size = "sm",
  className = "",
  icon,
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs gap-1.5",
    md: "px-3.5 py-1.5 text-xs sm:text-sm gap-2",
  }[size];

  const variantClasses = {
    gold: "bg-gold-500/15 border border-gold-500/35 text-gold-700 font-semibold",
    navy: "bg-navy-900/10 border border-navy-900/20 text-navy-900 font-semibold",
    glass:
      "bg-navy-950/80 backdrop-blur-md border border-white/15 text-gold-400 font-bold tracking-wider",
    outline: "bg-transparent border border-slate-300 text-slate-700 font-medium",
    success:
      "bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 font-semibold",
  }[variant];

  return (
    <span
      className={`inline-flex items-center rounded-lg leading-normal shrink-0 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
