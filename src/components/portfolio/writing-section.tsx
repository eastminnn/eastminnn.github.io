import { writing } from "@/content";
import {
  Arrow,
  hoverBackgroundClass,
  itemClass,
  listClass,
  PortfolioSection,
} from "./shared";

export function WritingSection() {
  if (writing.length === 0) return null;

  return (
    <PortfolioSection id="writing" index={3}>
      <ul className={listClass}>
        {writing.map((article) => (
          <li key={article.title} className={itemClass}>
            <div className={hoverBackgroundClass} />
            <p className="z-10 mt-0.5 text-[13px] font-medium text-fg sm:col-span-2">
              {article.year}
            </p>
            <h3 className="z-10 leading-snug font-semibold text-fg sm:col-span-6">
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl lg:-inset-x-6 lg:block" />
                {article.title}
                <Arrow />
              </a>
            </h3>
          </li>
        ))}
      </ul>
    </PortfolioSection>
  );
}
