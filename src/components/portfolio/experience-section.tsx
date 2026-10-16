import { experience, profile } from "@/content";
import {
  Arrow,
  hoverBackgroundClass,
  itemClass,
  listClass,
  Logo,
  PortfolioSection,
  Tags,
} from "./shared";

export function ExperienceSection() {
  return (
    <PortfolioSection id="experience" index={1}>
      <ol className={listClass}>
        {experience.map((item) => (
          <li key={`${item.period}-${item.company}`} className={itemClass}>
            <div className={hoverBackgroundClass} />
            <p className="z-10 mt-1 text-[12px] font-medium text-faint sm:col-span-2">
              {item.period}
            </p>
            <div className="z-10 sm:col-span-6">
              <h3 className="flex items-center leading-snug font-semibold text-fg">
                <Logo src={item.logo} />
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl lg:-inset-x-6 lg:block" />
                    {item.company}{" "}
                    <span className="ml-1 font-normal text-dim">
                      {item.role}
                    </span>
                    <Arrow />
                  </a>
                ) : (
                  <>
                    {item.company}{" "}
                    <span className="ml-1 font-normal text-dim">
                      {item.role}
                    </span>
                  </>
                )}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.75] whitespace-pre-line">
                {item.description}
              </p>
              {item.links && item.links.length > 0 && (
                <ul className="relative z-20 mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
                  {item.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link font-medium text-fg/85 transition-colors hover:text-fg"
                      >
                        {link.label}
                        <span
                          aria-hidden
                          className="ml-1 inline-block text-[0.85em] transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <Tags tags={item.tags} />
            </div>
          </li>
        ))}
      </ol>
      {profile.resume && (
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer noopener"
          className="group mt-12 inline-block font-semibold text-fg"
        >
          이력서 전체 보기
          <Arrow />
        </a>
      )}
    </PortfolioSection>
  );
}
