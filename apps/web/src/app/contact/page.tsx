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
      <div className="container mx-auto py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection direction="up">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about how EduReach AI can help your school or village? 
              Our team is ready to assist you.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email Us", value: "hello@edureach.ai", sub: "Response in 24 hrs" },
                  { icon: Phone, label: "Call Us", value: "+91 98765 43210", sub: "Mon-Sat, 9am - 6pm" },
                  { icon: MapPin, label: "Visit Us", value: "Sector 5, Mohali, Pb", sub: "Innovation Hub" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-4 rounded-xl glass border-border/50 hover:border-primary/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                      <p className="font-bold text-lg">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3} className="p-6 rounded-2xl bg-secondary/5 border border-secondary/10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <HelpCircle className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold">Need Help?</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                    Check our Help Center for quick answers about offline setup and smart-sync.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary font-bold">Visit Help Center →</Button>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left" delay={0.2} className="glass p-8 md:p-10 rounded-3xl shadow-2xl border-border/50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-bold ml-1">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="h-12 rounded-xl border-border/50 bg-white/50 backdrop-blur-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-bold ml-1">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl border-border/50 bg-white/50 backdrop-blur-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-bold ml-1">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="h-12 rounded-xl border-border/50 bg-white/50 backdrop-blur-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-bold ml-1">Message</Label>
                  <textarea 
                    id="message" 
                    className="flex min-h-[150px] w-full rounded-xl border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <Button className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 gap-2 group">
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
