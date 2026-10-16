import { awards, certifications, education, writing } from "@/content";

export const sections = [
  { id: "about", label: "About", ko: "소개" },
  { id: "experience", label: "Experience", ko: "경력" },
  { id: "projects", label: "Projects", ko: "프로젝트" },
  ...(writing.length > 0 ? [{ id: "writing", label: "Writing", ko: "글" }] : []),
  ...(education.length + awards.length + certifications.length > 0
    ? [{ id: "education", label: "Education", ko: "학력 수상 자격증" }]
    : []),
];
