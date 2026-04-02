"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, Download, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3 shadow-md border-b" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
            <BookOpen className="w-6 h-6" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            EduReach <span className="text-primary italic">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors relative group",
                  pathname === link.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden lg:flex gap-2">
              <Globe className="w-4 h-4" />
              <span>Offline Mode</span>
            </Button>
            <Button className="rounded-full shadow-lg hover:shadow-xl transition-shadow gap-2">
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[51] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200, restDelta: 0.5 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-xs bg-white dark:bg-slate-950 border-l border-primary/20 shadow-2xl z-[52] md:hidden flex flex-col p-6 gap-6 overflow-y-auto transform-gpu"
            >
              <div className="flex items-center justify-between shrink-0">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="font-black tracking-tight text-xl">EduReach AI</span>
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-900 text-foreground active:scale-90 transition-transform"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-2 py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-2xl font-black p-5 rounded-2xl transition-all active:scale-95 flex items-center justify-between group",
                        pathname === link.href 
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                          : "text-foreground/70 hover:bg-slate-50 dark:hover:bg-slate-900"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                      <Sparkles className={cn(
                        "w-5 h-5 transition-opacity",
                        pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      )} />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-auto pt-6 border-t border-border/10 space-y-4 shrink-0">
                <Button className="w-full h-16 rounded-2xl gap-3 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 active:scale-95 transition-all">
                  <Download className="w-6 h-6" />
                  Get App
                </Button>
                <p className="text-center text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
                  Equal Access For All
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
