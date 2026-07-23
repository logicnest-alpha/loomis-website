"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoiCalculatorProps {
  onOpenModal?: () => void;
}

export function RoiCalculator({ onOpenModal }: RoiCalculatorProps) {
  const [teamSize, setTeamSize] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(65);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(12);

  // Math logic: Estimated automation efficiency (75% of manual hours saved)
  const weeklyHoursSaved = Math.round(teamSize * manualHoursPerWeek * 0.75);
  const annualHoursSaved = weeklyHoursSaved * 52;
  const annualDollarsSaved = Math.round(annualHoursSaved * hourlyRate);
  const ROIPercentage = Math.round((annualDollarsSaved / 45000) * 100);

  return (
    <div className="w-full rounded-3xl border border-accent/40 bg-gradient-to-b from-white/[0.04] to-white/[0.005] backdrop-blur-2xl p-6 md:p-10 shadow-[0_30px_90px_-20px_rgba(124,58,237,0.25),inset_0_1px_0_0_rgba(255,255,255,0.18)] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-light/60 to-transparent" />

      <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/20 border border-accent/40 text-accent-light shadow-lg shadow-accent/20">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2 flex-wrap">
              Interactive ROI & Capital Reclamation Calculator
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-light bg-accent/20 border border-accent/30 px-2.5 py-0.5 rounded-full">
                Live Simulator
              </span>
            </h3>
            <p className="text-xs text-white/60 mt-0.5 font-light">
              Estimate your annual financial savings by automating manual workflows with LOOMIS AI.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-7">
          {/* Team Size Slider */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-white/90 flex items-center gap-1.5">
                Team Size (Employees handling ops/sales)
              </label>
              <span className="font-mono font-bold text-accent-light bg-accent/20 px-3 py-1 rounded-lg border border-accent/30">
                {teamSize} members
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="100"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-violet-500 hover:accent-violet-400 transition-all"
            />
            <div className="flex justify-between text-[10px] text-white/40 font-mono font-medium">
              <span>2 members</span>
              <span>50 members</span>
              <span>100+ members</span>
            </div>
          </div>

          {/* Hourly Rate Slider */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-white/90 flex items-center gap-1.5">
                Average Loaded Hourly Rate ($/hr)
              </label>
              <span className="font-mono font-bold text-accent-light bg-accent/20 px-3 py-1 rounded-lg border border-accent/30">
                ${hourlyRate}/hr
              </span>
            </div>
            <input
              type="range"
              min="25"
              max="200"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-violet-500 hover:accent-violet-400 transition-all"
            />
            <div className="flex justify-between text-[10px] text-white/40 font-mono font-medium">
              <span>$25/hr</span>
              <span>$100/hr</span>
              <span>$200/hr</span>
            </div>
          </div>

          {/* Manual Hours / Week Slider */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-white/90 flex items-center gap-1.5">
                Manual Workflow Hours / Week per Member
              </label>
              <span className="font-mono font-bold text-accent-light bg-accent/20 px-3 py-1 rounded-lg border border-accent/30">
                {manualHoursPerWeek} hrs/week
              </span>
            </div>
            <input
              type="range"
              min="4"
              max="30"
              step="1"
              value={manualHoursPerWeek}
              onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
              className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-violet-500 hover:accent-violet-400 transition-all"
            />
            <div className="flex justify-between text-[10px] text-white/40 font-mono font-medium">
              <span>4 hrs</span>
              <span>15 hrs</span>
              <span>30 hrs</span>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-neutral-950/80 border border-white/15 rounded-2xl p-6 space-y-5 shadow-xl">
          <div className="space-y-1">
            <span className="text-[11px] text-white/50 uppercase tracking-widest font-mono font-bold">
              Projected Annual Capital Saved
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono flex items-center gap-1">
              <DollarSign className="h-8 w-8 text-emerald-400" />
              <span>{annualDollarsSaved.toLocaleString()}</span>
              <span className="text-sm font-normal text-white/50">/yr</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div>
              <span className="text-[10px] text-white/50 uppercase tracking-wider block font-mono">
                Hours Reclaimed
              </span>
              <span className="text-lg font-bold text-accent-light font-mono flex items-center gap-1 mt-1">
                <Clock className="h-4 w-4" />
                {annualHoursSaved.toLocaleString()} hrs
              </span>
            </div>
            <div>
              <span className="text-[10px] text-white/50 uppercase tracking-wider block font-mono">
                Estimated Annual ROI
              </span>
              <span className="text-lg font-bold text-emerald-400 font-mono flex items-center gap-1 mt-1">
                <TrendingUp className="h-4 w-4" />
                {ROIPercentage}%
              </span>
            </div>
          </div>

          <Button
            onClick={onOpenModal}
            className="w-full mt-2 bg-accent hover:bg-accent-light text-white font-bold text-xs h-11 gap-2 shadow-lg shadow-accent/30"
          >
            <Sparkles className="h-4 w-4" />
            Claim This ROI — Book Strategy Call
          </Button>
        </div>
      </div>
    </div>
  );
}
