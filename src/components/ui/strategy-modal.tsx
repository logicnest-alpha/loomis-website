"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, CheckCircle2, ArrowRight, Sparkles, Building2, User, Mail, Phone, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const availableTimes = ["10:00 AM", "01:30 PM", "04:00 PM", "06:30 PM"];
const businessTypes = [
  "Dine-in Restaurant / Bistro",
  "Multi-Location Restaurant Chain",
  "Cafe / Coffee Shop / Bakery",
  "Fast Food / QSR Brand",
  "Cloud Kitchen / Delivery Hub",
];

export function StrategyModal({ isOpen, onClose }: StrategyModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedGoal, setSelectedGoal] = useState<string>(businessTypes[0]);
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow");
  const [selectedTime, setSelectedTime] = useState<string>("01:30 PM");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          selectedGoal,
          selectedDate,
          selectedTime,
          formType: "Loomis Reviews 1-on-1 Product Demo & Trial",
        }),
      });
    } catch (err) {
      console.error("Form submission fetch error:", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl rounded-3xl border border-white/20 bg-background/95 p-6 md:p-8 shadow-2xl backdrop-blur-2xl z-10 overflow-hidden"
        >
          {/* Top ambient beam */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  15-Minute VIP Restaurant Demo
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  Book Your Loomis Demo
                </h2>
                <p className="text-xs text-white/60 mt-1">
                  Step {step} of 2 — See how to automate Google reviews & repeat visits.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 h-1.5 rounded-full mb-6 overflow-hidden">
                <div
                  className="bg-emerald-400 h-full transition-all duration-300"
                  style={{ width: step === 1 ? "50%" : "100%" }}
                />
              </div>

              {step === 1 ? (
                <div className="space-y-5">
                  {/* Select Business Type */}
                  <div>
                    <label className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                      Select Your Restaurant / Venue Type
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {businessTypes.map((bType) => (
                        <button
                          key={bType}
                          onClick={() => setSelectedGoal(bType)}
                          className={`flex items-center justify-between p-3.5 rounded-2xl border text-xs font-bold transition-all text-left ${
                            selectedGoal === bType
                              ? "border-emerald-500 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/20"
                              : "border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-white/25"
                          }`}
                        >
                          <span>{bType}</span>
                          {selectedGoal === bType && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-white uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-accent-light" />
                        Target Day
                      </label>
                      <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-white/[0.05] border border-white/15 rounded-xl p-3 text-xs text-white font-medium focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent"
                      >
                        <option value="Tomorrow" className="bg-neutral-900">Tomorrow</option>
                        <option value="In 2 Days" className="bg-neutral-900">In 2 Days</option>
                        <option value="Next Monday" className="bg-neutral-900">Next Monday</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-white uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-accent-light" />
                        Preferred Time
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full bg-white/[0.05] border border-white/15 rounded-xl p-3 text-xs text-white font-medium focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent"
                      >
                        {availableTimes.map((t) => (
                          <option key={t} value={t} className="bg-neutral-900">
                            {t} (EST)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Button
                    onClick={() => setStep(2)}
                    className="w-full mt-4 bg-accent hover:bg-accent-light text-white font-bold text-xs h-12 gap-2"
                  >
                    Continue to Details
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-white/90 block mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-white/40" />
                      <input
                        required
                        type="text"
                        placeholder="Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/[0.05] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-white/90 block mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-white/40" />
                      <input
                        required
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.05] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-white/90 block mb-1">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-3.5 h-4 w-4 text-white/40" />
                        <input
                          type="text"
                          placeholder="Acme Corp"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-white/[0.05] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-white/90 block mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-white/40" />
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/[0.05] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-3">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep(1)}
                      disabled={submitting}
                      className="w-1/3 text-white/70 text-xs h-12 font-bold"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-2/3 bg-accent hover:bg-accent-light text-white font-bold text-xs h-12 gap-2"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Confirm Booking
                          <CheckCircle2 className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Strategy Session Confirmed!</h3>
              <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
                Thank you <span className="text-white font-bold">{formData.name || "there"}</span>. Lead details have been routed to <span className="text-accent-light font-bold">vishalchepyala@gmail.com</span> for <span className="text-accent-light font-bold">{selectedDate} at {selectedTime}</span>.
              </p>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left text-xs space-y-1">
                <p className="font-bold text-white/90">Goal Focused:</p>
                <p className="text-accent-light flex items-center gap-1.5 font-bold">
                  <Bot className="h-4 w-4" />
                  {selectedGoal}
                </p>
              </div>
              <Button onClick={handleReset} className="mt-4 bg-white/10 hover:bg-white/20 text-white text-xs h-11 px-8 font-bold">
                Done
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
