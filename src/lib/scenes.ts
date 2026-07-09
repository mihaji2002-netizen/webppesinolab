/** Canonical list of scenes — the ordered rooms of the ecosystem. */
export const SCENES = [
  { id: "init", index: "00", label: "Initialization" },
  { id: "hero", index: "01", label: "Hero" },
  { id: "why", index: "02", label: "Why It Exists" },
  { id: "story", index: "03", label: "The Story" },
  { id: "philosophy", index: "04", label: "The Philosophy" },
  { id: "principles", index: "05", label: "Two Principles" },
  { id: "lab", index: "06", label: "Pepsino Lab" },
  { id: "experience", index: "07", label: "What You'll Experience" },
  { id: "geno", index: "08", label: "Geno" },
  { id: "founder", index: "09", label: "The Founder" },
  { id: "welcome", index: "10", label: "Welcome Home" },
] as const;

export type SceneMeta = (typeof SCENES)[number];
