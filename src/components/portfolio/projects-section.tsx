import Image from "next/image";
import { Carousel } from "@/components/carousel";
import { projects } from "@/content";
import { Arrow, PortfolioSection, Tags } from "./shared";

export function ProjectsSection() {
  return (
    <PortfolioSection id="projects" index={2}>
      <Carousel label="프로젝트">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-card transition duration-300 ease-out hover:-translate-y-1 hover:border-faint/60 hover:shadow-xl hover:shadow-black/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-surface">
              {project.image ? (
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="bg-white object-cover transition duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex size-full items-end p-4 transition duration-500 ease-out group-hover:scale-105">
                  <span className="text-4xl leading-tight font-bold tracking-tight text-fg/15">
                    {project.title}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                <h3 className="text-lg leading-snug font-semibold text-fg">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (새 창)`}
                    >
                      <span className="absolute inset-0 z-10" />
                      {project.title}
                      <Arrow />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                {project.badge && (
                  <span className="relative z-20 inline-flex shrink-0 rounded-full bg-fg px-2.5 py-1 text-[11px] leading-none font-semibold text-bg shadow-sm">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 flex-1 text-[15px] leading-[1.75] whitespace-pre-line">
                {project.description}
              </p>
              {project.links && project.links.length > 0 && (
                <ul className="relative z-20 mt-2 flex gap-4 text-[13px]">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-medium text-fg/85 hover:text-fg"
                      >
                        {link.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <Tags tags={project.tags} />
            </div>
          </article>
        ))}
      </Carousel>
    </PortfolioSection>
  );
}
