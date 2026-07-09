"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type GenoMood = "calm" | "curious" | "joy" | "focus" | "sleep";

const moodConfig: Record<
  GenoMood,
  { eye: string; aura: string; pupilY: number; browTilt: number }
> = {
  calm: { eye: "#6FE9F5", aura: "rgba(111,233,245,0.55)", pupilY: 0, browTilt: 0 },
  curious: {
    eye: "#8B7BFF",
    aura: "rgba(139,123,255,0.6)",
    pupilY: -2,
    browTilt: -8,
  },
  joy: {
    eye: "#9DF7FF",
    aura: "rgba(157,247,255,0.7)",
    pupilY: -1,
    browTilt: 0,
  },
  focus: {
    eye: "#8B7BFF",
    aura: "rgba(139,123,255,0.5)",
    pupilY: 1,
    browTilt: 6,
  },
  sleep: {
    eye: "#5B4CD6",
    aura: "rgba(91,76,214,0.35)",
    pupilY: 3,
    browTilt: 0,
  },
};

/**
 * Geno — a living entity, not a logo. A soft holographic being that breathes,
 * drifts and blinks. Its mood shifts the eye colour, aura and gaze so it reads
 * as present and aware rather than placed.
 */
export function Geno({
  mood = "calm",
  size = 120,
  className,
  float = true,
}: {
  mood?: GenoMood;
  size?: number;
  className?: string;
  float?: boolean;
}) {
  const c = moodConfig[mood];
  const sleeping = mood === "sleep";

  return (
    <motion.div
      className={cn("relative select-none", className)}
      style={{ width: size, height: size }}
      animate={
        float
          ? { y: [0, -10, 0], rotate: [0, 1.5, 0, -1.5, 0] }
          : undefined
      }
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Aura */}
      <div
        className="absolute inset-0 animate-breathe rounded-full blur-2xl"
        style={{ background: `radial-gradient(circle, ${c.aura}, transparent 68%)` }}
      />
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="relative z-10 overflow-visible"
        aria-label="Geno"
        role="img"
      >
        <defs>
          <radialGradient id="genoBody" cx="42%" cy="34%" r="75%">
            <stop offset="0%" stopColor="#1a2450" />
            <stop offset="55%" stopColor="#0d1330" />
            <stop offset="100%" stopColor="#05070f" />
          </radialGradient>
          <linearGradient id="genoRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B7BFF" />
            <stop offset="100%" stopColor="#6FE9F5" />
          </linearGradient>
          <filter id="genoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Body */}
        <circle cx="50" cy="50" r="34" fill="url(#genoBody)" />
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="url(#genoRing)"
          strokeWidth="0.8"
          opacity="0.6"
        />
        {/* Orbit ring — the "science" halo */}
        <motion.ellipse
          cx="50"
          cy="50"
          rx="44"
          ry="15"
          fill="none"
          stroke="url(#genoRing)"
          strokeWidth="0.6"
          opacity="0.35"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        />

        {/* Eyes */}
        <g filter="url(#genoGlow)">
          {sleeping ? (
            <>
              <path
                d="M34 50 q6 5 12 0"
                fill="none"
                stroke={c.eye}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M54 50 q6 5 12 0"
                fill="none"
                stroke={c.eye}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              <motion.ellipse
                cx="40"
                cy={48 + c.pupilY}
                rx="4.2"
                ry="6.2"
                fill={c.eye}
                animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
                transition={{
                  duration: 5.5,
                  times: [0, 0.9, 0.94, 0.98, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "40px 48px" }}
              />
              <motion.ellipse
                cx="60"
                cy={48 + c.pupilY}
                rx="4.2"
                ry="6.2"
                fill={c.eye}
                animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
                transition={{
                  duration: 5.5,
                  times: [0, 0.9, 0.94, 0.98, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "60px 48px" }}
              />
            </>
          )}
        </g>

        {/* Mouth hint for joy */}
        {mood === "joy" && (
          <path
            d="M42 63 q8 7 16 0"
            fill="none"
            stroke={c.eye}
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.8"
          />
        )}
      </svg>
    </motion.div>
  );
}
