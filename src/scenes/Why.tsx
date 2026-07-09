"use client";

import { Scene } from "@/components/Scene";
import { Reveal } from "@/components/Reveal";

/**
 * Scene 02 — Why Pepsinogen exists. A plain, honest admission. No slogans.
 */
export function Why() {
  return (
    <Scene id="why" index="02" label="چرا هستیم" className="flex">
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[60vmin] w-[60vmin] -translate-y-1/2 rounded-full bg-space/60 blur-[120px]" />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-center px-6 py-24">
        <Reveal as="span" className="eyebrow mb-10">
          چرا اصلاً وجود داریم
        </Reveal>

        <div className="space-y-8">
          <Reveal
            as="p"
            className="display-lg text-gradient-soft text-balance"
          >
            آموزشِ سنتی برامون کافی نبود.
          </Reveal>

          <Reveal
            as="p"
            className="max-w-2xl text-lg leading-relaxed text-mist md:text-2xl"
            amount={0.5}
          >
            برای همین بنیان‌گذارِ ما دنبالِ این نبود که فقط{" "}
            <span className="text-chalk">متفاوت</span> باشه. نشست و کل سیستم رو با
            تکیه بر علم از نو ساخت — چون سیستمی که به «آدم‌ها واقعاً چطور یاد
            می‌گیرن» بی‌اعتنا باشه، آخرش آدم‌های داخلِ خودش رو زمین می‌زنه.
          </Reveal>
        </div>

        <Reveal
          className="mt-16 flex items-center gap-4"
          amount={0.6}
        >
          <span className="h-px w-16 bg-iris/60" />
          <span className="fa-label text-cyan">علم برنده می‌شه.</span>
          <span className="fa-label text-haze">غرور می‌بازه.</span>
        </Reveal>
      </div>
    </Scene>
  );
}
