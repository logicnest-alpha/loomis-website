"use client";

import { motion } from "framer-motion";
import { Star, Quote, Award, CheckCircle2 } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Loomis Reviews jumped our Google Maps rating from 4.1 to 4.9 stars within 30 days. We went from getting 5 reviews a month to over 120 verified 5-star reviews!",
    name: "Marco Rossi",
    role: "Owner & General Manager",
    restaurant: "Bella Italia Bistro (Austin, TX)",
    avatar: "👨‍🍳",
    rating: 5,
    highlight: "+115 5-Star Reviews in 30 Days",
  },
  {
    quote:
      "The WhatsApp loyalty coupon engine is insane. Over 40% of customers redeem their 15% discount coupon within 10 days. It practically doubled our repeat diner frequency.",
    name: "Samantha Lin",
    role: "Co-Founder",
    restaurant: "Matcha & Co. Cafe (4 Outlets)",
    avatar: "🍵",
    rating: 5,
    highlight: "42% Coupon Redemption Rate",
  },
  {
    quote:
      "Private feedback shielding saved our reputation. When a customer was unhappy about a delayed steak, the system caught it privately so we could fix it before they posted on Google.",
    name: "Chef David Vance",
    role: "Head Chef & Operator",
    restaurant: "Prime Steak & Lounge (Chicago, IL)",
    avatar: "🥩",
    rating: 5,
    highlight: "Zero Negative Google Reviews",
  },
  {
    quote:
      "Setup took literally 5 minutes. No staff training required. When bills are settled, WhatsApp messages fire off automatically. Best ROI software we bought this year.",
    name: "Anish Patel",
    role: "Franchise Owner",
    restaurant: "Curry Crave Kitchens (6 Locations)",
    avatar: "🥘",
    rating: 5,
    highlight: "5-Minute Zero Tech Setup",
  },
  {
    quote:
      "Our delivery customers used to be completely invisible to us. Now, Loomis captures phone numbers automatically and turns cloud kitchen orders into loyal repeat buyers.",
    name: "Elena Rostova",
    role: "Operations Director",
    restaurant: "Bao & Noodle Cloud Hub (Seattle, WA)",
    avatar: "🥟",
    rating: 5,
    highlight: "+68% Cloud Kitchen Repeat LTV",
  },
  {
    quote:
      "We've tried SMS apps and email newsletters before—nobody opened them. WhatsApp messages get opened in seconds. Loomis is a must-have for every restaurant.",
    name: "James Henderson",
    role: "Managing Director",
    restaurant: "The Craft Burger Bar (Denver, CO)",
    avatar: "🍔",
    rating: 5,
    highlight: "98% WhatsApp Open Rate",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative section-padding overflow-hidden bg-background">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-emerald-500/10 rounded-full blur-[220px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4"
          >
            <Award className="h-3.5 w-3.5" />
            Loved by 500+ Restaurant Owners
          </motion.div>

          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Trusted by Top Restaurants, Cafes & <span className="gradient-text-whatsapp">Chains</span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            See how restaurant operators use Loomis Reviews to automate 5-star Google reviews and drive repeat customer visits.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-white/[0.025] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header Rating & Highlight */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-sm">
                    {"★".repeat(t.rating)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {t.highlight}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-xl shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    {t.name} <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-[11px] text-emerald-400 font-medium">{t.role}</p>
                  <p className="text-[10px] text-white/40">{t.restaurant}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
