import { Atmosphere } from "@/components/Atmosphere";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SceneRail } from "@/components/SceneRail";
import { Wordmark } from "@/components/Wordmark";

import { Initialization } from "@/scenes/Initialization";
import { Hero } from "@/scenes/Hero";
import { Why } from "@/scenes/Why";
import { Story } from "@/scenes/Story";
import { Philosophy } from "@/scenes/Philosophy";
import { Principles } from "@/scenes/Principles";
import { Lab } from "@/scenes/Lab";
import { Experience } from "@/scenes/Experience";
import { GenoScene } from "@/scenes/GenoScene";
import { Founder } from "@/scenes/Founder";
import { Welcome } from "@/scenes/Welcome";

export default function Home() {
  return (
    <>
      <Atmosphere />
      <ScrollProgress />
      <Wordmark />
      <SceneRail />

      <Initialization />

      <main className="relative z-10">
        <Hero />
        <Why />
        <Story />
        <Philosophy />
        <Principles />
        <Lab />
        <Experience />
        <GenoScene />
        <Founder />
        <Welcome />
      </main>
    </>
  );
}
