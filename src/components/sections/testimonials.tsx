"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ShieldCheck, Sparkles, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { fadeUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "LOOMIS completely transformed our revenue ops. Our lead response time dropped from 4 hours to 28 seconds, and our conversion rate tripled within the first 30 days. It is the highest-ROI investment we've ever made.",
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    company: "Meridian Real Estate Group",
    initials: "SC",
    verified: "Verified Enterprise Client",
    metric: "+340% Conversion Lift",
  },
  {
    quote:
      "We were skeptical about AI automation agencies, but LOOMIS operates like an elite Silicon Valley engineering team. They didn't just build a bot — they integrated deep RAG vector memory directly into our CRM.",
    name: "Marcus Williams",
    role: "Chief Operating Officer",
    company: "Atlas E-Commerce",
    initials: "MW",
    verified: "Verified Enterprise Client",
    metric: "$420K Saved Annually",
  },
  {
    quote:
      "The ROI clarity was undeniable within 2 weeks. Our customer support team went from drowning in 1,200 tickets a day to focusing exclusively on complex Enterprise accounts while AI resolved 85% of routine queries.",
    name: "Elena Rodriguez",
    role: "VP of Global Operations",
    company: "Nova Health Systems",
    initials: "ER",
    verified: "Verified Enterprise Client",
    metric: "85% Ticket Deflection",
  },
];

export function Testimonials() {
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(124,58,237,0.06)_0%,_transparent_50%)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-1 text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="ml-1 text-white font-mono">5.0 / 5.0 Rating Across 40+ Deployments</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Trusted by operators scaling with AI
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Hear directly from founders and executives who automated manual ops and compound revenue with LOOMIS.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                custom={i}
                variants={fadeUp}
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8 hover:border-accent/40 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-8 w-8 text-accent/40" />
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" /> {testimonial.verified}
                    </span>
                  </div>

                  <p className="text-white/80 text-xs md:text-sm leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 border border-accent/40 text-accent-light font-bold text-xs">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{testimonial.name}</p>
                      <p className="text-[10px] text-white/40">
                        {testimonial.role}, <span className="text-white/70">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-accent-light bg-accent/15 px-2.5 py-1 rounded-md border border-accent/25">
                    {testimonial.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <StrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
      />
    </>
  );
}
