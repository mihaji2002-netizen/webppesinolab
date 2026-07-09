# Pepsinogen

> You didn't visit a website. You entered an ecosystem.

Pepsinogen is not an educational institute, a coaching company, or a tutoring
platform. It's an ecosystem built on learning science, designed to help students
evolve — not just academically, but as human beings.

**Grades are temporary. Character stays forever.**

This repository holds the digital identity of that ecosystem: a cinematic,
scene-based experience rather than a conventional landing page.

## Experience

The site is structured as eleven scenes — rooms in a welcome ceremony, not
sections of a brochure:

| # | Scene | What happens |
|---|-------|--------------|
| 00 | Initialization | A boot ceremony. You're told you already belong. |
| 01 | Hero | One breath, one idea: you're becoming. |
| 02 | Why It Exists | An honest admission — traditional education wasn't enough. |
| 03 | The Story | A pinned, horizontal scroll through the founding chapters. |
| 04 | The Philosophy | Evidence over ego. Every decision, science-backed. |
| 05 | Two Principles | A scroll-scrubbed diptych: temporary vs. forever. |
| 06 | Pepsino Lab | An interactive holographic museum of discoveries. |
| 07 | What You'll Experience | Felt outcomes, one thought at a time. |
| 08 | Geno | A living member with moods you can nudge in real time. |
| 09 | The Founder | A plain, warm, first-person note. |
| 10 | Welcome Home | The ceremony resolves — and a map of what grows next. |

## Design system

- **Palette** — black, deep space blue, soft purple, white, soft cyan. Elegant,
  never colorful.
- **Type** — huge display type (Sora), quiet body (Inter), lab/terminal detail
  (JetBrains Mono).
- **Motion** — Lenis inertial scroll, GSAP ScrollTrigger for pinned narrative,
  Framer Motion for scene-level choreography. Everything respects
  `prefers-reduced-motion`.
- **Atmosphere** — a GPU-light canvas particle field gives the whole world a
  living, lab-like depth.

## Tech

- [Next.js 14](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://gsap.com) + ScrollTrigger
- [Lenis](https://lenis.darkroom.engineering) smooth scroll
- [Framer Motion](https://www.framer.com/motion/)

## Architecture

The codebase is organized so future surfaces (student dashboard, gamification,
missions, XP, ranking, community, AI mentor, resources, events) can be added
without a redesign:

```
src/
  app/            # Next.js App Router entry, global styles, fonts
  components/     # Reusable primitives (Scene, Reveal, Geno, Atmosphere, …)
  scenes/         # One file per scene (00 → 10)
  lib/            # Scene registry + utilities
```

- `components/Scene.tsx` — the shared "room" primitive every scene builds on.
- `components/Geno.tsx` — Geno as a mood-driven entity, reusable anywhere.
- `lib/scenes.ts` — the canonical scene registry powering navigation.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```
