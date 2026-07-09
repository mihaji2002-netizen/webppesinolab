"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Scene 05 — The Two Principles. A scroll-scrubbed diptych: the temporary
 * fades, the permanent arrives. Two sentences carry the whole belief system.
 */
export function Principles() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Principle 01 — temporary: present, then it recedes.
  const p1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.55], [1, 1, 0.12]);
  const p1Y = useTransform(scrollYProgress, [0, 0.55], ["0%", "-14%"]);
  const p1Blur = useTransform(scrollYProgress, [0.4, 0.55], [0, 8]);
  const p1FilterBlur = useTransform(p1Blur, (b) => `blur(${b}px)`);

  // Principle 02 — permanent: arrives and stays.
  const p2Opacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);
  const p2Y = useTransform(scrollYProgress, [0.45, 0.7], ["16%", "0%"]);
  const glow = useTransform(scrollYProgress, [0.6, 0.9], [0.2, 0.7]);

  return (
    <div
      ref={ref}
      id="principles"
      data-scene="05"
      aria-label="Two Principles"
      className="relative h-[220vh] w-full"
    >
      <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden">
        <span className="pointer-events-none absolute left-6 top-6 z-20 font-mono text-[0.62rem] tracking-widest2 text-haze md:left-10 md:top-10">
          05 <span className="mx-2 text-haze/40">/</span> Two Principles
        </span>

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris blur-[140px]"
          style={{ opacity: glow }}
        />

        <div className="relative mx-auto w-full max-w-5xl px-6 text-center">
          <motion.div
            style={{ opacity: p1Opacity, y: p1Y, filter: p1FilterBlur }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2"
          >
            <span className="font-mono text-sm text-haze">Principle 01</span>
            <p className="display-xl mt-6 text-mist">Grades are temporary.</p>
          </motion.div>

          <motion.div
            style={{ opacity: p2Opacity, y: p2Y }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2"
          >
            <span className="font-mono text-sm text-cyan">Principle 02</span>
            <p className="display-xl mt-6 text-gradient-iris">
              Character stays forever.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
