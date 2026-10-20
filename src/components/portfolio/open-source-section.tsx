import { openSource } from "@/content";
import {
  Arrow,
  hoverBackgroundClass,
  itemClass,
  listClass,
  PortfolioSection,
  Tags,
} from "./shared";

function MergeIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width={12}
      height={12}
      fill="currentColor"
      aria-hidden
    >
      <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z" />
    </svg>
  );
}

export function OpenSourceSection() {
  if (openSource.length === 0) return null;

  return (
    <PortfolioSection id="open-source" index={3}>
      <ul className={listClass}>
        {openSource.map((item) => (
          <li key={item.href} className={itemClass}>
            <div className={hoverBackgroundClass} />
            <p className="z-10 mt-0.5 text-[13px] font-medium text-fg sm:col-span-2">
              {item.date}
            </p>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug font-semibold text-fg">
                <a href={item.href} target="_blank" rel="noreferrer noopener">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl lg:-inset-x-6 lg:block" />
                  <span className="font-normal text-faint">
                    {item.owner} /{" "}
                  </span>
                  {item.repo}
                  <Arrow />
                </a>
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-[12px] leading-none">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#8957e5] px-2 py-1 font-semibold text-white">
                  <MergeIcon />
                  Merged
                </span>
                <span className="font-medium text-dim">#{item.pr}</span>
                <span className="text-faint">·</span>
                <span className="text-faint">★ {item.stars}</span>
                <span className="text-faint">·</span>
                <span className="font-mono">
                  <span className="text-[#3fb950]">+{item.diff.additions}</span>{" "}
                  <span className="text-[#f85149]">−{item.diff.deletions}</span>
                </span>
              </div>

              <p className="mt-3 rounded-md bg-surface px-2.5 py-1.5 font-mono text-[12px] text-dim">
                {item.prTitle}
              </p>

              <p className="mt-3 text-[14.5px] leading-relaxed">
                {item.description}
              </p>

              <dl className="mt-3 flex flex-wrap gap-2">
                {item.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-baseline gap-2 rounded-lg border border-line px-3 py-2"
                  >
                    <dt className="text-[12px] text-faint">{metric.label}</dt>
                    <dd className="flex items-baseline gap-1.5">
                      <span className="text-[13px] text-faint line-through decoration-1">
                        {metric.before}
                      </span>
                      <span aria-hidden className="text-[12px] text-faint">
                        →
                      </span>
                      <span className="text-[15px] font-bold text-fg">
                        {metric.after}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>

              <Tags tags={item.tags} />
            </div>
          </li>
        ))}
      </ul>
    </PortfolioSection>
  );
}
