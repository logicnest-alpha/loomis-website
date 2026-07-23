"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, CheckCircle2, Building2, ShoppingBag, Cpu } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowCard } from "@/components/ui/glow-card";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { fadeUp, staggerContainer } from "@/lib/animations";

const caseStudies = [
  {
    id: "real-estate",
    industryCategory: "real-estate",
    industry: "Real Estate Enterprise",
    title: "340% increase in lead response rate & $1.2M new ARR",
    description:
      "A premier regional commercial real estate broker deployed our AI voice receptionist and WhatsApp automation — instantly qualifying incoming buyer inquiries within 30 seconds 24/7.",
    beforeMetrics: "Average Response Time: 4.5 Hours",
    afterMetrics: "Average Response Time: 28 Seconds",
    metrics: [
      { label: "Response latency", value: "<30s" },
      { label: "Lead Conversion", value: "+340%" },
      { label: "Hours saved/wk", value: "48 hrs" },
    ],
    gradient: "from-purple-500/10 via-accent/10 to-transparent",
    featured: true,
  },
  {
    id: "e-commerce",
    industryCategory: "ecommerce",
    industry: "Global E-Commerce Brand",
    title: "85% reduction in support tickets & $420K saved annually",
    description:
      "Integrated multi-lingual WhatsApp AI customer service across chat, email, and order tracking — deflecting routine inquiries without human intervention.",
    beforeMetrics: "Support Backlog: 1,200 tickets/day",
    afterMetrics: "Deflection Rate: 85% Auto-Resolved",
    metrics: [
      { label: "Deflection Rate", value: "85%" },
      { label: "CSAT Score", value: "4.9/5" },
      { label: "Annual Cost Savings", value: "$420K" },
    ],
    gradient: "from-emerald-500/10 via-teal-500/10 to-transparent",
    featured: false,
  },
  {
    id: "saas",
    industryCategory: "saas",
    industry: "B2B SaaS ($20M ARR)",
    title: "3.4x sales pipeline velocity via automated deal enrichment",
    description:
      "Automated lead scoring, bi-directional CRM enrichment, and pre-call AI research briefings — freeing Account Executives to focus solely on high-value closing.",
    beforeMetrics: "Sales Rep Admin Time: 18 hrs/week",
    afterMetrics: "Admin Time: <2 hrs/week",
    metrics: [
      { label: "Pipeline Velocity", value: "3.4x" },
      { label: "Qualified Meetings", value: "+156%" },
      { label: "Deal Cycle Length", value: "-42%" },
    ],
    gradient: "from-cyan-500/10 via-blue-500/10 to-transparent",
    featured: false,
  },
];

export function CaseStudies() {
  const [filter, setFilter] = useState<string>("all");
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);

  const filteredStudies = filter === "all"
    ? caseStudies
    : caseStudies.filter((c) => c.industryCategory === filter);

  return (
    <>
      <section id="case-studies" className="section-padding border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            label="Verified Client Results"
            title="Empirical outcomes delivered to high-growth businesses"
            description="Real architecture, measurable metrics. Discover how industry leaders scale operations with LOOMIS."
          />

          {/* Industry Filter Buttons */}
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
              }`}
            >
              All Case Studies ({caseStudies.length})
            </button>
            <button
              onClick={() => setFilter("real-estate")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                filter === "real-estate"
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
              }`}
            >
              <Building2 className="h-3.5 w-3.5" /> Real Estate
            </button>
            <button
              onClick={() => setFilter("ecommerce")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                filter === "ecommerce"
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
              }`}
            >
              <ShoppingBag className="h-3.5 w-3.5" /> E-Commerce
            </button>
            <button
              onClick={() => setFilter("saas")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                filter === "saas"
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
              }`}
            >
              <Cpu className="h-3.5 w-3.5" /> B2B SaaS
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredStudies.map((study) => (
              <GlowCard key={study.id} className="h-full flex flex-col justify-between">
                <div className="p-7 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent-light bg-accent/15 border border-accent/30 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {study.title}
                  </h3>

                  <p className="mt-3 text-xs text-white/50 leading-relaxed flex-1">
                    {study.description}
                  </p>

                  {/* Before / After Comparison */}
                  <div className="mt-5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] space-y-1">
                    <p className="text-red-400/80 font-mono">
                      🔴 Before: {study.beforeMetrics}
                    </p>
                    <p className="text-emerald-400 font-mono font-semibold">
                      🟢 After: {study.afterMetrics}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="mt-5 pt-4 border-t border-white/[0.08] grid grid-cols-3 gap-2 text-center">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-base font-bold text-accent-light font-mono">{m.value}</p>
                        <p className="text-[9px] text-white/35 uppercase tracking-wider mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsStrategyModalOpen(true)}
                    className="mt-6 w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-white/5 hover:bg-accent hover:text-white p-2.5 rounded-xl border border-white/10 transition-all group"
                  >
                    Request Similar Case Study Blueprint
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <StrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
      />
    </>
  );
}
