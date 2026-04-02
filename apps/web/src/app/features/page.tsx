"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wifi, WifiOff, Zap, Shield, Database, Smartphone, Share2, Mic, Search, Globe, Headphones, Sparkles, CheckCircle2, Brain } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const featureGroups = [
  {
    id: "offline",
    label: "Offline Mode",
    icon: WifiOff,
    title: "100% Signal-Independent Learning",
    description: "The core of EduReach AI is its ability to function without a constant internet connection.",
    details: [
      { 
        title: "Lesson Clusters", 
        desc: "Download entire subjects or chapters in one go. Our compression tech ensures 1GB of content fits in 100MB.",
        icon: Database
      },
      { 
        title: "Offline AI Engine", 
        desc: "A compact neural model that runs locally on your device to answer basic queries and provide hints.",
        icon: Brain
      },
      { 
        title: "Voice-First Navigation", 
        desc: "Designed for students who are more comfortable with speaking than typing. AI voice guides you through lessons.",
        icon: Mic
      }
    ]
  },
  {
    id: "online",
    label: "Online Upgrade",
    icon: Wifi,
    title: "Smart Sync and Intelligence Boost",
    description: "When internet is detected, the app automatically shifts into high-gear.",
    details: [
      { 
        title: "Delta Updates", 
        desc: "Only new content is downloaded. We use delta-patching to minimize data usage.",
        icon: Zap
      },
      { 
        title: "Deep AI Doubt Solver", 
        desc: "Connect to our cloud-based LLMs for complex problem solving and personalized tutoring.",
        icon: Sparkles
      },
      { 
        title: "Progress Syncing", 
        desc: "Your test scores, notes, and study patterns are securely backed up to the cloud.",
        icon: Shield
      }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8">
              Future-Proof <br /> <span className="text-gradient italic">Capabilities</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 font-bold leading-relaxed">
              Discover how EduReach AI bridges the gap between infrastructure and education.
              Built for rural India, powered by modern technology.
            </p>
          </AnimatedSection>
        </div>

        <Tabs defaultValue="offline" className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center mb-16">
            <TabsList className="grid w-full max-w-md grid-cols-2 p-1.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-3xl h-20">
              <TabsTrigger value="offline" className="rounded-2xl data-[state=active]:bg-white data-[state=active]:shadow-2xl dark:data-[state=active]:bg-slate-700 transition-all gap-3 text-xl font-black">
                <WifiOff className="w-6 h-6" />
                Offline
              </TabsTrigger>
              <TabsTrigger value="online" className="rounded-2xl data-[state=active]:bg-white data-[state=active]:shadow-2xl dark:data-[state=active]:bg-slate-700 transition-all gap-3 text-xl font-black">
                <Wifi className="w-6 h-6 text-primary" />
                Online
              </TabsTrigger>
            </TabsList>
          </div>

          {featureGroups.map(group => (
            <TabsContent key={group.id} value={group.id} className="space-y-20 animate-in fade-in-50 zoom-in-95 duration-700">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-4xl font-black tracking-tight mb-4">{group.title}</h2>
                <p className="text-lg text-muted-foreground font-medium">{group.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {group.details.map((detail, idx) => (
                  <Card key={detail.title} className="glass border-border/50 hover:border-primary/30 transition-all hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[40px] group overflow-hidden">
                    <CardHeader className="p-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <detail.icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-black tracking-tight">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <CardDescription className="text-base font-bold leading-relaxed text-muted-foreground/90">
                        {detail.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Features Section */}
        <section className="mt-40 pt-20 border-t border-border/50 text-center">
            <AnimatedSection direction="up">
                <h3 className="text-4xl font-black tracking-tighter mb-20 uppercase">Additional Tools</h3>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[ 
                { icon: Share2, label: "Village Sharing", color: "text-blue-500", bg: "bg-blue-500/10" }, 
                { icon: Headphones, label: "Audio Lessons", color: "text-green-500", bg: "bg-green-500/10" }, 
                { icon: Search, label: "Smart Search", color: "text-purple-500", bg: "bg-purple-500/10" }, 
                { icon: Globe, label: "Dialect Support", color: "text-amber-500", bg: "bg-amber-500/10" } 
              ].map((item, i) => (
                <AnimatedSection key={item.label} direction="up" delay={i * 0.1} className="flex flex-col items-center gap-6 group">
                  <div className={`w-24 h-24 rounded-[32px] bg-white dark:bg-slate-900 border border-border/50 shadow-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-all group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]`}>
                    <item.icon className="w-10 h-10" />
                  </div>
                  <span className="font-black text-sm uppercase tracking-widest">{item.label}</span>
                </AnimatedSection>
              ))}
            </div>
        </section>
      </div>
    </div>
  );
}
