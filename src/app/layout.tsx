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
  title: "LOOMIS — Autonomous AI Engineering for Enterprise Scale",
  description:
    "LOOMIS designs, builds, and deploys production-grade AI systems — from sales velocity and CRM sync to 24/7 voice receptionists and WhatsApp automation.",
  keywords: [
    "AI automation",
    "Enterprise AI engineering",
    "AI sales systems",
    "CRM automation",
    "WhatsApp AI bots",
    "Voice AI receptionist",
    "Multi-agent workflows",
  ],
  openGraph: {
    title: "LOOMIS — Autonomous AI Engineering for Enterprise Scale",
    description:
      "We architect and deploy production-grade AI systems that eliminate operational bottlenecks and scale revenue 10x.",
    type: "website",
    locale: "en_US",
    siteName: "LOOMIS AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOOMIS — Autonomous AI Engineering for Enterprise Scale",
    description:
      "We architect and deploy production-grade AI systems that eliminate operational bottlenecks and scale revenue 10x.",
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
