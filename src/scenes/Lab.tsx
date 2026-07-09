"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scene } from "@/components/Scene";
import { cn } from "@/lib/utils";

type Discovery = {
  code: string;
  name: string;
  body: string;
  status: "live" | "growing" | "soon";
};

const DISCOVERIES: Discovery[] = [
  {
    code: "BHV",
    name: "Behavior Analysis",
    body: "We read patterns, not just scores — so we can adjust the habit instead of scolding the symptom.",
    status: "live",
  },
  {
    code: "EXM",
    name: "Weekly Exams",
    body: "Not to rank you. To show you, every week, exactly where you actually stand.",
    status: "live",
  },
  {
    code: "NGT",
    name: "Night Reports",
    body: "A quiet summary of your day, waiting for you before you sleep.",
    status: "live",
  },
  {
    code: "MRN",
    name: "Morning Sessions",
    body: "The system wakes up with you — small, deliberate, focused.",
    status: "live",
  },
  {
    code: "RES",
    name: "Resources",
    body: "Everything you need, nothing you don't. Curated, never dumped.",
    status: "live",
  },
  {
    code: "CNF",
    name: "Confidential Files",
    body: "Notes only your mentors see — the human context behind the numbers.",
    status: "live",
  },
  {
    code: "GMF",
    name: "Gamification",
    body: "Progress you can feel. Not points for the sake of points.",
    status: "growing",
  },
  {
    code: "AVT",
    name: "Avatar",
    body: "A version of you that grows exactly as much as you do.",
    status: "growing",
  },
  {
    code: "XP",
    name: "Experience Points",
    body: "Effort, finally made visible.",
    status: "growing",
  },
  {
    code: "LVL",
    name: "Level System",
    body: "Proof that you are not the same person you were last month.",
    status: "growing",
  },
  {
    code: "AIM",
    name: "AI Mentor",
    body: "A mentor that never sleeps — arriving soon, learning how you learn.",
    status: "soon",
  },
];

const statusText: Record<Discovery["status"], string> = {
  live: "active",
  growing: "evolving",
  soon: "incoming",
};

/**
 * Scene 06 — Pepsino Lab. The first division, presented as a museum of
 * discoveries rather than a feature grid. An index on the left; a holographic
 * viewport on the right that responds to what you're examining.
 */
export function Lab() {
  const [active, setActive] = useState(0);
  const current = DISCOVERIES[active];

  return (
    <Scene id="lab" index="06" label="Pepsino Lab" className="flex">
      <div className="grid-lab pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-28 lg:grid-cols-[1.1fr_1fr]">
        {/* Index of discoveries */}
        <div>
          <span className="eyebrow mb-4 block">Division 01 — Pepsino Lab</span>
          <h2 className="display-lg mb-10 text-balance">
            Not features.
            <br />
            <span className="text-gradient-iris">Discoveries.</span>
          </h2>

          <ul className="flex flex-col">
            {DISCOVERIES.map((d, i) => (
              <li key={d.code}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex w-full items-baseline gap-4 border-b border-white/5 py-3 text-left transition-colors",
                    active === i ? "text-chalk" : "text-haze hover:text-mist",
                  )}
                  aria-pressed={active === i}
                >
                  <span
                    className={cn(
                      "font-mono text-xs transition-colors",
                      active === i ? "text-cyan" : "text-haze/60",
                    )}
                  >
                    {d.code}
                  </span>
                  <span className="flex-1 font-display text-xl font-medium md:text-2xl">
                    {d.name}
                  </span>
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all",
                      active === i
                        ? "scale-125 bg-cyan shadow-[0_0_12px_2px_rgba(111,233,245,0.6)]"
                        : "bg-haze/30",
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Holographic viewport */}
        <div className="relative flex h-[420px] items-center justify-center lg:h-[540px]">
          <div className="glass relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl p-8">
            {/* Scan line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-cyan/10 to-transparent" />

            <div className="flex items-center justify-between font-mono text-[0.6rem] tracking-widest2 text-haze">
              <span>PEPSINO://LAB</span>
              <span className="flex items-center gap-2 text-cyan">
                <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-cyan" />
                {statusText[current.status]}
              </span>
            </div>

            <div className="relative flex flex-1 items-center justify-center">
              <Hologram code={current.code} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.code}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-display text-2xl font-semibold text-chalk">
                  {current.name}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
                  {current.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Scene>
  );
}

/** A generative holographic glyph — a different orbital signature per module. */
function Hologram({ code }: { code: string }) {
  const seed = code.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const rings = 3 + (seed % 3);

  return (
    <motion.svg
      key={code}
      viewBox="0 0 200 200"
      className="h-56 w-56"
      initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <defs>
        <linearGradient id="holoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B7BFF" />
          <stop offset="100%" stopColor="#6FE9F5" />
        </linearGradient>
      </defs>
      {Array.from({ length: rings }).map((_, i) => (
        <motion.ellipse
          key={i}
          cx="100"
          cy="100"
          rx={40 + i * 20}
          ry={18 + i * 10}
          fill="none"
          stroke="url(#holoGrad)"
          strokeWidth="0.8"
          opacity={0.5 - i * 0.08}
          style={{ transformOrigin: "100px 100px", rotate: `${i * 40 + seed}deg` }}
          animate={{ rotate: [`${i * 40 + seed}deg`, `${i * 40 + seed + 360}deg`] }}
          transition={{
            duration: 20 + i * 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      <circle
        cx="100"
        cy="100"
        r="10"
        fill="url(#holoGrad)"
        className="animate-breathe"
      />
      <text
        x="100"
        y="176"
        textAnchor="middle"
        className="fill-haze font-mono"
        style={{ fontSize: 9, letterSpacing: 3 }}
      >
        {code}
      </text>
    </motion.svg>
  );
}
