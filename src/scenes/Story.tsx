"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CHAPTERS = [
  {
    k: "01",
    title: "همه‌چی از یه دلخوری شروع شد.",
    body: "یه دانش‌آموز همه‌ی کارها رو درست انجام می‌داد — ولی بازم حس می‌کرد این سیستم اصلاً برای اون ساخته نشده.",
  },
  {
    k: "02",
    title: "برای همین شروع کرد به خوندن. بی‌وقفه.",
    body: "علمِ یادگیری، روان‌شناسیِ رفتار، علوم اعصاب، طراحیِ آموزشی — هر چیزی که توضیح می‌داد آدم‌ها واقعاً چطور عوض می‌شن.",
  },
  {
    k: "03",
    title: "بعد شروع کرد به آزمایش کردن.",
    body: "آزمایش‌های کوچیک — اول روی خودش، بعد با چندتا از دوستاش. هرچی جواب می‌داد می‌موند، هرچی نه پاک می‌شد. دوباره از اول.",
  },
  {
    k: "04",
    title: "چیزی که موند، شد پپسینوژن.",
    body: "هرچی از زیرِ ذره‌بینِ واقعیت رد نشد، دور ریخته شد. چیزی که موند، شد یه اکوسیستم.",
  },
];

/**
 * Scene 03 — The Story. Pinned horizontal travel through the founding chapters.
 * Vertical intent, horizontal motion: the scroll itself becomes narrative.
 */
export function Story() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const panels = gsap.utils.toArray<HTMLElement>(".story-panel");
      const getShift = () => -(track.scrollWidth - window.innerWidth);

      const tween = gsap.to(track, {
        x: getShift,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((panel) => {
        const content = panel.querySelector(".story-content");
        if (!content) return;
        gsap.fromTo(
          content,
          { opacity: 0.15, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: "left center",
              end: "center center",
              scrub: true,
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      id="story"
      data-scene="03"
      aria-label="داستان"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <span className="pointer-events-none absolute right-6 top-6 z-20 flex items-center text-haze md:right-10 md:top-10">
        <span className="font-mono text-[0.62rem] tracking-widest2">03</span>
        <span className="mx-2 text-haze/40">/</span>
        <span className="fa-label">داستان</span>
      </span>

      <div
        ref={trackRef}
        className="flex h-[100svh] w-max flex-nowrap items-center will-change-transform"
      >
        {/* Intro panel */}
        <section className="story-panel flex h-[100svh] w-screen flex-shrink-0 flex-col justify-center px-8 md:px-24">
          <div className="story-content max-w-xl">
            <span className="eyebrow mb-6 block">داستانِ ما</span>
            <h2 className="display-xl text-gradient-soft">
              قصه‌ی قهرمانی نیست.
              <br />
              فقط یه شروعِ ساده بود.
            </h2>
            <p className="mt-8 max-w-sm text-mist">
              همین‌طور اسکرول کن — از اینجا به بعد قصه از پهلو حرکت می‌کنه.
            </p>
          </div>
        </section>

        {CHAPTERS.map((c) => (
          <section
            key={c.k}
            className="story-panel flex h-[100svh] w-screen flex-shrink-0 flex-col justify-center px-8 md:px-24"
          >
            <div className="story-content max-w-2xl">
              <span className="font-mono text-sm text-cyan">{c.k}</span>
              <h3 className="display-lg mt-6 text-balance text-chalk">
                {c.title}
              </h3>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist md:text-xl">
                {c.body}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
