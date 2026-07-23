"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        align === "center" ? "text-center mx-auto max-w-4xl" : "max-w-4xl",
        "mb-20 md:mb-28",
        className
      )}
    >
      <Badge className="mb-6 px-4 py-1.5 text-[11px] font-mono tracking-[0.25em] uppercase bg-accent/15 border-accent/30 text-accent-light">
        {label}
      </Badge>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.035em] text-white leading-[1.08] drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
        {title}
      </h2>
      {description && (
        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/55 leading-relaxed font-light max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
