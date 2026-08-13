"use client";

import { motion } from "framer-motion";
import {
  StarOff,
  UserX,
  Repeat,
  Gift,
  AlertTriangle,
  Send,
  ArrowDownRight,
  TrendingDown,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const painPoints = [
  {
    icon: StarOff,
    title: "Low Google Reviews & Rating",
    description:
      "92% of happy diners leave without writing a Google review. Only angry customers go out of their way to complain online, pulling down your average star rating.",
    stat: "92% silent happy diners",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: UserX,
    title: "Zero Customer Follow-Up",
    description:
      "Once a customer pays their bill and leaves the door, you have zero contact info or automated way to re-engage them or ask about their dining experience.",
    stat: "100% missed contacts",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Repeat,
    title: "Customers Never Return",
    description:
      "Without timely incentives or friendly follow-ups, first-time guests forget your brand and choose competitors or food delivery apps for their next meal.",
    stat: "70% one-time visitors",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Gift,
    title: "No Automated Loyalty Program",
    description:
      "Paper punch cards get lost in wallets, and complex app downloads frustrate customers. You lack a frictionless digital reward system guests actually use.",
    stat: "85% abandoned paper cards",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: AlertTriangle,
    title: "Negative Public Reviews Hurt Revenue",
    description:
      "A single bad review on Google or TripAdvisor stays forever. Unhappy customers post publicly because they lack a private channel to share immediate feedback.",
    stat: "1 star drop = -9% revenue",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  {
    icon: Send,
    title: "Exhausting Manual Messaging",
    description:
      "Staff don't have time to text customers individually, track SMS compliance, or manage manual WhatsApp chats during peak lunch and dinner rushes.",
    stat: "20+ hours wasted weekly",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative section-padding overflow-hidden bg-background">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-rose-400 mb-4"
          >
            <TrendingDown className="h-3.5 w-3.5" />
            The Restaurant Growth Barrier
          </motion.div>

          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Why 80% of Happy Restaurant Guests{" "}
            <span className="text-rose-400 underline decoration-rose-500/40 decoration-wavy">
              Never Come Back
            </span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            Great food and atmosphere aren't enough anymore. Without automated follow-ups, restaurants bleed repeat revenue every single day.
          </motion.p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-rose-500/30 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-rose-950/20 flex flex-col justify-between"
              >
                {/* Top Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-tr-3xl blur-2xl group-hover:bg-rose-500/15 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`h-12 w-12 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center ${item.color}`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-full border border-rose-500/20">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-rose-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs md:text-sm text-white/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-white/40 group-hover:text-rose-300/80 transition-colors">
                  <ArrowDownRight className="h-3.5 w-3.5 text-rose-400" />
                  <span>Impact: Decreased LTV & Lost Foot Traffic</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
