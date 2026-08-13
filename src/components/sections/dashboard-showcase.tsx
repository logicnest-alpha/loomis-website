"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Send,
  BarChart3,
  Ticket,
  MessageCircle,
  Settings,
  Star,
  CheckCircle2,
  Filter,
  Sparkles,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const showcaseTabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "customers", label: "Customers", icon: Users },
  { id: "campaigns", label: "Campaign Builder", icon: Send },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "coupons", label: "Coupons", icon: Ticket },
  { id: "whatsapp", label: "WhatsApp Inbox", icon: MessageCircle },
  { id: "settings", label: "Settings", icon: Settings },
];

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section id="showcase" className="relative section-padding overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-emerald-500/15 via-accent/15 to-cyan-500/10 rounded-full blur-[220px] pointer-events-none" />

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
            Interactive Product Tour
          </motion.div>

          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Designed for Simplicity.{" "}
            <span className="gradient-text-whatsapp">Built for Growth.</span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            Explore the Loomis Reviews application interface. Manage your reviews, WhatsApp broadcasts, loyalty offers, and customer metrics in one place.
          </motion.p>
        </div>

        {/* Tab Navigation Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {showcaseTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 border border-emerald-400"
                    : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.07]"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-white/50"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Laptop Frame Mockup Container */}
        <div className="relative rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-background backdrop-blur-2xl p-4 sm:p-8 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.95)]">
          {/* Specular Top Beam */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent" />

          {/* Browser Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 px-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-4 text-xs font-mono text-white/40 hidden sm:inline">
                https://app.loomisreviews.com/admin/{activeTab}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                Official WhatsApp Meta API Connected
              </span>
            </div>
          </div>

          {/* Dynamic Content Views */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="min-h-[440px]"
            >
              {activeTab === "dashboard" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <p className="text-xs text-white/50 font-medium">Total Google Reviews</p>
                      <p className="text-3xl font-extrabold text-white mt-1 font-mono">1,482</p>
                      <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                        <ArrowUpRight className="h-3 w-3" /> +142 this month (4.9 Rating)
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <p className="text-xs text-white/50 font-medium">WhatsApp Messages Sent</p>
                      <p className="text-3xl font-extrabold text-white mt-1 font-mono">12,490</p>
                      <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                        <ArrowUpRight className="h-3 w-3" /> 98.4% open rate
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <p className="text-xs text-white/50 font-medium">Coupons Redeemed at POS</p>
                      <p className="text-3xl font-extrabold text-white mt-1 font-mono">841</p>
                      <p className="text-[11px] text-purple-400 mt-1 flex items-center gap-1">
                        <ArrowUpRight className="h-3 w-3" /> $18,420 estimated repeat revenue
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">Recent Automated Customer Actions</h4>
                      <span className="text-xs text-emerald-400 font-mono">Live Sync</span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { customer: "Sarah M.", phone: "+1 (555) 234-9812", action: "Left 5-Star Google Review", rating: "★★★★★", time: "3 mins ago" },
                        { customer: "David K.", phone: "+1 (555) 891-3410", action: "Redeemed '15% Off Next Meal' Coupon", rating: "Redeemed", time: "12 mins ago" },
                        { customer: "Elena R.", phone: "+1 (555) 456-1198", action: "Answered Private Feedback Survey", rating: "CSAT 10/10", time: "24 mins ago" },
                      ].map((item, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
                          <div>
                            <p className="font-bold text-white">{item.customer} <span className="text-white/40 font-mono">({item.phone})</span></p>
                            <p className="text-emerald-400 font-medium mt-0.5">{item.action}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-amber-400 font-bold">{item.rating}</span>
                            <p className="text-[10px] text-white/40 mt-0.5">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "customers" && (
                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Customer Database & LTV Profile</h4>
                      <p className="text-xs text-white/50">3,420 registered diners tracked via WhatsApp</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white flex items-center gap-1.5">
                        <Filter className="h-3.5 w-3.5" /> Filter VIPs
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-white/50 uppercase font-mono text-[10px]">
                          <th className="pb-3">Customer</th>
                          <th className="pb-3">Total Visits</th>
                          <th className="pb-3">Last Visit</th>
                          <th className="pb-3">Google Rating</th>
                          <th className="pb-3">Segment</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {[
                          { name: "Marcus Vance", visits: "8 visits", last: "Yesterday", rating: "5 Stars", segment: "VIP Loyalist", badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
                          { name: "Emily Watson", visits: "5 visits", last: "3 days ago", rating: "5 Stars", segment: "Frequent Diner", badge: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
                          { name: "Carlos Rossi", visits: "2 visits", last: "12 days ago", rating: "4 Stars", segment: "At Risk", badge: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
                          { name: "Jessica Taylor", visits: "12 visits", last: "Today", rating: "5 Stars", segment: "VIP Loyalist", badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-white/[0.02]">
                            <td className="py-3 font-bold text-white">{row.name}</td>
                            <td className="py-3 text-white/70 font-mono">{row.visits}</td>
                            <td className="py-3 text-white/50">{row.last}</td>
                            <td className="py-3 text-amber-400 font-bold">{row.rating}</td>
                            <td className="py-3">
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${row.badge}`}>
                                {row.segment}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "campaigns" && (
                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">WhatsApp Broadcast Campaigns</h4>
                      <p className="text-xs text-white/50">Send festive offers or menu specials directly to diners</p>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold flex items-center gap-1.5">
                      <Plus className="h-4 w-4" /> Create Broadcast
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">Weekend Chef Special Offer</span>
                        <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">Active</span>
                      </div>
                      <p className="text-xs text-white/70 italic bg-black/40 p-3 rounded-lg border border-white/5">
                        “Hey {`{first_name}`}! Try our new Truffle Wagyu Burger this Friday and get a complimentary craft beverage! Tap to claim coupon.”
                      </p>
                      <div className="flex justify-between text-[11px] font-mono text-white/50">
                        <span>Recipients: 1,240</span>
                        <span>Open Rate: 98.2%</span>
                        <span>Redeemed: 312</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">Win-Back Inactive Diners (30+ days)</span>
                        <span className="text-[10px] font-mono bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded border border-purple-500/30">Scheduled</span>
                      </div>
                      <p className="text-xs text-white/70 italic bg-black/40 p-3 rounded-lg border border-white/5">
                        “We miss you at La Trattoria! Here's $10 off your next meal when you visit before Sunday.”
                      </p>
                      <div className="flex justify-between text-[11px] font-mono text-white/50">
                        <span>Recipients: 418</span>
                        <span>Target: Inactive Segment</span>
                        <span>Auto Trigger</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Google Rating Trajectory</h4>
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-black text-white font-mono">4.9</span>
                        <div className="text-amber-400">★★★★★</div>
                      </div>
                      <p className="text-xs text-white/60">Increased from 3.8 to 4.9 stars within 45 days.</p>
                      <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500 h-full w-[94%]" />
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Private vs Public Review Split</h4>
                      <div className="flex items-center justify-between text-xs text-white">
                        <span>Public Google 5-Star Reviews:</span>
                        <span className="font-bold text-emerald-400">92%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-white">
                        <span>Private Staff Feedback (Shielded):</span>
                        <span className="font-bold text-rose-400">8%</span>
                      </div>
                      <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden flex">
                        <div className="bg-emerald-500 h-full w-[92%]" />
                        <div className="bg-rose-500 h-full w-[8%]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "coupons" && (
                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">Active Loyalty Coupon Rules</h4>
                    <span className="text-xs text-purple-400 font-mono">+ Add Custom Coupon</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: "5-Star Review Reward", code: "REVIEW15", perk: "15% Off Next Check", claimed: "412 Claimed" },
                      { title: "VIP Birthday Perk", code: "BDAYCAKE", perk: "Free Dessert / Pastry", claimed: "189 Claimed" },
                      { title: "2nd Visit Incentive", code: "WELCOME20", perk: "$10 Voucher", claimed: "348 Claimed" },
                    ].map((c, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-white">{c.title}</span>
                          <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded">{c.code}</span>
                        </div>
                        <p className="text-sm font-extrabold text-emerald-400">{c.perk}</p>
                        <p className="text-[11px] text-white/50">{c.claimed}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "whatsapp" && (
                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">Multi-Agent WhatsApp Shared Inbox</h4>
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" /> 3 Online Staff Agents
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-xs">
                        <p className="font-bold text-white">Table Reservation Inquiry</p>
                        <p className="text-emerald-300 mt-0.5">“Can I book for 6 people tonight?”</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/60">
                        <p className="font-bold text-white">Feedback Follow-up</p>
                        <p className="mt-0.5">“Food was awesome thanks!”</p>
                      </div>
                    </div>

                    <div className="md:col-span-2 p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                      <div className="border-b border-white/10 pb-2 flex justify-between items-center text-xs">
                        <span className="font-bold text-white">Chat with Michael Scott (+1 555-0192)</span>
                        <span className="text-emerald-400 font-mono">Assigned to Manager</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 max-w-[80%]">
                          Hello Michael! Thanks for visiting La Trattoria tonight. How was your dining experience?
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/10 text-white max-w-[80%] ml-auto">
                          It was incredible! Loved the truffled gnocchi.
                        </div>
                        <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 max-w-[80%]">
                          Wonderful! Here is a link to post a Google review + a free dessert coupon for next time!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                  <h4 className="text-sm font-bold text-white">Integrations & WhatsApp Meta API</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">WhatsApp Business Meta API</p>
                        <p className="text-[11px] text-emerald-400">Verified & Operational</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">Connected</span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">POS Integration (Toast, Square, Clover)</p>
                        <p className="text-[11px] text-white/50">Auto sync diner bills</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">Active</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
