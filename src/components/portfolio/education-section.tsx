import { awards, certifications, education } from "@/content";
import {
  hoverBackgroundClass,
  itemClass,
  listClass,
  Logo,
  PortfolioSection,
} from "./shared";

const compactListClass = listClass.replace("space-y-12", "space-y-8");

export function EducationSection() {
  if (education.length + awards.length + certifications.length === 0) {
    return null;
  }

  return (
    <PortfolioSection id="education" index={5}>
      {education.length > 0 && (
        <section>
          <h3 className="mb-6 text-[17px] font-bold text-fg">학력</h3>
          <ol className={listClass}>
            {education.map((item) => (
              <li key={`${item.school}-${item.period}`} className={itemClass}>
                <div className={hoverBackgroundClass} />
                <p className="z-10 mt-0.5 text-[13px] font-medium text-fg sm:col-span-2">
                  {item.period}
                </p>
                <div className="z-10 sm:col-span-6">
                  <p className="flex items-center leading-snug font-semibold text-fg">
                    <Logo src={item.logo} />
                    {item.school}{" "}
                    <span className="ml-1 font-normal text-dim">
                      {item.major}
                    </span>
                  </p>
                  {item.note && (
                    <p className="mt-2 text-[15px] leading-[1.75]">
                      {item.note}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {awards.length > 0 && (
        <section className={education.length > 0 ? "mt-16" : undefined}>
          <h3 className="mb-6 text-[17px] font-bold text-fg">수상</h3>
          <ol className={compactListClass}>
            {awards.map((award) => (
              <li key={`${award.title}-${award.issuer}`} className={itemClass}>
                <div className={hoverBackgroundClass} />
                <p className="z-10 mt-0.5 text-[13px] font-medium text-fg sm:col-span-2">
                  {award.date}
                </p>
                <div className="z-10 sm:col-span-6">
                  <p className="flex items-center leading-snug font-semibold text-fg">
                    <Logo src={award.logo} />
                    {award.title}
                    <span className="ml-1.5 font-normal text-dim">
                      - {award.issuer}
                    </span>
                  </p>
                  <p className="mt-1.5 text-[15px] leading-[1.75]">
                    <span className="font-semibold text-fg">
                      {award.prize}
                    </span>
                    {award.description && <> - {award.description}</>}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {certifications.length > 0 && (
        <section
          className={
            education.length + awards.length > 0 ? "mt-16" : undefined
          }
        >
          <h3 className="mb-6 text-[17px] font-bold text-fg">자격증</h3>
          <ol className={compactListClass}>
            {certifications.map((certification) => (
              <li key={certification.name} className={itemClass}>
                <div className={hoverBackgroundClass} />
                <p className="z-10 mt-0.5 text-[13px] font-medium text-fg sm:col-span-2">
                  {certification.date}
                </p>
                <p className="z-10 leading-snug font-semibold text-fg sm:col-span-6">
                  {certification.name}
                  {certification.issuer && (
                    <span className="ml-2 text-[13px] font-normal text-faint">
                      {certification.issuer}
                    </span>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}
    </PortfolioSection>
  );
}
