"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import SkillsSection from "@/components/skills-section";
import { skillsBackendData, skillsDataFrontend, skillsData } from "@/lib/data";
import { useTranslations } from "@/lib/hooks";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SkillsSection heading={t.sections.backendSkills} skills={skillsBackendData} />
      <SkillsSection heading={t.sections.frontendSkills} skills={skillsDataFrontend} />
      <SkillsSection heading={t.sections.dbDeployment} skills={skillsData} />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
