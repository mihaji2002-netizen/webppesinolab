"use client";

import { Scene } from "@/components/Scene";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const MOMENTS = [
  {
    k: "I",
    title: "دیده می‌شی.",
    body: "مربی‌هایی که واقعاً اسمت رو می‌دونن، الگوهات رو می‌شناسن و می‌دونن این هفته چی بهت گذشته.",
  },
  {
    k: "II",
    title: "سنجیده می‌شی — با ملایمت.",
    body: "بازخوردی که رو به جلو نشونت می‌ده. راهنماییت می‌کنه؛ هیچ‌وقت شرمنده‌ت نمی‌کنه.",
  },
  {
    k: "III",
    title: "شتاب می‌گیری.",
    body: "بردهای کوچیک و صادقانه، روزبه‌روز روی هم تلنبار می‌شن تا بشن بخشی از هویتت.",
  },
  {
    k: "IV",
    title: "تبدیل می‌شی به آدمی که می‌ارزه بمونه.",
    body: "خیلی بعد از اینکه درس‌ها فراموش بشن، آدمی که شدی می‌مونه.",
  },
];

/**
 * Scene 07 — What you'll experience. Felt outcomes, not feature bullets. Each
 * moment breathes on its own line.
 */
export function Experience() {
  return (
    <Scene id="experience" index="07" label="چی تجربه می‌کنی" full={false}>
      <div className="mx-auto w-full max-w-6xl px-6 py-32">
        <Reveal as="span" className="eyebrow mb-16 block">
          اینجا چی رو تجربه می‌کنی
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
