"use client";

import { useEffect, useState } from "react";
import { SCENES } from "@/lib/scenes";
import { cn } from "@/lib/utils";

/**
 * A quiet vertical rail — our replacement for a navbar. It reflects which room
 * you're in and lets you step between them. It stays out of the way until the
 * ceremony has begun (after the hero).
 */
export function SceneRail() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = SCENES.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SCENES.findIndex((s) => s.id === entry.target.id);
            if (idx >= 0) {
              setActive(idx);
              setVisible(idx >= 1);
            }
          }
        });
      },
      { threshold: 0.55 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="بخش‌ها"
      dir="ltr"
      className={cn(
        "fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-4 transition-opacity duration-700 md:flex",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      {SCENES.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-3"
          aria-current={active === i ? "true" : undefined}
        >
          <span
            className={cn(
              "fa-label whitespace-nowrap transition-all duration-500",
              active === i
                ? "text-cyan opacity-100"
                : "text-haze opacity-0 group-hover:opacity-70",
            )}
          >
            {s.label}
          </span>
          <span
            className={cn(
              "block h-[1.5px] rounded-full transition-all duration-500",
              active === i
                ? "w-8 bg-cyan"
                : "w-4 bg-haze/40 group-hover:bg-mist",
            )}
          />
        </a>
      ))}
    </nav>
  );
}
