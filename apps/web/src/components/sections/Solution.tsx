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
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">The Solution</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Works Without Internet. <br />
                <span className="text-secondary italic">Improves</span> With It.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
                  className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-border/50"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm font-bold">{benefit}</span>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection direction="up" delay={0.4}>
              <Button size="lg" className="rounded-xl h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-secondary/20 transition-all gap-2 group">
                <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Explore Features
              </Button>
            </AnimatedSection>
          </div>

          {/* Visual */}
          <AnimatedSection direction="left" className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl -z-10 transition-all group-hover:bg-secondary/20" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <Image 
                src="/solution-offline.png" 
                alt="EduReach AI Solution" 
                width={600} 
                height={600}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Overlay Badges */}
            <motion.div 
               animate={{ x: [0, 5, 0] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute top-10 -right-4 glass p-4 rounded-2xl shadow-xl z-20 border-secondary/20"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-secondary text-white">
                  <CloudLightning className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold">Auto-Sync Active</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
