"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Lock,
  FileText,
  Database,
  Eye,
  Server,
  UserCheck,
  Trash2,
  Mail,
  Calendar,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Info,
} from "lucide-react";
import Link from "next/link";

const LAST_UPDATED = "August 14, 2026";

const TOC_SECTIONS = [
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "business-information", title: "   - Business Information", isSub: true },
  { id: "customer-information", title: "   - Customer Information", isSub: true },
  { id: "whatsapp-messages", title: "   - WhatsApp Messages & Logs", isSub: true },
  { id: "google-review-data", title: "   - Google Review Data", isSub: true },
  { id: "cookies-analytics-usage", title: "   - Cookies, Analytics & Usage", isSub: true },
  { id: "how-we-use-information", title: "2. How We Use Information" },
  { id: "security-measures", title: "3. Data Security & Encryption" },
  { id: "third-party-services", title: "4. Third-Party Service Providers" },
  { id: "meta-whatsapp", title: "   - Meta WhatsApp Cloud API", isSub: true },
  { id: "supabase-database", title: "   - Supabase Database", isSub: true },
  { id: "vercel-hosting", title: "   - Vercel Infrastructure", isSub: true },
  { id: "google-analytics", title: "   - Google Analytics", isSub: true },
  { id: "cookies-policy", title: "5. Cookies & Tracking Policy" },
  { id: "data-retention", title: "6. Data Retention Limits" },
  { id: "user-rights-gdpr-ccpa", title: "7. User Rights (GDPR & CCPA)" },
  { id: "data-deletion-instructions", title: "8. Data Deletion Instructions" },
  { id: "contact-information", title: "9. Contact DPO / Privacy Office" },
];

export function PrivacyContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("information-we-collect");

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return TOC_SECTIONS;
    const q = searchQuery.toLowerCase();
    return TOC_SECTIONS.filter((s) => s.title.toLowerCase().includes(q) || s.id.includes(q));
  }, [searchQuery]);

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4">
          <ShieldCheck className="h-3.5 w-3.5" />
          GDPR & CCPA Compliant Privacy Policy
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>

        <p className="mt-3 text-sm sm:text-base text-white/60 font-light flex items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-emerald-400" /> Last Updated: {LAST_UPDATED}
          </span>
          <span>•</span>
          <span className="text-white/50 font-mono">Version 2.4</span>
        </p>
      </div>

      {/* Real-time Search Input */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <input
            type="text"
            placeholder="Search privacy policy clauses (e.g. WhatsApp, GDPR, Cookies, Supabase)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-11 pr-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-xl"
          />
        </div>
      </div>

      {/* Layout Grid: Sticky TOC Sidebar + Document Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sticky Table of Contents */}
        <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
          <div className="p-6 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-2xl">
            <h3 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Table of Contents</span>
              <FileText className="h-3.5 w-3.5 text-emerald-400" />
            </h3>
            <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
              {filteredSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block py-1.5 px-3 rounded-xl text-xs font-medium transition-all ${
                    sec.isSub ? "ml-3 text-white/50 hover:text-white" : "text-white/80 hover:text-white font-semibold"
                  } ${
                    activeSection === sec.id
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                      : "hover:bg-white/5"
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Legal Document Content Body */}
        <main className="lg:col-span-8 p-6 sm:p-12 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-2xl text-white/80 space-y-12 leading-relaxed text-sm">
          {/* Intro Box */}
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-white/80 leading-relaxed">
            <p className="font-semibold text-emerald-300 mb-1 flex items-center gap-2">
              <Info className="h-4 w-4" /> Commitment to Privacy
            </p>
            At <strong>Loomis Reviews</strong> ("Loomis", "we", "us", or "our"), we respect the privacy of restaurant merchants and their dining guests. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our SaaS platform, website, and automated WhatsApp review services.
          </div>

          {/* 1. Information We Collect */}
          <section id="information-we-collect" className="space-y-6 pt-2 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <Database className="h-6 w-6 text-emerald-400" /> 1. Information We Collect
            </h2>
            <p>
              To provide automated customer review generation and retention marketing, Loomis Reviews collects information from two distinct categories: <strong>Merchant Business Accounts</strong> and <strong>End-User Restaurant Guests</strong>.
            </p>

            {/* Business Information */}
            <div id="business-information" className="space-y-2 pt-2">
              <h3 className="text-base font-bold text-white text-emerald-300">A. Business Information</h3>
              <p>When a restaurant registers for Loomis Reviews, we collect:</p>
              <ul className="list-disc list-inside space-y-1 text-white/70 pl-2">
                <li>Restaurant business name, outlet address, GST/Tax IDs, and contact telephone number.</li>
                <li>Account owner name, email address, password hashes (encrypted), and billing details.</li>
                <li>Google Business Profile API credentials and Google Maps review location links.</li>
                <li>POS (Point of Sale) API keys and webhook authorization tokens.</li>
              </ul>
            </div>

            {/* Customer Information */}
            <div id="customer-information" className="space-y-2 pt-2">
              <h3 className="text-base font-bold text-white text-emerald-300">B. Customer Information</h3>
              <p>When a dining guest visits a participating restaurant outlet, we collect details uploaded by the merchant or POS trigger:</p>
              <ul className="list-disc list-inside space-y-1 text-white/70 pl-2">
                <li>Customer first and last name.</li>
                <li>WhatsApp-enabled phone number.</li>
                <li>Order metadata (bill date, transaction value, dining type: dine-in/takeaway).</li>
                <li>Private feedback ratings and net promoter scores (NPS).</li>
              </ul>
            </div>

            {/* WhatsApp Messages */}
            <div id="whatsapp-messages" className="space-y-2 pt-2">
              <h3 className="text-base font-bold text-white text-emerald-300">C. WhatsApp Messages & Transmission Logs</h3>
              <p>
                We process outbound automated WhatsApp review requests and inbound guest feedback using Meta's Cloud API. We store message delivery statuses (sent, delivered, read), timestamp logs, and guest response selections strictly for review workflow automation.
              </p>
            </div>

            {/* Google Review Data */}
            <div id="google-review-data" className="space-y-2 pt-2">
              <h3 className="text-base font-bold text-white text-emerald-300">D. Google Review Data</h3>
              <p>
                Via Google Business Profile API integrations, we retrieve public review star ratings, public review text, reviewer display names, and merchant response histories to display aggregated analytics on your Loomis dashboard.
              </p>
            </div>

            {/* Cookies & Usage */}
            <div id="cookies-analytics-usage" className="space-y-2 pt-2">
              <h3 className="text-base font-bold text-white text-emerald-300">E. Cookies, Analytics & Usage Information</h3>
              <p>
                We automatically collect log data when you navigate the website, including IP address, browser type, device information, operating system, referring URLs, pages visited, and session interaction duration.
              </p>
            </div>
          </section>

          {/* 2. How We Use Information */}
          <section id="how-we-use-information" className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <Eye className="h-6 w-6 text-emerald-400" /> 2. How We Use Information
            </h2>
            <p>Loomis Reviews uses collected data strictly for the following purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white mb-1">Review Automation</h4>
                <p className="text-xs text-white/60">Dispatch automated WhatsApp review links after bill settlement and route 5-star feedback to Google Maps.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white mb-1">Loyalty & Repeat Visits</h4>
                <p className="text-xs text-white/60">Issue digital discount coupons and track customer repeat visit frequencies across dining locations.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white mb-1">Analytics Reporting</h4>
                <p className="text-xs text-white/60">Provide real-time merchant dashboards showing NPS trends, review growth rates, and customer sentiment analytics.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white mb-1">Security & Billing</h4>
                <p className="text-xs text-white/60">Authenticate user logins, prevent fraud, process subscription payments, and enforce system security controls.</p>
              </div>
            </div>
            <p className="text-xs text-emerald-400 font-semibold pt-2">
              🔒 We NEVER sell, rent, or trade customer phone numbers or restaurant customer databases to third-party advertisers.
            </p>
          </section>

          {/* 3. Security */}
          <section id="security-measures" className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <Lock className="h-6 w-6 text-emerald-400" /> 3. Data Security & Encryption
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to preserve data integrity:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-white/70 pl-2">
              <li><strong>Encryption in Transit:</strong> TLS 1.3 / 256-bit SSL encryption for all web API payloads and external data transfers.</li>
              <li><strong>Encryption at Rest:</strong> AES-256 database encryption for customer phone numbers and merchant database storage.</li>
              <li><strong>Access Control:</strong> Strict Role-Based Access Control (RBAC) preventing unauthorized internal staff access.</li>
              <li><strong>Zero Plaintext Storage:</strong> Account passwords are hashed using bcrypt with unique cryptographic salts.</li>
            </ul>
          </section>

          {/* 4. Third Party Services */}
          <section id="third-party-services" className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <Server className="h-6 w-6 text-emerald-400" /> 4. Third-Party Service Providers
            </h2>
            <p>
              Loomis Reviews partners with tier-1 infrastructure providers to deliver reliable enterprise operations:
            </p>

            <div className="space-y-4">
              <div id="meta-whatsapp" className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  Meta WhatsApp Cloud API
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  We transmit WhatsApp template messages via official Meta Cloud APIs. Meta processes phone numbers strictly in compliance with the Meta WhatsApp Business Terms and Meta Privacy Policy.
                </p>
              </div>

              <div id="supabase-database" className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  Supabase Infrastructure
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Our core data persistence layer operates on Supabase (PostgreSQL with Row Level Security). Data is hosted in SOC2 Type II compliant data centers.
                </p>
              </div>

              <div id="vercel-hosting" className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  Vercel Edge Network
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Our web interface and serverless functions are deployed on Vercel's global edge network, protected by automatic DDoS protection and SSL termination.
                </p>
              </div>

              <div id="google-analytics" className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  Google Analytics & Google Business API
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  We use Google Analytics to analyze website traffic patterns and official Google APIs to process review links and rating statistics.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Cookies Policy */}
          <section id="cookies-policy" className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <FileText className="h-6 w-6 text-emerald-400" /> 5. Cookies & Tracking Policy
            </h2>
            <p>
              We use essential cookies to maintain secure authentication sessions and performance cookies to optimize load speeds. You can configure your browser to block or alert you about cookies; however, disabling essential cookies may impact merchant dashboard functionality.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section id="data-retention" className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <Database className="h-6 w-6 text-emerald-400" /> 6. Data Retention Limits
            </h2>
            <p>
              Merchant business data is retained for the active duration of the subscription. Upon subscription cancellation, account data is archived for 30 days, after which it is permanently purged from our primary database backups unless legally required for tax compliance.
            </p>
          </section>

          {/* 7. User Rights (GDPR & CCPA) */}
          <section id="user-rights-gdpr-ccpa" className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <UserCheck className="h-6 w-6 text-emerald-400" /> 7. User Rights (GDPR & CCPA)
            </h2>
            <p>Under the European Union General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you possess the following rights:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-1">Right to Access</strong>
                Request a copy of all personal data held about your account.
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-1">Right to Rectification</strong>
                Correct any inaccurate or incomplete business profile data.
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-1">Right to Erasure ("Right to be Forgotten")</strong>
                Request permanent deletion of your customer list or account.
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-1">Right to Opt-Out</strong>
                Unsubscribe from WhatsApp automated broadcasts at any time by replying 'STOP'.
              </div>
            </div>
          </section>

          {/* 8. Data Deletion */}
          <section id="data-deletion-instructions" className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <Trash2 className="h-6 w-6 text-emerald-400" /> 8. Data Deletion Instructions
            </h2>
            <p>
              Merchants and individual end-user guests may initiate a data deletion request at any time:
            </p>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <p className="text-xs text-white/80">
                <strong>How to request full account or customer record deletion:</strong>
              </p>
              <ol className="list-decimal list-inside text-xs text-white/70 space-y-1.5 pl-2">
                <li>Send an email to <span className="text-emerald-400 font-semibold">support@loomisreviews.com</span> with subject: <em>"Data Deletion Request"</em>.</li>
                <li>Specify the restaurant business name or guest phone number to be purged.</li>
                <li>Our Data Protection Officer will process and confirm complete deletion within 14 business days.</li>
              </ol>
            </div>
          </section>

          {/* 9. Contact Info */}
          <section id="contact-information" className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <Mail className="h-6 w-6 text-emerald-400" /> 9. Contact DPO / Privacy Office
            </h2>
            <p>
              If you have any questions, concerns, or legal inquiries regarding this Privacy Policy, please contact our Data Protection Office:
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-black border border-emerald-500/30 space-y-2 text-xs">
              <p className="font-bold text-white text-sm">Loomis Reviews Data Protection Office</p>
              <p className="text-white/70">Email: <a href="mailto:support@loomisreviews.com" className="text-emerald-400 hover:underline">support@loomisreviews.com</a></p>
              <p className="text-white/70">Legal Enquiries: <a href="mailto:sales@loomisreviews.com" className="text-emerald-400 hover:underline">sales@loomisreviews.com</a></p>
              <p className="text-white/70">Website: <a href="https://loomisreviews.com" className="text-emerald-400 hover:underline">loomisreviews.com</a></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
