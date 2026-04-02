"use client";

import React from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <AnimatedSection direction="up" className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Privacy Policy</h1>
            <p className="text-muted-foreground font-bold italic">Last Updated: April 2, 2026</p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 font-medium text-lg leading-relaxed text-muted-foreground/90">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">1. Introduction</h2>
              <p>
                EduReach AI ("we," "our," or "us") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, and safeguard your information when you use our hybrid offline/online learning platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">2. Information We Collect</h2>
              <p>
                We collect information to provide better services to all our users:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Name, age, grade, and school details when you register.</li>
                <li><strong>Usage Data:</strong> Offline study hours, quiz scores, and lesson progress (synced when online).</li>
                <li><strong>Device Information:</strong> Device model and OS version to optimize offline database performance.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">3. How We Use Information</h2>
              <p>
                The primary purpose of data collection is to personalize the AI tutoring experience and allow for smart-syncing of progress across devices. We do NOT sell your personal data to third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">4. Offline Mode & Data Security</h2>
              <p>
                Since EduReach AI is offline-first, most of your data remains encrypted locally on your device. We use industry-standard security protocols to protect data during the brief "sync" periods when internet connectivity is established.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground tracking-tight">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: <br />
                <strong>Email:</strong> privacy@edureach.ai <br />
                <strong>Address:</strong> Sector 5, Mohali, Punjab - 160062
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
