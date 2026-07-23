"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = "139, 92, 246",
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative rounded-3xl border border-white/[0.1] bg-gradient-to-b from-white/[0.035] to-white/[0.005] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.22] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:shadow-[0_30px_90px_-20px_rgba(124,58,237,0.25),inset_0_1px_0_0_rgba(255,255,255,0.25)]",
        className
      )}
    >
      {/* Radial Spotlight Beam tracking mouse */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
        style={{
          opacity,
          background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(${glowColor}, 0.15), transparent 45%)`,
        }}
      />
      {/* Subtle top edge highlight beam */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-accent-light/60 transition-all duration-500" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
