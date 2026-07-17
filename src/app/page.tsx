import { VisualEngine } from "@/components/effects/visual-engine";
import { ExperienceLab } from "@/components/home/experience-lab";
import { MotionHeroExperience } from "@/components/home/motion-hero-experience";

export default function HomePage() {
  return (
    <>
      <VisualEngine />
      <MotionHeroExperience />
      <ExperienceLab />
    </>
  );
}
