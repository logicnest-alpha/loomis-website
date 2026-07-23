"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck, CheckCircle2, Send, Sparkles } from "lucide-react";
import { StrategyModal } from "@/components/ui/strategy-modal";

const footerLinks = {
  services: [
    { label: "Autonomous AI Agents", href: "#services" },
    { label: "AI Sales & Revenue Engine", href: "#services" },
    { label: "Bi-Directional CRM Sync", href: "#services" },
    { label: "WhatsApp Intelligence Bot", href: "#services" },
    { label: "24/7 Voice AI Receptionist", href: "#services" },
    { label: "Predictive Analytics", href: "#services" },
  ],
  company: [
    { label: "About LOOMIS", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Engineering Methodology", href: "#process" },
    { label: "Knowledge Base & FAQ", href: "#faq" },
    { label: "Contact Engineering", href: "#contact" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            formType: "Newsletter Subscription",
          }),
        });
      } catch (err) {
        console.error("Newsletter API error:", err);
      }
    }
  };

  return (
    <>
      <footer id="contact" className="border-t border-white/10 bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand & Contact */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/20 border border-accent/40 text-accent-light font-bold text-base shadow-lg shadow-accent/20">
                  L
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  LOOMIS
                </span>
              </Link>

              <p className="text-xs text-white/50 leading-relaxed max-w-xs font-light">
                Production-grade AI systems architecture for high-growth enterprises. Eliminating manual operational bottlenecks and scaling revenue 10x.
              </p>

              <div className="flex flex-col gap-2 pt-2 text-xs">
                <a
                  href="mailto:vishalchepyala@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
                >
                  <Mail className="h-4 w-4 text-accent-light" />
                  vishalchepyala@gmail.com
                </a>
                <a
                  href="tel:+916305732069"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium"
                >
                  <Phone className="h-4 w-4 text-accent-light" />
                  +91 6305732069
                </a>
                <span className="flex items-center gap-2 text-white/60">
                  <MapPin className="h-4 w-4 text-accent-light" />
                  San Francisco, CA & Global
                </span>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Capabilities
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Company & Tech
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter & Live Status */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                AI Architecture Insights
              </h3>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                Subscribe for weekly deep-dives into autonomous LLM workflows and enterprise automation blueprints.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="exec@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-accent"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 bg-accent hover:bg-accent-light text-white px-3 rounded-lg text-xs font-semibold"
                    >
                      Join
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Subscribed! Insights incoming.
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => setIsStrategyModalOpen(true)}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-accent/30 bg-accent/10 hover:bg-accent/20 transition-all text-left group"
                >
                  <div>
                    <p className="text-xs font-bold text-white">Book Strategy Call</p>
                    <p className="text-[10px] text-white/50">Free 30-min architecture audit</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-accent-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Contact Details & Compliance */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 py-8">
            <div className="flex items-center gap-3 text-xs text-white/40 flex-wrap">
              <span className="flex items-center gap-1.5 font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Systems Operational (99.99%)
              </span>
              <span>&copy; {new Date().getFullYear()} LOOMIS AI. Contact: <a href="mailto:vishalchepyala@gmail.com" className="text-white/70 hover:underline">vishalchepyala@gmail.com</a> | <a href="tel:+916305732069" className="text-white/70 hover:underline">+91 6305732069</a></span>
            </div>

            <div className="flex items-center gap-6 text-xs text-white/40">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-light" /> SOC 2 Type II
              </span>
              <Link href="#" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white/70 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <StrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
      />
    </>
  );
}
