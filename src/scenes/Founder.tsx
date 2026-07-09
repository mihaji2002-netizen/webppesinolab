"use client";

import { Scene } from "@/components/Scene";
import { Reveal } from "@/components/Reveal";

/**
 * Scene 09 — The Founder. First person, warm, unpolished on purpose. A real
 * person talking, never a brand voice.
 */
export function Founder() {
  return (
    <Scene id="founder" index="09" label="The Founder" className="flex">
      <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-[50vmin] w-[50vmin] rounded-full bg-irisdeep/20 blur-[130px]" />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-4xl flex-col justify-center px-6 py-28">
        <Reveal as="span" className="eyebrow mb-10">
          A note from the founder
        </Reveal>

        <Reveal
          as="p"
          className="font-display text-2xl font-light leading-snug text-chalk md:text-4xl"
        >
          Hey. I&rsquo;m not a guru, and I&rsquo;m definitely not selling you a
          dream.
        </Reveal>

        <Reveal
          as="p"
          amount={0.4}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-mist md:text-xl"
        >
          I was just a student who got tired of pretending the system worked. So
          I started building the one I wish I&rsquo;d had — piece by piece,
          experiment by experiment.
        </Reveal>

        <Reveal
          as="p"
          amount={0.4}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-mist md:text-xl"
        >
          I still get things wrong. But I promise to keep testing, keep
          listening, and keep science in charge instead of my ego. If that
          sounds like your kind of place — you&rsquo;re already home.
        </Reveal>

        <Reveal className="mt-14 flex items-center gap-4" amount={0.6}>
          <span className="font-display text-2xl italic text-gradient-iris">
            — the founder
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-white/10" />
        </Reveal>

        <Reveal
          as="p"
          amount={0.8}
          className="mt-8 font-mono text-xs text-haze"
        >
          p.s. Geno was the first thing I built. It kept me company while I
          figured the rest out.
        </Reveal>
      </div>
    </Scene>
  );
}
