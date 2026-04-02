import React from "react";
import Link from "next/link";
import { BookOpen, Mail, Heart, MapPin, Phone, Globe, MessageSquare } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-border mt-20 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                EduReach <span className="text-primary italic">AI</span>
              </span>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed font-medium">
              Empowering rural students with hybrid offline/online education. 
              Bridging the digital divide one village at a time.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, href: "#" },
                { icon: Mail, href: "mailto:hello@edureach.ai" },
                { icon: MessageSquare, href: "#" }
              ].map((social, i) => (
                <Link key={i} href={social.href} className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all active:scale-95">
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-black text-lg tracking-tight uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Features", href: "/features" },
                { name: "About", href: "/about" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-bold flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="font-black text-lg tracking-tight uppercase">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                { name: "Help Center", href: "#" },
                { name: "Cookie Policy", href: "#" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-bold flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-black text-lg tracking-tight uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-muted-foreground font-medium">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm">Sector 5, Mohali, Punjab - 160062</span>
              </li>
              <li className="flex items-center gap-4 text-muted-foreground font-medium">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 text-muted-foreground font-medium">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">hello@edureach.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-bold">
            © {currentYear} EduReach AI. Built for the <span className="text-secondary italic">next billion</span> learners.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground flex items-center gap-2 font-bold">
              Made with <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" /> in Mohali
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
