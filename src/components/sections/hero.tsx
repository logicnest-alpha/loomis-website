"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Star,
  MessageCircle,
  TrendingUp,
  Award,
  Users,
  Gift,
  CheckCircle2,
  X,
  ExternalLink,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { fadeUp } from "@/lib/animations";

const heroStats = [
  { value: 4.9, suffix: "★", label: "Average Google Rating Lift" },
  { value: 3.8, suffix: "x", label: "More 5-Star Reviews" },
  { value: 84, suffix: "%", label: "Coupon Redemption Rate" },
  { value: 2.4, suffix: "M+", label: "WhatsApp Follow-ups Sent" },
];

const mockNotifications = [
  {
    name: "La Trattoria Bistro",
    time: "2 mins ago",
    action: "New 5-Star Google Review",
    rating: 5,
    text: "“Best pasta in town! Service was super fast and friendly.”",
    avatar: "🍝",
  },
  {
    name: "Burger & Co. Lounge",
    time: "5 mins ago",
    action: "Coupon Redeemed",
    reward: "Free Dessert on Next Visit",
    text: "Customer returned after 6 days via WhatsApp reminder!",
    avatar: "🍔",
  },
  {
    name: "Matcha & Co. Cafe",
    time: " Just now",
    action: "WhatsApp Feedback Collected",
    rating: 5,
    text: "“Loved the iced matcha oat latte! Will definitely return.”",
    avatar: "🍵",
  },
];

export function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100vh] flex flex-col items-center overflow-hidden pt-32 md:pt-40 pb-24 noise">
        {/* Ambient Glowing Orbs Background */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />

        {/* Floating Light Orbs */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-emerald-500/20 via-accent/15 to-cyan-500/10 rounded-full blur-[200px] opacity-75 pointer-events-none animate-pulse-slow" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[180px] opacity-50 pointer-events-none animate-float-slow" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[180px] opacity-40 pointer-events-none animate-float-slow" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-7xl mx-auto">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8 shimmer-border rounded-full"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] backdrop-blur-xl px-5 py-2.5 text-xs font-semibold text-white/90 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="tracking-wide">
                The #1 Customer Retention Platform for Restaurants & Hospitality
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.04em] text-white leading-[1.05] max-w-5xl drop-shadow-[0_15px_45px_rgba(0,0,0,0.9)]"
          >
            Every Happy Customer Deserves to Become Your Next{" "}
            <span className="gradient-text-amber drop-shadow-[0_10px_35px_rgba(245,158,11,0.35)]">
              5-Star Review.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-lg sm:text-xl md:text-2xl text-white/65 max-w-3xl leading-relaxed font-light"
          >
            Automatically follow up with customers on WhatsApp, collect feedback, increase Google reviews, reward loyalty, and bring customers back—all from one platform.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-col sm:flex-row items-center gap-4 flex-wrap justify-center"
          >
            <Button
              onClick={() => setIsDemoModalOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-base h-14 px-8 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.4)] group/btn"
            >
              <Sparkles className="h-5 w-5 text-emerald-200" />
              Book Demo
              <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1.5" />
            </Button>

            <Button
              onClick={() => setIsDemoModalOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent-light text-white font-bold text-base h-14 px-8 rounded-2xl shadow-[0_0_35px_rgba(124,58,237,0.4)]"
            >
              <Zap className="h-5 w-5 text-purple-200" />
              Start Free Trial
            </Button>

            <Button
              onClick={() => setIsVideoOpen(true)}
              variant="outline"
              size="lg"
              className="h-14 px-7 text-base font-semibold border-white/20 bg-white/[0.04] hover:bg-white/[0.1] text-white rounded-2xl backdrop-blur-xl"
            >
              <Play className="h-4 w-4 fill-emerald-400 text-emerald-400" />
              Watch Demo (2 mins)
            </Button>
          </motion.div>

          {/* Social Proof Pills */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex items-center justify-center gap-6 text-xs text-white/50 font-medium"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 5-minute easy setup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> WhatsApp Official API
            </span>
          </motion.div>

          {/* Stats Banner */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-5xl p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-black tracking-tight text-white font-mono drop-shadow-md">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-xs text-white/50 font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Animated Dashboard Mockup Showcase */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 mt-16 perspective-container">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 6 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-background backdrop-blur-2xl p-4 md:p-8 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.95),0_0_80px_rgba(16,185,129,0.15)]"
          >
            {/* Specular Edge Accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent" />

            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 px-2">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-white/40 hidden sm:inline">
                  app.loomisreviews.com/dashboard/analytics
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Live WhatsApp Bot Syncing
                </span>
              </div>
            </div>

            {/* Dashboard UI Frame */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Sidebar Mock */}
              <div className="lg:col-span-3 space-y-3 hidden lg:block border-r border-white/10 pr-4">
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-white font-bold text-xs flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-emerald-400" /> Dashboard
                  </span>
                  <span className="text-[10px] bg-emerald-500 text-black px-1.5 py-0.5 rounded font-mono">Live</span>
                </div>
                {["Customers Timeline", "Campaign Builder", "Google Reviews", "Coupon Engine", "WhatsApp Inbox", "Analytics"].map((item, idx) => (
                  <div
                    key={item}
                    className={`p-3 rounded-xl text-xs font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between cursor-pointer ${
                      idx === 2 ? "text-white bg-white/[0.04] border border-white/10" : ""
                    }`}
                  >
                    <span>{item}</span>
                    {idx === 2 && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
                  </div>
                ))}
              </div>

              {/* Central Main Analytics */}
              <div className="lg:col-span-6 space-y-6">
                {/* Metric Cards Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">New 5-Star Reviews</p>
                    <p className="text-2xl md:text-3xl font-bold text-white mt-1 font-mono flex items-center gap-2">
                      +148 <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">+42%</span>
                    </p>
                    <p className="text-[10px] text-white/40 mt-1">This month on Google Maps</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">Repeat Customer Visits</p>
                    <p className="text-2xl md:text-3xl font-bold text-white mt-1 font-mono flex items-center gap-2">
                      612 <span className="text-xs font-normal text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">+38%</span>
                    </p>
                    <p className="text-[10px] text-white/40 mt-1">Coupons redeemed at POS</p>
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                    <span className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-emerald-400" /> Live Customer Automation Stream
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Real-time</span>
                  </div>

                  {mockNotifications.map((notif, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3 hover:border-emerald-500/40 transition-colors"
                    >
                      <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0">
                        {notif.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-white truncate">{notif.name}</p>
                          <span className="text-[10px] font-mono text-white/40">{notif.time}</span>
                        </div>
                        <p className="text-[11px] font-semibold text-emerald-400 mt-0.5 flex items-center gap-1">
                          {notif.action}
                          {notif.rating && (
                            <span className="text-amber-400 flex items-center">
                              {"★".repeat(notif.rating)}
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-white/70 italic mt-1">{notif.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Floating Summary Cards */}
              <div className="lg:col-span-3 space-y-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-emerald-900/10 to-background border border-emerald-500/30 space-y-3 shadow-lg">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <Award className="h-4 w-4" /> Google Rating Boost
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white font-mono">4.9</span>
                    <div className="flex text-amber-400 text-sm">★★★★★</div>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Up from 3.9★ within 30 days of automated WhatsApp follow-ups.
                  </p>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full w-[94%]" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-purple-300 font-bold text-xs uppercase tracking-wider">
                    <Gift className="h-4 w-4" /> Active Loyalty Offers
                  </div>
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <p className="text-xs font-bold text-white">15% Off Next Dinner Visit</p>
                    <p className="text-[10px] text-white/50 mt-0.5">342 Claimed • 289 Redeemed</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-xs font-bold text-white">Free Starter with Entree</p>
                    <p className="text-[10px] text-white/50 mt-0.5">188 Claimed • 164 Redeemed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Booking Modal */}
      <StrategyModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Video Modal Placeholder */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setIsVideoOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-3xl border border-white/20 bg-neutral-950 p-6 shadow-2xl z-10 overflow-hidden"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white p-2 rounded-xl bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="aspect-video w-full rounded-2xl bg-neutral-900 border border-white/10 flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Play className="h-8 w-8 fill-current ml-1" />
                </div>
                <h3 className="text-xl font-bold text-white">Loomis Reviews Platform Demo Walkthrough</h3>
                <p className="text-xs text-white/60 max-w-md">
                  Discover how Loomis Reviews connects your POS to WhatsApp follow-ups, shields negative reviews, and drives repeat visits automatically.
                </p>
                <Button
                  onClick={() => {
                    setIsVideoOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs h-11 px-6 rounded-xl"
                >
                  Book Interactive 1-on-1 Demo Instead
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
