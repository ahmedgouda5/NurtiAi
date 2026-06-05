import { Navbar } from "@/AppFeature/shared/Navbar";
import { Footer } from "@/AppFeature/shared/Footer";
import { Hero } from "@/AppFeature/features/landing-page/Hero";
import { Features } from "@/AppFeature/features/landing-page/Features";
import { HowItWorks } from "@/AppFeature/features/landing-page/HowItWorks";
import { Pricing } from "@/AppFeature/features/landing-page/Pricing";
import MobileApp from "@/AppFeature/features/landing-page/MobilePreview";
import { CTA } from "@/AppFeature/features/landing-page/CTA";
import Sponser from "@/AppFeature/features/landing-page/Sponsers";
import { lazy, Suspense } from "react";

const Analytics = lazy(
  () => import("@/AppFeature/features/landing-page/Analytics/index"),
);

const CoachesSection = lazy(
  () => import("@/AppFeature/features/landing-page/Coaches/index"),
);

const TestimonialsSection = lazy(
  () => import("@/AppFeature/features/landing-page/Testimonials/index"),
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sponser />
        <Features />
        <Suspense fallback={<div>Loading...</div>}>
          <Analytics />
        </Suspense>
        <HowItWorks />
        <Suspense fallback={<div>Loading...</div>}>
          <CoachesSection />
        </Suspense>
        <Pricing />
        <Suspense fallback={<div>Loading...</div>}>
          <TestimonialsSection />
        </Suspense>
        <MobileApp />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
