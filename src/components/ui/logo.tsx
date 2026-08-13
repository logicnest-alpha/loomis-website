"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-accent/30 via-emerald-500/20 to-accent-light/10 border border-accent/40 shadow-[0_0_15px_rgba(124,58,237,0.3)] shrink-0">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="url(#logo-star-grad)"
            stroke="#10B981"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="logo-star-grad" x1="2" y1="2" x2="22" y2="22">
              <stop stopColor="#F59E0B" />
              <stop offset="0.6" stopColor="#A78BFA" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
        {/* Glowing badge dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
        </span>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-base font-black tracking-tight text-white flex items-center gap-1">
            Loomis <span className="text-emerald-400 font-extrabold">Reviews</span>
          </span>
          <span className="text-[9px] font-medium tracking-wider uppercase text-white/40 mt-0.5">
            Customer Retention SaaS
          </span>
        </div>
      )}
    </div>
  );
}
