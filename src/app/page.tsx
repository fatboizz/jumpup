import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/services/Services";
import { Projects } from "@/components/projects/Projects";
import { Process } from "@/components/process/Process";
import { Leadership } from "@/components/leadership/Leadership";
import { CompanyProfile } from "@/components/CompanyProfile";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ContactIntentProvider } from "@/context/ContactIntentContext";

// Phase 3: Dynamic imports for below-the-fold auxiliary components
const FAQSection = dynamic(() => import("@/components/FAQSection").then((m) => m.FAQSection));
const BackToTop = dynamic(() => import("@/components/BackToTop").then((m) => m.BackToTop));
const FloatingContact = dynamic(() => import("@/components/FloatingContact").then((m) => m.FloatingContact));

export default function Home() {
  return (
    <ContactIntentProvider>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-grow focus:outline-none"
      >
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Leadership />
        <CompanyProfile />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </ContactIntentProvider>
  );
}
