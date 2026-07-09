"use client";

import { motion } from "framer-motion";
import { Scene } from "@/components/Scene";
import { Reveal } from "@/components/Reveal";
import { Geno } from "@/components/Geno";

const FUTURE = [
  "Dashboard",
  "Missions",
  "XP & Ranking",
  "Community",
  "AI Mentor",
  "Events",
];

/**
 * Scene 10 — Welcome Home. The ceremony resolves. No hard sell, no "join us" —
 * just an open door and a quiet map of what's ahead.
 */
export function Welcome() {
  return (
    <Scene id="welcome" index="10" label="Welcome Home" full={false}>
      <div className="relative flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-32 text-center">
        {/* Portal glow */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[46vmin] w-[46vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-iris/30 to-cyan/20 blur-[120px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Geno mood="joy" size={140} />
        </motion.div>

        <Reveal as="h2" className="display-hero relative z-10 text-balance">
          <span className="text-gradient-iris">Welcome home.</span>
        </Reveal>

        <Reveal
          as="p"
          amount={0.6}
          className="relative z-10 mt-10 max-w-lg text-lg leading-relaxed text-mist md:text-xl"
        >
          You didn&rsquo;t visit a website. You entered an ecosystem — and
          you&rsquo;ve been here all along.
        </Reveal>

        <Reveal
          className="relative z-10 mt-14 flex flex-col items-center gap-6"
          amount={0.8}
        >
          <span className="font-mono text-[0.6rem] tracking-widest2 text-haze">
            What grows here next
          </span>
          <ul className="flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {FUTURE.map((f) => (
              <li
                key={f}
                className="font-display text-lg text-haze transition-colors hover:text-cyan"
              >
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row md:text-left">
          <span className="font-display text-lg font-semibold tracking-tightest text-chalk">
            Pepsinogen
          </span>
          <span className="font-mono text-[0.65rem] tracking-widest2 text-haze">
            Grades are temporary. Character stays forever.
          </span>
          <span className="font-mono text-[0.6rem] text-haze/60">
            © {new Date().getFullYear()} — an ecosystem, still growing.
          </span>
        </div>
      </footer>
    </Scene>
  );
}
