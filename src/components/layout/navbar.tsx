"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { StrategyModal } from "@/components/ui/strategy-modal";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Showcase", href: "/#showcase" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolled(latest > 0.02);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top progress bar with glow */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 via-accent to-emerald-400 origin-left shadow-[0_0_12px_rgba(16,185,129,0.8)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 px-4 md:px-8",
          scrolled ? "top-2" : "top-0"
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 rounded-2xl transition-all duration-500",
            scrolled
              ? "bg-background/85 backdrop-blur-2xl backdrop-saturate-180 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "bg-transparent border border-transparent"
          )}
        >
          <Link href="/" className="group relative z-10 flex items-center gap-3">
            <Logo />
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-1 text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-emerald-400 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setIsStrategyModalOpen(true)}
              className="text-xs font-semibold text-white/80 hover:text-white px-3.5 py-2 transition-colors"
            >
              Log In
            </button>

            <Button
              onClick={() => setIsStrategyModalOpen(true)}
              size="default"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs rounded-xl h-10 px-5 gap-2 shadow-lg shadow-emerald-500/25 group/btn"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-200" />
              Book Demo
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-white/70 hover:text-white transition-all duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-[4.5rem] bg-black/80 backdrop-blur-md lg:hidden z-40"
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                className="lg:hidden absolute left-4 right-4 top-[5.25rem] bg-background/95 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl z-50"
              >
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-2.5 text-base font-medium text-white/70 hover:text-white border-b border-white/[0.06] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button
                    onClick={() => {
                      setMobileOpen(false);
                      setIsStrategyModalOpen(true);
                    }}
                    className="mt-4 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 text-white font-bold text-sm h-12"
                  >
                    Book Demo
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Interactive Strategy Scheduler Modal */}
      <StrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
      />
    </>
  );
}
