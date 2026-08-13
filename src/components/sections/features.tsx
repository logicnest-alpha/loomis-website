"use client";

import { motion } from "framer-motion";
import {
  Star,
  MessageCircle,
  Ticket,
  Clock,
  BarChart2,
  Send,
  Zap,
  Users,
  Inbox,
  MessageSquareHeart,
  Award,
  LineChart,
  CheckCircle2,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const features = [
  {
    icon: Star,
    title: "Review Automation",
    description:
      "Automatically detect happy customers and direct them straight to your Google Maps review page with a single tap.",
    tag: "Google Reviews",
    badgeColor: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description:
      "Send 98% open-rate WhatsApp messages with high deliverability using Official Meta WhatsApp Business APIs.",
    tag: "98% Open Rate",
    badgeColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
  {
    icon: Ticket,
    title: "Coupon Engine",
    description:
      "Generate dynamic single-use discount coupons for WhatsApp that prevent fraud and track POS redemptions.",
    tag: "Redemption ROI",
    badgeColor: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  },
  {
    icon: Clock,
    title: "Customer Timeline",
    description:
      "View a complete history of every diner's visit dates, ratings left, coupons claimed, and total lifetime spend.",
    tag: "360° Profile",
    badgeColor: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description:
      "Real-time visual metrics tracking review velocity, Google rating progress, coupon ROI, and campaign metrics.",
    tag: "Live Data",
    badgeColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
  {
    icon: Send,
    title: "Campaign Builder",
    description:
      "Broadcast festive offers, weekend specials, or new menu item launches to specific customer segments in minutes.",
    tag: "Promotions",
    badgeColor: "bg-pink-500/10 border-pink-500/20 text-pink-400",
  },
  {
    icon: Zap,
    title: "Automation Builder",
    description:
      "Drag-and-drop flow trigger builder for customized follow-up intervals, delay timers, and smart conditional branches.",
    tag: "Custom Logic",
    badgeColor: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  },
  {
    icon: Users,
    title: "Customer Segments",
    description:
      "Automatically group diners by visit frequency: VIP Loyalists, At-Risk Diners, First-Timers, or High Spenders.",
    tag: "Smart Targeting",
    badgeColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  },
  {
    icon: Inbox,
    title: "Human Inbox",
    description:
      "Unified shared multi-agent inbox for staff to instantly reply to customer questions or reservation inquiries.",
    tag: "Staff Inbox",
    badgeColor: "bg-teal-500/10 border-teal-500/20 text-teal-400",
  },
  {
    icon: MessageSquareHeart,
    title: "Private Feedback Shield",
    description:
      "Interceptor channels catch negative experiences privately before they end up as 1-star public Google reviews.",
    tag: "Reputation Shield",
    badgeColor: "bg-rose-500/10 border-rose-500/20 text-rose-400",
  },
  {
    icon: Award,
    title: "Loyalty Program",
    description:
      "Reward repeat visits effortlessly without card stamping or app downloads right inside WhatsApp.",
    tag: "Frictionless",
    badgeColor: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  },
  {
    icon: LineChart,
    title: "Business Insights",
    description:
      "Deep actionable recommendations pinpointing peak review days, staff service scores, and menu customer favorites.",
    tag: "AI Recommendations",
    badgeColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
];

export function Features() {
  return (
    <section id="features" className="relative section-padding overflow-hidden bg-background">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-xs font-bold text-accent-light mb-4"
          >
            <Zap className="h-3.5 w-3.5" />
            Complete Feature Ecosystem
          </motion.div>

          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Everything Your Restaurant Needs to{" "}
            <span className="gradient-text">Dominate Local Reviews</span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            Built specifically for restaurant operators, cafe owners, and hospitality chains. Zero technical skills required.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative p-7 rounded-3xl bg-white/[0.025] border border-white/10 hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-accent/50 transition-all">
                      <Icon className="h-6 w-6 text-accent-light" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${feature.badgeColor}`}>
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-xs md:text-sm text-white/60 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-medium text-white/40 group-hover:text-white/70 transition-colors">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Production Ready Feature</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
