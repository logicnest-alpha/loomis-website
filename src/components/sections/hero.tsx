"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Cpu, Bot, Zap, Database, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { RoiCalculator } from "@/components/ui/roi-calculator";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { fadeUp } from "@/lib/animations";

const stats = [
  { value: 40, suffix: "+", label: "Enterprise Systems Deployed" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
  { value: 3.4, suffix: "x", label: "Average Measured ROI" },
  { value: 12, suffix: "M+", label: "Reclaimed Operational Capital" },
];

export function Hero() {
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "calculator">("overview");

  return (
    <>
      <section className="relative min-h-[100vh] flex flex-col items-center overflow-hidden pt-28 md:pt-36 pb-24 noise">
        {/* Ambient Glowing Orbs Background */}
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        
        {/* Floating Light Orbs */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-gradient-to-tr from-accent/20 via-purple-600/10 to-cyan-500/10 rounded-full blur-[200px] opacity-70 pointer-events-none animate-pulse-slow" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[180px] opacity-40 pointer-events-none animate-float-slow" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[180px] opacity-40 pointer-events-none animate-float-slow" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-7xl mx-auto">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8 shimmer-border rounded-full"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] backdrop-blur-xl px-5 py-2.5 text-xs font-semibold text-white/90 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-light" />
              </span>
              <span className="tracking-wide">Enterprise Autonomous AI Systems — Silicon Valley Architecture</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.25rem] font-extrabold tracking-[-0.04em] text-white leading-[1.03] max-w-6xl drop-shadow-[0_15px_45px_rgba(0,0,0,0.9)]"
          >
            AI Systems Engineering <br className="hidden sm:block" /> That Helps{" "}
            <span className="gradient-text drop-shadow-[0_10px_35px_rgba(124,58,237,0.4)]">
              Businesses Scale 10x.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed font-light"
          >
            We architect, build, and deploy production-grade AI systems — from sales velocity engines and WhatsApp intelligence to custom CRM agents. Eliminate operational manual work without expanding headcount.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-col sm:flex-row items-center gap-5"
          >
            <Button
              onClick={() => setIsStrategyModalOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent-light text-white font-bold text-base h-14 px-9 rounded-2xl shadow-[0_0_40px_rgba(124,58,237,0.5)] group/btn"
            >
              <Sparkles className="h-5 w-5 text-accent-light" />
              Book a Free Strategy Session
              <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1.5" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-9 text-base font-semibold border-white/20 bg-white/[0.03] hover:bg-white/[0.08] text-white rounded-2xl backdrop-blur-xl"
            >
              <Link href="#solutions">
                <Play className="h-4 w-4 fill-current text-accent-light" />
                Explore Platform Architecture
              </Link>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-20 flex items-center justify-center gap-10 md:gap-16 flex-wrap"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-10 md:gap-16">
                {i > 0 && <div className="hidden sm:block h-12 w-px bg-white/[0.1]" />}
                <div className="text-center sm:text-left">
                  <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-mono drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1.5 text-xs text-white/45 font-medium tracking-wide">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* View Switcher: Interactive Workflow vs Live ROI Calculator */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-1.5 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-2xl flex gap-2">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeTab === "overview"
                    ? "bg-accent text-white shadow-[0_4px_20px_rgba(124,58,237,0.4)]"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Live Multi-Agent Pipeline Flow
              </button>
              <button
                onClick={() => setActiveTab("calculator")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeTab === "calculator"
                    ? "bg-accent text-white shadow-[0_4px_20px_rgba(124,58,237,0.4)]"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Interactive ROI Calculator 🧮
              </button>
            </div>
          </div>

          {activeTab === "overview" ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.04] to-white/[0.005] backdrop-blur-2xl p-8 md:p-10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9),0_0_60px_rgba(124,58,237,0.2),inset_0_1px_0_0_rgba(255,255,255,0.2)] overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-light/60 to-transparent" />

              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
                <div className="flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-accent-light" />
                  <span className="text-xs font-bold text-white tracking-widest uppercase">
                    LOOMIS Autonomous Multi-Agent Pipeline Architecture
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Telemetry Stream Active (Latency: 340ms)
                </div>
              </div>

              {/* Node Architecture Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center relative">
                {/* Node 1 */}
                <div className="p-5 rounded-2xl border border-white/15 bg-white/[0.03] space-y-3 relative group hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span className="font-mono text-[10px] uppercase">Input Stream</span>
                    <Database className="h-4 w-4 text-cyan-400" />
                  </div>
                  <p className="text-base font-bold text-white">Inbound Lead / Webhook</p>
                  <p className="text-xs text-white/45">WhatsApp, CRM, Email, Web Forms</p>
                  <div className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 p-2 rounded-lg border border-cyan-500/30">
                    &gt; Trigger: Lead Enters Pipeline
                  </div>
                </div>

                {/* Node 2 */}
                <div className="p-5 rounded-2xl border border-accent/50 bg-accent/15 space-y-3 relative shadow-[0_10px_30px_rgba(124,58,237,0.3)] group hover:border-accent-light transition-all duration-300">
                  <div className="flex items-center justify-between text-xs text-accent-light font-bold">
                    <span className="font-mono text-[10px] uppercase">AI Reasoning Layer</span>
                    <Bot className="h-4 w-4 text-accent-light" />
                  </div>
                  <p className="text-base font-bold text-white">Lead Qualification Agent</p>
                  <p className="text-xs text-white/60">Extract Intent & RAG Profile Match</p>
                  <div className="text-[10px] font-mono text-accent-light bg-accent/30 p-2 rounded-lg border border-accent/40 font-bold">
                    &gt; Confidence: 99.4% ICP Match
                  </div>
                </div>

                {/* Node 3 */}
                <div className="p-5 rounded-2xl border border-white/15 bg-white/[0.03] space-y-3 relative group hover:border-amber-400/50 transition-all duration-300 shadow-lg">
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span className="font-mono text-[10px] uppercase">Execution Engine</span>
                    <Zap className="h-4 w-4 text-amber-400" />
                  </div>
                  <p className="text-base font-bold text-white">Automated Booking & Action</p>
                  <p className="text-xs text-white/45">Schedule Call, Update CRM Deal</p>
                  <div className="text-[10px] font-mono text-amber-400 bg-amber-950/60 p-2 rounded-lg border border-amber-500/30">
                    &gt; Latency: 420ms
                  </div>
                </div>

                {/* Node 4 */}
                <div className="p-5 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 space-y-3 relative shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                    <span className="font-mono text-[10px] uppercase">Verified Business Impact</span>
                    <MessageSquare className="h-4 w-4 text-emerald-400" />
                  </div>
                  <p className="text-base font-bold text-white">3.4x Conversion Lift</p>
                  <p className="text-xs text-white/45">Zero manual operational overhead</p>
                  <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 p-2 rounded-lg border border-emerald-500/30 font-bold">
                    &gt; ROI: +340% Lift
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <RoiCalculator onOpenModal={() => setIsStrategyModalOpen(true)} />
            </motion.div>
          )}
        </div>
      </section>

      {/* Strategy Session Modal */}
      <StrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
      />
    </>
  );
}
