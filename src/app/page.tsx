import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { IntroSection } from "@/components/portfolio/intro-section";
import { ProjectSheet } from "@/components/portfolio/project-sheet";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { Sidebar } from "@/components/portfolio/sidebar";
import { WritingSection } from "@/components/portfolio/writing-section";
import { Spotlight } from "@/components/spotlight";
import { footer, profile, projects } from "@/content";
import { getContributions } from "@/lib/github";

export default async function Home() {
  const contributions = profile.github
    ? await getContributions(profile.github)
    : null;

  return (
    <div className="relative">
      <Spotlight />
      <div aria-hidden className="edge-blur edge-blur-top hidden lg:block" />
      <div aria-hidden className="edge-blur edge-blur-bottom" />

      <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar contributions={contributions} />

          <main className="pt-24 text-dim lg:w-[52%] lg:py-24">
            <IntroSection />
            <ExperienceSection />
            <ProjectsSection />
            <WritingSection />
            <EducationSection />

            <footer className="max-w-md pb-16 text-[13px] leading-relaxed text-faint sm:pb-0">
              <p>{footer}</p>
              <p className="mt-2">
                <kbd className="rounded bg-surface px-1.5 py-0.5 font-sans text-[11px]">
                  ⌘K
                </kbd>{" "}
                를 눌러 어디든 바로 이동할 수 있어요.
              </p>
            </footer>
          </main>
        </div>
      </div>
      <ProjectSheet projects={projects} />
    </div>
  );
}
