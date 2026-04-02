"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WifiOff, AlertCircle, TrendingDown, Users } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const problems = [
  {
    icon: WifiOff,
    title: "Poor Connectivity",
    description: "Most edtech apps stop working the moment the signal bars drop.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: AlertCircle,
    title: "Lack of Guidance",
    description: "Students in remote villages often don't have access to quality tutoring.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: TrendingDown,
    title: "Expensive Data",
    description: "Streaming high-quality video lessons can be prohibitively expensive.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export function Problem() {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Visual Area */}
          <div className="lg:w-1/2 relative order-2 lg:order-1 w-full max-w-xl mx-auto lg:max-w-none">
            <AnimatedSection direction="right" className="relative">
              <div className="absolute -inset-10 bg-destructive/5 rounded-full blur-[100px] -z-10 animate-pulse-subtle" />
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <Image 
                  src="/problem-internet.png" 
                  alt="The Internet Problem" 
                  width={700} 
                  height={700}
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 glass px-5 py-3 rounded-2xl text-destructive font-black flex items-center gap-3 animate-float border-destructive/20 shadow-xl">
                  <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                  <span className="tracking-tight uppercase text-sm">No Signal Found</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Content Area */}
          <div className="lg:w-1/2 space-y-10 order-1 lg:order-2">
            <AnimatedSection direction="up" className="space-y-6">
              <h2 className="text-sm font-black tracking-[0.3em] text-primary uppercase">The Digital Divide</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                Why Traditional Apps <span className="text-destructive">Fail</span> in Villages
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-medium">
                The current education revolution is built for 5G cities. But for millions of students in rural areas, the &quot;Loading...&quot; spinner is the only thing they see. 
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-6 pt-4">
              {problems.map((problem, i) => (
                <AnimatedSection 
                  key={problem.title} 
                  direction="up" 
                  delay={i * 0.1}
                  className="flex gap-6 p-8 rounded-3xl border border-border/50 hover:border-destructive/20 transition-all group bg-slate-50/30 dark:bg-slate-900/20"
                >
                  <div className={`w-16 h-16 rounded-2xl ${problem.bg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-sm`}>
                    <problem.icon className={`w-8 h-8 ${problem.color}`} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-2xl font-black tracking-tight">{problem.title}</h4>
                    <p className="text-muted-foreground leading-relaxed font-medium">{problem.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
