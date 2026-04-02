"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-primary -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,0,0.1),transparent)] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Bring Education to <br /> Every <span className="underline decoration-secondary decoration-4 underline-offset-8">Village</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 font-medium max-w-2xl mx-auto pt-6">
              Join 12,000+ students who are learning without internet constraints. Download the app today and start your journey.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="rounded-2xl h-16 px-10 text-xl bg-white text-primary hover:bg-slate-50 shadow-2xl hover:scale-105 transition-all gap-3 group">
              <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
              Download EduReach App
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl h-16 px-10 text-xl border-white/30 text-white hover:bg-white/10 glass gap-3">
              <Sparkles className="w-6 h-6" />
              Join the Mission
            </Button>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4} className="flex items-center justify-center gap-8 text-primary-foreground/70 pt-8 border-t border-white/10">
             <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-widest">Active in 4 States</span>
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest">1.2M Lessons Served</span>
             </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
