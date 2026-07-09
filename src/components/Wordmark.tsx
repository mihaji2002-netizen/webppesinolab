"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";

/** The persistent corner logo — the one constant across the whole journey. */
export function Wordmark() {
  return (
    <motion.a
      href="#hero"
      aria-label="پپسینوژن — خانه"
      className="group fixed left-6 top-5 z-50 hidden items-center gap-2.5 md:flex"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Logo size={34} className="transition-transform duration-500 group-hover:scale-105" />
      <span className="font-display text-sm font-semibold text-chalk/90 transition-colors group-hover:text-chalk">
        پپسینوژن
      </span>
    </motion.a>
  );
}
