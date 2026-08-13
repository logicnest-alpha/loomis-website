"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { fadeUp } from "@/lib/animations";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for single-location cafes & bistro venues getting started with WhatsApp reviews.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    popular: false,
    badge: null,
    features: [
      "Up to 500 WhatsApp Follow-ups/mo",
      "Automatic 5-Star Google Review Redirect",
      "Basic Private Feedback Shield",
      "WhatsApp Business API Integration",
      "Single Outlet / Location",
      "Email & Chat Support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "Ideal for growing restaurants seeking automated customer retention & loyalty coupons.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    popular: true,
    badge: "MOST POPULAR",
    features: [
      "Up to 2,500 WhatsApp Follow-ups/mo",
      "Automatic Google Review Direct Link",
      "Dynamic Loyalty Coupon Engine",
      "Customer Segments & LTV Timeline",
      "WhatsApp Broadcast Campaign Builder",
      "Multi-Agent Shared Inbox (3 Seats)",
      "Priority 24/7 Support",
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "Designed for high-volume restaurants, cloud kitchens & multi-unit brands.",
    monthlyPrice: 199,
    yearlyPrice: 159,
    popular: false,
    badge: "HIGH VOLUME",
    features: [
      "Up to 10,000 WhatsApp Follow-ups/mo",
      "Everything in Growth Plan",
      "POS Integration (Toast, Square, Clover)",
      "Multi-Location Dashboard (Up to 5 locations)",
      "Advanced Automation Flow Builder",
      "Multi-Agent Shared Inbox (10 Seats)",
      "Dedicated Account Manager",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions for regional restaurant chains, franchises, and enterprise groups.",
    monthlyPrice: null,
    yearlyPrice: null,
    popular: false,
    badge: "CUSTOM CHAIN",
    features: [
      "Unlimited WhatsApp Messaging Volume",
      "Custom POS & ERP Integrations",
      "Unlimited Restaurant Outlets / Franchise Nodes",
      "Custom SLA & 99.99% Uptime Guarantee",
      "SAML SSO & Custom Security Controls",
      "Custom Staff Onboarding & Training",
      "24/7 VIP Phone Support",
    ],
  },
];

const featureComparison = [
  { feature: "WhatsApp Follow-up Volume", starter: "500/mo", growth: "2,500/mo", business: "10,000/mo", enterprise: "Custom Unlimited" },
  { feature: "Google 5-Star Review Redirect", starter: "✓", growth: "✓", business: "✓", enterprise: "✓" },
  { feature: "Private Feedback Interceptor Shield", starter: "Basic", growth: "Advanced", business: "Advanced", enterprise: "Custom Rules" },
  { feature: "Dynamic Coupon & Discount Engine", starter: "—", growth: "✓", business: "✓", enterprise: "✓" },
  { feature: "WhatsApp Broadcast Campaigns", starter: "—", growth: "✓", business: "✓", enterprise: "✓" },
  { feature: "Multi-Agent WhatsApp Shared Inbox", starter: "1 Seat", growth: "3 Seats", business: "10 Seats", enterprise: "Unlimited Seats" },
  { feature: "POS System Integration", starter: "—", growth: "Add-on", business: "Included", enterprise: "Custom API" },
  { feature: "Multi-Location Support", starter: "1 Location", growth: "1 Location", business: "Up to 5 Outlets", enterprise: "Unlimited Outlets" },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section id="pricing" className="relative section-padding overflow-hidden bg-background">
        {/* Background Mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-emerald-500/10 rounded-full blur-[220px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Transparent Pricing Plans
            </motion.div>

            <motion.h2
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
            >
              Predictable Pricing for <span className="gradient-text-whatsapp">Every Restaurant Size</span>
            </motion.h2>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
            >
              No hidden fees. Cancel anytime. Start with a 14-day free trial on any plan.
            </motion.p>
          </div>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-xs font-bold ${billingCycle === "monthly" ? "text-white" : "text-white/50"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-8 rounded-full bg-white/10 p-1 transition-colors"
            >
              <div
                className={`w-6 h-6 rounded-full bg-emerald-400 transition-transform ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${billingCycle === "yearly" ? "text-white" : "text-white/50"}`}>
              Annual Billing
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                SAVE 20%
              </span>
            </span>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {pricingPlans.map((plan, idx) => {
              const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <motion.div
                  key={plan.name}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-between transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-b from-emerald-950/60 via-emerald-900/20 to-background border-2 border-emerald-500 shadow-[0_20px_60px_rgba(16,185,129,0.25)] scale-[1.03]"
                      : "bg-white/[0.025] border border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-[10px] font-mono font-black text-white tracking-wider shadow-md">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-white/60 font-light mt-1.5 min-h-[36px]">
                      {plan.description}
                    </p>

                    <div className="my-6">
                      {price !== null ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-black text-white font-mono">${price}</span>
                          <span className="text-xs text-white/50 font-medium">/ month</span>
                        </div>
                      ) : (
                        <div className="text-3xl font-extrabold text-white font-mono">Custom</div>
                      )}
                      {billingCycle === "yearly" && price !== null && (
                        <p className="text-[10px] text-emerald-400 mt-1 font-mono">Billed annually</p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-white/80">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => setIsDemoModalOpen(true)}
                    className={`w-full h-12 rounded-2xl font-bold text-xs gap-2 ${
                      plan.popular
                        ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {price === null ? "Contact Enterprise Sales" : "Start 14-Day Free Trial"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Feature Comparison Matrix */}
          <div className="mt-20 p-8 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Comprehensive Plan Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-white/50 uppercase font-mono text-[10px]">
                    <th className="pb-4">Feature</th>
                    <th className="pb-4">Starter</th>
                    <th className="pb-4 text-emerald-400 font-bold">Growth (Popular)</th>
                    <th className="pb-4">Business</th>
                    <th className="pb-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {featureComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 font-semibold text-white">{row.feature}</td>
                      <td className="py-3.5 text-white/70">{row.starter}</td>
                      <td className="py-3.5 text-emerald-300 font-bold">{row.growth}</td>
                      <td className="py-3.5 text-white/70">{row.business}</td>
                      <td className="py-3.5 text-white/70">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Booking Modal */}
      <StrategyModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
