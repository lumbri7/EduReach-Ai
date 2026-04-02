"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Play, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-mesh">
      {/* Decorative Elements */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-subtle" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <Badge variant="secondary" className="px-4 py-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-primary border-primary/20 flex items-center gap-2 shadow-sm animate-glow">
                <Sparkles className="w-4 h-4" />
                <span className="font-bold tracking-tight">Voted #1 Rural EdTech 2026</span>
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] md:leading-[0.95]"
            >
              Education <br className="hidden md:block" /> 
              <span className="text-gradient">Without</span> <br /> 
              Limits.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Empowering students in remote areas with a hybrid offline/online learning system. 
              Work fully offline, sync when you can.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all gap-3 group">
                <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                Download App
              </Button>
              <Link href="/impact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-16 px-10 text-xl font-bold rounded-2xl glass hover:bg-primary/5 active:scale-95 transition-all gap-3">
                  <Play className="w-6 h-6 text-primary fill-primary" />
                  See Impact
                </Button>
              </Link>
            </motion.div>

            {/* Localized Floating Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-8 text-sm font-bold text-muted-foreground/70 tracking-widest uppercase"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span>12k+ Active Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>450+ Villages</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>100% Offline Mode</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Area */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border-[12px] border-white dark:border-slate-800 aspect-[3/4] max-w-[420px] mx-auto group">
                <div className="absolute inset-0 bg-primary/20 animate-pulse-subtle -z-10" />
                <Image 
                  src="/hero-student.png" 
                  alt="Rural Education" 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-8 left-8 right-8 p-4 glass rounded-2xl space-y-1">
                  <p className="text-white font-black text-lg">Priya Sharma</p>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-wider">Class 10 | Gurdaspur, PB</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-4 md:-right-8 glass p-5 rounded-[24px] shadow-2xl z-20 border-primary/20 flex items-center gap-4 animate-float"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Status</p>
                  <p className="text-sm font-black">AI SYNCED 100%</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-4 md:-left-12 glass p-5 rounded-[24px] shadow-2xl z-20 border-secondary/20 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Globe className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Impact</p>
                  <p className="text-sm font-black">OFFLINE READY</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
