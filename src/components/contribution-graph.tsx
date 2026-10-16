import type { Contributions } from "@/lib/github";

const levelClass = [
  "bg-surface",
  "bg-fg/20 group-hover/graph:bg-contribution-1 group-focus-within/graph:bg-contribution-1",
  "bg-fg/40 group-hover/graph:bg-contribution-2 group-focus-within/graph:bg-contribution-2",
  "bg-fg/65 group-hover/graph:bg-contribution-3 group-focus-within/graph:bg-contribution-3",
  "bg-fg/90 group-hover/graph:bg-contribution-4 group-focus-within/graph:bg-contribution-4",
] as const;

const formatDate = (date: string) => date.replaceAll("-", ".");

export function ContributionGraph({
  data,
  username,
  weeks: maxWeeks = 26,
}: {
  data: Contributions;
  username: string;
  weeks?: number;
}) {
  const offset = new Date(`${data.days[0].date}T00:00:00Z`).getUTCDay();
  const all = [...Array(offset).fill(null), ...data.days];
  const totalWeeks = Math.ceil(all.length / 7);
  const weeks = Math.min(maxWeeks, totalWeeks);
  const cells = all.slice((totalWeeks - weeks) * 7);
  const total = cells.reduce((sum, d) => sum + (d?.count ?? 0), 0);
  const months = Math.round(weeks / 4.345);
  const rangeLabel = weeks >= 52 ? "지난 1년간" : `최근 ${months}개월`;

  return (
    <div className="group/graph">
      <div
        className="grid grid-flow-col grid-rows-7 gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
        role="img"
        aria-label={`${rangeLabel} GitHub 기여 ${total.toLocaleString()}회`}
      >
        {cells.map((d, i) =>
          d ? (
            <div
              key={d.date}
              title={`${formatDate(d.date)} · 기여 ${d.count}회`}
              className={`aspect-square rounded-[1.5px] ${levelClass[d.level]}`}
            />
          ) : (
            <div key={`pad-${i}`} />
          ),
        )}
      </div>
      <div className="mt-2.5 flex items-center justify-between text-[11px] text-faint">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer noopener"
          className="transition-colors hover:text-fg"
        >
          {rangeLabel} 기여 {total.toLocaleString()}회 ↗
        </a>
        <span className="flex items-center gap-1" aria-hidden>
          적음
          {levelClass.map((c) => (
            <span key={c} className={`size-2 rounded-[1.5px] ${c}`} />
          ))}
          많음
        </span>
      </div>
    </div>
  );
}
