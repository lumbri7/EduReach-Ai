"use client";

import React from "react";
import { Quote, Star, Users, MapPin, Award } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const heavyTestimonials = [
  {
    name: "Sunita Devi",
    role: "Govt School Teacher",
    content: "EduReach AI has changed how I teach. I no longer worry about the school's Wi-Fi. The lessons are always ready, and even the students who struggle to read can follow along with the AI voice teacher.",
    location: "Rural Gurdaspur, PB",
    impact: "90% Higher Attendance"
  },
  {
    name: "Rahul Sharma",
    role: "Class 10 Student",
    content: "I used to walk 2km just for a decent internet signal to watch my video lessons. Now I download my weekly lessons once at the hub and study at home anytime, even late at night.",
    location: "Village Mohali, PB",
    impact: "40% Score Improvement"
  },
  {
    name: "Amit Patel",
    role: "Local Parent",
    content: "My daughter can finally study consistently. In our village, power cuts are frequent but this doesn't stop her learning. The AI voice teacher is like having a private tutor at home.",
    location: "Rural Gujarat",
    impact: "Consistent Learning"
  },
  {
    name: "Gurpreet Singh",
    role: "Village Sarpanch",
    content: "We installed the EduReach hub in our community center. Now 50+ students come there to sync their devices. It's the best thing that happened to our village's education system.",
    location: "Bhatinda, PB",
    impact: "Community Growth"
  },
  {
    name: "Priya Das",
    role: "Self-taught Learner",
    content: "The dialect support is what makes it special. I understand complex science concepts better when the AI explains them in my local language. It feels very natural and helpful.",
    location: "Near Siliguri, WB",
    impact: "Confidence Boost"
  },
  {
    name: "Vikram Mehra",
    role: "Volunteer Tutor",
    content: "Sharing lessons via 'Village Mode' using Bluetooth is a game-changer. Students share content with each other without spending a single rupee on data. It's true democratic education.",
    location: "Highlands of HP",
    impact: "Zero Data Cost"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 text-center container mx-auto px-4 md:px-6">
        <AnimatedSection direction="up">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            Real Impact. <br />
            <span className="text-gradient italic">Real People.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-bold max-w-3xl mx-auto leading-relaxed">
            From the border villages of Punjab to the tribal belts of Gujarat, 
            see how EduReach AI is making education truly borderless.
          </p>
        </AnimatedSection>
      </section>

      {/* Impact Stats */}
      <section className="py-16 border-y border-border/50 bg-white dark:bg-black/20">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               {[
                  { label: "Village Hubs", value: "450+", icon: MapPin },
                  { label: "Successful Syncs", value: "1.2M", icon: Award },
                  { label: "Rural Students", value: "12,000+", icon: Users }
               ].map((stat, i) => (
                  <AnimatedSection key={stat.label} direction="up" delay={i * 0.1} className="space-y-4">
                     <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
                        <stat.icon className="w-8 h-8" />
                     </div>
                     <div>
                        <p className="text-4xl md:text-5xl font-black tracking-tighter">{stat.value}</p>
                        <p className="text-sm font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                     </div>
                  </AnimatedSection>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heavyTestimonials.map((t, i) => (
              <AnimatedSection 
                key={t.name} 
                direction="up" 
                delay={i * 0.1}
                className="glass p-10 rounded-[40px] border-border/50 hover:border-primary/30 transition-all flex flex-col h-full bg-white dark:bg-slate-900 shadow-xl shadow-primary/5"
              >
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg font-bold italic leading-relaxed mb-10 flex-grow text-muted-foreground">
                  &quot;{t.content}&quot;
                </p>
                <div className="pt-8 border-t border-border/50 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-lg shadow-lg">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="font-black tracking-tight">{t.name}</h4>
                      <p className="text-xs font-black text-primary uppercase tracking-widest leading-none">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-border/50">
                     <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t.location}</span>
                     <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{t.impact}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
