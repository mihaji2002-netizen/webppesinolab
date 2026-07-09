"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number; // depth 0..1
  vx: number;
  vy: number;
  r: number;
  hue: number; // 0 = cyan, 1 = iris
};

/**
 * A fixed, GPU-light particle field rendered on canvas. Reads as drifting
 * data-motes in a deep-space lab — the ambient substrate every scene floats on.
 * It reacts gently to the pointer, so the atmosphere feels alive, not decorative.
 */
export function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    const pointer = { x: 0.5, y: 0.5, active: false };

    const iris = [139, 123, 255];
    const cyan = [111, 233, 245];

    const build = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        140,
        Math.floor((width * height) / 14000),
      );
      particles = Array.from({ length: count }, () => {
        const z = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          vx: (Math.random() - 0.5) * 0.12 * (0.4 + z),
          vy: (Math.random() - 0.5) * 0.12 * (0.4 + z),
          r: 0.4 + z * 1.8,
          hue: Math.random(),
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const px = pointer.x * width;
      const py = pointer.y * height;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Subtle parallax pull toward pointer for near particles.
        if (pointer.active) {
          const dx = px - p.x;
          const dy = py - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          const force = Math.min(0.06, 40 / (dist * dist)) * p.z;
          p.x += dx * force;
          p.y += dy * force;
        }

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const c = p.hue > 0.5 ? iris : cyan;
        const alpha = 0.15 + p.z * 0.55;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`;
        ctx.fill();
      }

      // Thread faint links between close, near particles (constellation feel).
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        if (a.z < 0.55) continue;
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          if (b.z < 0.55) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = dx * dx + dy * dy;
          if (d < 15000) {
            const alpha = (1 - d / 15000) * 0.12;
            ctx.strokeStyle = `rgba(139, 123, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      frame = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      pointer.x = e.clientX / width;
      pointer.y = e.clientY / height;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };

    let frame = 0;
    build();
    if (!reduce) {
      frame = requestAnimationFrame(draw);
      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("pointerleave", onLeave);
    } else {
      draw();
      cancelAnimationFrame(frame);
    }
    window.addEventListener("resize", build);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
