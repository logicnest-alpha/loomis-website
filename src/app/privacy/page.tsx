import { Metadata } from "next";
import { PrivacyContent } from "@/components/pages/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy — Loomis Reviews | GDPR & CCPA Compliance",
  description:
    "Official Privacy Policy for Loomis Reviews SaaS Platform. Learn how we collect, protect, and process business data, WhatsApp messaging logs, Google review data, and customer retention information.",
  keywords: [
    "Loomis Reviews privacy policy",
    "restaurant SaaS GDPR policy",
    "WhatsApp Meta compliance privacy",
    "Google review data privacy",
  ],
  alternates: {
    canonical: "https://loomisreviews.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Loomis Reviews",
    description:
      "GDPR and CCPA compliant Privacy Policy. Transparent data protection standards for restaurant merchants and dining guests.",
    url: "https://loomisreviews.com/privacy",
    siteName: "Loomis Reviews",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://loomisreviews.com/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Loomis Reviews Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Loomis Reviews",
    description:
      "GDPR & CCPA data protection guidelines for Loomis Reviews restaurant automation platform.",
    images: ["https://loomisreviews.com/og-privacy.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Privacy Policy — Loomis Reviews",
      "description": "Comprehensive Privacy Policy covering data collection, GDPR compliance, Meta WhatsApp API usage, and user rights.",
      "url": "https://loomisreviews.com/privacy",
      "inLanguage": "en-US",
      "publisher": {
        "@type": "Organization",
        "name": "Loomis Reviews",
        "url": "https://loomisreviews.com",
      },
    },
  ],
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrivacyContent />
    </main>
  );
}
