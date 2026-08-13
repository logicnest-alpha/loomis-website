"use client";

import { motion } from "framer-motion";
import {
  Clock,
  MessageCircle,
  Wand2,
  LayoutDashboard,
  Cpu,
  BadgeDollarSign,
  Heart,
  Check,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const loveCards = [
  {
    icon: Clock,
    title: "5-Minute Easy Setup",
    description:
      "No complex software installations or POS code changes. Connect your WhatsApp business account and start collecting 5-star reviews today.",
    tag: "Plug & Play",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp First Engine",
    description:
      "Your customers already use WhatsApp every day. Zero app downloads required—diners respond instantly in their favorite chat app.",
    tag: "98% Reach",
  },
  {
    icon: Wand2,
    title: "No Technical Knowledge Needed",
    description:
      "Designed for busy restaurant managers, floor staff, and kitchen operators. If you know how to use WhatsApp, you can use Loomis.",
    tag: "Zero Tech Friction",
  },
  {
    icon: LayoutDashboard,
    title: "Simple & Clean Dashboard",
    description:
      "Clutter-free reporting. See review velocity, customer ratings, coupon redemptions, and staff performance at a single glance.",
    tag: "Clear Insights",
  },
  {
    icon: Cpu,
    title: "Runs 100% Automatically",
    description:
      "Set up your follow-up timers once. Loomis triggers messages, collects reviews, and delivers coupons automatically 24/7/365.",
    tag: "Hands-Free",
  },
  {
    icon: BadgeDollarSign,
    title: "100% ROI Focused",
    description:
      "We track exact dollar metrics: every coupon redeemed at POS and every Google review generated is linked directly to your bottom line.",
    tag: "High LTV Lift",
  },
];

export function WhyLoomis() {
  return (
    <section id="about" className="relative section-padding overflow-hidden bg-background">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-rose-400 mb-4"
          >
            <Heart className="h-3.5 w-3.5 fill-current" />
            Built Specifically for Hospitality
          </motion.div>

          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Why Restaurant Owners <span className="gradient-text">Love Loomis Reviews</span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            Built from the ground up to solve real restaurant pain points without adding operational overhead for your staff.
          </motion.p>
        </div>

        {/* 6 Love Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative p-7 rounded-3xl bg-white/[0.025] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-xs md:text-sm text-white/60 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <Check className="h-4 w-4" /> Guaranteed Ease of Use
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
