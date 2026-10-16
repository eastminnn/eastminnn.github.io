import type { Contributions } from "@/lib/github";

// 단계별 칸 색. 초록 대신 사이트 톤에 맞춘 무채색 농도.
const levelClass = [
  "bg-surface",
  "bg-fg/20",
  "bg-fg/40",
  "bg-fg/65",
  "bg-fg/90",
] as const;

const formatDate = (date: string) => date.replaceAll("-", ".");

// 주(열) × 요일(행) 격자. 폭에 맞춰 칸 크기가 자동으로 줄어든다.
export function ContributionGraph({
  data,
  username,
  weeks: maxWeeks = 26,
}: {
  data: Contributions;
  username: string;
  weeks?: number; // 최근 몇 주만 보여줄지 (기본 26주 ≈ 6개월)
}) {
  // 첫 주가 일요일이 아니면 앞을 빈칸으로 채운다 (GitHub와 같은 배치)
  const offset = new Date(`${data.days[0].date}T00:00:00Z`).getUTCDay();
  const all = [...Array(offset).fill(null), ...data.days];
  const totalWeeks = Math.ceil(all.length / 7);
  const weeks = Math.min(maxWeeks, totalWeeks);
  const cells = all.slice((totalWeeks - weeks) * 7);
  const total = cells.reduce((sum, d) => sum + (d?.count ?? 0), 0);
  const months = Math.round(weeks / 4.345);
  const rangeLabel = weeks >= 52 ? "지난 1년간" : `최근 ${months}개월`;

  return (
    <div>
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
