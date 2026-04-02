"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, BookOpen, Zap, CloudSync, ArrowRight, ShieldCheck, Cpu, Database, Mic } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Download Once",
    description: "Connect to internet briefly to download your learning clusters. Our smart compression ensures you get high-quality video lessons even on slow connections.",
    icon: Download,
    color: "bg-blue-500",
    details: ["Smart Compression", "Subject Bundles", "Low Data Usage"]
  },
  {
    title: "Learn Offline",
    description: "Access all videos, quizzes, and AI voice notes without any signal. Everything is stored locally on your device for instant access anywhere.",
    icon: BookOpen,
    color: "bg-green-500",
    details: ["Zero Buffering", "Works in Basements", "No Signal Needed"]
  },
  {
    title: "Auto-Upgrade",
    description: "When internet returns, your progress syncs automatically. We update your content with the latest lessons without you doing anything.",
    icon: CloudSync,
    color: "bg-indigo-500",
    details: ["Silent Syncing", "Score Backups", "Fresh Content"]
  },
  {
    title: "Smarter AI",
    description: "The AI Doubt Solver becomes even more powerful with every sync. It learns from your patterns to provide better local assistance.",
    icon: Zap,
    color: "bg-amber-500",
    details: ["Personalized Hints", "Local Cache", "Voice Support"]
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="py-20 bg-mesh relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
              Engineering <span className="text-gradient">Simplicity</span> <br /> 
              For Rural Reality
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 font-bold leading-relaxed mb-10">
              We've spent thousands of hours in villages to understand one thing: 
              Technology works best when it's invisible and reliable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-2xl h-16 px-10 text-xl font-bold shadow-xl shadow-primary/20">
                Try the App
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl h-16 px-10 text-xl font-bold glass">
                Read Whitepaper
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-32 space-y-32">
        {steps.map((step, i) => (
          <div key={step.title} className="container mx-auto px-4 md:px-6">
            <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="lg:w-1/2 space-y-8">
                <AnimatedSection direction={i % 2 === 0 ? "right" : "left"}>
                  <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center text-white mb-8 shadow-2xl`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                    {i + 1}. {step.title}
                  </h2>
                  <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-8">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border/50">
                        <ShieldCheck className={`w-5 h-5 ${step.color.replace('bg-', 'text-')}`} />
                        <span className="font-bold">{detail}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <div className="lg:w-1/2 w-full max-w-xl">
                 <AnimatedSection direction="up">
                    <div className="aspect-square relative rounded-[40px] overflow-hidden border-8 border-slate-50 dark:border-slate-900 shadow-2xl shadow-primary/5 bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-12">
                       <step.icon className={`w-1/2 h-1/2 ${step.color.replace('bg-', 'text-')} opacity-20`} />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-8xl font-black text-slate-100 dark:text-slate-800 tracking-tighter opacity-50">{i + 1}</p>
                       </div>
                    </div>
                 </AnimatedSection>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-white text-center rounded-[60px] mx-4 md:mx-10 mb-20 overflow-hidden relative">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
         <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
               Ready to experience the <br /> offline revolution?
            </h3>
            <Button size="lg" className="rounded-2xl h-20 px-12 text-2xl font-black bg-white text-primary hover:bg-slate-50 shadow-2xl">
               Download Now
            </Button>
         </div>
      </section>
    </div>
  );
}
