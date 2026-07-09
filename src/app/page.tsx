"use client";

import { Navbar } from "@/AppFeature/shared/Navbar";
import { Footer } from "@/AppFeature/shared/Footer";
import { Hero } from "@/AppFeature/features/landing-page/Hero";
import Sponser from "@/AppFeature/features/landing-page/Sponsers";
import { LazySection } from "@/AppFeature/shared/LazySection";
import dynamic from "next/dynamic";

const Features = dynamic(
  () => import("@/AppFeature/features/landing-page/Features").then((m) => ({ default: m.Features })),
);

const HowItWorks = dynamic(
  () => import("@/AppFeature/features/landing-page/HowItWorks").then((m) => ({ default: m.HowItWorks })),
);

const Pricing = dynamic(
  () => import("@/AppFeature/features/landing-page/Pricing").then((m) => ({ default: m.Pricing })),
);

const Analytics = dynamic(
  () => import("@/AppFeature/features/landing-page/Analytics/index"),
);

const CoachesSection = dynamic(
  () => import("@/AppFeature/features/landing-page/Coaches/index"),
);

const TestimonialsSection = dynamic(
  () => import("@/AppFeature/features/landing-page/Testimonials/index"),
);

const MobileAppSection = dynamic(
  () => import("@/AppFeature/features/landing-page/MobilePreview"),
);

const CTA = dynamic(
  () => import("@/AppFeature/features/landing-page/CTA").then((m) => ({ default: m.CTA })),
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sponser />

        <LazySection minHeight={500}>
          <Features />
        </LazySection>

        <LazySection minHeight={500}>
          <Analytics />
        </LazySection>

        <LazySection minHeight={500}>
          <HowItWorks />
        </LazySection>

        <LazySection minHeight={500}>
          <CoachesSection />
        </LazySection>

        <LazySection minHeight={500}>
          <Pricing />
        </LazySection>

        <LazySection minHeight={500}>
          <TestimonialsSection />
        </LazySection>

        <LazySection minHeight={500}>
          <MobileAppSection />
        </LazySection>

        <LazySection minHeight={300}>
          <CTA />
        </LazySection>
      </main>
      <Footer />
    </>
  );
}
