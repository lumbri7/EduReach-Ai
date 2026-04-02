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
      <section className="py-20 bg-gradient-premium relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <AnimatedSection direction="up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Our Mission: <br />
                  <span className="text-gradient">Equal Access</span> to Knowledge
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed pt-4">
                  We believe that a student&apos;s location should never determine their potential. 
                  EduReach AI was born out of a simple question: &quot;How can we make world-class education work where the internet doesn&apos;t?&quot;
                </p>

              </AnimatedSection>
            </div>
            <div className="lg:w-1/2 relative">
              <AnimatedSection direction="left">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                  <Image 
                    src="/about-mission.png" 
                    alt="Our Mission" 
                    width={600} 
                    height={600}
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection 
                key={stat.label} 
                direction="up" 
                delay={i * 0.1}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <AnimatedSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">The Story of EduReach AI</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Started by a group of educators and engineers in Mohali, EduReach AI began as a volunteer project to help local village students who lost access to learning during the pandemic. We quickly realized that the &quot;internet gap&quot; wasn&apos;t a temporary issue—it was a systemic barrier.
                </p>

                <p>
                  We spent months living in villages, understanding how students use mobile devices. We found that while 4G was unreliable, local storage and Bluetooth were everywhere. We decided to build a platform that leverages available hardware rather than waiting for perfect infrastructure.
                </p>
                <p>
                  Today, EduReach AI is a hybrid engine that understands the state of your network. It syncs intelligently, teaches in local dialects through AI, and ensures that the &quot;Loading...&quot; spinner never stands between a child and their future.
                </p>

              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2} className="p-8 rounded-3xl bg-secondary/10 border border-secondary/20 flex flex-col md:flex-row items-center gap-8">
               <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center text-white shrink-0">
                  <Sparkles className="w-10 h-10" />
               </div>
               <div>
                  <h4 className="text-2xl font-bold mb-2">Our Vision</h4>
                  <p className="text-muted-foreground font-medium">
                    To reach every village in India and ensure that offline learning becomes as powerful as any online alternative. We don&apos;t just bridge the gap; we eliminate it.
                  </p>

               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
