"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  MapPin, 
  BookOpen, 
  TrendingUp, 
  Award, 
  MessageSquare,
  Globe,
  Heart,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const stats = [
  { 
    label: "Students Reached", 
    value: "12,000+", 
    icon: Users, 
    color: "text-blue-500",
    description: "Active learners across 450 villages."
  },
  { 
    label: "Village Coverage", 
    value: "450+", 
    icon: MapPin, 
    color: "text-green-500",
    description: "Bringing education to the remotest areas."
  },
  { 
    label: "Courses Completed", 
    value: "85,000+", 
    icon: BookOpen, 
    color: "text-purple-500",
    description: "Self-paced learning modules mastered."
  },
  { 
    label: "Grade Improvement", 
    value: "42%", 
    icon: TrendingUp, 
    color: "text-orange-500",
    description: "Average increase in test scores."
  }
];

const successStories = [
  {
    name: "Arjun Singh",
    village: "Lahaul Valley",
    story: "Before EduReach, I had to travel 15km to the nearest library. Now, I study advanced math fully offline in my own village.",
    tags: ["STEM", "Offline First"]
  },
  {
    name: "Priya Devi",
    village: "Bastat Region",
    story: "The voice-assisted learning helped me overcome my reading difficulties. I am now the top of my class.",
    tags: ["Inclusion", "AI Voice"]
  },
  {
    name: "Rahul Kumar",
    village: "Kutch Desert",
    story: "The hybrid system allowed me to help my father with farming during the day and study at night without needing data.",
    tags: ["Flexibility", "Offline Sync"]
  }
];

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-mesh min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-primary border-primary/20 animate-glow">
              <Award className="w-4 h-4 mr-2" />
              Our Social Footprint
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              Real Stories. <br />
              <span className="text-gradient">Real Impact.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed font-medium">
              We're on a mission to bridge the digital divide. See how EduReach AI is transforming lives where internet is a luxury.
            </p>
          </AnimatedSection>
        </div>
        
        {/* Decorative background blur */}
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      </section>

      {/* Stats Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <div className="p-8 rounded-[32px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all h-full group">
                  <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <h3 className="text-4xl font-black tracking-tighter mb-2">{stat.value}</h3>
                  <p className="font-bold text-foreground/80 mb-2">{stat.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Voices of <span className="italic text-primary">Change</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Behind every metric is a student who now has a clearer path to their dreams.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <div className="p-8 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col h-full shadow-lg">
                  <div className="flex gap-2 mb-6">
                    {story.tags.map((tag, j) => (
                      <Badge key={j} variant="outline" className="rounded-full px-3 text-[10px] uppercase tracking-widest font-black opacity-60">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <MessageSquare className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-xl font-medium leading-relaxed italic mb-8 flex-grow">
                    "{story.story}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-black text-primary text-xl">
                      {story.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.village}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Map Placeholder */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-[48px] bg-slate-900 dark:bg-slate-950 p-12 md:p-24 relative overflow-hidden text-white border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge variant="outline" className="text-white border-white/20 px-4 py-1">Our Vision 2030</Badge>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                  Covering 10,000 Villages by 2030.
                </h2>
                <p className="text-white/70 text-xl leading-relaxed">
                  We are building the infrastructure for the next generation of rural talent. No student left behind, no matter how remote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="h-16 px-8 rounded-2xl bg-white text-slate-950 hover:bg-white/90 font-black text-lg gap-3 grow-0">
                    Get Involved <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-square bg-slate-800/50 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                 <Globe className="w-32 h-32 text-primary animate-pulse-subtle opacity-50" />
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection direction="up" className="space-y-8">
            <Heart className="w-16 h-16 text-primary mx-auto animate-float" />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Support Early Education</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Every download, every shared lesson, and every partnership helps us reach one more village.
            </p>
            <Button size="lg" className="h-16 px-12 rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary/30 font-black text-xl hover:scale-105 transition-all">
              Become a Partner
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
