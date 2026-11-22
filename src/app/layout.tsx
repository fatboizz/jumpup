import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { MotionProvider } from "@/components/ui/MotionProvider";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// Configure Noto_Sans_JP without restricting subsets to latin so full Japanese CJK glyphs are loaded
const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jumpupdanang.com"),
  title: {
    default: "JUMPUP SERVICES CO.,LTD | Corporate Events, Investment & Business Expansion in Vietnam",
    template: "%s | JUMPUP SERVICES CO.,LTD",
  },
  description:
    "Your trusted execution partner for 100+ guest 5-star hotel corporate events, Vietnam market entry, real estate advisory, and creative animation production. Based at Bach Dang Complex, Da Nang.",
  keywords: [
    "Corporate Events Vietnam",
    "5-Star Hotel Event Management Da Nang",
    "Vietnam Market Entry",
    "Da Nang Real Estate Consulting",
    "Japanese Business Consulting Vietnam",
    "JUMPUP SERVICES",
    "Bach Dang Complex Da Nang",
    "ベトナム進出支援",
    "ダナン企業イベント",
    "Tổ chức sự kiện doanh nghiệp Đà Nẵng",
  ],
  authors: [{ name: "JUMPUP SERVICES CO.,LTD" }],
  creator: "JUMPUP SERVICES CO.,LTD",
  publisher: "JUMPUP SERVICES CO.,LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "JUMPUP SERVICES CO.,LTD | Corporate Events, Investment & Business Expansion in Vietnam",
    description:
      "Premier local execution partner in Vietnam. Combining Japanese management precision with native Vietnamese execution power across North, Central, and South Vietnam.",
    url: "https://jumpupdanang.com",
    siteName: "JUMPUP SERVICES CO.,LTD",
    locale: "en_US",
    type: "website",
    // QA-013: Fallback static OpenGraph image (TODO: Thay bằng ảnh thiết kế chính thức nếu có)
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "JUMPUP SERVICES CO.,LTD - Premier Execution Partner in Vietnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JUMPUP SERVICES CO.,LTD | Vietnam Corporate Events & Business Expansion",
    description:
      "Your on-the-ground execution partner for corporate events, market entry & real estate advisory in Vietnam.",
    // QA-013: Fallback static Twitter image (TODO: Thay bằng ảnh thiết kế chính thức nếu có)
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jumpupdanang.com",
    languages: {
      "en-US": "https://jumpupdanang.com?lang=en",
      "ja-JP": "https://jumpupdanang.com?lang=jp",
      "vi-VN": "https://jumpupdanang.com?lang=vn",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "JUMPUP SERVICES CO.,LTD",
    alternateName: "CÔNG TY TNHH DỊCH VỤ JUMPUP",
    legalName: "JUMPUP SERVICES CO.,LTD",
    url: "https://jumpupdanang.com",
    logo: "https://jumpupdanang.com/logo.png",
    taxID: "0402251691",
    telephone: "+84329622061",
    email: "jumpupdanang@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8th Floor, Bach Dang Complex, 50 Bach Dang Street",
      addressLocality: "Hai Chau Ward",
      addressRegion: "Da Nang City",
      postalCode: "550000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "16.0718",
      longitude: "108.2235",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+84329622061",
        contactType: "executive customer support",
        availableLanguage: ["English", "Japanese", "Vietnamese"],
        areaServed: "VN",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Yasumasa Hibi",
        jobTitle: "CEO & Representative Director",
      },
      {
        "@type": "Person",
        name: "Phạm Thị Thanh Huyền",
        jobTitle: "Vice President",
      },
    ],
    areaServed: ["Da Nang", "Hanoi", "Ho Chi Minh City", "Vietnam"],
    knowsLanguage: ["en", "ja", "vi"],
    description:
      "On-the-ground execution partner for corporate events, market research & entry, real estate consulting, and creative animation production across Vietnam.",
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC Language Detection Script running before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=window.location.search.match(/[?&]lang=([a-z]{2})/i);var l=m?m[1].toLowerCase():null;if(!l||!['en','jp','vn'].includes(l)){var c=document.cookie.match(/(?:^|; )jumpup_lang=([^;]*)/);l=c?decodeURIComponent(c[1]):null;}if(!l||!['en','jp','vn'].includes(l)){l=localStorage.getItem('jumpup_lang');}if(l==='jp'){document.documentElement.lang='ja';}else if(l==='vn'){document.documentElement.lang='vi';}else if(l==='en'){document.documentElement.lang='en';}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${plusJakartaSans.variable} ${notoSansJP.variable} bg-navy-950 text-slate-800 font-sans antialiased selection:bg-gold-500 selection:text-navy-950 min-h-screen flex flex-col justify-between`}
      >
        <LanguageProvider>
          <MotionProvider>
            {/* Skip to Content Accessibility Link */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2.5 bg-gold-400 text-navy-950 font-bold rounded-lg shadow-elevated focus:outline-none"
            >
              Skip to main content
            </a>
            {children}
          </MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
