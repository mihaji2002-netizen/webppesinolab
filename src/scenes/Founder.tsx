"use client";

import { Scene } from "@/components/Scene";
import { Reveal } from "@/components/Reveal";

/**
 * Scene 09 — The Founder. First person, warm, unpolished on purpose. A real
 * person talking, never a brand voice.
 */
export function Founder() {
  return (
    <Scene id="founder" index="09" label="بنیان‌گذار" className="flex">
      <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-[50vmin] w-[50vmin] rounded-full bg-irisdeep/20 blur-[130px]" />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-4xl flex-col justify-center px-6 py-28">
        <Reveal as="span" className="eyebrow mb-10">
          یه حرف از بنیان‌گذار
        </Reveal>

        <Reveal
          as="p"
          className="font-display text-2xl font-light leading-snug text-chalk md:text-4xl"
        >
          سلام. من نه مرشدم، نه اومدم رؤیا بهت بفروشم.
        </Reveal>

        <Reveal
          as="p"
          amount={0.4}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-mist md:text-xl"
        >
          من فقط یه دانش‌آموز بودم که خسته شد از اینکه وانمود کنه سیستم داره کار
          می‌کنه. برای همین شروع کردم به ساختنِ همون چیزی که آرزو داشتم کاش
          می‌داشتم — تیکه‌تیکه، آزمایش‌به‌آزمایش.
        </Reveal>

        <Reveal
          as="p"
          amount={0.4}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-mist md:text-xl"
        >
          هنوزم اشتباه می‌کنم. ولی قول می‌دم آزمایش کردن، گوش دادن و سپردنِ فرمون
          به علم — به‌جای غرورم — رو ادامه بدم. اگه همچین جایی به دلت می‌شینه، تو
          همین الانش هم خونه‌ای.
        </Reveal>

        <Reveal className="mt-14 flex items-center gap-4" amount={0.6}>
          <span className="font-display text-2xl text-gradient-iris">
            — بنیان‌گذار
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-white/10" />
        </Reveal>

        <Reveal
          as="p"
          amount={0.8}
          className="mt-8 fa-label text-haze"
        >
          پی‌نوشت: جنو اولین چیزی بود که ساختم. تا وقتی بقیه‌ش رو می‌فهمیدم، هوامو داشت.
        </Reveal>
      </div>
    </Scene>
  );
}
