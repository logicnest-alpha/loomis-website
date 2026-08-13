"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { fadeUp } from "@/lib/animations";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  // Setup & POS Integrations
  {
    id: "faq-1",
    category: "Setup & Integration",
    question: "How long does it take to set up Loomis Reviews for my restaurant?",
    answer:
      "Setup takes less than 5 minutes. You connect your official WhatsApp Business account, enter your restaurant's Google Maps link, and customize your automated greeting message. No developer or technical skills required.",
  },
  {
    id: "faq-2",
    category: "Setup & Integration",
    question: "Does Loomis Reviews integrate with my POS system (Toast, Square, Clover, Petpooja)?",
    answer:
      "Yes! Loomis Reviews connects directly with popular restaurant POS systems including Toast, Square, Clover, Lightspeed, Petpooja, and Revel. When a bill is settled, the customer's visit is automatically queued for WhatsApp follow-up.",
  },
  {
    id: "faq-3",
    category: "Setup & Integration",
    question: "What if I don't use an integrated POS system?",
    answer:
      "No problem! You can simply place a stylish QR code acrylic stand on dining tables, cashier counters, or takeaway boxes. Diners scan the QR code to get their receipt or discount, which instantly captures their phone number for WhatsApp automation.",
  },
  {
    id: "faq-4",
    category: "Setup & Integration",
    question: "Can I manage multiple restaurant outlets or franchise locations?",
    answer:
      "Absolutely. Loomis Reviews provides a multi-location master dashboard where multi-unit restaurant operators can compare Google review growth, CSAT scores, and coupon redemptions across all locations.",
  },

  // WhatsApp Messaging & Meta API
  {
    id: "faq-5",
    category: "WhatsApp Messaging",
    question: "Is Loomis Reviews compliant with official Meta / WhatsApp policies?",
    answer:
      "Yes. Loomis Reviews utilizes official Meta Cloud API infrastructure. All messages are 100% compliant with WhatsApp's opt-in guidelines, ensuring high deliverability, official green checkmark verification support, and zero risk of phone number blocks.",
  },
  {
    id: "faq-6",
    category: "WhatsApp Messaging",
    question: "Why is WhatsApp better than SMS or email for restaurant follow-ups?",
    answer:
      "WhatsApp boasts a 98% open rate compared to less than 15% for email and 30% for SMS. Diners open WhatsApp within 3 minutes of receiving a message and can leave feedback with a single tap.",
  },
  {
    id: "faq-7",
    category: "WhatsApp Messaging",
    question: "Can my restaurant staff chat directly with customers via WhatsApp?",
    answer:
      "Yes! Loomis Reviews includes a multi-agent shared inbox where managers and hostesses can answer customer inquiries, accept table reservations, or resolve feedback in real time.",
  },
  {
    id: "faq-8",
    category: "WhatsApp Messaging",
    question: "Can I send promotional WhatsApp broadcast messages for weekend specials?",
    answer:
      "Yes. The Campaign Builder allows you to send targeted promotional broadcasts to specific diner segments (e.g. VIP Loyalists or Inactive Diners) featuring new menu items or weekend events.",
  },

  // Google Reviews & Ratings
  {
    id: "faq-9",
    category: "Google Reviews",
    question: "How does Loomis Reviews turn happy diners into 5-star Google reviews?",
    answer:
      "After dining, the automated WhatsApp message asks the customer to rate their meal from 1 to 5 stars. If they tap 4 or 5 stars, Loomis immediately opens your official Google Maps review page with 1 tap.",
  },
  {
    id: "faq-10",
    category: "Google Reviews",
    question: "How does private feedback shielding work for negative (1 to 3 star) reviews?",
    answer:
      "When a customer rates their experience 1, 2, or 3 stars, Loomis opens a private feedback text box instead of Google Maps. Their response is routed directly to the restaurant manager's email and inbox, keeping public Google reviews safe.",
  },
  {
    id: "faq-11",
    category: "Google Reviews",
    question: "Does leaving Google reviews violate Google's review policies?",
    answer:
      "No. We never mandate reviews, pay for reviews, or post fake reviews. Loomis simply makes it effortless for authentic happy customers to leave real reviews on your Google Business Profile.",
  },
  {
    id: "faq-12",
    category: "Google Reviews",
    question: "How quickly will I see an increase in my restaurant's Google star rating?",
    answer:
      "Most restaurants see a significant increase in 5-star review volume within 7 to 14 days of activating Loomis Reviews, often lifting overall Google star ratings by 0.5 to 1.0 stars within 30 days.",
  },

  // Loyalty Coupons & Repeat Diners
  {
    id: "faq-13",
    category: "Loyalty & Coupons",
    question: "How does the automated Coupon Engine bring customers back?",
    answer:
      "Once a guest rates their meal or leaves a Google review, Loomis automatically generates a unique digital voucher (e.g. 15% Off Next Visit or Free Dessert) delivered directly in WhatsApp.",
  },
  {
    id: "faq-14",
    category: "Loyalty & Coupons",
    question: "How do cashiers verify and redeem coupons at the restaurant POS?",
    answer:
      "Each WhatsApp coupon includes a unique 6-digit code and QR code. Staff can scan the QR code with any smartphone or type the 6-digit code into your POS to mark it as redeemed and prevent double usage.",
  },
  {
    id: "faq-15",
    category: "Loyalty & Coupons",
    question: "Can I set expiration dates on discount coupons?",
    answer:
      "Yes! You can customize expiration rules (e.g. valid for 14 days, valid Monday to Thursday only) to drive repeat foot traffic during quiet weekday lunch or dinner slots.",
  },
  {
    id: "faq-16",
    category: "Loyalty & Coupons",
    question: "Do customers need to download a mobile app to join the loyalty program?",
    answer:
      "Never! Apps have a 90% abandonment rate. Loomis Reviews runs 100% inside WhatsApp, so diners never need to download another app or carry paper stamp cards.",
  },

  // Security, Pricing & Support
  {
    id: "faq-17",
    category: "Pricing & Security",
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day risk-free trial on all plans with zero setup fees or long-term contracts. You can test review automation and WhatsApp follow-ups with real customers immediately.",
  },
  {
    id: "faq-18",
    category: "Pricing & Security",
    question: "Is customer data kept private and secure?",
    answer:
      "100%. We employ bank-grade SSL encryption and fully comply with GDPR and privacy regulations. Your customer phone numbers and dining histories belong strictly to your restaurant and are never shared or sold.",
  },
  {
    id: "faq-19",
    category: "Pricing & Security",
    question: "Can I change or cancel my plan at any time?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your Loomis Reviews subscription anytime with a single click inside your billing settings.",
  },
  {
    id: "faq-20",
    category: "Pricing & Security",
    question: "What kind of customer support do you provide?",
    answer:
      "All customers receive priority WhatsApp, email, and live video onboarding support. Growth and Business plan accounts also get access to dedicated account managers to help optimize review conversion rates.",
  },
];

const categories = ["All", "Setup & Integration", "WhatsApp Messaging", "Google Reviews", "Loyalty & Coupons", "Pricing & Security"];

export function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="relative section-padding overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Got Questions? We Have Answers.
          </motion.div>

          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Frequently Asked <span className="gradient-text-whatsapp">Questions</span>
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            Everything you need to know about Loomis Reviews, POS setup, WhatsApp automation, and Google review growth.
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-white/40" />
          <input
            type="text"
            placeholder="Search questions (e.g., POS, Toast, Google Maps, Coupons)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/15 rounded-2xl pl-11 pr-4 py-3 text-xs text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                  : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white/[0.025] border border-white/10 overflow-hidden backdrop-blur-xl transition-colors"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm md:text-base text-white hover:text-emerald-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-emerald-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-xs md:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4 font-light"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-white/50 text-xs font-mono">
              No questions found matching "{searchQuery}". Try searching another keyword!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
