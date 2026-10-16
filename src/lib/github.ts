// GitHub 프로필의 잔디(기여 그래프)를 빌드할 때 가져온다.
// github.com/users/<이름>/contributions 는 로그인 없이 볼 수 있는 공개 HTML 조각이다.
// 실패하면 null을 돌려주고, 화면에서는 잔디 영역을 숨긴다.

export type ContributionDay = {
  date: string; // "2026-10-12"
  level: 0 | 1 | 2 | 3 | 4;
  count: number;
};

export type Contributions = {
  days: ContributionDay[];
  total: number;
};

export async function getContributions(
  username: string,
): Promise<Contributions | null> {
  try {
    const res = await fetch(
      `https://github.com/users/${username}/contributions`,
      { headers: { "User-Agent": "portfolio-build" } },
    );
    if (!res.ok) return null;
    const html = await res.text();

    // 툴팁 문구에서 칸별 기여 횟수를 읽는다: "14 contributions on ..." / "No contributions on ..."
    const counts = new Map<string, number>();
    for (const m of html.matchAll(
      /<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g,
    )) {
      const n = m[2].match(/^(\d[\d,]*) contribution/);
      counts.set(m[1], n ? Number(n[1].replace(/,/g, "")) : 0);
    }

    const days: ContributionDay[] = [];
    for (const m of html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)) {
      const tag = m[0];
      const date = tag.match(/data-date="([^"]+)"/)![1];
      const level = Number(tag.match(/data-level="(\d)"/)?.[1] ?? 0);
      const id = tag.match(/\bid="([^"]+)"/)?.[1] ?? "";
      days.push({
        date,
        level: Math.min(4, Math.max(0, level)) as ContributionDay["level"],
        count: counts.get(id) ?? 0,
      });
    }
    if (days.length === 0) return null;

    // 표에는 요일별(행) 순서로 들어 있어서 날짜순으로 다시 정렬한다
    days.sort((a, b) => a.date.localeCompare(b.date));
    const total = days.reduce((sum, d) => sum + d.count, 0);
    return { days, total };
  } catch {
    return null;
  }
}
