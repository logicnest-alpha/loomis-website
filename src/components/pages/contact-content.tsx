"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Clock,
  Globe,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Building,
  Headphones,
  ArrowRight,
  ChevronDown,
  Loader2,
  MapPin,
} from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}
import { Button } from "@/components/ui/button";
import { StrategyModal } from "@/components/ui/strategy-modal";

const REASON_OPTIONS = [
  { value: "Sales", label: "Sales & Pricing Enquiry" },
  { value: "Support", label: "Technical & POS Support" },
  { value: "Billing", label: "Billing & Subscriptions" },
  { value: "Partnership", label: "Agency & POS Integration Partnership" },
  { value: "General", label: "General Feedback & Questions" },
];

const CONTACT_CARDS = [
  {
    icon: Building,
    title: "Sales & Demos",
    desc: "Ready to scale your restaurant reviews? Speak with our hospitality team.",
    actionText: "sales@loomisreviews.com",
    href: "mailto:sales@loomisreviews.com",
    badge: "15-Min Response",
    color: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/30 text-emerald-400",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Need help configuring WhatsApp templates, POS triggers or staff accounts?",
    actionText: "support@loomisreviews.com",
    href: "mailto:support@loomisreviews.com",
    badge: "24/7 Dedicated",
    color: "from-accent/20 to-accent-light/5 border-accent/30 text-accent-light",
  },
  {
    icon: MessageSquare,
    title: "Live Chat Support",
    desc: "Get instant assistance right inside your Loomis Reviews merchant dashboard.",
    actionText: "Open Merchant Portal",
    href: "#",
    badge: "< 5 Min SLA",
    color: "from-cyan-500/20 to-blue-600/5 border-cyan-500/30 text-cyan-400",
  },
];

const CONTACT_FAQS = [
  {
    q: "What is your average customer support response time?",
    a: "Our dedicated support team responds to email inquiries within 24 hours. Enterprise clients and active Growth subscribers receive priority response times under 2 hours via email and instant live chat.",
  },
  {
    q: "How can I schedule a 1-on-1 personalized platform demo?",
    a: "You can click the 'Book Demo' button on this page or anywhere on our website to choose a convenient 30-minute slot with a Loomis Reviews restaurant automation specialist.",
  },
  {
    q: "Where is Loomis Reviews headquartered?",
    a: "Loomis Reviews operates globally with regional support centers serving restaurants across North America, India, Europe, and UAE.",
  },
  {
    q: "Do you offer custom POS system integrations?",
    a: "Yes! While we support major POS platforms out of the box, our enterprise engineering team regularly builds custom webhooks and POS sync adapters for chain clients.",
  },
];

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    restaurantName: "",
    email: "",
    phone: "",
    country: "India",
    reason: "Sales",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          restaurantName: formData.restaurantName,
          company: formData.restaurantName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          reason: formData.reason,
          selectedGoal: formData.reason,
          message: formData.message,
          formType: "Contact Page Submission",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          restaurantName: "",
          email: "",
          phone: "",
          country: "India",
          reason: "Sales",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit message. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please check your internet connection.");
    }
  };

  return (
    <>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Get in Touch with Loomis Reviews
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Need Help? <span className="gradient-text-whatsapp">We're Here</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto"
          >
            We're here to help your restaurant grow. Send us a message or schedule a live demo.
          </motion.p>
        </div>

        {/* Floating Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CONTACT_CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-b ${card.color} border backdrop-blur-xl flex flex-col justify-between group hover:border-white/30 transition-all duration-300 shadow-xl`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/10 text-white backdrop-blur-md">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>
              <a
                href={card.href}
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-emerald-400 transition-colors"
              >
                {card.actionText}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Main Section: Contact Form + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-2xl shadow-2xl relative"
          >
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Send Us a Message</h2>
              <p className="text-xs sm:text-sm text-white/60 font-light mt-2">
                Fill out the form below and a member of our restaurant team will get back to you promptly.
              </p>
            </div>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center my-6"
              >
                <CheckCircle2 className="h-14 w-14 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-sm text-white/70 font-light max-w-md mx-auto">
                  Thank you for reaching out. We have received your request and will contact you at{" "}
                  <span className="text-emerald-400 font-semibold">{formData.email || "your email"}</span> within 24 hours.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  className="mt-6 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs h-11 px-6 rounded-xl"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-white/80 mb-2">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Chef Marco Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  {/* Restaurant Name */}
                  <div>
                    <label htmlFor="contact-restaurant" className="block text-xs font-semibold text-white/80 mb-2">
                      Restaurant Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-restaurant"
                      type="text"
                      required
                      placeholder="e.g. Bella Italia Bistro"
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-white/80 mb-2">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="marco@bellaitalia.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-white/80 mb-2">
                      Phone Number <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Country */}
                  <div>
                    <label htmlFor="contact-country" className="block text-xs font-semibold text-white/80 mb-2">
                      Country
                    </label>
                    <input
                      id="contact-country"
                      type="text"
                      placeholder="e.g. India, United States, UAE"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  {/* Reason Dropdown */}
                  <div>
                    <label htmlFor="contact-reason" className="block text-xs font-semibold text-white/80 mb-2">
                      Inquiry Reason <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      id="contact-reason"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#0f1017] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    >
                      {REASON_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#0f1017] text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-white/80 mb-2">
                    Message / How can we help? <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell us about your restaurant, current review score, or POS integration needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  size="lg"
                  className="w-full h-13 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/30 gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting Your Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message Now
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Sidebar Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Business Contact Box */}
            <div className="p-8 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-2xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                Direct Contact Info
              </h3>

              <div className="space-y-5 text-sm">
                {/* Emails */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-mono uppercase font-bold">Business Email</p>
                    <a href="mailto:support@loomisreviews.com" className="block text-white hover:text-emerald-400 transition-colors font-medium mt-0.5">
                      support@loomisreviews.com
                    </a>
                    <a href="mailto:sales@loomisreviews.com" className="block text-white/80 hover:text-emerald-400 transition-colors text-xs mt-1">
                      sales@loomisreviews.com
                    </a>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-mono uppercase font-bold">Expected Response Time</p>
                    <p className="text-white font-bold flex items-center gap-2 mt-0.5">
                      Within 24 Hours
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                        Avg 15 Mins
                      </span>
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent-light border border-accent/20 shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-mono uppercase font-bold">Web & Social</p>
                    <div className="flex items-center gap-3 mt-1 text-xs">
                      <a href="https://loomisreviews.com" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-400 font-medium">
                        Website: loomisreviews.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-white/70">
                      <LinkedinIcon className="h-3.5 w-3.5 text-cyan-400" />
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        LinkedIn: loomisreviews
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Demo Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950/60 via-emerald-900/20 to-black border border-emerald-500/40 backdrop-blur-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                  PREFERRED FOR NEW RESTAURANTS
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-2">Want a Live Walkthrough?</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                  Schedule a 1-on-1 demo with our restaurant growth team to see how Loomis Reviews connects with your POS and automates 5-star Google reviews.
                </p>
                <Button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full h-12 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/30 gap-2"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Book Demo Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            {/* Google Map Placeholder Container */}
            <div className="p-6 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  Global Support Infrastructure
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Live Status: 99.99% Uptime
                </span>
              </div>
              {/* Stylized Dark Map Visual Frame */}
              <div className="h-44 w-full rounded-2xl bg-[#090b10] border border-white/10 relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:24px_24px]" />
                {/* Map nodes */}
                <div className="absolute top-1/3 left-1/4 flex items-center gap-1.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-mono text-white/80 bg-black/80 px-2 py-0.5 rounded border border-white/10">
                    New York HQ
                  </span>
                </div>
                <div className="absolute bottom-1/3 right-1/3 flex items-center gap-1.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-mono text-white/80 bg-black/80 px-2 py-0.5 rounded border border-white/10">
                    India Operations
                  </span>
                </div>
                <div className="absolute top-1/2 right-1/4 flex items-center gap-1.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                  </span>
                  <span className="text-[10px] font-mono text-white/80 bg-black/80 px-2 py-0.5 rounded border border-white/10">
                    Dubai Node
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact FAQ Accordions */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Contact & Support FAQs</h2>
            <p className="text-xs sm:text-sm text-white/60 font-light mt-1">
              Common questions about reaching our team.
            </p>
          </div>

          <div className="space-y-4">
            {CONTACT_FAQS.map((faq, idx) => {
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
                    <span className="text-sm sm:text-base font-semibold text-white">{faq.q}</span>
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
                        <div className="px-6 pb-6 text-xs sm:text-sm text-white/70 font-light leading-relaxed border-t border-white/5 pt-4">
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
      </div>

      {/* Demo Modal */}
      <StrategyModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
