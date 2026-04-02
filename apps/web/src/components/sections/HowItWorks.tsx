"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, BookOpen, Zap, CloudSync } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const steps = [
  {
    title: "Download Once",
    description: "Connect to internet briefly to download your learning clusters.",
    icon: Download,
    color: "bg-blue-500",
  },
  {
    title: "Learn Offline",
    description: "Access all videos, quizzes, and AI voice notes without any signal.",
    icon: BookOpen,
    color: "bg-green-500",
  },
  {
    title: "Auto-Upgrade",
    description: "When internet returns, your progress syncs and content updates.",
    icon: CloudSync,
    color: "bg-indigo-500",
  },
  {
    title: "Smarter AI",
    description: "The AI Doubt Solver becomes even more powerful with every sync.",
    icon: Zap,
    color: "bg-amber-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <AnimatedSection direction="up">
            <h2 className="text-sm font-black tracking-[0.3em] text-primary uppercase mb-4">The Process</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6 italic">Simple 4-Step Magic</h3>
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-medium">
              We&apos;ve engineered a system that respects your reality. No constant connection, no constant frustration. Just seamless learning.
            </p>
          </AnimatedSection>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Connecting Line */}
          <div className="absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <AnimatedSection 
                key={step.title} 
                direction="up" 
                delay={i * 0.15}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-28 h-28 rounded-[32px] ${step.color} shadow-2xl flex items-center justify-center text-white relative z-10 transition-transform duration-500`}
                  >
                    <step.icon className="w-12 h-12" />
                  </motion.div>
                  <div className={`absolute -inset-6 ${step.color} opacity-20 blur-2xl rounded-full -z-10 animate-pulse-subtle`} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-800 shadow-xl flex items-center justify-center font-black text-primary text-lg z-20">
                    {i + 1}
                  </div>
                </div>

                <div className="space-y-4 px-4">
                  <h4 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-muted-foreground leading-relaxed font-bold text-sm">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
