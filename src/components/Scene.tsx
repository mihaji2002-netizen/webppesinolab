"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SceneProps = {
  id: string;
  index: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  /** When true the scene fills the viewport exactly; otherwise it can grow. */
  full?: boolean;
};

/**
 * A Scene is one "room" in the ecosystem. Each occupies (nearly) a full screen,
 * is individually addressable via anchor, and carries a quiet index marker so a
 * visitor always knows where they are without a conventional navbar.
 */
export const Scene = forwardRef<HTMLElement, SceneProps>(function Scene(
  { id, index, label, children, className, full = true },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id}
      data-scene={index}
      aria-label={label}
      className={cn(
        "relative w-full overflow-hidden",
        full ? "min-h-[100svh]" : "",
        className,
      )}
    >
      <span className="pointer-events-none absolute left-6 top-6 z-20 font-mono text-[0.62rem] tracking-widest2 text-haze md:left-10 md:top-10">
        {index} <span className="mx-2 text-haze/40">/</span> {label}
      </span>
      {children}
    </section>
  );
});
