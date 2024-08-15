import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import SkillsBackend from "@/components/skills-backend";
import SkillsFrontend from "@/components/skills-frontend";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <SkillsBackend/>
      <SkillsFrontend/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </main>
  )
}
