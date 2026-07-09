"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** A hairline progress meter — the only chrome that spans every scene. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-gradient-to-r from-iris via-cyan to-iris"
    />
  );
}
