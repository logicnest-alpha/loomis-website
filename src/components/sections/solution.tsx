"use client";

import { motion } from "framer-motion";
import {
  Store,
  MessageSquare,
  Star,
  ThumbsUp,
  Award,
  Ticket,
  UserCheck,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const workflowSteps = [
  {
    step: "01",
    icon: Store,
    title: "Customer Visits",
    subtitle: "Dine-in or Takeaway",
    description: "Customer dines at your venue or scans a QR code / POS checkouts.",
    tag: "Touchpoint",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Automatic WhatsApp",
    subtitle: "Sent 60 Mins Later",
    description: "Personalized WhatsApp message asks: 'How was your meal today at La Trattoria?'",
    tag: "Automation",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    step: "03",
    icon: Star,
    title: "Customer Rating",
    subtitle: "1 to 5 Star Rating",
    description: "Customer clicks 1 to 5 stars inside WhatsApp in seconds.",
    tag: "Feedback",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    step: "04",
    icon: ThumbsUp,
    title: "Smart Routing",
    subtitle: "Positive vs Negative",
    description: "4 & 5 star ratings get routed to Google Maps. 1 to 3 star feedback stays private.",
    tag: "Shielding",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    step: "05",
    icon: Award,
    title: "Google Review Boost",
    subtitle: "1-Click Direct Link",
    description: "Happy guest posts review on your Google Business profile.",
    tag: "SEO Growth",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    step: "06",
    icon: Ticket,
    title: "Coupon Reward",
    subtitle: "Instant Loyalty Perk",
    description: "WhatsApp automatically sends a digital 15% discount coupon for next visit.",
    tag: "Incentive",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    step: "07",
    icon: UserCheck,
    title: "Repeat Visit",
    subtitle: "Customer Returns",
    description: "Guest redeems coupon at your cashier counter within 14 days.",
    tag: "LTV Lift",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    step: "08",
    icon: BarChart3,
    title: "Analytics Dashboard",
    subtitle: "Full ROI Tracking",
    description: "Track review growth, redemption revenue, and customer CSAT in real-time.",
    tag: "Business ROI",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
];

export function Solution() {
  return (
    <section id="solution" className="relative section-padding overflow-hidden bg-background">
      {/* Background Mesh */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            The Automated Loomis Engine
          </motion.div>

          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            From Customer Visit to 5-Star Review &{" "}
            <span className="gradient-text-whatsapp">Repeat Loyalty</span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            Loomis Reviews automates the entire post-visit journey on WhatsApp so you never miss a review opportunity or lose a returning customer.
          </motion.p>
        </div>

        {/* Interactive Workflow Visual Loop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative p-6 rounded-3xl bg-white/[0.025] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-emerald-950/30 flex flex-col justify-between"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-white/20 group-hover:text-emerald-400 transition-colors">
                    {step.step}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${step.bg} ${step.border} ${step.color}`}>
                    {step.tag}
                  </span>
                </div>

                <div>
                  <div className={`h-12 w-12 rounded-2xl ${step.bg} ${step.border} border flex items-center justify-center ${step.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-400/90 mt-0.5">
                    {step.subtitle}
                  </p>

                  <p className="mt-2.5 text-xs text-white/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector Indicator for desktop */}
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Automated
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
