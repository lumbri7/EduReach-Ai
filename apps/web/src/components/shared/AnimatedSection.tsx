"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
}: AnimatedSectionProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getInitialProps = () => {
    if (direction === "none") return { opacity: 0 };
    const axis = direction === "left" || direction === "right" ? "x" : "y";
    const value = direction === "up" || direction === "left" ? distance : -distance;
    return { opacity: 0, [axis]: value };
  };

  const getAnimateProps = () => {
    if (direction === "none") return { opacity: 1 };
    const axis = direction === "left" || direction === "right" ? "x" : "y";
    return { opacity: 1, [axis]: 0 };
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialProps()}
      animate={isInView ? getAnimateProps() : getInitialProps()}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
