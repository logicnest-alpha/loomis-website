"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Users,
  Ticket,
  Send,
  Smile,
  Star,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

export function AnalyticsPreview() {
  const [metricFilter, setMetricFilter] = useState<"30days" | "90days" | "1year">("30days");

  const multiplier = metricFilter === "30days" ? 1 : metricFilter === "90days" ? 2.8 : 10.5;

  return (
    <section id="analytics" className="relative section-padding overflow-hidden bg-background">
      {/* Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-accent/15 via-emerald-500/15 to-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4"
          >
            <BarChart3 className="h-3.5 w-3.5" />
            Live Analytics & Revenue Attribution
          </motion.div>

          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Real-Time Analytics & <span className="gradient-text-whatsapp">Performance Intelligence</span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            Monitor review velocity, coupon redemptions, campaign ROI, and customer satisfaction scores in real-time.
          </motion.p>
        </div>

        {/* Filter Switcher */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 flex gap-2 backdrop-blur-md">
            {(["30days", "90days", "1year"] as const).map((range) => (
              <button
                key={range}
                onClick={() => setMetricFilter(range)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  metricFilter === range
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {range === "30days" ? "Last 30 Days" : range === "90days" ? "Last 90 Days" : "Past Year"}
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Card Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Review Growth */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-7 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium">Review Growth</p>
                  <p className="text-xl font-bold text-white">Google Rating Boost</p>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-0.5">
                <ArrowUpRight className="h-4 w-4" /> +380%
              </span>
            </div>

            <div className="pt-2">
              <p className="text-3xl font-extrabold text-white font-mono">
                {Math.round(184 * multiplier)} <span className="text-xs font-normal text-white/50">new 5-star reviews</span>
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                <span>Google Maps Score:</span>
                <span className="text-amber-400 font-bold">4.9 ★★★★★</span>
              </div>
              <div className="mt-2 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full w-[94%]" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Returning Customers */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-7 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium">Returning Diners</p>
                  <p className="text-xl font-bold text-white">Repeat Visit Rate</p>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-0.5">
                <ArrowUpRight className="h-4 w-4" /> +42%
              </span>
            </div>

            <div className="pt-2">
              <p className="text-3xl font-extrabold text-white font-mono">
                {Math.round(640 * multiplier)} <span className="text-xs font-normal text-white/50">repeat visits</span>
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                <span>Avg Diners Returning:</span>
                <span className="text-emerald-400 font-bold">42% within 14 days</span>
              </div>
              <div className="mt-2 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[82%]" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Coupons Redeemed */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-7 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Ticket className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium">Loyalty Perks</p>
                  <p className="text-xl font-bold text-white">Coupons Redeemed</p>
                </div>
              </div>
              <span className="text-xs text-purple-300 font-mono flex items-center gap-0.5">
                <ArrowUpRight className="h-4 w-4" /> 84%
              </span>
            </div>

            <div className="pt-2">
              <p className="text-3xl font-extrabold text-white font-mono">
                {Math.round(512 * multiplier)} <span className="text-xs font-normal text-white/50">POS redemptions</span>
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                <span>Estimated Repeat Revenue:</span>
                <span className="text-purple-300 font-bold">${Math.round(14200 * multiplier).toLocaleString()}</span>
              </div>
              <div className="mt-2 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-400 h-full w-[84%]" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Campaign Performance */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-7 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium">WhatsApp Campaigns</p>
                  <p className="text-xl font-bold text-white">Broadcast Reach</p>
                </div>
              </div>
              <span className="text-xs text-blue-400 font-mono">98.4% Open</span>
            </div>

            <div className="pt-2">
              <p className="text-3xl font-extrabold text-white font-mono">
                {Math.round(8420 * multiplier).toLocaleString()} <span className="text-xs font-normal text-white/50">messages delivered</span>
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                <span>Click-Through Rate:</span>
                <span className="text-blue-400 font-bold">48.2% CTR</span>
              </div>
              <div className="mt-2 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-400 h-full w-[98%]" />
              </div>
            </div>
          </motion.div>

          {/* Card 5: Customer Satisfaction (CSAT) */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-7 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl shadow-xl space-y-4 md:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Smile className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium">Feedback Intelligence</p>
                  <p className="text-xl font-bold text-white">Customer Satisfaction (CSAT) Score</p>
                </div>
              </div>
              <span className="text-xs text-cyan-400 font-mono font-bold bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20">
                98.6% Positive Score
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <p className="text-[11px] font-medium text-white/50">Food Quality Score</p>
                <p className="text-2xl font-bold text-white mt-1 font-mono">4.9 / 5.0</p>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <p className="text-[11px] font-medium text-white/50">Staff Service Speed</p>
                <p className="text-2xl font-bold text-white mt-1 font-mono">4.8 / 5.0</p>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <p className="text-[11px] font-medium text-white/50">Ambience & Cleanliness</p>
                <p className="text-2xl font-bold text-white mt-1 font-mono">4.9 / 5.0</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
