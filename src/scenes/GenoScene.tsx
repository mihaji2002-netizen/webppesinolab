"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scene } from "@/components/Scene";
import { Reveal } from "@/components/Reveal";
import { Geno, type GenoMood } from "@/components/Geno";
import { cn } from "@/lib/utils";

const MOODS: { mood: GenoMood; label: string; line: string }[] = [
  { mood: "calm", label: "calm", line: "Here, quietly, whenever you open the door." },
  { mood: "curious", label: "curious", line: "Leaning in when you try something new." },
  { mood: "joy", label: "proud", line: "Lighting up the moment you break through." },
  { mood: "focus", label: "focused", line: "Locked in beside you on the hard nights." },
  { mood: "sleep", label: "resting", line: "Resting when you rest. You&rsquo;re allowed to." },
];

/**
 * Scene 08 — Geno. Not a mascot; a member of the ecosystem with a felt inner
 * life. The visitor can nudge Geno's mood and watch it respond in real time.
 */
export function GenoScene() {
  const [active, setActive] = useState(0);
  const current = MOODS[active];

  return (
    <Scene id="geno" index="08" label="Geno" className="flex">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vmin] w-[50vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-28 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Reveal as="span" className="eyebrow mb-6 block">
            Meet Geno
          </Reveal>
          <Reveal as="h2" className="display-lg text-balance">
            Not a mascot.
            <br />
            <span className="text-gradient-iris">A member.</span>
          </Reveal>
          <Reveal
            as="p"
            amount={0.5}
            className="mt-8 max-w-md text-lg leading-relaxed text-mist"
          >
            Geno grows as you grow. It has moods, moments, and memory. It never
            arrives suddenly — it&rsquo;s simply there, part of the ecosystem you
            now belong to.
          </Reveal>

          <div className="mt-10">
            <span className="font-mono text-[0.6rem] tracking-widest2 text-haze">
              Nudge Geno &rarr;
            </span>
            <div className="mt-4 flex flex-wrap gap-3">
              {MOODS.map((m, i) => (
                <button
                  key={m.mood}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 font-mono text-xs transition-all",
                    active === i
                      ? "border-cyan/60 bg-cyan/10 text-cyan"
                      : "border-white/10 text-haze hover:border-white/20 hover:text-mist",
                  )}
                  aria-pressed={active === i}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="mt-6 h-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.mood}
                  className="text-sm text-mist"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  dangerouslySetInnerHTML={{ __html: current.line }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="order-1 flex items-center justify-center md:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.mood}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Geno mood={current.mood} size={280} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Scene>
  );
}
