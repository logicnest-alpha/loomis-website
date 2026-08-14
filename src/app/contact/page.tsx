import { Metadata } from "next";
import { ContactContent } from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact Us — Loomis Reviews | Restaurant Automation Support",
  description:
    "Need help growing your restaurant? Contact Loomis Reviews for sales, technical support, POS integration inquiries, or partnership opportunities. Fast 24-hour response SLA.",
  keywords: [
    "contact Loomis Reviews",
    "restaurant review support",
    "Loomis Reviews customer service",
    "WhatsApp restaurant integration support",
  ],
  alternates: {
    canonical: "https://loomisreviews.com/contact",
  },
  openGraph: {
    title: "Need Help? We're Here — Loomis Reviews Contact",
    description:
      "Get in touch with our restaurant automation specialists for sales, support, and custom POS integration requests.",
    url: "https://loomisreviews.com/contact",
    siteName: "Loomis Reviews",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://loomisreviews.com/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Loomis Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Need Help? Contact Loomis Reviews",
    description:
      "Get in touch with our restaurant automation team. Fast support for sales, POS integration, and technical inquiries.",
    images: ["https://loomisreviews.com/og-contact.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact Loomis Reviews",
      "description": "Customer support and sales inquiry page for Loomis Reviews SaaS Platform.",
      "url": "https://loomisreviews.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Loomis Reviews",
        "email": "support@loomisreviews.com",
        "url": "https://loomisreviews.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "support@loomisreviews.com",
            "availableLanguage": ["English"],
          },
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "sales@loomisreviews.com",
            "availableLanguage": ["English"],
          },
        ],
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </main>
  );
}
