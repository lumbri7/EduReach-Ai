"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, CloudLightning, Smartphone } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

const benefits = [
  "Works 100% without active internet",
  "AI Teacher speaks Hindi, Punjabi & more",
  "Download once, learn forever",
  "Smart sync when signal returns",
];

export function Solution() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content */}
          <div className="lg:w-1/2 space-y-8">
            <AnimatedSection direction="up">
              <h2 className="text-sm font-black tracking-[0.2em] text-secondary uppercase mb-4">The Solution</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
                Works Without Internet. <br />
                <span className="text-secondary italic">Improves</span> With It.
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-medium">
                EduReach AI is the first hybrid learning platform designed for the reality of rural infrastructure. 
                Our platform doesn&apos;t just &quot;support&quot; offline mode—it is <strong>offline-first</strong>.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((benefit, i) => (
                <AnimatedSection 
                  key={benefit} 
                  direction="up" 
                  delay={i * 0.1}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-border/50 hover:border-secondary/30 transition-all group"
                >
                  <div className="w-8 h-8 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-base font-black tracking-tight">{benefit}</span>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection direction="up" delay={0.4}>
              <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl bg-secondary hover:bg-secondary/90 shadow-xl shadow-secondary/20 transition-all gap-3 group active:scale-95">
                <Smartphone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Explore Features
              </Button>
            </AnimatedSection>
          </div>

          {/* Visual */}
          <AnimatedSection direction="left" className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-secondary/10 rounded-[40px] blur-3xl -z-10 transition-all group-hover:bg-secondary/20" />
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-8 border-white dark:border-slate-800">
              <Image 
                src="/solution-offline.png" 
                alt="EduReach AI Solution" 
                width={700} 
                height={700}
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Overlay Badges */}
            <motion.div 
               animate={{ x: [0, 8, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute top-12 -right-6 glass p-5 rounded-3xl shadow-2xl z-20 border-secondary/20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center">
                <CloudLightning className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Status</p>
                <p className="text-sm font-black">AUTO-SYNC ACTIVE</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
