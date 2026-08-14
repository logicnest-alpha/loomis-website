import { Metadata } from "next";
import { Pricing } from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Pricing Plans — Loomis Reviews | Automated Customer Retention & Reviews",
  description:
    "Simple pricing for every restaurant. Starter plan at ₹2,999/month, Growth at ₹5,999/month, and Enterprise custom options. Everything you need to automate Google reviews, WhatsApp marketing, and repeat customer loyalty.",
  keywords: [
    "restaurant pricing",
    "Google review automation price",
    "WhatsApp marketing for restaurants",
    "Loomis Reviews pricing",
    "restaurant loyalty software pricing",
  ],
  alternates: {
    canonical: "https://loomisreviews.com/pricing",
  },
  openGraph: {
    title: "Simple Pricing for Every Restaurant — Loomis Reviews",
    description:
      "Automate customer reviews, loyalty, and repeat business. Flexible plans starting from ₹2,999/month with a 14-day free trial.",
    url: "https://loomisreviews.com/pricing",
    siteName: "Loomis Reviews",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://loomisreviews.com/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Loomis Reviews Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Pricing for Every Restaurant — Loomis Reviews",
    description:
      "Automate customer reviews, loyalty, and repeat business. Plans starting at ₹2,999/month with a 14-day free trial.",
    images: ["https://loomisreviews.com/og-pricing.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "Loomis Reviews SaaS Platform",
      "description":
        "Automated Google review generation and WhatsApp customer retention system for restaurants, cafes, and hospitality venues.",
      "brand": {
        "@type": "Brand",
        "name": "Loomis Reviews",
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "2999",
        "highPrice": "5999",
        "offerCount": "3",
        "offers": [
          {
            "@type": "Offer",
            "name": "Starter Plan",
            "price": "2999",
            "priceCurrency": "INR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "2999",
              "priceCurrency": "INR",
              "unitCode": "MON",
            },
            "description": "Up to 500 Customers, WhatsApp Review Requests, Google Review Automation, Customer Database, Coupon System.",
          },
          {
            "@type": "Offer",
            "name": "Growth Plan",
            "price": "5999",
            "priceCurrency": "INR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "5999",
              "priceCurrency": "INR",
              "unitCode": "MON",
            },
            "description": "Unlimited Customers, Advanced Automation, Campaign Builder, Loyalty Engine, Customer Segments, Analytics Pro.",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does the 14-day free trial work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You get full access to all Growth plan features for 14 days with zero credit card required.",
          },
        },
        {
          "@type": "Question",
          "name": "What is your 30-day Money Back Guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If Loomis Reviews does not increase your 5-star Google Reviews or customer repeat visits within your first 30 days of paid subscription, receive a 100% full refund.",
          },
        },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Pricing />
    </main>
  );
}
