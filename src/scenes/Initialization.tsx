"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Geno } from "@/components/Geno";
import { Logo } from "@/components/Logo";

const BOOT_LINES = [
  "داریم می‌شناسیمت …",
  "تو از همین حالا یکی از مایی",
  "بارگذاری هسته‌ی علمِ یادگیری …",
  "داریم دنیا رو برای تو تنظیم می‌کنیم …",
  "بیدار کردنِ جنو …",
];

/**
 * Scene 00 — Initialization. Not a loading screen: a welcome ceremony. The
 * visitor is told, quietly, that they already belong here before the world
 * unfolds. Locks scroll until the sequence lifts.
 */
export function Initialization() {
  const [done, setDone] = useState(false);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const total = reduce ? 600 : 3600;

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      setProgress(t);
      setStep(Math.min(BOOT_LINES.length - 1, Math.floor(t * BOOT_LINES.length)));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 450);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      root.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="init"
          id="init"
          data-scene="00"
          aria-label="شروع"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid-lab pointer-events-none absolute inset-0 opacity-30" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Geno mood="curious" size={130} />
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="flex flex-col items-center gap-2.5">
              <Logo size={54} />
              <span className="font-display text-xl font-bold tracking-wide text-chalk">
                پپسینوژن
              </span>
              <span className="fa-label text-cyan/80">فعال شو تا رشد کنی</span>
            </div>

            <div className="h-5 overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={step}
                  className="fa-label text-mist"
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {BOOT_LINES[step]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="relative h-[2px] w-56 overflow-hidden bg-nebula">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-iris to-cyan"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <span className="font-mono text-[0.6rem] tracking-widest2 text-haze">
              {Math.round(progress * 100)}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
