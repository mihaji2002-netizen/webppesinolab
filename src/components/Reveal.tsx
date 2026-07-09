"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Reveal animates its children upward with a soft blur as they enter view.
 * Pass `lines` for staggered multi-line reveals, or wrap arbitrary children.
 */
export function Reveal({
  children,
  className,
  as = "div",
  amount = 0.4,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
  amount?: number;
  once?: boolean;
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={line}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * RevealLines renders each provided string as its own staggered line — the
 * signature "one thought at a time" cadence of the ecosystem.
 */
export function RevealLines({
  lines,
  className,
  lineClassName,
  amount = 0.5,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {lines.map((text, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div variants={line} className={cn(lineClassName)}>
            {text}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
