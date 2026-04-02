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
  const avatarColors = ["bg-blue-500/20 text-blue-600", "bg-green-500/20 text-green-600", "bg-purple-500/20 text-purple-600"];

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <AnimatedSection direction="up" className="mb-20">
          <h2 className="text-sm font-black tracking-[0.3em] text-primary uppercase mb-4">Social Proof</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tight italic text-balance">Real Impact in Real Villages</h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection 
              key={t.name} 
              direction="up" 
              delay={i * 0.1}
              className="glass p-10 rounded-[40px] text-left relative group border-border/50 hover:border-primary/30 transition-all hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
            >
              <Quote className="absolute top-10 right-10 w-16 h-16 text-primary/10 group-hover:text-primary/20 transition-all group-hover:rotate-12" />
              <div className="flex gap-1.5 mb-8">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed italic mb-10 relative z-10 font-bold tracking-tight">
                &quot;{t.content}&quot;
              </p>

              <div className="flex items-center gap-5 mt-auto">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner ${avatarColors[i % avatarColors.length]}`}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-black text-xl tracking-tight leading-none mb-1">{t.name}</h4>
                  <p className="text-xs text-primary font-black uppercase tracking-widest leading-none mb-1">{t.role}</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">{t.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
