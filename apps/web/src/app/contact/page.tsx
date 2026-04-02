"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, HelpCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950 px-4 md:px-6">
      <div className="container mx-auto py-20">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Get in <span className="text-gradient italic">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 font-bold leading-relaxed">
              Have questions about how EduReach AI can help your school or village? <br className="hidden md:block" />
              Our team is ready to assist you.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-10">
            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="text-3xl font-black tracking-tight mb-8">Direct Channels</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email Us", value: "hello@edureach.ai", sub: "Response in 24 hrs", color: "bg-blue-500" },
                  { icon: Phone, label: "Call Us", value: "+91 98765 43210", sub: "Mon-Sat, 9am-6pm", color: "bg-green-500" },
                  { icon: MapPin, label: "Visit Us", value: "Sector 5, Mohali, Pb", sub: "Innovation Hub", color: "bg-purple-500" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-6 p-8 rounded-[32px] glass border-border/50 hover:border-primary/20 transition-all group">
                    <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 shadow-lg transition-transform`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">{item.label}</p>
                      <p className="font-black text-xl tracking-tight leading-tight mb-1">{item.value}</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3} className="p-10 rounded-[40px] bg-secondary/10 border border-secondary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 blur-2xl rounded-full" />
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg">
                        <HelpCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-black tracking-tight">Need Help?</h4>
                </div>
                <p className="text-lg text-muted-foreground mb-8 font-bold leading-relaxed">
                    Check our Help Center for quick answers about offline setup and smart-sync.
                </p>
                <Button size="lg" className="w-full rounded-2xl h-14 bg-secondary hover:bg-secondary/90 font-black uppercase tracking-widest shadow-xl shadow-secondary/10 active:scale-95 transition-all">
                  Visit Help Center
                </Button>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left" delay={0.2} className="glass p-10 md:p-14 rounded-[50px] shadow-2xl border-border/50 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 blur-[80px] -z-10" />
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-sm font-black uppercase tracking-widest ml-1 text-muted-foreground">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="h-16 rounded-2xl border-border/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-6 text-lg font-bold" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-black uppercase tracking-widest ml-1 text-muted-foreground">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-16 rounded-2xl border-border/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-6 text-lg font-bold" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-sm font-black uppercase tracking-widest ml-1 text-muted-foreground">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="h-16 rounded-2xl border-border/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-6 text-lg font-bold" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-sm font-black uppercase tracking-widest ml-1 text-muted-foreground">Message</Label>
                  <textarea 
                    id="message" 
                    className="flex min-h-[200px] w-full rounded-2xl border border-border/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-6 py-4 text-lg font-bold ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <Button className="w-full h-18 rounded-[24px] text-2xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/20 gap-4 group active:scale-95 transition-all">
                  <Send className="w-7 h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
