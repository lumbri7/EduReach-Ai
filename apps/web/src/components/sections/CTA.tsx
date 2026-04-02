"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-primary -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] -z-10 animate-pulse-subtle" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,0,0.15),transparent)] -z-10" />
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-white/10 blur-[150px] -z-10 rounded-full" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <AnimatedSection direction="up" className="space-y-8">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.95] md:leading-[0.9]">
              Education For <br /> 
              Every <span className="underline decoration-secondary decoration-8 underline-offset-12">Village</span>.
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-bold max-w-3xl mx-auto pt-4 leading-relaxed">
              Join 12,000+ students who are learning without internet constraints. Download the app today and start your journey.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto rounded-[24px] h-20 px-12 text-2xl font-black bg-white text-primary hover:bg-slate-50 shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all gap-4 group">
              <Download className="w-7 h-7 group-hover:translate-y-1 transition-transform" />
              Get The App
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-[24px] h-20 px-12 text-2xl font-black border-white/40 text-white hover:bg-white/10 glass gap-4 active:scale-95 transition-all">
              <Sparkles className="w-7 h-7" />
              Join Mission
            </Button>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4} className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-primary-foreground/70 pt-16 border-t border-white/10">
             <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-sm font-black uppercase tracking-[0.2em] text-white">Active in 4 States</span>
             </div>
             <div className="hidden sm:block w-2 h-2 rounded-full bg-white/30" />
             <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse shadow-[0_0_15px_rgba(0,255,0,0.5)]" />
                <span className="text-sm font-black uppercase tracking-[0.2em] text-white">1.2M Lessons Served</span>
             </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
