"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * The Pepsinogen mark — a nod to the original 7-year-old logo:
 * a lab flask (science), a pencil (learning) and a ladder (growth).
 * Redrawn as clean line-art with the site's iris → cyan gradient so it
 * lives naturally on the dark theme. Direction-neutral (safe for RTL).
 */
export function Logo({
  size = 48,
  className,
  title = "پپسینوژن",
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  const gid = useId();

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={cn("select-none", className)}
      role="img"
      aria-label={title}
      fill="none"
    >
      <defs>
        <linearGradient
          id={gid}
          gradientUnits="userSpaceOnUse"
          x1="10"
          y1="10"
          x2="110"
          y2="110"
        >
          <stop offset="0%" stopColor="#8B7BFF" />
          <stop offset="100%" stopColor="#6FE9F5" />
        </linearGradient>
      </defs>

      <g
        stroke={`url(#${gid})`}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Flask — body + neck */}
        <path d="M27 18 L27 33 L13 70 Q12.5 71.5 15 71.5 L45 71.5 Q47.5 71.5 47 70 L33 33 L33 18" />
        {/* Flask rim */}
        <path d="M25 18 L35 18" />
        {/* Liquid surface */}
        <path d="M19 55 L41 55" strokeWidth="2.6" />
        {/* Liquid fill */}
        <path
          d="M19 55 L41 55 L45 70 Q45 71 44 71 L16 71 Q15 71 15 70 Z"
          fill={`url(#${gid})`}
          fillOpacity="0.22"
          strokeWidth="0"
        />
        {/* Bubbles */}
        <circle cx="24" cy="45" r="1.6" fill={`url(#${gid})`} strokeWidth="0" />
        <circle cx="29" cy="40" r="1.3" fill={`url(#${gid})`} strokeWidth="0" />
        <circle cx="26" cy="35" r="1.1" fill={`url(#${gid})`} strokeWidth="0" />
        <circle cx="31" cy="12" r="1.4" fill={`url(#${gid})`} strokeWidth="0" />

        {/* Pencil — body */}
        <path d="M56 20 L68 20 L68 54 L62 70 L56 54 Z" />
        {/* Pencil top band */}
        <path d="M56 28 L68 28" strokeWidth="2.6" />
        {/* Pencil collar (where wood meets body) */}
        <path d="M56 54 L68 54" strokeWidth="2.6" />
        {/* Pencil lead tip */}
        <path
          d="M59.5 61 L64.5 61 L62 69 Z"
          fill={`url(#${gid})`}
          fillOpacity="0.85"
          strokeWidth="0"
        />

        {/* Ladder — rails */}
        <path d="M85 20 L85 76" />
        <path d="M99 20 L99 76" />
        {/* Ladder — rungs */}
        <path d="M85 30 L99 30" strokeWidth="2.6" />
        <path d="M85 42 L99 42" strokeWidth="2.6" />
        <path d="M85 54 L99 54" strokeWidth="2.6" />
        <path d="M85 66 L99 66" strokeWidth="2.6" />
      </g>
    </svg>
  );
}
