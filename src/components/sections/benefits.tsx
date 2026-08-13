"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Repeat,
  Smile,
  Clock,
  MessageCircle,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const benefits = [
  {
    icon: TrendingUp,
    title: "3.8x More 5-Star Reviews",
    outcome: "Higher Google Maps Ranking & Foot Traffic",
    description:
      "Dominate local Google searches. More 5-star reviews directly convert into thousands of new hungry diners searching for restaurants near them.",
    metric: "+380% review volume",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Repeat,
    title: "Increase Repeat Customers by 42%",
    outcome: "Boost Diners' Lifetime Value (LTV)",
    description:
      "Timely WhatsApp coupon incentives turn one-time weekend diners into predictable regular visitors who dine with you every month.",
    metric: "+42% repeat visits",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Smile,
    title: "Improve Customer CSAT Scores",
    outcome: "Intercept Negative Reviews Privately",
    description:
      "Give unhappy customers a private direct line to management to fix issues before they vent on public Google reviews.",
    metric: "98.6% CSAT rating",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Clock,
    title: "Save 20+ Staff Hours Weekly",
    outcome: "Zero Manual Messaging Effort",
    description:
      "Stop asking floor staff to collect email addresses or manually send follow-up texts. Everything is triggered automatically post-bill.",
    metric: "20 hrs saved / week",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: MessageCircle,
    title: "98% WhatsApp Open Rates",
    outcome: "Outperform Old SMS & Email Marketing",
    description:
      "Emails get buried in spam and SMS gets ignored. WhatsApp delivers near 100% open rates and instant customer engagements.",
    metric: "98.4% open rate",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: BarChart3,
    title: "Measure Real Business ROI",
    outcome: "Clear Attribution Dashboard",
    description:
      "Know exactly how many Google reviews were collected, how many coupons were redeemed, and how much repeat revenue Loomis generated.",
    metric: "3.4x average ROI",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative section-padding overflow-hidden bg-background">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4"
          >
            <TrendingUp className="h-3.5 w-3.5" />
            Quantifiable Business Outcomes
          </motion.div>

          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Why Top Restaurants Choose{" "}
            <span className="gradient-text-whatsapp">Loomis Reviews</span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            Move away from guesswork. Get real, measurable revenue impact and local Google dominance within 30 days.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative p-7 rounded-3xl bg-white/[0.025] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`h-12 w-12 rounded-2xl ${b.bg} ${b.border} border flex items-center justify-center ${b.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {b.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-400 mt-1">
                    {b.outcome}
                  </p>

                  <p className="mt-3 text-xs md:text-sm text-white/60 font-light leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/40 group-hover:text-emerald-300 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Verified Result
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
