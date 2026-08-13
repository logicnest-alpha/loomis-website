import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loomis Reviews — Restaurant Review Automation & WhatsApp Loyalty Platform",
  description:
    "Turn every happy restaurant customer into a 5-star Google review and a repeat visitor. Automate WhatsApp follow-ups, feedback, coupons, and customer loyalty automatically.",
  keywords: [
    "Restaurant Review Automation",
    "WhatsApp Review Software",
    "Restaurant Loyalty Platform",
    "Google Review Automation",
    "Customer Retention Software",
    "WhatsApp Customer Engagement",
    "Restaurant Marketing Software",
    "Google Maps Reviews for Restaurants",
  ],
  openGraph: {
    title: "Loomis Reviews — Turn Every Happy Customer into a 5-Star Review",
    description:
      "Automatically follow up with customers on WhatsApp, collect feedback, increase Google reviews, reward loyalty, and bring customers back—all from one platform.",
    type: "website",
    locale: "en_US",
    siteName: "Loomis Reviews",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loomis Reviews — Restaurant Customer Retention Platform",
    description:
      "Automate reviews, increase repeat customers, and build customer loyalty effortlessly on WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/40 selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
