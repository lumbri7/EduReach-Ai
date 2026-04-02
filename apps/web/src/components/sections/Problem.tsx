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
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Visual */}
          <AnimatedSection direction="right" className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-red-500/5 rounded-full blur-3xl -z-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <Image 
                src="/problem-internet.png" 
                alt="The Internet Problem" 
                width={600} 
                height={600}
                className="object-cover"
              />
              <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full text-red-500 font-bold flex items-center gap-2 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                No Signal Found
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
            <AnimatedSection direction="up">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Digital Divide</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Why Traditional Apps <span className="text-red-500">Fail</span> in Villages
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The current education revolution is built for 5G cities. But for millions of students in rural areas, the &quot;Loading...&quot; spinner is the only thing they see.
              </p>

            </AnimatedSection>

            <div className="grid grid-cols-1 gap-6 pt-8">
              {problems.map((problem, i) => (
                <AnimatedSection 
                  key={problem.title} 
                  direction="up" 
                  delay={i * 0.1}
                  className="flex gap-4 p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl ${problem.bg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <problem.icon className={`w-6 h-6 ${problem.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{problem.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
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
