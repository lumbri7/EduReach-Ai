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
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection direction="up">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Simple 4-Step Magic</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We&apos;ve engineered a system that respects your reality. No constant connection, no constant frustration.
            </p>
          </AnimatedSection>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <AnimatedSection 
                key={step.title} 
                direction="up" 
                delay={i * 0.2}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className="relative">
                  <div className={`w-20 h-20 rounded-2xl ${step.color} shadow-lg flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className={`absolute -inset-4 ${step.color} opacity-20 blur-xl rounded-full -z-10`} />
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-2xl font-bold">{step.title}</h4>
                  <p className="text-muted-foreground leading-relaxed font-medium px-4">
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
