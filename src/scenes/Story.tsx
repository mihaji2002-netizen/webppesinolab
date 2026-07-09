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
    title: "It started with a frustration.",
    body: "One student kept doing everything right — and still felt the system was never really built for him.",
  },
  {
    k: "02",
    title: "So he read. Obsessively.",
    body: "Learning science. Behavioral psychology. Neuroscience. Instructional design. Anything that explained how people actually change.",
  },
  {
    k: "03",
    title: "Then he started testing.",
    body: "Small experiments — first on himself, then with a few friends. Keep what works. Delete what doesn't. Repeat.",
  },
  {
    k: "04",
    title: "Pepsinogen is what remained.",
    body: "Everything that didn't survive the evidence was thrown away. What stayed became an ecosystem.",
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
      aria-label="The Story"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <span className="pointer-events-none absolute left-6 top-6 z-20 font-mono text-[0.62rem] tracking-widest2 text-haze md:left-10 md:top-10">
        03 <span className="mx-2 text-haze/40">/</span> The Story
      </span>

      <div
        ref={trackRef}
        className="flex h-[100svh] w-max flex-nowrap items-center will-change-transform"
      >
        {/* Intro panel */}
        <section className="story-panel flex h-[100svh] w-screen flex-shrink-0 flex-col justify-center px-8 md:px-24">
          <div className="story-content max-w-xl">
            <span className="eyebrow mb-6 block">The story</span>
            <h2 className="display-xl text-gradient-soft">
              No origin myth.
              <br />
              Just a beginning.
            </h2>
            <p className="mt-8 max-w-sm text-mist">
              Keep scrolling — the story moves sideways from here.
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
