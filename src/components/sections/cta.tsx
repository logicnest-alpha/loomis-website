"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, ShieldCheck, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { fadeUp } from "@/lib/animations";

export function CTA() {
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-3xl border border-accent/40 bg-neutral-950 p-8 md:p-16 text-center shadow-[0_0_100px_rgba(124,58,237,0.25)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-accent/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(124,58,237,0.2)_0%,_transparent_60%)] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 border border-accent/40 shadow-lg shadow-accent/20">
                <Calendar className="h-6 w-6 text-accent-light" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to scale your business operations with autonomous AI?
              </h2>

              <p className="text-base text-white/60 max-w-xl mx-auto leading-relaxed font-light">
                Book a free 30-minute AI Blueprint Session with our engineering team. We will analyze your manual bottlenecks and calculate your exact ROI roadmap.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => setIsStrategyModalOpen(true)}
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-white font-semibold text-sm h-13 px-8 rounded-xl shadow-[0_0_30px_rgba(124,58,237,0.5)] group/btn"
                >
                  <Sparkles className="h-4 w-4" />
                  Schedule Your Free Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-13 px-8 text-sm font-medium border-white/15 bg-white/[0.03] text-white hover:bg-white/10 rounded-xl"
                >
                  <a href="mailto:vishalchepyala@gmail.com">
                    <Mail className="h-4 w-4 mr-2 text-accent-light" />
                    vishalchepyala@gmail.com
                  </a>
                </Button>
              </div>

              <div className="pt-4 flex items-center justify-center gap-6 text-xs text-white/50 flex-wrap">
                <a href="tel:+916305732069" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="h-3.5 w-3.5 text-accent-light" /> +91 6305732069
                </a>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" /> No Sales Pressure
                </span>
                <span>•</span>
                <span>Zero Commitment (NDA Secured)</span>
              </div>
            </div>
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
