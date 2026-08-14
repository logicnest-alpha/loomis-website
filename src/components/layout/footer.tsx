"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Star, Heart, ArrowUpRight, MessageCircle } from "lucide-react";

const footerNavigation = {
  product: [
    { name: "Review Automation", href: "/#features" },
    { name: "WhatsApp Automation", href: "/#features" },
    { name: "Coupon Engine", href: "/#features" },
    { name: "Customer Timeline", href: "/#features" },
    { name: "Analytics Dashboard", href: "/#showcase" },
    { name: "Campaign Builder", href: "/#features" },
    { name: "Pricing Plans", href: "/pricing" },
  ],
  solutions: [
    { name: "Restaurants & Bistros", href: "/contact" },
    { name: "Multi-Location Chains", href: "/pricing" },
    { name: "Cafes & Bakeries", href: "/contact" },
    { name: "Cloud Kitchens", href: "/contact" },
    { name: "Fast Food Brands", href: "/contact" },
    { name: "Future: Salons & Gyms", href: "/contact" },
    { name: "Future: Clinics & Retail", href: "/contact" },
  ],
  resources: [
    { name: "Contact Team", href: "/contact" },
    { name: "POS Integration Guide", href: "/contact" },
    { name: "Meta WhatsApp API Setup", href: "/contact" },
    { name: "Google Review Playbook", href: "/pricing" },
    { name: "API Reference", href: "/pricing" },
  ],
  company: [
    { name: "About Loomis Reviews", href: "/" },
    { name: "Contact Support", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "System Status", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/90 text-white/70 overflow-hidden pt-16 pb-12">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-xs text-white/60 font-light leading-relaxed max-w-sm">
              Loomis Reviews is the #1 customer retention and Google review automation platform for restaurants, cafes, cloud kitchens, and hospitality brands.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                <Star className="h-3.5 w-3.5 fill-current" /> 4.9 Rating on Google
              </div>
              <div className="flex items-center gap-1 text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <MessageCircle className="h-3.5 w-3.5" /> Official Meta WhatsApp API
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Product & Features
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.product.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-emerald-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audiences */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Target Customer
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-emerald-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Resources & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-emerald-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Loomis Reviews SaaS Platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
