"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect
          width="32"
          height="32"
          rx="8"
          className="fill-accent/20 stroke-accent/40"
          strokeWidth="1"
        />
        <path
          d="M8 22V10L16 16L24 10V22"
          stroke="url(#logo-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <defs>
          <linearGradient id="logo-gradient" x1="8" y1="10" x2="24" y2="22">
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
      {showText && (
        <span className="text-lg font-semibold tracking-[-0.02em] text-white">
          LOOMIS
        </span>
      )}
    </div>
  );
}
