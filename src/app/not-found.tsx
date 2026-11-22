import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
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

        <span className="font-mono text-xs font-bold text-gold-400 tracking-[0.3em] uppercase block mb-3">
          404 ERROR • PAGE NOT FOUND
        </span>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Page Not Located
        </h1>

        <div className="gold-divider mx-auto my-6" />

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          The corporate page or resource you requested could not be found or has been relocated.
          <br />
          <span className="text-xs text-slate-400 mt-2 block">
            お探しのページは見つかりませんでした。 / Trang quý khách yêu cầu không tồn tại.
          </span>
        </p>

        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all btn-sheen"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
