/** Canonical list of scenes — the ordered rooms of the ecosystem. */
export const SCENES = [
  { id: "init", index: "00", label: "شروع" },
  { id: "hero", index: "01", label: "ورود" },
  { id: "why", index: "02", label: "چرا هستیم" },
  { id: "story", index: "03", label: "داستان" },
  { id: "philosophy", index: "04", label: "فلسفه" },
  { id: "principles", index: "05", label: "دو اصل" },
  { id: "lab", index: "06", label: "آزمایشگاه پپسینو" },
  { id: "experience", index: "07", label: "چی تجربه می‌کنی" },
  { id: "geno", index: "08", label: "جنو" },
  { id: "founder", index: "09", label: "بنیان‌گذار" },
  { id: "welcome", index: "10", label: "به خونه خوش اومدی" },
] as const;

export type SceneMeta = (typeof SCENES)[number];
