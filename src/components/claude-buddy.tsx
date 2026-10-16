import type { ReactNode } from "react";

// 직접 그린 픽셀 캐릭터 (Claude Code 마스코트 오마주). 공식 로고 파일은 쓰지 않는다.
// # = 몸, E = 눈 자리(몸 색으로 칠한 뒤 위에 눈을 얹음), . = 빈칸
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

// 몸은 하나의 path로 그려서 픽셀 사이에 틈(가는 줄)이 안 생기게 한다
const bodyPath = sprite
  .flatMap((row, y) =>
    [...row].map((c, x) => (c === "." ? "" : `M${x} ${y}h1v1h-1z`)),
  )
  .join("");

function Sprite() {
  return (
    <svg
      viewBox="0 0 13 9"
      width={78}
      height={54}
      shapeRendering="crispEdges"
      aria-hidden
      className="buddy-bob"
    >
      <path d={bodyPath} fill="#d97757" />
      <rect className="buddy-eye" x={4} y={2} width={1} height={2} fill="#1a1a1a" />
      <rect className="buddy-eye" x={8} y={2} width={1} height={2} fill="#1a1a1a" />
    </svg>
  );
}

// 마우스를 올리거나(키보드로 포커스하면) 위로 캐릭터가 튀어나오는 강조어
export function ClaudeBuddy({ children }: { children: ReactNode }) {
  return (
    <span
      tabIndex={0}
      className="group/buddy relative inline-block cursor-default outline-none"
    >
      <em className="underline decoration-[#d97757]/60 decoration-2 underline-offset-4 transition-colors group-hover/buddy:text-[#d97757] group-focus-visible/buddy:text-[#d97757]">
        {children}
      </em>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-2 flex -translate-x-1/2 translate-y-2 scale-75 flex-col items-center opacity-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/buddy:translate-y-0 group-hover/buddy:scale-100 group-hover/buddy:opacity-100 group-focus-visible/buddy:translate-y-0 group-focus-visible/buddy:scale-100 group-focus-visible/buddy:opacity-100"
      >
        <span className="mb-1 rounded-full bg-fg px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap text-bg">
          안녕하세요!
        </span>
        <Sprite />
      </span>
    </span>
  );
}
