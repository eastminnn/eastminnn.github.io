import Image from "next/image";
import { Carousel } from "@/components/carousel";
import { projects } from "@/content";
import { Arrow, PortfolioSection } from "./shared";

export function ProjectsSection() {
  return (
    <PortfolioSection id="projects" index={1}>
      <Carousel label="프로젝트">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-line bg-card transition duration-300 ease-out hover:-translate-y-1 hover:border-faint/60 hover:shadow-xl hover:shadow-black/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
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
              {project.live && (
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-black/55 px-2 py-1 text-[11px] leading-none font-medium text-white backdrop-blur-sm">
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-emerald-400"
                  />
                  운영 중
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                <h3 className="text-lg leading-snug font-semibold text-fg">
                  {project.detail ? (
                    <a
                      href={`#p-${project.slug}`}
                      aria-label={`${project.title} 자세히 보기`}
                    >
                      <span className="absolute inset-0 z-10" />
                      {project.title}
                      <Arrow />
                    </a>
                  ) : project.href ? (
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
            </div>
          </article>
        ))}
      </Carousel>
    </PortfolioSection>
  );
}
