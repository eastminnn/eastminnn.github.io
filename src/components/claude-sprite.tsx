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
    [...row].map((cell, x) => (cell === "." ? "" : `M${x} ${y}h1v1h-1z`)),
  )
  .join("");

export function Sprite({
  shaking,
  look = { x: 0, y: 0 },
  scale = 6,
}: {
  shaking: boolean;
  look?: { x: number; y: number };
  scale?: number;
}) {
  return (
    <svg
      viewBox="0 0 13 9"
      width={13 * scale}
      height={9 * scale}
      shapeRendering="crispEdges"
      aria-hidden
      className={shaking ? "buddy-shake" : undefined}
    >
      <path d={bodyPath} fill="#d97757" />
      <rect
        className="buddy-eye"
        x={4 + look.x}
        y={2 + look.y}
        width={1}
        height={2}
        fill="#1a1a1a"
      />
      <rect
        className="buddy-eye"
        x={8 + look.x}
        y={2 + look.y}
        width={1}
        height={2}
        fill="#1a1a1a"
      />
    </svg>
  );
}
