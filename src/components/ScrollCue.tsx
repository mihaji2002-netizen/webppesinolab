"use client";

import { motion } from "framer-motion";

/** A restrained hint that the world continues below. */
export function ScrollCue({ label = "برای ورود اسکرول کن" }: { label?: string }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 1.2 }}
    >
      <span className="fa-label text-haze">
        {label}
      </span>
      <span className="relative flex h-10 w-[1px] overflow-hidden bg-haze/20">
        <motion.span
          className="absolute left-0 top-0 h-4 w-full bg-gradient-to-b from-cyan to-transparent"
          animate={{ y: [-16, 40] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.div>
  );
}
