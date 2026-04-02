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
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Powerful Features for <br /> <span className="text-gradient">Real-World</span> Learning
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover how EduReach AI bridges the gap between infrastructure and education.
              Built for rural India, powered by modern technology.
            </p>
          </AnimatedSection>
        </div>

        <Tabs defaultValue="offline" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl h-14">
              <TabsTrigger value="offline" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg dark:data-[state=active]:bg-slate-700 transition-all gap-2 text-lg font-bold">
                <WifiOff className="w-5 h-5" />
                Offline
              </TabsTrigger>
              <TabsTrigger value="online" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg dark:data-[state=active]:bg-slate-700 transition-all gap-2 text-lg font-bold">
                <Wifi className="w-5 h-5 text-primary" />
                Online
              </TabsTrigger>
            </TabsList>
          </div>

          {featureGroups.map(group => (
            <TabsContent key={group.id} value={group.id} className="space-y-12 animate-in fade-in-50 zoom-in-95 duration-500">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">{group.title}</h2>
                <p className="text-muted-foreground">{group.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {group.details.map((detail, idx) => (
                  <Card key={detail.title} className="glass border-border/50 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        <detail.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-bold">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm font-medium leading-relaxed leading-relaxed">
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
        <section className="mt-32 pt-16 border-t border-border/50 text-center">
            <AnimatedSection direction="up">
                <h3 className="text-3xl font-bold mb-16">Additional Capabilities</h3>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[ 
                    { icon: Share2, label: "Village Sharing" }, 
                    { icon: Headphones, label: "Audio Lessons" }, 
                    { icon: Search, label: "Smart Search" }, 
                    { icon: Globe, label: "Dialect Support" } 
                ].map((item, i) => (
                    <AnimatedSection key={item.label} direction="up" delay={i * 0.1} className="flex flex-col items-center gap-4 group">
                        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary transition-all group-hover:shadow-lg group-hover:shadow-primary/10">
                            <item.icon className="w-8 h-8" />
                        </div>
                        <span className="font-bold text-sm">{item.label}</span>
                    </AnimatedSection>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}
