"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Zap,
  LayoutDashboard,
  Settings,
  BarChart3,
  Plug,
  Terminal,
  Send,
  Sparkles,
  RefreshCw,
  Copy,
  Check,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { fadeUp } from "@/lib/animations";

const sidebarItems = [
  { id: "overview", icon: LayoutDashboard, label: "Overview" },
  { id: "sandbox", icon: Terminal, label: "AI Prompt Sandbox ⚡" },
  { id: "agents", icon: Bot, label: "Agent Engine" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
  { id: "integrations", icon: Plug, label: "Integrations" },
];

const metrics = [
  { label: "Tasks Automated Today", value: "14,920", change: "+28%", trend: "up" },
  { label: "Qualified Leads Processed", value: "4,180", change: "+22%", trend: "up" },
  { label: "Manual Hours Saved", value: "1,140", change: "+35%", trend: "up" },
  { label: "Agent Response Time", value: "380ms", change: "-12%", trend: "up" },
];

const samplePrompts = [
  {
    title: "Qualify Inbound Enterprise Lead",
    prompt: "Analyze lead: Acme Corp ($50M ARR, 250 employees). Check ICP fit and draft AE briefing.",
    response: `[AI Agent Response - 340ms]
✓ Lead Evaluated: Acme Corp (HIGH FIT - 98.4% Match)
• Industry: B2B SaaS | Revenue: $50M ARR | Team: 250
• Action Taken: Lead auto-assigned to Senior AE (Sarah C.)
• WhatsApp Sequence Triggered: Intro video + Calendly link sent.
• CRM Status: Stage updated to "Qualified Prospect" in HubSpot.`,
  },
  {
    title: "WhatsApp Customer Support Resolution",
    prompt: "Customer query on WhatsApp: 'Can I upgrade my subscription plan to Enterprise?'",
    response: `[AI Agent Response - 210ms]
✓ Intent Identified: Subscription Upgrade Inquiry
• Context Retrieved: Account #89412 (Currently Pro Tier)
• Action Taken: Generated custom upgrade invoice & sent instant checkout link via WhatsApp.
• Agent Sentiment: 100% Satisfied. Ticket resolved without human agent.`,
  },
  {
    title: "Bi-Directional CRM Enrichment & Sync",
    prompt: "Post-Call Processing: Summarize call transcript with VP of Ops at Meridian.",
    response: `[AI Agent Response - 410ms]
✓ Audio Transcript Processed: 45 min strategy call
• Key Takeaways extracted: Pain point = manual lead latency. Budget approved ($35k).
• Next Step: Strategy Session scheduled for Thursday 2 PM.
• Action Taken: Pushed meeting notes & task reminders into Salesforce.`,
  },
];

export function Demo() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [activePromptIdx, setActivePromptIdx] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);

  const handleSimulate = (idx: number) => {
    setActivePromptIdx(idx);
    setIsSimulating(true);
    setCopied(false);
    setTimeout(() => {
      setIsSimulating(false);
    }, 550);
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(samplePrompts[activePromptIdx].response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="solutions" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.08)_0%,_transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeader
            label="Live Platform Engine"
            title="Your autonomous AI command center"
            description="Monitor real-time agent execution, test simulated prompts live, and manage all your automation pipelines from one unified interface."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-3xl opacity-50 pointer-events-none" />

            <div className="relative rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.04] to-white/[0.005] backdrop-blur-2xl overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.18)]">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-white/[0.03]">
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/90" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/90" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/90" />
                  </div>
                  <span className="text-xs text-white/50 font-mono pl-3">
                    app.loomis.ai/command-center
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 font-semibold">
                  <Activity className="h-3.5 w-3.5" />
                  Live Agent Stream (100% Operational)
                </div>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                {/* Sidebar */}
                <div className="lg:col-span-3 border-r border-white/10 p-4 bg-white/[0.01]">
                  <p className="text-[10px] uppercase font-mono tracking-widest text-white/40 px-3 py-2 font-bold">
                    Command Menu
                  </p>
                  <div className="space-y-1.5">
                    {sidebarItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition-all ${
                          activeTab === item.id
                            ? "bg-accent text-white shadow-[0_4px_20px_rgba(124,58,237,0.4)] border border-accent-light/40"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 p-4 rounded-2xl border border-accent/30 bg-accent/15 text-xs space-y-2.5 shadow-lg">
                    <div className="flex items-center gap-2 font-bold text-accent-light">
                      <Sparkles className="h-4 w-4" />
                      Custom Enterprise Sandbox
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      Want to test LOOMIS connected to your exact database & CRM?
                    </p>
                    <Button
                      onClick={() => setIsStrategyModalOpen(true)}
                      size="sm"
                      className="w-full bg-accent hover:bg-accent-light text-white text-xs h-9 mt-1 font-bold"
                    >
                      Book 30-Min Demo
                    </Button>
                  </div>
                </div>

                {/* Main Content Pane */}
                <div className="lg:col-span-9 p-6 md:p-8 bg-neutral-950/60">
                  {activeTab === "overview" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-white">System Performance Telemetry</h3>
                          <p className="text-xs text-white/50 mt-0.5">Real-time telemetry updated 1s ago</p>
                        </div>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30 font-bold">
                          Active Agents: 14 Running
                        </span>
                      </div>

                      {/* Metrics Cards */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {metrics.map((m) => (
                          <div key={m.label} className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] shadow-md">
                            <p className="text-xs text-white/50 font-medium">{m.label}</p>
                            <p className="text-2xl font-extrabold text-white font-mono mt-1 tracking-tight">{m.value}</p>
                            <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-mono font-bold">
                              <TrendingUp className="h-3 w-3" /> {m.change}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Activity Chart Bar */}
                      <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] space-y-4 shadow-md">
                        <div className="flex items-center justify-between text-xs text-white">
                          <span className="font-bold">24-Hour Agent Throughput (Tasks/hr)</span>
                          <span className="text-accent-light font-mono font-bold">Peak: 1,840 tasks/hr</span>
                        </div>
                        <div className="flex items-end gap-2.5 h-32 pt-4">
                          {[35, 55, 42, 70, 48, 85, 62, 90, 75, 95, 80, 88, 92, 96, 84].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h}%` }}
                              className="flex-1 rounded-md bg-gradient-to-t from-accent/40 via-accent to-accent-light hover:to-white transition-all cursor-pointer shadow-sm"
                              title={`Hour ${i + 1}: ${h * 20} tasks`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "sandbox" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            Interactive AI Prompt Sandbox
                            <span className="text-[10px] text-accent-light bg-accent/20 border border-accent/30 px-2.5 py-0.5 rounded-full font-mono font-bold">
                              Live Test Mode
                            </span>
                          </h3>
                          <p className="text-xs text-white/60 mt-0.5">
                            Select a sample prompt below to simulate real-time AI reasoning and tool execution.
                          </p>
                        </div>
                      </div>

                      {/* Prompt Selectors */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {samplePrompts.map((p, idx) => (
                          <button
                            key={p.title}
                            onClick={() => handleSimulate(idx)}
                            className={`p-3.5 rounded-2xl border text-left text-xs transition-all ${
                              activePromptIdx === idx
                                ? "border-accent bg-accent/20 text-white font-bold shadow-md"
                                : "border-white/10 bg-white/[0.02] text-white/70 hover:text-white hover:border-white/20"
                            }`}
                          >
                            <p className="font-bold text-white">{p.title}</p>
                            <p className="text-[11px] text-white/50 truncate mt-1">{p.prompt}</p>
                          </button>
                        ))}
                      </div>

                      {/* Live Output Window */}
                      <div className="p-5 rounded-2xl border border-accent/40 bg-neutral-950 font-mono text-xs space-y-4 shadow-xl">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-white/50 text-xs">
                          <span className="font-bold text-white/70">INPUT PROMPT SPECIFICATION</span>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={handleCopyResponse}
                              className="flex items-center gap-1.5 text-[11px] text-white/60 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 transition-colors"
                            >
                              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                              <span>{copied ? "Copied!" : "Copy Response"}</span>
                            </button>
                            {isSimulating ? (
                              <span className="text-amber-400 flex items-center gap-1 animate-pulse font-bold">
                                <RefreshCw className="h-3.5 w-3.5 animate-spin" /> Executing Tools...
                              </span>
                            ) : (
                              <span className="text-emerald-400 font-bold">✓ EXECUTION SUCCESS</span>
                            )}
                          </div>
                        </div>

                        <p className="text-white/90 italic font-medium">&gt; {samplePrompts[activePromptIdx].prompt}</p>

                        <div className="pt-2 border-t border-white/10 text-accent-light leading-relaxed whitespace-pre-line font-medium text-[13px]">
                          {isSimulating ? "Querying vector knowledge RAG index..." : samplePrompts[activePromptIdx].response}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "agents" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 text-xs text-white/80">
                      <h3 className="text-lg font-bold text-white mb-2">Active Autonomous Agents</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] space-y-1.5">
                          <div className="flex items-center justify-between text-white font-bold">
                            <span>Lead Scoring Agent #1</span>
                            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-mono">Active</span>
                          </div>
                          <p className="text-xs text-white/50">Models: Claude 3.5 Sonnet + Custom Embeddings</p>
                        </div>
                        <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] space-y-1.5">
                          <div className="flex items-center justify-between text-white font-bold">
                            <span>WhatsApp Conversational Agent</span>
                            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-mono">Active</span>
                          </div>
                          <p className="text-xs text-white/50">Language: Multi-Lingual (30+ Dialects)</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {(activeTab === "analytics" || activeTab === "integrations") && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-14 space-y-4">
                      <Bot className="h-12 w-12 text-accent-light mx-auto" />
                      <h3 className="text-xl font-bold text-white">Full Enterprise Telemetry Stream</h3>
                      <p className="text-xs text-white/60 max-w-md mx-auto leading-relaxed">
                        Connect LOOMIS directly to your company PostgreSQL, Snowflake, Salesforce, or WhatsApp APIs during your strategy onboarding.
                      </p>
                      <Button onClick={() => setIsStrategyModalOpen(true)} className="bg-accent text-white text-xs h-10 px-6 font-bold">
                        Schedule Live Enterprise Demo
                      </Button>
                    </motion.div>
                  )}
                </div>
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
