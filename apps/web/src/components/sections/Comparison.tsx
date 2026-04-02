"use client";

import React from "react";
import { Check, X, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const comparisonItems = [
  {
    feature: "Offline Mode",
    others: "Limited Cache",
    edureach: "Full Offline clusters",
  },
  {
    feature: "Data Cost",
    others: "High (Streaming)",
    edureach: "Zero (Downloaded once)",
  },
  {
    feature: "Language Support",
    others: "English / Hindi only",
    edureach: "Multi-dialects AI Voice",
  },
  {
    feature: "Sync Speed",
    others: "Manual / Slow",
    edureach: "Smart Auto-Sync",
  },
  {
    feature: "Village Mode Sharing",
    others: "No (Needs Cloud)",
    edureach: "Yes (Bluetooth/Wi-Fi Direct)",
  },
];

export function Comparison() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection direction="up">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 italic">Why Rural India Chooses Us</h3>
          </AnimatedSection>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Table */}
          <AnimatedSection direction="up" className="hidden md:block glass rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-border/50">
            <div className="grid grid-cols-3 bg-slate-50 dark:bg-slate-900/50 p-8 border-b font-black tracking-widest text-sm uppercase">
              <div className="text-muted-foreground">Capabilities</div>
              <div className="text-center text-destructive">Standard Apps</div>
              <div className="text-center text-primary flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                EduReach AI
              </div>
            </div>

            <div className="divide-y divide-border/30">
              {comparisonItems.map((item, i) => (
                <motion.div 
                  key={item.feature} 
                  whileHover={{ backgroundColor: "var(--primary-foreground)", opacity: 0.9 }}
                  className="grid grid-cols-3 p-8 items-center transition-colors"
                >
                  <div className="text-lg font-bold tracking-tight">{item.feature}</div>
                  <div className="text-center flex flex-col items-center gap-1 text-muted-foreground/60">
                    <X className="w-5 h-5 text-destructive/40" />
                    <span className="text-sm font-medium">{item.others}</span>
                  </div>
                  <div className="text-center flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-base font-black text-primary tracking-tight">{item.edureach}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary/5 p-8 text-center border-t border-primary/10">
              <p className="text-sm font-black flex items-center justify-center gap-3 text-primary uppercase tracking-widest">
                <ShieldCheck className="w-6 h-6" />
                Optimized for 2G/3G & Zero-Signal Environments
              </p>
            </div>
          </AnimatedSection>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonItems.map((item, i) => (
              <AnimatedSection 
                key={item.feature} 
                direction="up" 
                delay={i * 0.1}
                className="glass rounded-3xl p-6 border-border/50 space-y-4"
              >
                <h4 className="text-xl font-black tracking-tight border-b border-border/50 pb-3">{item.feature}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-destructive uppercase tracking-widest">Others</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <X className="w-4 h-4 shrink-0" />
                      <span className="text-sm font-medium leading-tight">{item.others}</span>
                    </div>
                  </div>
                  <div className="space-y-2 border-l border-border/50 pl-4">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">EduReach</p>
                    <div className="flex items-center gap-2 text-primary">
                      <Check className="w-4 h-4 shrink-0" />
                      <span className="text-sm font-black leading-tight tracking-tight">{item.edureach}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            
            <div className="p-6 rounded-3xl bg-primary/5 text-center border border-primary/10">
               <p className="text-xs font-black text-primary uppercase tracking-widest leading-relaxed">
                  Engineered for the Digital Divide
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
