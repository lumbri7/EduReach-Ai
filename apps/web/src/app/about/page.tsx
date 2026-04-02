"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Award, BookOpen, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const stats = [
  { label: "Students Empowered", value: "12,000+", icon: Users },
  { label: "Villages Reached", value: "450+", icon: Globe },
  { label: "Lessons Delivered", value: "1.2M", icon: BookOpen },
  { label: "States Active", value: "4", icon: Award },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="py-32 bg-mesh relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              <AnimatedSection direction="up">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                  Our Mission: <br />
                  <span className="text-gradient italic">Equal Access</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground/90 font-bold leading-relaxed pt-6">
                  We believe that a student&apos;s location should never determine their potential. 
                  EduReach AI was born out of a simple question: <span className="italic underline decoration-primary decoration-2 underline-offset-4">&quot;How can we make world-class education work where the internet doesn&apos;t?&quot;</span>
                </p>
              </AnimatedSection>
            </div>
            <div className="lg:w-1/2 relative w-full max-w-xl mx-auto">
              <AnimatedSection direction="left">
                <div className="relative rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white dark:border-slate-900 group">
                  <Image 
                    src="/about-mission.png" 
                    alt="Our Mission" 
                    width={700} 
                    height={700}
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-border/50 bg-slate-50/30 dark:bg-slate-900/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <AnimatedSection 
                key={stat.label} 
                direction="up" 
                delay={i * 0.1}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center text-white">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter">{stat.value}</p>
                  <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-20">
            <AnimatedSection direction="up">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-12">The Story of <span className="italic text-primary">EduReach</span></h2>
              <div className="space-y-10 text-xl text-muted-foreground/90 leading-loose font-medium">
                <p>
                  Started by a group of educators and engineers in Mohali, EduReach AI began as a volunteer project to help local village students who lost access to learning during the pandemic. We quickly realized that the <span className="text-foreground font-black underline decoration-destructive/30 decoration-4 underline-offset-4 italic">&quot;internet gap&quot;</span> wasn&apos;t a temporary issue—it was a systemic barrier.
                </p>

                <p>
                  We spent months living in villages, understanding how students use mobile devices. We found that while 4G was unreliable, local storage and Bluetooth were everywhere. We decided to build a platform that leverages available hardware rather than waiting for perfect infrastructure.
                </p>
                <p>
                  Today, EduReach AI is a hybrid engine that understands the state of your network. It syncs intelligently, teaches in local dialects through AI, and ensures that the <span className="text-primary font-black">&quot;Loading...&quot;</span> spinner never stands between a child and their future.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2} className="p-10 md:p-16 rounded-[40px] bg-secondary/10 border border-secondary/20 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-3xl rounded-full" />
               <div className="w-24 h-24 rounded-3xl bg-secondary shadow-xl shadow-secondary/20 flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
                  <Sparkles className="w-12 h-12" />
               </div>
               <div>
                  <h4 className="text-3xl font-black tracking-tight mb-4 uppercase text-secondary">Our Vision</h4>
                  <p className="text-lg md:text-xl text-muted-foreground font-bold leading-relaxed">
                    To reach every village in India and ensure that offline learning becomes as powerful as any online alternative. We don&apos;t just bridge the gap; <span className="text-foreground">we eliminate it.</span>
                  </p>
               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
