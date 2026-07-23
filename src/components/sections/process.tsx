"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, LineChart, CheckCircle2, Terminal, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Workflow Audit & Discovery",
    description:
      "We audit your operational bottlenecks, shadow your team's manual steps, and pinpoint high-impact automation leverage points.",
    duration: "Week 1",
    deliverables: [
      "Process Bottleneck Map",
      "API & Database Readiness Audit",
      "Expected ROI & Time-Savings Spec",
    ],
    codePreview: `// Week 1: Audit Output
const auditResult = {
  manualBottlenecks: 14,
  highImpactTargets: ["Lead Qualification", "CRM Sync"],
  estimatedTimeSaved: "32 hrs/week per rep"
};`,
  },
  {
    icon: PenTool,
    step: "02",
    title: "System & Agent Architecture",
    description:
      "Our engineers design a custom multi-agent blueprint, specifying vector memory schemas, prompt weights, and security boundaries.",
    duration: "Week 1–2",
    deliverables: [
      "Multi-Agent Workflow Blueprint",
      "RAG Vector Database Schema",
      "Security & Fail-Safe Protocol",
    ],
    codePreview: `// Week 2: Agent Architecture Spec
const agentSpec = {
  llm: "claude-3-5-sonnet",
  tools: ["crm_update", "calendar_book"],
  securityBoundary: "SOC2-Level Data Masking"
};`,
  },
  {
    icon: Code,
    step: "03",
    title: "Custom Code & Agent Building",
    description:
      "We write production code, set up webhooks, train custom RAG knowledge indexes, and run automated stress tests.",
    duration: "Week 2–3",
    deliverables: [
      "Production Agent Codebase",
      "Bi-Directional CRM Webhooks",
      "Synthetic Stress Test Logs",
    ],
    codePreview: `// Week 3: Production Pipeline
export async function runAgentPipeline(event) {
  const context = fontRAG.retrieve(event.data);
  return await agentEngine.execute(context);
}`,
  },
  {
    icon: Rocket,
    step: "04",
    title: "Production Launch & Handoff",
    description:
      "Deploy with 0-downtime cutover, complete team training, comprehensive documentation, and real-time telemetry monitoring.",
    duration: "Week 3–4",
    deliverables: [
      "Production System Deployment",
      "Team Onboarding & SOP Manual",
      "Executive Telemetry Dashboard",
    ],
    codePreview: `// Week 4: Production Deployment
deployToVercelEnterprise({
  status: "LIVE",
  uptimeSLA: "99.99%",
  latency: "420ms"
});`,
  },
  {
    icon: LineChart,
    step: "05",
    title: "Continuous Telemetry & Tuning",
    description:
      "We monitor model outputs, fine-tune prompts based on live data, and expand agent capabilities as your revenue grows.",
    duration: "Ongoing SLA",
    deliverables: [
      "Monthly Model Optimization",
      "Dedicated Engineering Support",
      "Quarterly Feature Expansion",
    ],
    codePreview: `// Continuous SLA Tuning
monitorTelemetry({
  autoTunePrompts: true,
  accuracyRate: "99.8%",
  monthlyRetainer: "Active"
});`,
  },
];

export function Process() {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const currentStep = steps[selectedStep];

  return (
    <section id="process" className="section-padding border-y border-white/[0.08] relative bg-white/[0.005]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Engineering Methodology"
          title="From discovery to live deployment in 3 weeks"
          description="A battle-tested deployment framework refined over 40+ enterprise AI rollouts. Zero guess work, full transparency."
        />

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => (
            <button
              key={step.title}
              onClick={() => setSelectedStep(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedStep === idx
                  ? "border-accent bg-accent/20 text-white shadow-lg shadow-accent/20"
                  : "border-white/10 bg-white/[0.02] text-white/50 hover:text-white hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-accent-light font-bold">
                  {step.step}
                </span>
                <span className="text-[9px] text-white/40 bg-white/5 px-2 py-0.5 rounded-full">
                  {step.duration}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white truncate">{step.title}</h4>
            </button>
          ))}
        </div>

        {/* Selected Step Inspector Box */}
        <motion.div
          key={currentStep.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-white/15 bg-white/[0.02] backdrop-blur-xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column: Deliverables */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-accent-light bg-accent/20 px-2.5 py-1 rounded-full border border-accent/30">
                Phase {currentStep.step} — {currentStep.duration}
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {currentStep.title}
              </h3>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {currentStep.description}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Key Phase Deliverables:
              </h4>
              <div className="space-y-2">
                {currentStep.deliverables.map((del) => (
                  <div key={del} className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code/Architecture Snippet */}
          <div className="lg:col-span-5 bg-neutral-950 border border-white/10 rounded-xl p-4 font-mono text-[11px] text-white/80 space-y-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-white/40">
              <div className="flex items-center gap-2 text-[10px]">
                <Terminal className="h-3.5 w-3.5 text-accent-light" />
                <span>phase_{currentStep.step}_spec.ts</span>
              </div>
              <span className="text-[9px] text-emerald-400">READY</span>
            </div>
            <pre className="text-accent-light/90 overflow-x-auto leading-relaxed">
              {currentStep.codePreview}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
