"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary captured:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-navy-950 text-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="relative z-10 text-center max-w-lg mx-auto py-16">
        <Link href="/" className="inline-block mb-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-1">
          <Image
            src="/logo-white.png"
            alt="JUMPUP SERVICES CO.,LTD"
            width={200}
            height={60}
            className="h-11 w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <span className="font-mono text-xs font-bold text-rose-400 tracking-[0.3em] uppercase block mb-3">
          SYSTEM ERROR
        </span>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Something went wrong
        </h1>

        <div className="gold-divider mx-auto my-6" />

        <p className="text-slate-300 text-sm leading-relaxed mb-8">
          An unexpected application error has occurred. Please try reloading or return to the homepage.
          <br />
          <span className="text-xs text-slate-400 mt-2 block">
            一時的なエラーが発生しました。再読み込みをお試しください。
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold uppercase tracking-wider transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
