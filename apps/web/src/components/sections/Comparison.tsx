"use client";

import React from "react";
import { Check, X, ShieldCheck } from "lucide-react";
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
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection direction="up">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why EduReach AI?</h3>
          </AnimatedSection>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="up" className="glass rounded-3xl overflow-hidden shadow-2xl border-border/50">
            <div className="grid grid-cols-3 bg-slate-50 dark:bg-slate-900/50 p-6 border-b font-bold tracking-tight text-lg">
              <div className="text-muted-foreground">Feature</div>
              <div className="text-center text-red-500">Other Apps</div>
              <div className="text-center text-primary">EduReach AI</div>
            </div>

            <div className="divide-y divide-border/50">
              {comparisonItems.map((item, i) => (
                <div key={item.feature} className="grid grid-cols-3 p-6 items-center hover:bg-slate-50 transition-colors">
                  <div className="text-sm font-bold">{item.feature}</div>
                  <div className="text-center flex flex-col items-center gap-1 text-sm text-muted-foreground">
                    <X className="w-5 h-5 text-red-500/50" />
                    <span>{item.others}</span>
                  </div>
                  <div className="text-center flex flex-col items-center gap-1 text-sm font-bold text-primary">
                    <Check className="w-6 h-6 text-primary" />
                    <span>{item.edureach}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold flex items-center justify-center gap-2 text-primary">
                <ShieldCheck className="w-5 h-5" />
                EduReach AI is optimized for 2G/3G and Offline scenarios.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
