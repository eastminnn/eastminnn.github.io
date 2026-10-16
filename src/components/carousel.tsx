"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

export function Carousel({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const slides = Children.toArray(children);
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.children[0] as HTMLElement | undefined;
      const second = el.children[1] as HTMLElement | undefined;
      const step =
        first && second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
      setIndex(Math.round(el.scrollLeft / Math.max(1, step)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = (i + slides.length) % slides.length;
    const target = el.children[next] as HTMLElement | undefined;
    const first = el.children[0] as HTMLElement | undefined;
    if (!target || !first) return;
    el.scrollTo({
      left: target.offsetLeft - first.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="relative">
        <div
          ref={track}
          tabIndex={0}
          onKeyDown={(e) => {
            const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
            if (!step) return;
            e.preventDefault();
            go(index + step);
          }}
          className="-my-3 flex gap-12 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth py-3 outline-none [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${slides.length}`}
              className="w-full shrink-0 snap-center"
            >
              {slide}
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <>
            <ArrowButton dir="prev" onClick={() => go(index - 1)} />
            <ArrowButton dir="next" onClick={() => go(index + 1)} />
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`${i + 1}번째 프로젝트`}
              aria-current={i === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-fg" : "w-1.5 bg-faint/50 hover:bg-faint"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ArrowButton({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  const prev = dir === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={prev ? "이전 프로젝트" : "다음 프로젝트"}
      className={`absolute top-1/2 z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg/80 text-dim backdrop-blur transition hover:border-faint hover:text-fg ${
        prev ? "left-2 xl:-left-14" : "right-2 xl:-right-14"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        width={18}
        height={18}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d={prev ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
      </svg>
    </button>
  );
}
