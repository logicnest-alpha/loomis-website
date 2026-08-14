"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  CheckCircle,
  ShieldAlert,
  CreditCard,
  RefreshCcw,
  MessageCircle,
  Star,
  Server,
  Lock,
  AlertTriangle,
  Scale,
  Calendar,
  Mail,
  HelpCircle,
  Info,
} from "lucide-react";

const LAST_UPDATED = "August 14, 2026";

const TERMS_SECTIONS = [
  { id: "1-acceptance", title: "1. Acceptance of Terms" },
  { id: "2-eligibility", title: "2. Eligibility & Restaurant Account" },
  { id: "3-accounts", title: "3. Account Security & Credentials" },
  { id: "4-subscriptions", title: "4. Subscriptions & Plan Tiers" },
  { id: "5-payments", title: "5. Payments, Billing & Taxes" },
  { id: "6-renewals", title: "6. Automatic Renewals" },
  { id: "7-cancellation", title: "7. Cancellation & Offboarding" },
  { id: "8-refund-policy", title: "8. Refund Policy (30-Day Guarantee)" },
  { id: "9-acceptable-use", title: "9. Acceptable Use Policy" },
  { id: "10-customer-responsibilities", title: "10. Merchant Responsibilities" },
  { id: "11-whatsapp-usage", title: "11. WhatsApp API Usage & Meta Policy" },
  { id: "12-google-review-usage", title: "12. Google Review Guidelines & Compliance" },
  { id: "13-service-availability", title: "13. Service Availability & Downtime SLA" },
  { id: "14-intellectual-property", title: "14. Intellectual Property & Ownership" },
  { id: "15-confidentiality", title: "15. Confidentiality & Non-Disclosure" },
  { id: "16-termination", title: "16. Termination & Suspension" },
  { id: "17-limitation-of-liability", title: "17. Limitation of Liability" },
  { id: "18-warranty-disclaimer", title: "18. Warranty Disclaimer" },
  { id: "19-force-majeure", title: "19. Force Majeure" },
  { id: "20-governing-law", title: "20. Governing Law & Jurisdiction" },
  { id: "21-changes-to-terms", title: "21. Changes to Terms" },
  { id: "22-contact", title: "22. Legal Contact & Notices" },
];

export function TermsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("1-acceptance");

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return TERMS_SECTIONS;
    const q = searchQuery.toLowerCase();
    return TERMS_SECTIONS.filter((s) => s.title.toLowerCase().includes(q) || s.id.includes(q));
  }, [searchQuery]);

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 mb-4">
          <FileText className="h-3.5 w-3.5" />
          Master Terms of Service Agreement
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Terms of Service
        </h1>

        <p className="mt-3 text-sm sm:text-base text-white/60 font-light flex items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-emerald-400" /> Last Updated: {LAST_UPDATED}
          </span>
          <span>•</span>
          <span className="text-white/50 font-mono">Version 3.1</span>
        </p>
      </div>

      {/* Real-time Search Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
          <input
            type="text"
            placeholder="Search terms & legal clauses (e.g. WhatsApp, Refund, SLA, Billing)..."
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
              <span>Section Navigation</span>
              <FileText className="h-3.5 w-3.5 text-emerald-400" />
            </h3>
            <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
              {filteredSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block py-1.5 px-3 rounded-xl text-xs font-medium transition-all ${
                    activeSection === sec.id
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 font-semibold"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Legal Document Content Body */}
        <main className="lg:col-span-8 p-6 sm:p-12 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-2xl text-white/80 space-y-10 leading-relaxed text-sm">
          {/* Key Summary Alert Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-black border border-emerald-500/30 text-xs text-white/80 leading-relaxed">
            <p className="font-bold text-emerald-300 text-sm mb-1 flex items-center gap-2">
              <Info className="h-4 w-4" /> Welcome to Loomis Reviews
            </p>
            These Master Terms of Service ("Agreement") govern your subscription, access to, and use of the <strong>Loomis Reviews</strong> software platform, APIs, WhatsApp automation tools, and associated services provided to your restaurant or business entity.
          </div>

          {/* Section 1: Acceptance */}
          <section id="1-acceptance" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" /> 1. Acceptance of Terms
            </h2>
            <p>
              By creating an account, executing an order form, or accessing Loomis Reviews, you confirm that you have read, understood, and agree to be legally bound by this Agreement. If you are accepting on behalf of a restaurant chain, franchise, or corporate entity, you represent that you possess full legal authority to bind such entity.
            </p>
          </section>

          {/* Section 2: Eligibility */}
          <section id="2-eligibility" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Scale className="h-5 w-5 text-emerald-400" /> 2. Eligibility & Restaurant Verification
            </h2>
            <p>
              Loomis Reviews is designed exclusively for commercial food service establishments, cafes, restaurants, cloud kitchens, and legitimate hospitality businesses. You must be at least 18 years of age and hold valid legal ownership or management authority over the specified business locations.
            </p>
          </section>

          {/* Section 3: Accounts */}
          <section id="3-accounts" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Lock className="h-5 w-5 text-emerald-400" /> 3. Account Security & Credentials
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your account login credentials, API tokens, and POS authorization keys. You assume full responsibility for all activities occurring under your merchant account. Notify support@loomisreviews.com immediately if you suspect unauthorized access.
            </p>
          </section>

          {/* Section 4: Subscriptions */}
          <section id="4-subscriptions" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-emerald-400" /> 4. Subscriptions & Plan Tiers
            </h2>
            <p>
              Loomis Reviews offers monthly and annual subscription tiers (e.g. <strong>Starter</strong> at ₹2,999/month, <strong>Growth</strong> at ₹5,999/month, and <strong>Enterprise</strong> custom pricing). Plan features, messaging quotas, and outlet limits are detailed on our official Pricing page.
            </p>
          </section>

          {/* Section 5: Payments */}
          <section id="5-payments" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-emerald-400" /> 5. Payments, Billing & Taxes
            </h2>
            <p>
              Subscription fees are billed in advance on a recurring monthly or annual basis. All prices are exclusive of applicable statutory taxes (such as GST or VAT) unless explicitly stated otherwise. You agree to provide valid credit card or payment authorization.
            </p>
          </section>

          {/* Section 6: Renewals */}
          <section id="6-renewals" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <RefreshCcw className="h-5 w-5 text-emerald-400" /> 6. Automatic Renewals
            </h2>
            <p>
              Subscriptions automatically renew at the end of each billing cycle (monthly or annual) at the current non-promotional rate unless you cancel your plan prior to the renewal date via your merchant dashboard.
            </p>
          </section>

          {/* Section 7: Cancellation */}
          <section id="7-cancellation" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <RefreshCcw className="h-5 w-5 text-emerald-400" /> 7. Cancellation & Offboarding
            </h2>
            <p>
              You may cancel your subscription at any time directly through your merchant dashboard or by submitting a written request to support@loomisreviews.com. Upon cancellation, your service remains active until the conclusion of your current paid billing period.
            </p>
          </section>

          {/* Section 8: Refund Policy */}
          <section id="8-refund-policy" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-emerald-400" /> 8. Refund Policy (30-Day Money Back Guarantee)
            </h2>
            <p>
              We stand behind Loomis Reviews with a <strong>30-Day Money Back Guarantee</strong> for new subscribers. If our platform fails to deliver increased Google reviews or customer repeat visit engagement within your first 30 days of paid subscription, contact support@loomisreviews.com for a 100% full refund. Beyond the first 30 days, payments are non-refundable.
            </p>
          </section>

          {/* Section 9: Acceptable Use */}
          <section id="9-acceptable-use" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-emerald-400" /> 9. Acceptable Use Policy
            </h2>
            <p>
              You agree not to use Loomis Reviews to send unsolicited spam, misleading promotional claims, harassing communication, illegal content, or unauthorized bulk messages. Messaging must strictly pertain to genuine customer dining experiences.
            </p>
          </section>

          {/* Section 10: Customer Responsibilities */}
          <section id="10-customer-responsibilities" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Scale className="h-5 w-5 text-emerald-400" /> 10. Merchant Responsibilities & Consent
            </h2>
            <p>
              You represent and warrant that your restaurant has obtained all necessary guest consents and opt-ins required by applicable privacy laws before uploading guest phone numbers or triggering automated WhatsApp review messages.
            </p>
          </section>

          {/* Section 11: WhatsApp Usage */}
          <section id="11-whatsapp-usage" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-emerald-400" /> 11. WhatsApp Usage & Meta Business API Compliance
            </h2>
            <p>
              Loomis Reviews uses official Meta WhatsApp Cloud APIs. You agree to comply strictly with Meta's Commerce Policy and Business Messaging Policies. You acknowledge that Meta reserves the right to suspend WhatsApp accounts that violate opt-in or content policies.
            </p>
          </section>

          {/* Section 12: Google Review Usage */}
          <section id="12-google-review-usage" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Star className="h-5 w-5 text-emerald-400" /> 12. Google Review Guidelines & Non-Gating Compliance
            </h2>
            <p>
              Loomis Reviews operates in strict alignment with Google Business Profile policies. We strictly prohibit "review gating" (prohibiting or discouraging negative reviews or selectively soliciting positive reviews). All guests must have equal access to leave public feedback.
            </p>
          </section>

          {/* Section 13: Service Availability */}
          <section id="13-service-availability" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Server className="h-5 w-5 text-emerald-400" /> 13. Service Availability & Downtime SLA
            </h2>
            <p>
              We target 99.99% core infrastructure uptime. Scheduled routine maintenance will be announced in advance via email or status banner. We are not liable for temporary service interruptions caused by third-party outages (e.g. Meta WhatsApp API downtime or Google API rate limits).
            </p>
          </section>

          {/* Section 14: Intellectual Property */}
          <section id="14-intellectual-property" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Lock className="h-5 w-5 text-emerald-400" /> 14. Intellectual Property & Data Ownership
            </h2>
            <p>
              Loomis Reviews retains all rights, title, and interest in and to the platform, source code, logos, and algorithms. You retain 100% ownership of your restaurant customer lists, transaction logs, and dining database.
            </p>
          </section>

          {/* Section 15: Confidentiality */}
          <section id="15-confidentiality" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Lock className="h-5 w-5 text-emerald-400" /> 15. Confidentiality & Non-Disclosure
            </h2>
            <p>
              Both parties agree to protect non-public technical information, financial terms, and customer data from unauthorized disclosure to third parties using reasonable standard of care.
            </p>
          </section>

          {/* Section 16: Termination */}
          <section id="16-termination" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-emerald-400" /> 16. Termination & Service Suspension
            </h2>
            <p>
              We reserve the right to suspend or terminate accounts that breach acceptable use terms, send spam via WhatsApp, or fail to pay subscription fees within 14 days of due date.
            </p>
          </section>

          {/* Section 17: Limitation of Liability */}
          <section id="17-limitation-of-liability" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Scale className="h-5 w-5 text-emerald-400" /> 17. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Loomis Reviews' aggregate financial liability arising out of this Agreement shall not exceed the total subscription fees paid by you in the 12 months preceding the claim.
            </p>
          </section>

          {/* Section 18: Warranty Disclaimer */}
          <section id="18-warranty-disclaimer" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-emerald-400" /> 18. Warranty Disclaimer
            </h2>
            <p>
              Except as expressly warranted herein, the software platform is provided "as is" and "as available" without warranties of any kind, express or implied, including merchantability or fitness for a particular purpose.
            </p>
          </section>

          {/* Section 19: Force Majeure */}
          <section id="19-force-majeure" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Server className="h-5 w-5 text-emerald-400" /> 19. Force Majeure
            </h2>
            <p>
              Neither party shall be held liable for delay or failure in performance resulting from acts of God, war, pandemic, internet infrastructure failure, telecommunication carrier outages, or government restrictions.
            </p>
          </section>

          {/* Section 20: Governing Law */}
          <section id="20-governing-law" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Scale className="h-5 w-5 text-emerald-400" /> 20. Governing Law & Dispute Resolution
            </h2>
            <p>
              This Agreement shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any dispute arising under this Agreement shall be resolved through binding arbitration or competent courts.
            </p>
          </section>

          {/* Section 21: Changes to Terms */}
          <section id="21-changes-to-terms" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <RefreshCcw className="h-5 w-5 text-emerald-400" /> 21. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms from time to time. Material updates will be notified via email or dashboard alert at least 15 days before taking effect. Continued platform usage constitutes acceptance of updated terms.
            </p>
          </section>

          {/* Section 22: Contact */}
          <section id="22-contact" className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Mail className="h-5 w-5 text-emerald-400" /> 22. Legal Contact & Notices
            </h2>
            <p>
              For legal notices or questions regarding this Agreement, please contact our legal counsel:
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-black border border-emerald-500/30 space-y-2 text-xs">
              <p className="font-bold text-white text-sm">Loomis Reviews Legal Affairs</p>
              <p className="text-white/70">Email: <a href="mailto:sales@loomisreviews.com" className="text-emerald-400 hover:underline">sales@loomisreviews.com</a></p>
              <p className="text-white/70">Support: <a href="mailto:support@loomisreviews.com" className="text-emerald-400 hover:underline">support@loomisreviews.com</a></p>
              <p className="text-white/70">Website: <a href="https://loomisreviews.com" className="text-emerald-400 hover:underline">loomisreviews.com</a></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
