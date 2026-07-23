"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Zap, Shield, TrendingUp, HeadphonesIcon, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlowCard } from "@/components/ui/glow-card";
import { fadeUp, staggerContainer } from "@/lib/animations";

const comparisonData = [
  { feature: "Time-to-Production Deployment", loomis: "2–3 Weeks", agency: "3–6 Months", inhouse: "6–12 Months" },
  { feature: "Custom LLM & Agent Engineering", loomis: "Full Custom RAG", agency: "No-Code Templates", inhouse: "High Dev Overheads" },
  { feature: "24/7 Voice & WhatsApp Autonomous Bots", loomis: "Included Native", agency: "Fragmented Add-ons", inhouse: "Complex Sockets" },
  { feature: "Direct Revenue & Time ROI Tracking", loomis: "Live Dashboard", agency: "Vague Reports", inhouse: "Manual Logs" },
  { feature: "Guaranteed SLA & Uptime Maintenance", loomis: "99.99% SLA", agency: "No Guarantee", inhouse: "Internal On-Call" },
  { feature: "Total Cost of Ownership (TCO)", loomis: "80% Lower TCO", agency: "High Monthly Retainer", inhouse: "$250k+/yr Salary" },
];

const reasons = [
  {
    icon: Zap,
    title: "Deploy Production Systems in Weeks",
    description:
      "Our battle-tested agent framework gets your AI systems live fast. Most clients see their first multi-agent workflow operating within 14–21 days.",
    stat: 3,
    statPrefix: "2–",
    statSuffix: " weeks",
    statLabel: "Average deployment time",
  },
  {
    icon: Shield,
    title: "100% Custom Engineering — No Generic Wrappers",
    description:
      "Every architecture is custom designed around your specific database schemas, API protocols, and security requirements.",
    stat: 100,
    statSuffix: "%",
    statLabel: "Custom built enterprise code",
  },
  {
    icon: TrendingUp,
    title: "Empirically Verified ROI from Day 1",
    description:
      "We track exact metric telemetry: hours reclaimed, lead conversion lift, and deflected support tickets visible live on your executive dashboard.",
    stat: 3.4,
    statSuffix: "x",
    statLabel: "Average measured return on investment",
  },
  {
    icon: HeadphonesIcon,
    title: "Continuous Optimization & SOC2 Standards",
    description:
      "Your systems learn continuously. We monitor, fine-tune model prompt weights, and maintain security protocols as your company scales.",
    stat: 98,
    statSuffix: "%",
    statLabel: "Annual client retention rate",
  },
];

export function WhyLoomis() {
  const [activeTab, setActiveTab] = useState<"features" | "comparison">("comparison");

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Competitive Advantage & ROI"
          title="Built for founders and operators who demand results, not demos"
          description="We are AI systems engineers and strategists. Compare how LOOMIS autonomous architecture stacked up against legacy options."
        />

        {/* View Switcher: Differentiators vs Interactive Matrix */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/[0.04] border border-white/10 p-1 rounded-xl flex gap-1">
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "comparison"
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Interactive Competitive Matrix 📊
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "features"
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Core Differentiators
            </button>
          </div>
        </div>

        {activeTab === "comparison" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/15 bg-white/[0.02] backdrop-blur-xl p-6 md:p-8 shadow-2xl overflow-x-auto"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-4 w-4 text-accent-light" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                LOOMIS vs Traditional Agencies vs In-House Engineering
              </h3>
            </div>

            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-xs font-semibold text-white/50">
                  <th className="py-4 px-4">Evaluation Criteria</th>
                  <th className="py-4 px-4 text-accent-light bg-accent/15 rounded-t-xl font-bold">
                    ⚡ LOOMIS AI Systems
                  </th>
                  <th className="py-4 px-4 text-white/60">Legacy Agencies</th>
                  <th className="py-4 px-4 text-white/60">In-House Dev Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs">
                {comparisonData.map((row, idx) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white/90">{row.feature}</td>
                    <td className="py-4 px-4 font-bold text-accent-light bg-accent/10 border-x border-accent/20">
                      <div className="flex items-center gap-1.5">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>{row.loomis}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-white/50">{row.agency}</td>
                    <td className="py-4 px-4 text-white/50">{row.inhouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {reasons.map((reason, i) => (
              <motion.div key={reason.title} custom={i} variants={fadeUp}>
                <GlowCard className="h-full">
                  <div className="p-6 md:p-7">
                    <div className="flex items-start gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 border border-accent/30">
                        <reason.icon className="h-5 w-5 text-accent-light" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {reason.title}
                        </h3>
                        <p className="mt-2 text-xs text-white/50 leading-relaxed">
                          {reason.description}
                        </p>
                        <div className="mt-4 flex items-baseline gap-2 pt-3 border-t border-white/[0.06]">
                          <span className="text-2xl font-bold text-accent-light font-mono">
                            {reason.statPrefix}
                            <AnimatedCounter
                              value={reason.stat}
                              suffix={reason.statSuffix}
                            />
                          </span>
                          <span className="text-[11px] text-white/40 font-medium">
                            {reason.statLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
