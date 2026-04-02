"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Play, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-premium">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-primary/10 text-primary border-primary/20 flex items-center gap-2 w-fit">
                <Sparkles className="w-4 h-4" />
                <span>Next-Gen Rural Education</span>
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              Education <span className="text-gradient">Without</span> <br /> 
              Internet Constraints
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium"
            >
              Empowering students in remote areas with a hybrid offline/online learning system. 
              Work fully offline, sync and upgrade when internet returns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-xl h-14 px-8 text-lg shadow-xl hover:shadow-primary/20 transition-all gap-2 group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download App
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl h-14 px-8 text-lg glass gap-2 border-primary/20 hover:bg-primary/5">
                <Play className="w-5 h-5 text-primary fill-primary" />
                See How It Works
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-border/50"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <span>100% Offline Ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>Smart Auto-Sync</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                <Globe className="w-5 h-5 text-primary" />
                <span>Multi-Language AI</span>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:ml-auto"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 aspect-square max-w-[550px] mx-auto group">
              <Image 
                src="/hero-student.png" 
                alt="Rural Education" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 border-primary/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</p>
                  <p className="text-sm font-bold">Offline Sync: 100%</p>
                </div>
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Sparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}
