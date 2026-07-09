"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scene } from "@/components/Scene";
import { Reveal } from "@/components/Reveal";
import { Geno, type GenoMood } from "@/components/Geno";
import { cn } from "@/lib/utils";

const MOODS: { mood: GenoMood; label: string; line: string }[] = [
  { mood: "calm", label: "آروم", line: "همین‌جا، بی‌صدا، هر وقت درو باز کنی." },
  { mood: "curious", label: "کنجکاو", line: "وقتی چیز تازه‌ای رو امتحان می‌کنی، خم می‌شه سمتت." },
  { mood: "joy", label: "پرِ ذوق", line: "لحظه‌ای که یه گره رو باز می‌کنی، روشن می‌شه." },
  { mood: "focus", label: "متمرکز", line: "شب‌های سخت، کنارت میخکوب می‌شه." },
  { mood: "sleep", label: "در حالِ استراحت", line: "وقتی تو استراحت می‌کنی، اونم استراحت می‌کنه. حقته." },
];

/**
 * Scene 08 — Geno. Not a mascot; a member of the ecosystem with a felt inner
 * life. The visitor can nudge Geno's mood and watch it respond in real time.
 */
export function GenoScene() {
  const [active, setActive] = useState(0);
  const current = MOODS[active];

  return (
    <Scene id="geno" index="08" label="جنو" className="flex">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vmin] w-[50vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-28 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Reveal as="span" className="eyebrow mb-6 block">
            با جنو آشنا شو
          </Reveal>
          <Reveal as="h2" className="display-lg text-balance">
            یه عروسکِ تبلیغاتی نیست.
            <br />
            <span className="text-gradient-iris">یکی از خودمونه.</span>
          </Reveal>
          <Reveal
            as="p"
            amount={0.5}
            className="mt-8 max-w-md text-lg leading-relaxed text-mist"
          >
            جنو همون‌قدر که تو رشد می‌کنی، رشد می‌کنه. حال داره، لحظه داره، خاطره
            داره. یهو از ناکجا ظاهر نمی‌شه — فقط هست؛ بخشی از همون اکوسیستمی که
            حالا مالِ توئه.
          </Reveal>

          <div className="mt-10">
            <span className="fa-label text-haze">
              یه تلنگر به جنو بزن ←
            </span>
            <div className="mt-4 flex flex-wrap gap-3">
              {MOODS.map((m, i) => (
                <button
                  key={m.mood}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 fa-label transition-all",
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
