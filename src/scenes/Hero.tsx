"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scene } from "@/components/Scene";
import { ScrollCue } from "@/components/ScrollCue";
import { Geno } from "@/components/Geno";

/**
 * Scene 01 — Hero. One breath. One idea. The visitor arrives already inside.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <Scene ref={ref} id="hero" index="01" label="Hero" className="flex">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/20 blur-[120px]" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          className="eyebrow mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          An ecosystem — not an institute
        </motion.span>

        <h1 className="display-hero text-balance">
          <RevealWord delay={0.35}>You&rsquo;re</RevealWord>{" "}
          <RevealWord delay={0.45}>not</RevealWord>{" "}
          <RevealWord delay={0.55}>a</RevealWord>{" "}
          <span className="text-gradient-iris">
            <RevealWord delay={0.7}>student</RevealWord>
          </span>
          <br />
          <RevealWord delay={0.9}>here.</RevealWord>{" "}
          <RevealWord delay={1.05}>You&rsquo;re</RevealWord>{" "}
          <RevealWord delay={1.2}>becoming.</RevealWord>
        </h1>

        <motion.p
          className="mt-10 max-w-md text-pretty text-base text-mist md:text-lg"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.5, duration: 1.1 }}
        >
          Grades are temporary. Character stays forever.
        </motion.p>
      </motion.div>

      {/* Geno lingers at the edge — present, not announced */}
      <motion.div
        className="absolute bottom-24 right-[8%] z-10 hidden md:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 1.2 }}
      >
        <Geno mood="calm" size={92} />
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ScrollCue />
      </div>
    </Scene>
  );
}

function RevealWord({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="inline-block overflow-hidden align-top">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
