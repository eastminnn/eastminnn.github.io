export type ContributionDay = {
  date: string;
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

    days.sort((a, b) => a.date.localeCompare(b.date));
    const total = days.reduce((sum, d) => sum + d.count, 0);
    return { days, total };
  } catch {
    return null;
  }
}
