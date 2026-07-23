"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  MessageSquare,
  Phone,
  BarChart3,
  Workflow,
  Users,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface ServiceItem {
  id: string;
  icon: any;
  title: string;
  category: "agents" | "revenue" | "voice";
  description: string;
  featured?: boolean;
  tag?: string;
  metrics: string;
  features: string[];
  workflow: string[];
}

const services: ServiceItem[] = [
  {
    id: "ai-agents",
    icon: Bot,
    category: "agents",
    title: "Autonomous AI Workflow Agents",
    description:
      "Production-ready autonomous AI agents that run complex multi-step data pipelines, document processing, and decision trees with zero human bottleneck.",
    featured: true,
    tag: "Flagship Suite",
    metrics: "85% Operational Cost Deflection",
    features: [
      "Multi-agent reasoning orchestration",
      "Self-correcting error handling",
      "Custom vector RAG knowledge retrieval",
      "Enterprise SLA & latency controls (<500ms)",
    ],
    workflow: [
      "Inbound Event Triggered (Webhook/API)",
      "Agent Evaluates Intent & Knowledge Base",
      "Executes Parallel Tool Calls (DB, CRM)",
      "Verifies Output & Delivers Outcome",
    ],
  },
  {
    id: "ai-sales",
    icon: Users,
    category: "revenue",
    title: "AI Sales & Revenue Acceleration Engine",
    description:
      "Autonomous lead scoring, hyper-personalized outreach sequences, and pipeline enrichment that turns inbound interest into closed revenue.",
    featured: false,
    metrics: "3.4x Pipeline Velocity",
    features: [
      "Instant lead qualification (<60 seconds)",
      "Dynamic ICP lead scoring",
      "Multichannel follow-up sequences",
      "Automated meeting scheduling & calendar sync",
    ],
    workflow: [
      "Lead submits form or engages via chat",
      "AI enriches profile with firmographic data",
      "Scores ICP alignment & drafts personalized message",
      "Schedules call directly on AE calendar",
    ],
  },
  {
    id: "crm-auto",
    icon: Workflow,
    category: "revenue",
    title: "Bi-Directional CRM Automation Architecture",
    description:
      "Keep HubSpot, Salesforce, or Pipedrive pristine. Automated deal progression, activity logging, and contact data enrichment around the clock.",
    featured: false,
    metrics: "100% Clean Data Hygiene",
    features: [
      "Zero manual data entry for sales reps",
      "Real-time deal stage auto-transitions",
      "Call transcript summarization & key action extraction",
      "Custom REST webhook integrations",
    ],
    workflow: [
      "Call transcript / email arrives",
      "LLM parses action items & sentiment",
      "Updates CRM deal stage & next steps",
      "Notifies Slack team with executive summary",
    ],
  },
  {
    id: "whatsapp-bot",
    icon: MessageSquare,
    category: "voice",
    title: "Enterprise WhatsApp Intelligence Bot",
    description:
      "Human-grade conversational AI on WhatsApp for Instant Booking, Support Resolution, and Direct Sales Conversions at scale.",
    featured: false,
    metrics: "94% First Contact Resolution",
    features: [
      "Supports 30+ languages natively",
      "Seamless escalation to human agents",
      "Instant catalog browsing & payments",
      "Automated appointment reminders",
    ],
    workflow: [
      "Customer messages on WhatsApp",
      "Bot identifies intent & retrieves user record",
      "Resolves query or processes booking",
      "Syncs conversation log into CRM",
    ],
  },
  {
    id: "ai-receptionist",
    icon: Phone,
    category: "voice",
    title: "24/7 Intelligent Voice AI Receptionist",
    description:
      "Ultra-low latency human-sounding voice agents that handle phone inquiries, qualify callers, and book appointments 24 hours a day.",
    featured: false,
    metrics: "<800ms Voice Latency",
    features: [
      "Natural conversational voice synthesis",
      "Instant call transfer logic",
      "Custom phone number provisioning",
      "Full audio transcript & analytics",
    ],
    workflow: [
      "Phone rings on dedicated enterprise line",
      "Voice AI greets caller with custom persona",
      "Qualifies caller & captures details",
      "Transfers call or sends instant SMS link",
    ],
  },
  {
    id: "bi-analytics",
    icon: BarChart3,
    category: "agents",
    title: "Predictive Business Intelligence & Analytics",
    description:
      "Turn fragmented database silos into actionable executive dashboards. AI anomaly detection and automated weekly growth summaries.",
    featured: false,
    metrics: "Real-Time Executive Clarity",
    features: [
      "Automated SQL queries & charting",
      "Weekly AI executive briefing reports",
      "Revenue churn prediction alerts",
      "Custom Grafana & Looker embeds",
    ],
    workflow: [
      "Inbound telemetry streams into data warehouse",
      "AI detects revenue anomaly or opportunity",
      "Generates interactive chart & summary",
      "Delivers insight straight to leadership Slack",
    ],
  },
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState<"all" | "agents" | "revenue" | "voice">("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.06)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Services & Engineering Capabilities"
          title="Intelligent systems built for 10x operational throughput"
          description="From autonomous agent logic to 24/7 voice AI — we build mission-critical infrastructure tailored to your exact business workflows."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
            }`}
          >
            All Capabilities ({services.length})
          </button>
          <button
            onClick={() => setActiveCategory("agents")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeCategory === "agents"
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
            }`}
          >
            <Bot className="h-3.5 w-3.5" /> Autonomous Agents
          </button>
          <button
            onClick={() => setActiveCategory("revenue")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeCategory === "revenue"
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
            }`}
          >
            <Layers className="h-3.5 w-3.5" /> Revenue & CRM
          </button>
          <button
            onClick={() => setActiveCategory("voice")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeCategory === "voice"
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
            }`}
          >
            <Phone className="h-3.5 w-3.5" /> Voice & Messaging
          </button>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredServices.map((service, i) => (
            <motion.div key={service.id} custom={i} variants={fadeUp}>
              <GlowCard className="h-full group flex flex-col justify-between">
                <div className="p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 group-hover:bg-accent/25 group-hover:border-accent/50 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-accent-light" />
                    </div>
                    {service.tag && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-light bg-accent/15 border border-accent/30 px-3 py-1 rounded-full">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs text-white/50 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      {service.metrics}
                    </span>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent-light hover:text-white transition-colors"
                    >
                      View Architecture
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Architecture Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-background/95 p-6 md:p-8 shadow-2xl backdrop-blur-2xl z-10 overflow-hidden"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 border border-accent/30 text-accent-light">
                    <selectedService.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedService.title}</h3>
                    <p className="text-xs text-accent-light font-mono">{selectedService.metrics}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-white/40 hover:text-white text-xs px-2 py-1 bg-white/5 rounded-lg"
                >
                  ✕ Close
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-accent-light" /> Key Enterprise Capabilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-white/70 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.06]">
                        <CheckCircle2 className="h-4 w-4 text-accent-light shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5 text-cyan-400" /> Execution Workflow Pipeline
                  </h4>
                  <div className="space-y-2">
                    {selectedService.workflow.map((step, idx) => (
                      <div key={step} className="flex items-center gap-3 text-xs text-white/80 bg-white/[0.03] p-3 rounded-lg border border-white/[0.08]">
                        <span className="h-5 w-5 rounded-full bg-accent/20 text-accent-light font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                          0{idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <Button
                    onClick={() => setSelectedService(null)}
                    className="bg-accent hover:bg-accent-light text-white text-xs px-6 h-10"
                  >
                    Close Architecture View
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
