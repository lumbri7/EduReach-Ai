"use client";

import React from "react";
import { Quote, Star } from "lucide-react";

import { AnimatedSection } from "@/components/shared/AnimatedSection";

const testimonials = [
  {
    name: "Sunita Devi",
    role: "School Teacher",
    content: "EduReach AI has changed how I teach. I no longer worry about the school&apos;s Wi-Fi. The lessons are always ready.",

    location: "Rural Punjab",
  },
  {
    name: "Rahul Sharma",
    role: "Student (Class 10)",
    content: "I used to walk 2km just for internet. Now I download my weekly lessons once and study at home anytime.",
    location: "Village Mohali",
  },
  {
    name: "Amit Patel",
    role: "Parent",
    content: "My daughter can finally study consistently. The AI voice teacher is like having a private tutor at home.",
    location: "Gurdaspur",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <AnimatedSection direction="up" className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Social Proof</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Real Impact in Real Villages</h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection 
              key={t.name} 
              direction="up" 
              delay={i * 0.1}
              className="glass p-8 rounded-3xl text-left relative group border-border/50 hover:border-primary/30 transition-all"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic mb-8 relative z-10 font-medium">
                &quot;{t.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-primary font-bold">{t.role}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{t.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
