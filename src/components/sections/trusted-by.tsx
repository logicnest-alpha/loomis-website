"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Database, Layers, Lock, Sparkles } from "lucide-react";

interface TechBadge {
  name: string;
  category: "llm" | "crm" | "data";
  desc: string;
  tag: string;
}

const techStack: TechBadge[] = [
  { name: "OpenAI GPT-4o", category: "llm", desc: "Multimodal Reasoner", tag: "LLM Engine" },
  { name: "Anthropic Claude 3.5", category: "llm", desc: "Complex Logic & Code", tag: "LLM Engine" },
  { name: "Salesforce CRM", category: "crm", desc: "Enterprise Sync", tag: "CRM Integration" },
  { name: "HubSpot API", category: "crm", desc: "Automated Deal Flow", tag: "CRM Integration" },
  { name: "Supabase PG", category: "data", desc: "Realtime Vector DB", tag: "Data Infra" },
  { name: "Pinecone Vector", category: "data", desc: "RAG Knowledge Base", tag: "Vector Index" },
  { name: "LangChain Engine", category: "llm", desc: "Multi-Agent Chains", tag: "Agent Framework" },
  { name: "Stripe Billing", category: "crm", desc: "Revenue Automation", tag: "Fintech API" },
  { name: "WhatsApp Business API", category: "crm", desc: "Direct Messaging Bot", tag: "Messaging API" },
  { name: "Vercel Enterprise", category: "data", desc: "Edge Deployment", tag: "Infrastructure" },
];

export function TrustedBy() {
  const [filter, setFilter] = useState<"all" | "llm" | "crm" | "data">("all");

  const filteredStack = filter === "all"
    ? techStack
    : techStack.filter((item) => item.category === filter);

  return (
    <section className="relative border-y border-white/10 bg-white/[0.003] overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-mono font-bold text-accent-light uppercase tracking-[0.25em] mb-3 flex items-center justify-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            Tier-1 Enterprise Stack & Security Standard
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
            Built on Industry-Leading Infrastructure
          </h2>
          <p className="text-sm text-white/55 mt-3 leading-relaxed font-light">
            Seamlessly integrating with your enterprise tech stack with zero downtime or migration friction.
          </p>

          {/* Stack Category Filter */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                filter === "all"
                  ? "bg-accent text-white shadow-[0_4px_15px_rgba(124,58,237,0.4)]"
                  : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
              }`}
            >
              All Partners ({techStack.length})
            </button>
            <button
              onClick={() => setFilter("llm")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                filter === "llm"
                  ? "bg-accent text-white shadow-[0_4px_15px_rgba(124,58,237,0.4)]"
                  : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
              }`}
            >
              <Cpu className="h-3.5 w-3.5" /> LLM Engines
            </button>
            <button
              onClick={() => setFilter("crm")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                filter === "crm"
                  ? "bg-accent text-white shadow-[0_4px_15px_rgba(124,58,237,0.4)]"
                  : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
              }`}
            >
              <Layers className="h-3.5 w-3.5" /> CRMs & APIs
            </button>
            <button
              onClick={() => setFilter("data")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                filter === "data"
                  ? "bg-accent text-white shadow-[0_4px_15px_rgba(124,58,237,0.4)]"
                  : "bg-white/[0.04] text-white/50 border border-white/10 hover:text-white"
              }`}
            >
              <Database className="h-3.5 w-3.5" /> Data & Infra
            </button>
          </div>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {filteredStack.map((item) => (
            <motion.div
              layout
              key={item.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-2xl border border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.06] hover:border-accent/40 transition-all duration-300 text-center group cursor-pointer shadow-lg hover:-translate-y-1"
            >
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-accent-light bg-accent/15 px-2.5 py-0.5 rounded-full inline-block mb-2">
                {item.tag}
              </span>
              <h4 className="text-xs font-bold text-white group-hover:text-accent-light transition-colors">
                {item.name}
              </h4>
              <p className="text-[10px] text-white/40 mt-1 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Security & Compliance Badges */}
        <div className="mt-14 pt-10 border-t border-white/10 flex items-center justify-center gap-10 flex-wrap text-center">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-white/70">
            <ShieldCheck className="h-4.5 w-4.5 text-emerald-400" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-white/70">
            <Lock className="h-4.5 w-4.5 text-cyan-400" />
            <span>256-bit AES Encryption</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-white/70">
            <ShieldCheck className="h-4.5 w-4.5 text-amber-400" />
            <span>GDPR & HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-white/70">
            <Sparkles className="h-4.5 w-4.5 text-accent-light" />
            <span>99.99% Guaranteed Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
