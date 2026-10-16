import { Rich } from "@/components/rich";
import { about } from "@/content";
import { PortfolioSection } from "./shared";

export function IntroSection() {
  return (
    <PortfolioSection id="about" index={0}>
      <div className="space-y-4 leading-[1.8]">
        {about.map((paragraph) => (
          <p key={paragraph} className="whitespace-pre-line">
            <Rich text={paragraph} />
          </p>
        ))}
      </div>
    </PortfolioSection>
  );
}
