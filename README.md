# JUMPUP SERVICES CO.,LTD - Luxury Corporate Website

Corporate Website for **JUMPUP SERVICES CO.,LTD (CÔNG TY TNHH DỊCH VỤ JUMPUP)**, headquartered at Bach Dang Complex, Da Nang, Vietnam. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Lucide Icons.

## 🚀 Tech Stack
- **Framework:** [Next.js 15+ (App Router)](https://nextjs.org/)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS (Custom Deep Navy & Champagne Gold Luxury Theme)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Typography:** `next/font/google` (`Inter`, `Plus Jakarta Sans`, `Noto Sans JP`)
- **Internationalization:** Client-side trilingual state management (`EN` / `日本語` / `VN`) with `localStorage` memory and automated `html[lang]` sync.
- **Backend Route Handler:** `/api/contact` ready for [Resend](https://resend.com) or Nodemailer email delivery.

## 📂 Project Structure
```
├── public/
│   └── images/                     # Place hibi-ceo.jpg and huyen-vp.jpg here
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts    # Contact Form Route Handler
│   │   ├── globals.css             # Tailwind & Luxury Theme Styles
│   │   ├── layout.tsx              # SEO Metadata, OpenGraph & JSON-LD
│   │   └── page.tsx                # Single Page Layout Composition
│   ├── components/
│   │   ├── Navbar.tsx              # Shrink Header, ScrollSpy & Language Pill
│   │   ├── Hero.tsx                # 2-Column Hero & Animated Metrics Counter
│   │   ├── About.tsx               # 3 Core Strengths with Monogram Numbers
│   │   ├── Services.tsx            # 5-Star Hotel Events Showcase & Services Grid
│   │   ├── Leadership.tsx          # Forbes/Nikkei Style 2-Top Executive Bio
│   │   ├── CompanyProfile.tsx      # Corporate Info with 1-Click Copy & Map
│   │   ├── ContactSection.tsx      # Validated Form with Processing State
│   │   ├── Footer.tsx              # Corporate Footer
│   │   └── BackToTop.tsx           # Floating Smooth Scroll Button
│   ├── context/
│   │   └── LanguageContext.tsx     # Global i18n Context
│   └── data/
│       └── translations.ts         # Complete 100% Original Text in EN, JP, VN
├── .env.local.example
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Getting Started
### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
npm run start
```

### 3. Contact Form Email Setup (Optional)
Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```
Add your `RESEND_API_KEY` to enable instant email delivery to `jumpupdanang@gmail.com`.
