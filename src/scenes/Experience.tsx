"use client";

import { Scene } from "@/components/Scene";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const MOMENTS = [
  {
    k: "I",
    title: "You&rsquo;ll be seen.",
    body: "Mentors who actually know your name, your patterns, and the week you had.",
  },
  {
    k: "II",
    title: "You&rsquo;ll be measured — gently.",
    body: "Feedback that points forward. It guides you; it never shames you.",
  },
  {
    k: "III",
    title: "You&rsquo;ll build momentum.",
    body: "Small, honest wins, stacked one day at a time until they feel like identity.",
  },
  {
    k: "IV",
    title: "You&rsquo;ll grow into someone worth keeping.",
    body: "Long after the syllabus is forgotten, the person you became remains.",
  },
];

/**
 * Scene 07 — What you'll experience. Felt outcomes, not feature bullets. Each
 * moment breathes on its own line.
 */
export function Experience() {
  return (
    <Scene id="experience" index="07" label="What You'll Experience" full={false}>
      <div className="mx-auto w-full max-w-6xl px-6 py-32">
        <Reveal as="span" className="eyebrow mb-16 block">
          What you&rsquo;ll experience
        </Reveal>

        <div className="flex flex-col gap-24 md:gap-40">
          {MOMENTS.map((m, i) => (
            <div
              key={m.k}
              className={cn(
                "flex flex-col gap-6",
                i % 2 === 1 ? "md:items-end md:text-right" : "",
              )}
            >
              <Reveal
                as="span"
                className="font-mono text-sm tracking-widest2 text-cyan"
              >
                {m.k}
              </Reveal>
              <Reveal
                as="h3"
                className="display-lg max-w-4xl text-balance text-gradient-soft"
              >
                <span dangerouslySetInnerHTML={{ __html: m.title }} />
              </Reveal>
              <Reveal
                as="p"
                amount={0.6}
                className="max-w-md text-lg leading-relaxed text-mist"
              >
                {m.body}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </Scene>
  );
}
