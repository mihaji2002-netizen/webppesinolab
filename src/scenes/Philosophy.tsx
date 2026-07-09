"use client";

import { Scene } from "@/components/Scene";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const DISCIPLINES = [
  "Learning Science",
  "Behavioral Psychology",
  "Neuroscience",
  "Instructional Design",
  "Continuous Experimentation",
];

/**
 * Scene 04 — The Philosophy. Evidence over ego, rendered as calm certainty.
 */
export function Philosophy() {
  return (
    <Scene id="philosophy" index="04" label="The Philosophy" className="flex">
      {/* Slow drifting discipline marquee behind */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 overflow-hidden opacity-[0.05]">
        {[0, 1, 2].map((row) => (
          <motion.div
            key={row}
            className="flex w-max gap-16 whitespace-nowrap font-display text-6xl font-semibold md:text-8xl"
            animate={{ x: row % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: 40 + row * 8, repeat: Infinity, ease: "linear" }}
          >
            {[...DISCIPLINES, ...DISCIPLINES].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-center px-6 py-24">
        <Reveal as="span" className="eyebrow mb-10">
          The philosophy
        </Reveal>

        <Reveal as="h2" className="display-xl text-balance">
          Every decision here is
          <br />
          <span className="text-gradient-iris">backed by evidence.</span>
        </Reveal>

        <Reveal
          as="p"
          className="mt-10 max-w-xl text-lg leading-relaxed text-mist md:text-xl"
          amount={0.5}
        >
          Not opinion. Not tradition. Not whatever worked last year. If a choice
          can&rsquo;t be defended by how humans actually learn, it doesn&rsquo;t
          make it in.
        </Reveal>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
          {DISCIPLINES.map((d, i) => (
            <Reveal
              as="span"
              key={d}
              amount={0.8}
              className="group flex items-center gap-3 font-mono text-sm text-haze transition-colors hover:text-cyan"
            >
              <span className="text-cyan/60">0{i + 1}</span>
              {d}
            </Reveal>
          ))}
        </ul>
      </div>
    </Scene>
  );
}
