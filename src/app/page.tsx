import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Features } from "@/components/sections/features";
import { DashboardShowcase } from "@/components/sections/dashboard-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { WhyLoomis } from "@/components/sections/why-loomis";
import { AnalyticsPreview } from "@/components/sections/analytics-preview";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Problem Section */}
      <Problem />

      {/* 3. Solution Section */}
      <Solution />

      {/* 4. Features Section */}
      <Features />

      {/* 5. Interactive Dashboard Showcase */}
      <DashboardShowcase />

      {/* 6. How It Works Section */}
      <HowItWorks />

      {/* 7. Benefits Section */}
      <Benefits />

      {/* 8. Why Restaurants Love Loomis */}
      <WhyLoomis />

      {/* 9. Analytics Preview Section */}
      <AnalyticsPreview />

      {/* 10. Pricing Section */}
      <Pricing />

      {/* 11. FAQ Section (20+ Restaurant FAQs) */}
      <FAQ />

      {/* 12. Testimonials Section */}
      <Testimonials />

      {/* 13. Call To Action Section */}
      <CTA />
    </>
  );
}
