"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic, Search, Share2, Layers, Headphones, Sparkles } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const features = [
  {
    title: "Offline Learning Packs",
    description: "Curated content clusters that are downloaded once and work forever without internet.",
    icon: Layers,
    delay: 0.1,
  },
  {
    title: "AI Voice Teacher",
    description: "An AI that explains concepts in Hindi, Punjabi, and local dialects. No internet needed.",
    icon: Mic,
    delay: 0.2,
  },
  {
    title: "Scan & Solve Doubts",
    description: "Take a photo of any question. Our offline neural engine provides immediate hints.",
    icon: Search,
    delay: 0.3,
  },
  {
    title: "Village Mode",
    description: "Share lessons with nearby friends via Bluetooth or Wi-Fi Direct. Zero data cost.",
    icon: Share2,
    delay: 0.4,
  },
  {
    title: "Voice Guided Quizzes",
    description: "Interactive oral tests that help students who struggle with reading long texts.",
    icon: Headphones,
    delay: 0.5,
  },
  {
    title: "Smart Progress Sync",
    description: "Your achievements and notes are securely synced whenever you touch an internet zone.",
    icon: Sparkles,
    delay: 0.6,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Designed for Impact</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every feature is built with one goal: ensuring that learning never stops, regardless of the signal strength.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
