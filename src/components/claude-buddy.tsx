"use client";

import { useState, type ReactNode } from "react";

const sprite = [
  "..#########..",
  "..#########..",
  "..##E###E##..",
  "..##E###E##..",
  "#############",
  "..#########..",
  "..#########..",
  "...#.#.#.#...",
  "...#.#.#.#...",
];

const bodyPath = sprite
  .flatMap((row, y) =>
    [...row].map((cell, x) =>
      cell === "." ? "" : `M${x} ${y}h1v1h-1z`,
    ),
  )
  .join("");

function Sprite({ shaking }: { shaking: boolean }) {
  return (
    <svg
      viewBox="0 0 13 9"
      width={78}
      height={54}
      shapeRendering="crispEdges"
      aria-hidden
      className={shaking ? "buddy-shake" : undefined}
    >
      <path d={bodyPath} fill="#d97757" />
      <rect className="buddy-eye" x={4} y={2} width={1} height={2} fill="#1a1a1a" />
      <rect className="buddy-eye" x={8} y={2} width={1} height={2} fill="#1a1a1a" />
    </svg>
  );
}

export function ClaudeBuddy({ children }: { children: ReactNode }) {
  const [shakeCount, setShakeCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [phase, setPhase] = useState<
    "home" | "leaving" | "away" | "returning"
  >("home");
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (phase === "leaving" || phase === "returning") return;

    const nextClickCount = clickCount + 1;
    if (nextClickCount === 10) {
      setClickCount(0);
      setPhase(phase === "home" ? "leaving" : "returning");
      setActive(true);
      return;
    }

    setClickCount(nextClickCount);
    if (phase === "home") setShakeCount((count) => count + 1);
    setActive(true);
  };

  const message = {
    home: "안녕하세요!",
    leaving: "잠깐 다녀올게요.",
    returning: "다시 돌아오는 중...",
  }[phase === "away" ? "home" : phase];

  const hideTooltip = () => {
    if (phase === "leaving" || phase === "returning") return;
    setActive(false);
  };

  const travelClass = {
    home: "",
    leaving: "buddy-crawl-out",
    away: "",
    returning: "buddy-crawl-in",
  }[phase];

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseLeave={hideTooltip}
      onBlur={hideTooltip}
      aria-label={`Claude 캐릭터. 10번 클릭하면 화면 ${phase === "away" ? "안으로 돌아옵니다" : "밖으로 나갑니다"}. 현재 ${clickCount}번 클릭했습니다.`}
      className="group/buddy relative inline-block cursor-pointer appearance-none rounded-sm border-0 bg-transparent p-0 [color:inherit] [font:inherit] outline-none focus-visible:ring-2 focus-visible:ring-fg/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <em className="underline decoration-[#d97757]/60 decoration-2 underline-offset-4 transition-colors group-hover/buddy:text-[#d97757] group-focus-visible/buddy:text-[#d97757]">
        {children}
      </em>
      {phase !== "away" && (
        <span
          role="tooltip"
          onAnimationEnd={(event) => {
            if (event.currentTarget !== event.target) return;
            setPhase(phase === "leaving" ? "away" : "home");
            setActive(false);
          }}
          className={`pointer-events-none absolute bottom-full left-1/2 z-40 mb-2 flex -translate-x-1/2 flex-col items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/buddy:translate-y-0 group-hover/buddy:scale-100 group-hover/buddy:opacity-100 group-focus-visible/buddy:translate-y-0 group-focus-visible/buddy:scale-100 group-focus-visible/buddy:opacity-100 ${travelClass} ${
            active
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-2 scale-75 opacity-0"
          }`}
        >
          <span className="mb-1 rounded-full bg-fg px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap text-bg">
            {message}
          </span>
          <Sprite key={shakeCount} shaking={phase === "home" && shakeCount > 0} />
        </span>
      )}
    </button>
  );
}
