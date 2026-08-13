"use client";

import { motion } from "framer-motion";
import {
  Store,
  MessageCircle,
  Star,
  Award,
  Gift,
  Repeat,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const steps = [
  {
    stepNumber: "Step 01",
    title: "Customer Visits",
    subtitle: "Dine-in, Takeaway or Delivery",
    description:
      "A guest dines at your restaurant, orders online, or checks out at your point of sale counter.",
    icon: Store,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
  },
  {
    stepNumber: "Step 02",
    title: "Automatic WhatsApp",
    subtitle: "Smart Delay Timer",
    description:
      "Loomis Reviews triggers a friendly, personalized WhatsApp message 60 minutes after the meal.",
    icon: MessageCircle,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
  {
    stepNumber: "Step 03",
    title: "Collect Rating",
    subtitle: "In-App 1 to 5 Star Rating",
    description:
      "The customer rates their experience with a single tap inside WhatsApp without filling long forms.",
    icon: Star,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
  },
  {
    stepNumber: "Step 04",
    title: "Google Review",
    subtitle: "1-Tap Direct Redirect",
    description:
      "Happy guests (4-5 stars) get redirected straight to your Google Maps review page to leave a public rating.",
    icon: Award,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
  },
  {
    stepNumber: "Step 05",
    title: "Reward Customer",
    subtitle: "Automated Coupon Delivery",
    description:
      "WhatsApp immediately sends a digital coupon (e.g. 15% off or free drink) as a thank-you reward.",
    icon: Gift,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
  },
  {
    stepNumber: "Step 06",
    title: "Customer Returns",
    subtitle: "Repeat Visit & POS Redemption",
    description:
      "The customer returns within 14 days to redeem their offer—turning a one-time guest into a loyal regular.",
    icon: Repeat,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative section-padding overflow-hidden bg-background">
      {/* Mesh Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[220px] pointer-events-none" />

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
            Simple 6-Step Engine
          </motion.div>

          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            How Loomis Reviews Works in <span className="gradient-text-whatsapp">6 Simple Steps</span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            Set it up once in 5 minutes. Loomis Reviews runs automatically 24/7 in the background while you focus on serving great food.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative p-8 rounded-3xl bg-white/[0.025] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {s.stepNumber}
                    </span>
                    <div className={`h-12 w-12 rounded-2xl ${s.bg} ${s.border} border flex items-center justify-center ${s.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-400 mt-1">
                    {s.subtitle}
                  </p>

                  <p className="mt-3 text-xs md:text-sm text-white/60 font-light leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/40 group-hover:text-emerald-300 transition-colors">
                  <span>Automated Step</span>
                  <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
