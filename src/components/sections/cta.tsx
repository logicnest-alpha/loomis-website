"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { fadeUp } from "@/lib/animations";

export function CTA() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="relative section-padding overflow-hidden bg-background">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/60 via-emerald-900/20 to-background p-10 md:p-16 text-center shadow-[0_30px_100px_rgba(16,185,129,0.25)] overflow-hidden"
          >
            {/* Top Beam */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-accent to-emerald-400" />

            {/* Glowing Backdrop Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/20 rounded-full blur-[180px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs font-bold text-emerald-300 mb-6">
                <Star className="h-3.5 w-3.5 fill-current text-amber-400" />
                Start Growing 5-Star Reviews Today
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Get More Reviews and{" "}
                <span className="gradient-text-whatsapp">Repeat Customers?</span>
              </h2>

              <p className="mt-6 text-base md:text-xl text-white/70 font-light leading-relaxed">
                Join hundreds of successful restaurants, cafes, and chains using Loomis Reviews to automate customer feedback, increase Google ratings, and boost repeat revenue.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => setIsDemoModalOpen(true)}
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base h-14 px-8 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.5)] group/btn"
                >
                  <Sparkles className="h-5 w-5 text-emerald-200" />
                  Book Demo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1.5" />
                </Button>

                <Button
                  onClick={() => setIsDemoModalOpen(true)}
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent-light text-white font-bold text-base h-14 px-8 rounded-2xl shadow-[0_0_35px_rgba(124,58,237,0.4)]"
                >
                  <Zap className="h-5 w-5 text-purple-200" />
                  Start Free Trial
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 text-xs text-white/50 font-medium flex-wrap">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 14-Day Free Trial
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> No Credit Card Required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 5-Minute Setup
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <StrategyModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
