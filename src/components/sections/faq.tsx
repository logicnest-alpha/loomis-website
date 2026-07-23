"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, MessageCircleQuestion } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { fadeUp } from "@/lib/animations";

interface FAQItem {
  question: string;
  answer: string;
  category: "deploy" | "security" | "pricing" | "tech";
}

const faqs: FAQItem[] = [
  {
    category: "deploy",
    question: "How long does it take to deploy a full production AI system?",
    answer:
      "Most custom AI systems go live in 2–3 weeks. Simple automations like WhatsApp customer bots or 24/7 AI voice receptionists can deploy in 7–10 days. Complex multi-agent systems with custom PostgreSQL/Salesforce integrations take 3 weeks.",
  },
  {
    category: "security",
    question: "How do you handle security, data privacy, and SOC 2 compliance?",
    answer:
      "We build under strict enterprise security protocols. We do NOT train public AI models on your proprietary company data. All data transfers use 256-bit AES encryption in transit and at rest with full SOC 2 Type II compliance.",
  },
  {
    category: "pricing",
    question: "What does your pricing structure look like?",
    answer:
      "We offer transparent project-based pricing for initial system builds ($15K–$45K depending on architecture complexity) alongside an optional monthly optimization & SLA maintenance retainer. We calculate exact projected ROI during your free strategy call.",
  },
  {
    category: "tech",
    question: "Can LOOMIS integrate with our proprietary database and CRM stack?",
    answer:
      "Yes. We build custom API connectors for HubSpot, Salesforce, Pipedrive, WhatsApp Business API, PostgreSQL, Supabase, Stripe, and custom REST/GraphQL endpoints.",
  },
  {
    category: "deploy",
    question: "Do our internal staff need technical AI or coding experience to use LOOMIS?",
    answer:
      "Zero technical knowledge required. We build intuitive executive dashboards and handle full staff onboarding. Your team gets 24/7 engineering support.",
  },
  {
    category: "pricing",
    question: "How is LOOMIS different from standard automation agencies or internal hiring?",
    answer:
      "Traditional agencies rely on brittle Zapier templates. Internal hiring costs $250k+/year with months of ramp time. LOOMIS delivers custom production-grade code, RAG vector indexes, and guaranteed SLAs in 3 weeks at an 80% lower total cost of ownership.",
  },
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<"all" | "deploy" | "security" | "pricing" | "tech">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section id="faq" className="py-24 md:py-32 border-t border-white/[0.08] relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <span className="text-[11px] font-semibold text-accent-light uppercase tracking-wider bg-accent/15 border border-accent/30 px-3 py-1 rounded-full inline-block mb-3">
              Knowledge Base & FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Everything you need to know about partnering with LOOMIS for enterprise AI architecture.
            </p>

            {/* Search Input */}
            <div className="mt-8 relative max-w-md mx-auto">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-white/30" />
              <input
                type="text"
                placeholder="Search FAQs (e.g. security, pricing, deployment)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-accent"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === "all" ? "bg-accent text-white" : "bg-white/[0.04] text-white/40 hover:text-white"
                }`}
              >
                All FAQs ({faqs.length})
              </button>
              <button
                onClick={() => setActiveCategory("deploy")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === "deploy" ? "bg-accent text-white" : "bg-white/[0.04] text-white/40 hover:text-white"
                }`}
              >
                Deployment Timeline
              </button>
              <button
                onClick={() => setActiveCategory("security")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === "security" ? "bg-accent text-white" : "bg-white/[0.04] text-white/40 hover:text-white"
                }`}
              >
                Security & SOC2
              </button>
              <button
                onClick={() => setActiveCategory("pricing")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === "pricing" ? "bg-accent text-white" : "bg-white/[0.04] text-white/40 hover:text-white"
                }`}
              >
                Pricing & ROI
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full space-y-3">
                {filteredFaqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-white/10 bg-white/[0.02] rounded-xl px-5 py-1"
                  >
                    <AccordionTrigger className="text-sm font-semibold text-white hover:text-accent-light text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-white/60 leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8 text-xs text-white/40">
                No matching FAQs found for &quot;{searchQuery}&quot;. Ask our engineering team directly below!
              </div>
            )}

            <div className="mt-12 text-center p-6 rounded-2xl bg-accent/10 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-sm font-bold text-white flex items-center gap-2">
                  <MessageCircleQuestion className="h-4 w-4 text-accent-light" />
                  Have a specific architectural question?
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  Our Lead AI Architect will answer your technical questions on a 30-min strategy call.
                </p>
              </div>
              <button
                onClick={() => setIsStrategyModalOpen(true)}
                className="bg-accent hover:bg-accent-light text-white text-xs font-semibold px-5 py-2.5 rounded-xl shrink-0"
              >
                Ask an AI Architect
              </button>
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
