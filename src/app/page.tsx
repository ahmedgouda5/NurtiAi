import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/features/landing-page/Hero";
import { Features } from "@/components/features/landing-page/Features";
import { Analytics } from "@/components/features/landing-page/Analytics";
import { HowItWorks } from "@/components/features/landing-page/HowItWorks";
import { Pricing } from "@/components/features/landing-page/Pricing";
import { Testimonials } from "@/components/features/landing-page/Testimonials";
import MobileApp from "@/components/features/landing-page/MobilePreview";
import { CTA } from "@/components/features/landing-page/CTA";
import Sponser from "@/components/features/landing-page/Sponsers";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sponser />
        <Features />
        <Analytics />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <MobileApp />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
