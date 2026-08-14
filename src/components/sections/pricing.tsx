"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Lock,
  RefreshCw,
  Award,
  ChevronDown,
  Building2,
  Users,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { fadeUp } from "@/lib/animations";

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small restaurants getting started with automated WhatsApp reviews & customer database.",
    monthlyPrice: "₹2,999",
    yearlyPrice: "₹2,399",
    rawMonthly: 2999,
    popular: false,
    badge: null,
    features: [
      "Up to 500 Customers",
      "WhatsApp Review Requests",
      "Google Review Automation",
      "Customer Database",
      "Coupon System",
      "Dashboard",
      "Analytics",
      "Email Support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "Everything in Starter, plus advanced retention, customer segmentation, and campaign builder.",
    monthlyPrice: "₹5,999",
    yearlyPrice: "₹4,799",
    rawMonthly: 5999,
    popular: true,
    badge: "MOST POPULAR",
    features: [
      "Everything in Starter",
      "Unlimited Customers",
      "Advanced Automation",
      "Campaign Builder",
      "Loyalty Engine",
      "Customer Segments",
      "Analytics Pro",
      "Priority Support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Tailored infrastructure for multi-outlet chains, franchises, and high-volume dining groups.",
    monthlyPrice: "Custom Pricing",
    yearlyPrice: "Custom Pricing",
    rawMonthly: null,
    popular: false,
    badge: "CUSTOM CHAIN",
    features: [
      "Unlimited Locations",
      "Unlimited Staff",
      "API Access",
      "White Label",
      "Dedicated Success Manager",
      "Priority Support",
      "Custom Integrations",
    ],
  },
];

const COMPARISON_MATRIX = [
  { category: "Core Automation", feature: "Google Review Automation", starter: "✔", growth: "✔", enterprise: "✔" },
  { category: "Core Automation", feature: "WhatsApp Review Requests", starter: "✔", growth: "✔", enterprise: "✔" },
  { category: "Core Automation", feature: "Private Interceptor Shield", starter: "✔", growth: "✔ Advanced", enterprise: "✔ Custom Rules" },
  { category: "Capacity & Scale", feature: "Customer Database Limit", starter: "Up to 500", growth: "Unlimited", enterprise: "Unlimited" },
  { category: "Capacity & Scale", feature: "Restaurant Outlets / Locations", starter: "1 Location", growth: "1 Location", enterprise: "Unlimited Locations" },
  { category: "Capacity & Scale", feature: "Staff / Team Seats", starter: "1 Seat", growth: "5 Seats", enterprise: "Unlimited Staff" },
  { category: "Loyalty & Marketing", feature: "Coupon & Discount Engine", starter: "✔ Standard", growth: "✔ Dynamic", enterprise: "✔ Custom Rules" },
  { category: "Loyalty & Marketing", feature: "WhatsApp Campaign Builder", starter: "—", growth: "✔ Unlimited", enterprise: "✔ Unlimited" },
  { category: "Loyalty & Marketing", feature: "RFM Customer Segments", starter: "—", growth: "✔ Advanced", enterprise: "✔ Custom AI Segments" },
  { category: "Analytics & Insights", feature: "Dashboard & Reporting", starter: "Standard", growth: "Analytics Pro", enterprise: "Custom Reports" },
  { category: "Enterprise & API", feature: "White Label Branding", starter: "—", growth: "—", enterprise: "✔ Complete" },
  { category: "Enterprise & API", feature: "REST & Webhook API Access", starter: "—", growth: "—", enterprise: "✔ Full Access" },
  { category: "Enterprise & API", feature: "POS System Integration", starter: "—", growth: "Add-on", enterprise: "✔ Custom Integrations" },
  { category: "Support & Success", feature: "Support Tier", starter: "Email Support", growth: "Priority Support", enterprise: "Dedicated Success Mgr" },
];

const PRICING_FAQS = [
  {
    q: "How does the 14-day free trial work?",
    a: "You get full access to all Growth plan features for 14 days. No credit card is required to sign up. You can connect your Google Business Profile and test WhatsApp review collection with real guests immediately.",
  },
  {
    q: "Are there any setup fees or hidden charges?",
    a: "Zero setup fees! The prices listed above (₹2,999/mo for Starter, ₹5,999/mo for Growth) cover your entire core software subscription. WhatsApp message utility costs are charged transparently at Meta's official base rates.",
  },
  {
    q: "Can I upgrade or downgrade my plan later?",
    a: "Yes! You can upgrade from Starter to Growth or Enterprise anytime from your dashboard. Plan upgrades take effect instantly, and downgrades apply smoothly at the start of your next billing cycle.",
  },
  {
    q: "What POS systems does Loomis Reviews integrate with?",
    a: "Loomis Reviews integrates out of the box with Petpooja, UrbanPiper, Toast, Clover, Square, Posist, and custom webhook solutions for Enterprise plans.",
  },
  {
    q: "What is your 30-day Money Back Guarantee?",
    a: "If Loomis Reviews does not increase your 5-star Google Reviews or customer repeat visits within your first 30 days of paid subscription, simply email support@loomisreviews.com for a 100% full refund.",
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section id="pricing" className="relative section-padding overflow-hidden bg-background">
        {/* Specular Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-emerald-500/10 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[400px] bg-accent/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4 tracking-wide"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Transparent Pricing Plans
            </motion.div>

            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Simple Pricing for <span className="gradient-text-whatsapp">Every Restaurant</span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto"
            >
              Everything you need to automate customer reviews, loyalty and repeat business.
            </motion.p>

            {/* Action Buttons in Hero */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Button
                onClick={() => setIsDemoModalOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm h-13 px-8 rounded-2xl shadow-xl shadow-emerald-500/25 group/btn"
              >
                <Sparkles className="h-4 w-4 text-emerald-200" />
                Book Demo
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
              </Button>
              <Button
                onClick={() => setIsDemoModalOpen(true)}
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-sm h-13 px-8 rounded-2xl backdrop-blur-md"
              >
                Start Free Trial
              </Button>
            </motion.div>
          </div>

          {/* Monthly / Annual Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-xs sm:text-sm font-semibold transition-colors ${billingCycle === "monthly" ? "text-white" : "text-white/50"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              aria-label="Toggle Billing Cycle"
              className="relative w-16 h-9 rounded-full bg-white/10 p-1 transition-colors border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-7 h-7 rounded-full bg-emerald-400 shadow-md ${
                  billingCycle === "yearly" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs sm:text-sm font-semibold flex items-center gap-2 ${billingCycle === "yearly" ? "text-white" : "text-white/50"}`}>
              Annual Billing
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                SAVE 20%
              </span>
            </span>
          </div>

          {/* Pricing Grid (3 Cards: Starter, Growth, Enterprise) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
            {PRICING_PLANS.map((plan, idx) => {
              const displayPrice = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <motion.div
                  key={plan.id}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative p-8 sm:p-10 rounded-3xl backdrop-blur-2xl flex flex-col justify-between transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-b from-emerald-950/70 via-emerald-900/30 to-background border-2 border-emerald-500 shadow-[0_24px_80px_rgba(16,185,129,0.3)] lg:-translate-y-3 z-20"
                      : "bg-white/[0.03] border border-white/10 hover:border-white/20 z-10"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-[11px] font-mono font-black text-white tracking-wider shadow-lg shadow-emerald-500/30 uppercase">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    {/* Header Info */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                      {plan.id === "enterprise" ? (
                        <Building2 className="h-6 w-6 text-white/50" />
                      ) : plan.popular ? (
                        <Zap className="h-6 w-6 text-emerald-400 fill-emerald-400/20" />
                      ) : (
                        <BadgeCheck className="h-6 w-6 text-white/40" />
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-white/60 font-light mt-2 min-h-[42px] leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Price Tag */}
                    <div className="my-8 py-4 border-y border-white/10">
                      {plan.rawMonthly !== null ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                            {displayPrice}
                          </span>
                          <span className="text-sm text-white/50 font-medium">/month</span>
                        </div>
                      ) : (
                        <div className="text-4xl font-extrabold text-white font-mono tracking-tight">
                          Custom Pricing
                        </div>
                      )}
                      {billingCycle === "yearly" && plan.rawMonthly !== null && (
                        <p className="text-xs text-emerald-400 mt-1 font-mono font-semibold">
                          Billed annually (save 20%)
                        </p>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="mb-8">
                      <p className="text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-4">
                        {plan.id === "growth" ? "Everything in Starter +" : "Included Features"}
                      </p>
                      <ul className="space-y-3.5">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-white/85 leading-snug">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Plan CTA */}
                  <Button
                    onClick={() => setIsDemoModalOpen(true)}
                    className={`w-full h-13 rounded-2xl font-bold text-sm gap-2 transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    }`}
                  >
                    {plan.rawMonthly === null ? "Book Enterprise Demo" : "Start Free Trial"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* Feature Comparison Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 p-6 sm:p-10 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-2xl"
          >
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Feature Comparison Table
              </h3>
              <p className="text-sm text-white/60 font-light mt-2">
                Detailed capabilities across Starter, Growth, and Enterprise plans.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 text-white/60 uppercase font-mono text-[11px]">
                    <th className="pb-4 font-bold">Feature Breakdown</th>
                    <th className="pb-4 font-bold">Starter (₹2,999)</th>
                    <th className="pb-4 font-bold text-emerald-400">Growth (₹5,999)</th>
                    <th className="pb-4 font-bold">Enterprise (Custom)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {COMPARISON_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 font-medium text-white/90 pr-4">
                        {row.feature}
                        <span className="block text-[10px] text-white/40 font-mono mt-0.5">
                          {row.category}
                        </span>
                      </td>
                      <td className="py-4 text-white/70">{row.starter}</td>
                      <td className="py-4 text-emerald-300 font-bold">{row.growth}</td>
                      <td className="py-4 text-white/80">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Money Back Guarantee & Security Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-white/[0.02] to-background border border-emerald-500/30 backdrop-blur-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors">
                <Award className="h-28 w-28" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-4">
                  <ShieldCheck className="h-4 w-4" /> 100% Risk Free Guarantee
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  30-Day Money Back Guarantee
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  We are so confident that Loomis Reviews will skyrocket your 5-star Google reviews and bring repeat diners back to your tables that we offer a 30-day money-back guarantee. If you are not delighted with your results, receive a 100% refund—no hassle, no questions asked.
                </p>
              </div>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-accent/20 via-white/[0.02] to-background border border-accent/30 backdrop-blur-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 text-accent/10 group-hover:text-accent/20 transition-colors">
                <Lock className="h-28 w-28" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs font-bold text-accent-light mb-4">
                  <Lock className="h-4 w-4" /> Enterprise Security
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Bank-Grade Security & Official Meta API
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  Your restaurant data is strictly yours. We use official Meta Cloud APIs for WhatsApp messaging, 256-bit SSL encryption, SOC2-ready infrastructure, and zero data selling. Your customer lists remain 100% private and protected.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Pricing FAQ Accordions */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Frequently Asked Questions
              </h3>
              <p className="text-sm text-white/60 font-light mt-2">
                Have questions about pricing, setup, or features? We're here to help.
              </p>
            </div>

            <div className="space-y-4">
              {PRICING_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors hover:border-white/20"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="text-base font-semibold text-white">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-emerald-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-sm text-white/70 font-light leading-relaxed border-t border-white/5 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-emerald-900/40 to-black border border-emerald-500/40 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Automate Your Restaurant Reviews?
              </h3>
              <p className="mt-3 text-base text-white/70 font-light">
                Join hundreds of successful restaurants boosting their Google ratings and repeat customers today.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  onClick={() => setIsDemoModalOpen(true)}
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm h-13 px-8 rounded-2xl shadow-lg shadow-emerald-500/30 gap-2"
                >
                  Book Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setIsDemoModalOpen(true)}
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-sm h-13 px-8 rounded-2xl"
                >
                  Start 14-Day Free Trial
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Scheduler Modal */}
      <StrategyModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
