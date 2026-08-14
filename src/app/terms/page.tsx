import { Metadata } from "next";
import { TermsContent } from "@/components/pages/terms-content";

export const metadata: Metadata = {
  title: "Terms of Service — Loomis Reviews | SaaS Agreement",
  description:
    "Master Terms of Service for Loomis Reviews SaaS Platform. Read subscription rules, acceptable use policy, refund policy, WhatsApp API terms, and Google Review guidelines.",
  keywords: [
    "Loomis Reviews terms of service",
    "restaurant SaaS terms",
    "WhatsApp Meta compliance terms",
    "Google review terms",
  ],
  alternates: {
    canonical: "https://loomisreviews.com/terms",
  },
  openGraph: {
    title: "Terms of Service — Loomis Reviews",
    description:
      "Master SaaS Terms of Service agreement governing subscription plans, acceptable use, refund policies, and API integrations.",
    url: "https://loomisreviews.com/terms",
    siteName: "Loomis Reviews",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://loomisreviews.com/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Loomis Reviews Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Loomis Reviews",
    description:
      "Subscription terms, refund policies, and acceptable use guidelines for Loomis Reviews SaaS platform.",
    images: ["https://loomisreviews.com/og-terms.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Terms of Service — Loomis Reviews",
      "description": "Master SaaS Terms of Service agreement for Loomis Reviews restaurant customer retention and review automation system.",
      "url": "https://loomisreviews.com/terms",
      "inLanguage": "en-US",
      "publisher": {
        "@type": "Organization",
        "name": "Loomis Reviews",
        "url": "https://loomisreviews.com",
      },
    },
  ],
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TermsContent />
    </main>
  );
}
