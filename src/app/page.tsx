import { VisualEngine } from "@/components/effects/visual-engine";
import { CinematicScrollScene } from "@/components/home/cinematic-scroll-scene";
import { ExperienceLab } from "@/components/home/experience-lab";
import { MotionHeroExperience } from "@/components/home/motion-hero-experience";
import { SceneTransition } from "@/components/home/scene-transition";

export default function HomePage() {
  return (
    <>
      <VisualEngine />
      <MotionHeroExperience />
      <SceneTransition />
      <ExperienceLab />
      <CinematicScrollScene />
    </>
  );
}
