import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Services } from "@/components/sections/services";
import { WhyLoomis } from "@/components/sections/why-loomis";
import { Process } from "@/components/sections/process";
import { Demo } from "@/components/sections/demo";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyLoomis />
      <Process />
      <Demo />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
