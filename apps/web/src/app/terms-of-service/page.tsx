"use client";

import React from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <AnimatedSection direction="up" className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Terms of Service</h1>
            <p className="text-muted-foreground font-bold italic">Last Updated: April 2, 2026</p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 font-medium text-lg leading-relaxed text-muted-foreground/90">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the EduReach AI platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">2. Use of License</h2>
              <p>
                EduReach AI grants you a personal, non-transferable, non-exclusive license to use the platform for educational purposes. You may download content for offline use on personal devices as permitted by the app's features.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">3. User Conduct</h2>
              <p>
                Users agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reverse engineer the offline neural engine.</li>
                <li>Distribute downloaded content clusters outside the app's 'Village Mode' sharing feature.</li>
                <li>Use the AI Doubt Solver for non-educational or harmful purposes.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">4. Limitation of Liability</h2>
              <p>
                EduReach AI provides services on an "as is" basis. While we strive for 100% reliability, we are not responsible for any disruptions caused by hardware failure or complete lack of internet connectivity required for periodic syncs.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">5. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
