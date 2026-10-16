"use client";

import Image from "next/image";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import type { Project, Troubleshooting } from "@/content";
import { Tags } from "./shared";

const HASH_PREFIX = "#p-";
const HASH_CLEARED = "portfolio:hash-cleared";

let openedByNavigation = false;

function readSlug() {
  const { hash } = window.location;
  return hash.startsWith(HASH_PREFIX)
    ? decodeURIComponent(hash.slice(HASH_PREFIX.length))
    : null;
}

function subscribe(onChange: () => void) {
  const onHashChange = () => {
    openedByNavigation = true;
    onChange();
  };
  window.addEventListener("hashchange", onHashChange);
  window.addEventListener(HASH_CLEARED, onChange);
  return () => {
    window.removeEventListener("hashchange", onHashChange);
    window.removeEventListener(HASH_CLEARED, onChange);
  };
}

export function ProjectSheet({ projects }: { projects: Project[] }) {
  const slug = useSyncExternalStore(subscribe, readSlug, () => null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  const project = projects.find((item) => item.slug === slug && item.detail);

  const close = useCallback(() => {
    if (openedByNavigation) {
      openedByNavigation = false;
      window.history.back();
      return;
    }
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
    window.dispatchEvent(new Event(HASH_CLEARED));
  }, []);

  useEffect(() => {
    if (!project) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    panel.current?.scrollTo({ top: 0 });
    closeButton.current?.focus({ preventScroll: true });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, close]);

  if (!project?.detail) return null;
  const { detail } = project;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="sheet-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />
      <div
        ref={panel}
        className="sheet-panel absolute inset-x-0 top-[5vh] bottom-0 mx-auto max-w-3xl overflow-y-auto overscroll-contain rounded-t-2xl border border-b-0 border-line bg-bg shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-bg/85 px-6 py-3 backdrop-blur sm:px-10">
          <span className="text-[13px] font-semibold text-dim">
            {project.title}
          </span>
          <button
            ref={closeButton}
            type="button"
            onClick={close}
            aria-label="닫기"
            className="grid size-8 place-items-center rounded-full text-faint transition-colors hover:bg-surface hover:text-fg"
          >
            <svg
              viewBox="0 0 24 24"
              width={18}
              height={18}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <article className="px-6 pt-6 pb-20 text-dim sm:px-10 sm:pt-8">
          {project.image && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-white">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 768px) 720px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-fg">
                {project.title}
              </h2>
              {project.badge && (
                <span className="rounded-full bg-fg px-2.5 py-1 text-[11px] leading-none font-semibold text-bg">
                  {project.badge}
                </span>
              )}
            </div>
            <p className="mt-2 text-[17px] text-fg/85">{detail.summary}</p>
            <p className="mt-3 text-[13px] text-faint">
              {[detail.role, detail.period].filter(Boolean).join(" · ")}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[14px]">
              {project.href && (
                <li>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-fg/85 hover:text-fg"
                  >
                    GitHub ↗
                  </a>
                </li>
              )}
              {project.links?.map((link) => (
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
            <Tags tags={project.tags} />
          </header>

          <SheetSection title="개요">
            <p className="text-[15px] leading-[1.85]">{detail.overview}</p>
          </SheetSection>

          <SheetSection title="맡은 일">
            <ul className="space-y-2 text-[15px] leading-[1.7]">
              {detail.tasks.map((task) => (
                <li key={task} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-[0.7em] size-1 shrink-0 rounded-full bg-faint"
                  />
                  {task}
                </li>
              ))}
            </ul>
          </SheetSection>

          {detail.capacity && (
            <SheetSection title="설계 기준과 예상 부하">
              <dl className="grid gap-3 sm:grid-cols-2">
                {detail.capacity.items.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-line bg-card px-4 py-3.5"
                  >
                    <dt className="text-[12px] font-medium text-faint">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-lg font-bold text-fg">
                      {item.value}
                    </dd>
                    {item.note && (
                      <dd className="mt-0.5 text-[13px] leading-relaxed">
                        {item.note}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
              {detail.capacity.footnote && (
                <p className="mt-3 text-[12px] text-faint">
                  {detail.capacity.footnote}
                </p>
              )}
            </SheetSection>
          )}

          {detail.designPoints && detail.designPoints.length > 0 && (
            <SheetSection title="설계 포인트">
              <ul className="space-y-3">
                {detail.designPoints.map((point) => (
                  <li
                    key={point.title}
                    className="rounded-xl border border-line bg-card px-5 py-4"
                  >
                    <p className="text-[15px] font-semibold text-fg">
                      {point.title}
                    </p>
                    <p className="mt-1.5 text-[14.5px] leading-[1.75]">
                      {point.description}
                    </p>
                  </li>
                ))}
              </ul>
            </SheetSection>
          )}

          <SheetSection title="문제 해결">
            <ol className="space-y-5">
              {detail.troubleshooting.map((item, index) => (
                <TroubleshootingCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </ol>
          </SheetSection>
        </article>
      </div>
    </div>
  );
}

function SheetSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12">
      <h3 className="mb-4 text-xs font-bold tracking-widest text-fg uppercase">
        {title}
      </h3>
      {children}
    </section>
  );
}

const steps = [
  ["문제", "problem"],
  ["원인", "cause"],
  ["선택", "solution"],
  ["결과", "result"],
] as const;

function TroubleshootingCard({
  item,
  index,
}: {
  item: Troubleshooting;
  index: number;
}) {
  return (
    <li className="rounded-xl border border-line bg-card p-5 sm:p-6">
      <p className="flex gap-3 text-[16px] leading-snug font-semibold text-fg">
        <span className="text-faint tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        {item.title}
      </p>
      {item.metric && (
        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-lg bg-surface px-4 py-3">
          <span className="text-[13px] text-faint">{item.metric.label}</span>
          <span className="text-xl font-semibold text-faint line-through decoration-1">
            {item.metric.before}
          </span>
          <span aria-hidden className="text-faint">
            →
          </span>
          <span className="text-2xl font-bold text-fg">
            {item.metric.after}
          </span>
        </div>
      )}
      <dl className="mt-4 space-y-3 text-[14.5px] leading-[1.75]">
        {steps.map(([label, key]) => (
          <div
            key={key}
            className="grid gap-1 sm:grid-cols-[3.5rem_1fr] sm:gap-3"
          >
            <dt
              className={`text-[13px] font-semibold ${key === "result" ? "text-fg" : "text-faint"}`}
            >
              {label}
            </dt>
            <dd className={key === "result" ? "text-fg/90" : undefined}>
              {item[key]}
            </dd>
          </div>
        ))}
      </dl>
    </li>
  );
}
