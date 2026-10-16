import type { CSSProperties, ReactNode } from "react";
import { Carousel } from "@/components/carousel";
import { CommandPalette } from "@/components/command-palette";
import { ContributionGraph } from "@/components/contribution-graph";
import { Icon } from "@/components/icons";
import { Nav } from "@/components/nav";
import { Rich } from "@/components/rich";
import { sections } from "@/components/sections";
import { Spotlight } from "@/components/spotlight";
import {
  about,
  awards,
  certifications,
  education,
  experience,
  footer,
  profile,
  projects,
  writing,
} from "@/content";
import { getContributions } from "@/lib/github";

const labelOf = (id: string) => sections.find((s) => s.id === id)!.label;

function Section({
  id,
  index,
  children,
}: {
  id: string;
  index: number;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={labelOf(id)}
      className="rise mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      style={{ "--i": index + 4 } as CSSProperties}
    >
      {/* 모바일에서는 섹션 제목이 상단에 붙어 따라온다 */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-bg/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-xs font-bold tracking-widest text-fg uppercase">
          {labelOf(id)}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="사용 기술">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full bg-fg/10 px-2.5 py-1 text-[12px] leading-none font-medium text-fg/85"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Logo({ src }: { src?: string }) {
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={20}
      height={20}
      className="mr-2 size-5 shrink-0 rounded-[5px] opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
    />
  );
}

function Arrow() {
  return (
    <span
      aria-hidden
      className="ml-1 inline-block text-[0.85em] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      ↗
    </span>
  );
}

// 리스트 항목 공통 효과: 마우스를 올린 항목만 또렷하고 나머지는 흐려진다
const listClass = "group/list space-y-12";
const itemClass =
  "group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50";
const hoverBg =
  "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:drop-shadow-lg";

export default async function Home() {
  // 빌드할 때 한 번 가져온다. 실패하면 null이라 잔디 영역이 숨겨진다.
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
          {/* 왼쪽: 고정 영역 */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            {/* w-fit: 잔디 폭이 한 줄 소개 길이에 맞춰진다 */}
            <div className="lg:w-fit">
              <h1
                className="rise text-4xl font-bold tracking-tight text-fg sm:text-5xl"
                style={{ "--i": 0 } as CSSProperties}
              >
                {profile.name}
              </h1>
              <p
                className="rise mt-3 text-lg font-medium text-fg sm:text-xl"
                style={{ "--i": 1 } as CSSProperties}
              >
                {profile.role}
              </p>
              <p
                className="rise mt-4 max-w-sm leading-relaxed text-balance text-dim"
                style={{ "--i": 2 } as CSSProperties}
              >
                <Rich text={profile.tagline} />
              </p>
              <CommandPalette />
              <Nav />
              {/* 목차 아래 GitHub 잔디 */}
              {contributions && (
                <div
                  className="rise mt-24"
                  style={{ "--i": 4 } as CSSProperties}
                >
                  <ContributionGraph
                    data={contributions}
                    username={profile.github}
                  />
                </div>
              )}
            </div>

            <ul
              className="rise mt-8 flex items-center gap-5"
              style={{ "--i": 4 } as CSSProperties}
              aria-label="외부 링크"
            >
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.href.startsWith("mailto:")
                      ? { "aria-label": s.label }
                      : {
                          target: "_blank",
                          rel: "noreferrer noopener",
                          "aria-label": `${s.label} (새 창)`,
                        })}
                    title={s.label}
                    className="block text-dim transition-colors hover:text-fg"
                  >
                    <Icon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </header>

          {/* 오른쪽: 스크롤 영역 */}
          <main className="pt-24 text-dim lg:w-[52%] lg:py-24">
            <Section id="about" index={0}>
              <div className="space-y-4 leading-[1.8]">
                {about.map((p, i) => (
                  <p key={i} className="whitespace-pre-line">
                    <Rich text={p} />
                  </p>
                ))}
              </div>
            </Section>

            <Section id="experience" index={1}>
              <ol className={listClass}>
                {experience.map((e) => (
                  <li key={e.period + e.company} className={itemClass}>
                    <div className={hoverBg} />
                    <p className="z-10 mt-1 text-[12px] font-medium text-faint sm:col-span-2">
                      {e.period}
                    </p>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="flex items-center leading-snug font-semibold text-fg">
                        {e.logo && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={e.logo}
                            alt=""
                            width={20}
                            height={20}
                            className="mr-2 size-5 shrink-0 rounded-[5px] opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                          />
                        )}
                        {e.href ? (
                          <a
                            href={e.href}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl lg:-inset-x-6 lg:block" />
                            {e.company}{" "}
                            <span className="ml-1 font-normal text-dim">{e.role}</span>
                            <Arrow />
                          </a>
                        ) : (
                          <>
                            {e.company}{" "}
                            <span className="ml-1 font-normal text-dim">{e.role}</span>
                          </>
                        )}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.75] whitespace-pre-line">
                        {e.description}
                      </p>
                      {e.links && e.links.length > 0 && (
                        <ul className="relative z-20 mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
                          {e.links.map((l) => (
                            <li key={l.href}>
                              <a
                                href={l.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="group/link font-medium text-fg/85 transition-colors hover:text-fg"
                              >
                                {l.label}
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
                      <Tags tags={e.tags} />
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
            </Section>

            <Section id="projects" index={2}>
              {/* 한 장씩 크게, 옆으로 넘기는 카드. 마우스를 올리면 살짝 떠오르고 썸네일이 확대된다 */}
              <Carousel label="프로젝트">
                {projects.map((p) => (
                  <article
                    key={p.title}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-card transition duration-300 ease-out hover:-translate-y-1 hover:border-faint/60 hover:shadow-xl hover:shadow-black/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-surface">
                      {p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.image}
                          alt=""
                          loading="lazy"
                          className="size-full bg-white object-cover transition duration-500 ease-out group-hover:scale-105"
                        />
                      ) : (
                        // 썸네일이 없으면 제목으로 만든 표지
                        <div className="flex size-full items-end p-4 transition duration-500 ease-out group-hover:scale-105">
                          <span className="text-4xl leading-tight font-bold tracking-tight text-fg/15">
                            {p.title}
                          </span>
                        </div>
                      )}
                      {p.badge && (
                        <span className="absolute top-3 left-3 rounded-full bg-bg/80 px-2.5 py-1 text-[11px] font-semibold text-fg backdrop-blur">
                          ✦ {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg leading-snug font-semibold text-fg">
                        {p.href ? (
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${p.title} (새 창)`}
                          >
                            {/* 카드 전체를 눌러도 열린다 */}
                            <span className="absolute inset-0 z-10" />
                            {p.title}
                            <Arrow />
                          </a>
                        ) : (
                          p.title
                        )}
                      </h3>
                      <p className="mt-2 flex-1 text-[15px] leading-[1.75] whitespace-pre-line">
                        {p.description}
                      </p>
                      {p.links && p.links.length > 0 && (
                        <ul className="relative z-20 mt-2 flex gap-4 text-[13px]">
                          {p.links.map((l) => (
                            <li key={l.href}>
                              <a
                                href={l.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="group/link font-medium text-fg/85 hover:text-fg"
                              >
                                {l.label} ↗
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                      <Tags tags={p.tags} />
                    </div>
                  </article>
                ))}
              </Carousel>
            </Section>

            {writing.length > 0 && (
              <Section id="writing" index={3}>
                <ul className={listClass}>
                  {writing.map((w) => (
                    <li key={w.title} className={itemClass}>
                      <div className={hoverBg} />
                      <p className="z-10 mt-0.5 text-[12px] font-medium text-faint sm:col-span-2">
                        {w.year}
                      </p>
                      <h3 className="z-10 leading-snug font-semibold text-fg sm:col-span-6">
                        <a
                          href={w.href}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl lg:-inset-x-6 lg:block" />
                          {w.title}
                          <Arrow />
                        </a>
                      </h3>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {education.length + awards.length + certifications.length > 0 && (
              <Section id="education" index={4}>
                {education.length > 0 && (
                  <>
                    <h3 className="mb-6 text-[13px] font-semibold text-fg">
                      학력
                    </h3>
                    <ol className={listClass}>
                      {education.map((e) => (
                        <li key={e.school + e.period} className={itemClass}>
                          <div className={hoverBg} />
                          <p className="z-10 mt-1 text-[12px] font-medium text-faint sm:col-span-2">
                            {e.period}
                          </p>
                          <div className="z-10 sm:col-span-6">
                            <p className="flex items-center leading-snug font-semibold text-fg">
                              <Logo src={e.logo} />
                              {e.school}{" "}
                              <span className="ml-1 font-normal text-dim">
                                {e.major}
                              </span>
                            </p>
                            {e.note && (
                              <p className="mt-2 text-[15px] leading-[1.75]">
                                {e.note}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </>
                )}
                {awards.length > 0 && (
                  <>
                    <h3
                      className={`mb-6 text-[13px] font-semibold text-fg ${
                        education.length > 0 ? "mt-16" : ""
                      }`}
                    >
                      수상
                    </h3>
                    <ol className={listClass.replace("space-y-12", "space-y-8")}>
                      {awards.map((a) => (
                        <li key={a.title + a.issuer} className={itemClass}>
                          <div className={hoverBg} />
                          <p className="z-10 mt-1 text-[12px] font-medium text-faint sm:col-span-2">
                            {a.date}
                          </p>
                          <div className="z-10 sm:col-span-6">
                            <p className="flex items-center leading-snug font-semibold text-fg">
                              <Logo src={a.logo} />
                              {a.title}
                              <span className="ml-1.5 font-normal text-dim">
                                - {a.issuer}
                              </span>
                            </p>
                            <p className="mt-1.5 text-[15px] leading-[1.75]">
                              <span className="font-semibold text-fg">
                                {a.prize}
                              </span>
                              {a.description && <> - {a.description}</>}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </>
                )}
                {certifications.length > 0 && (
                  <>
                    <h3
                      className={`mb-6 text-[13px] font-semibold text-fg ${
                        education.length + awards.length > 0 ? "mt-16" : ""
                      }`}
                    >
                      자격증
                    </h3>
                    <ol className={listClass.replace("space-y-12", "space-y-8")}>
                      {certifications.map((c) => (
                        <li key={c.name} className={itemClass}>
                          <div className={hoverBg} />
                          <p className="z-10 mt-1 text-[12px] font-medium text-faint sm:col-span-2">
                            {c.date}
                          </p>
                          <p className="z-10 leading-snug font-semibold text-fg sm:col-span-6">
                            {c.name}
                            {c.issuer && (
                              <span className="ml-2 text-[13px] font-normal text-faint">
                                {c.issuer}
                              </span>
                            )}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </>
                )}
              </Section>
            )}

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
    </div>
  );
}
