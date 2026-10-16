import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { sections } from "@/components/sections";

const sectionLabels = new Map(
  sections.map(({ id, label }) => [id, label] as const),
);

export const listClass = "group/list space-y-12";
export const itemClass =
  "group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50";
export const hoverBackgroundClass =
  "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:drop-shadow-lg";

export function PortfolioSection({
  id,
  index,
  children,
}: {
  id: string;
  index: number;
  children: ReactNode;
}) {
  const label = sectionLabels.get(id) ?? id;

  return (
    <section
      id={id}
      aria-label={label}
      className="rise mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      style={{ "--i": index + 4 } as CSSProperties}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-bg/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-xs font-bold tracking-widest text-fg uppercase">
          {label}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;

  return (
    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="사용 기술">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-fg/10 px-2.5 py-1 text-[12px] leading-none font-medium text-fg/85"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function Logo({ src }: { src?: string }) {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt=""
      width={20}
      height={20}
      className="mr-2 size-5 shrink-0 rounded-[5px] opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
    />
  );
}

export function Arrow() {
  return (
    <span
      aria-hidden
      className="ml-1 inline-block text-[0.85em] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      ↗
    </span>
  );
}
