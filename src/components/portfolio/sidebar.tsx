import type { CSSProperties } from "react";
import { CommandPalette } from "@/components/command-palette";
import { ContributionGraph } from "@/components/contribution-graph";
import { Icon } from "@/components/icons";
import { Nav } from "@/components/nav";
import { Rich } from "@/components/rich";
import { profile } from "@/content";
import type { Contributions } from "@/lib/github";

export function Sidebar({
  contributions,
}: {
  contributions: Contributions | null;
}) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div className="lg:w-fit">
        <h1
          className="rise text-4xl font-bold tracking-tight text-fg sm:text-5xl"
          style={{ "--i": 0 } as CSSProperties}
        >
          {profile.name}
        </h1>
        <p
          className="rise mt-3 text-lg font-medium text-fg sm:text-xl"
          style={{ "--i": 1 } as CSSProperties}
        >
          {profile.role}
        </p>
        <p
          className="rise mt-4 max-w-sm leading-relaxed text-balance text-dim"
          style={{ "--i": 2 } as CSSProperties}
        >
          <Rich text={profile.tagline} />
        </p>
        <CommandPalette />
        <Nav />
        {contributions && (
          <div className="rise mt-28" style={{ "--i": 4 } as CSSProperties}>
            <ContributionGraph
              data={contributions}
              username={profile.github}
            />
          </div>
        )}
      </div>

      <ul
        className="rise mt-8 flex items-center gap-5"
        style={{ "--i": 4 } as CSSProperties}
        aria-label="외부 링크"
      >
        {profile.socials.map((social) => {
          const isEmail = social.href.startsWith("mailto:");

          return (
            <li key={social.label}>
              <a
                href={social.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noreferrer noopener"}
                aria-label={
                  isEmail ? social.label : `${social.label} (새 창)`
                }
                title={social.label}
                className="block text-dim transition-colors hover:text-fg"
              >
                <Icon name={social.icon} />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
