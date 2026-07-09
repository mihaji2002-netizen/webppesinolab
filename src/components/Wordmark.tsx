"use client";

import { motion } from "framer-motion";

/** A persistent, quiet wordmark — the one constant across the whole journey. */
export function Wordmark() {
  return (
    <motion.a
      href="#hero"
      className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <span
        className="font-mono text-[0.6rem] tracking-widest2 text-haze [writing-mode:vertical-rl]"
        style={{ transform: "rotate(180deg)" }}
      >
        PEPSINOGEN
      </span>
    </motion.a>
  );
}
