import type { IconName } from "@/components/icons";

export type Link = { label: string; href: string };

export type Experience = {
  period: string;
  role: string;
  company: string;
  logo?: string;
  href?: string;
  description: string;
  links?: Link[];
  tags: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  links?: Link[];
  image?: string;
  badge?: string;
};

export type Education = {
  period: string;
  school: string;
  logo?: string;
  major: string;
  note?: string;
};

export type Certification = {
  date: string;
  name: string;
  issuer?: string;
};

export type Award = {
  date: string;
  title: string;
  issuer: string;
  logo?: string;
  prize: string;
  description?: string;
};

export type Writing = {
  year: string;
  title: string;
  href: string;
};

export const profile = {
  name: "Kim Dong Min",
  role: "Backend Engineer · AX",
  tagline: "*실제 사람들*이 쓰는 서버를 만들고, 그 위에 {AI}를 얹습니다.",
  email: "oh1334000@gmail.com",
  github: "eastminnn",
  resume: undefined as string | undefined,
  socials: [
    { label: "GitHub", href: "https://github.com/eastminnn", icon: "github" },
    { label: "velog", href: "https://velog.io/@eastminn/posts", icon: "velog" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/eastminnn/",
      icon: "instagram",
    },
    { label: "Email", href: "mailto:oh1334000@gmail.com", icon: "mail" },
  ] satisfies (Link & { icon: IconName })[],
};

export const about: string[] = [
  "트래픽이 몰려도 *조용히* 버티는 서버를 좋아합니다.\nAPI 설계부터 데이터 모델링, 배포 파이프라인까지\n서비스의 뒤편을 책임지는 일을 하고 있습니다.",
  "요즘은 *AI Agent*에 관심이 많습니다.\n특히 반복되는 업무가 쌓여 병목이 생기는 지점을 에이전트로 풀어내는 방법을 고민합니다.\n실제 업무에서 믿고 맡길 수 있을 만큼 튼튼하게 만드는 것이 목표입니다.",
];

export const experience: Experience[] = [
  {
    period: "2026.09 — 현재",
    role: "AI Development Team 인턴",
    company: "솔팩",
    logo: "/logos/solfac.png",
    href: "http://solfac.co.kr/",
    description:
      "웹 서비스의 백엔드 기능 개발과 API 구현,\n데이터베이스 연동 및 유지보수를 담당하고 있습니다.",
    tags: ["Java", "Spring", "MySQL"],
  },
  {
    period: "2026.01 — 2026.12",
    role: "백엔드 멘토",
    company: "멋쟁이사자처럼 영남대학교",
    href: "https://www.instagram.com/likelion_yu/",
    logo: "/logos/likelion.png",
    description:
      "직접 만든 강의자료로 Java·Spring부터 배포, CI/CD까지 강의했습니다.\n멘티들의 해커톤 프로젝트에 피드백을 주며 개발을 도왔습니다.",
    links: [
      { label: "강의자료 · Swagger", href: "/lectures/swagger.pdf" },
      { label: "EC2", href: "/lectures/ec2.pdf" },
      { label: "CI/CD", href: "/lectures/cicd.pdf" },
    ],
    tags: ["Swagger", "AWS EC2", "Docker", "GitHub Actions"],
  },
  {
    period: "2026.01",
    role: "서비스개발사업본부 인턴",
    company: "테이큰소프트",
    logo: "/logos/takensoft.png",
    href: "http://www.takensoft.co.kr/",
    description:
      "USDT를 활용한 외국인 대상 결제·출금 서비스의 백엔드를 개발하고,\n서비스 화면 설계와 디자인을 담당했습니다.",
    tags: ["Spring Boot", "JPA", "MySQL", "Spring AI", "TRON", "Figma"],
  },
  {
    period: "2025.03 — 2025.12",
    role: "백엔드 멘티",
    company: "멋쟁이사자처럼 영남대학교",
    href: "https://www.instagram.com/likelion_yu/",
    logo: "/logos/likelion.png",
    description:
      "Spring Boot와 JPA 중심의 세션과 과제로 백엔드 기초를 다졌습니다.\n교육을 마친 뒤 팀을 꾸려 전국 대학 연합 해커톤에 참가했습니다.",
    tags: ["Spring Boot", "JPA", "MySQL", "AWS"],
  },
];

export const projects: Project[] = [
  {
    title: "YU FESTA",
    description:
      "축제 당일 2,080명이 다녀간 대학 축제 모바일 웹 서비스의 백엔드를 맡았습니다.\n소셜 로그인과 JWT 인증부터 축제 지도, 익명 게시판, 신고 기능까지 만들었고,\n정규식과 소형 LLM을 엮은 필터로 유해 표현 차단률을 40%에서 100%로 높였습니다.",
    tags: ["Spring Boot", "Spring Security", "JPA", "MySQL", "Redis", "OpenAI"],
    href: "https://github.com/eastminnn/yufesta-server",
    image: "/projects/yufesta.jpg",
    badge: "축제 당일 2,080명",
  },
  {
    title: "in경산",
    description:
      "경산의 장인, 청년 사업가, 골목 상인을 만나는 인물 중심 로컬 관광 플랫폼입니다.\n백엔드를 맡아 소셜 로그인, 호스트 지도, 체험 예약 API를 만들고 EC2에 배포했습니다.\nPGVector와 OpenAI로 RAG를 구성해 문장 기반 체험 추천을 구현했습니다.",
    tags: [
      "Spring Boot",
      "Spring AI",
      "MySQL",
      "PGVector",
      "AWS EC2",
      "Docker",
    ],
    href: "https://github.com/InFrame-Team/InFrame-was",
    image: "/projects/ingyeongsan.jpg",
    badge: "융합 실무경진대회 최우수상",
  },
  {
    title: "Bridgee",
    description:
      "경산 소상공인이 공모전으로 도움을 요청하고 학생이 작품으로 참여하는 플랫폼입니다.\n백엔드를 맡아 공모전 관리, 마감 후 상태 전환 스케줄러, 우승자 보상 기능을 만들었습니다.\nERD를 설계하고 GitHub Actions로 CI/CD를 구성해 AWS EC2에 배포했습니다.",
    tags: ["Spring Boot", "JPA", "MySQL", "AWS EC2", "GitHub Actions"],
    href: "https://github.com/Likelion-YeungNam-Univ/CoCoNut-was",
    image: "/projects/bridgee.jpg",
    badge: "멋사 연합 해커톤 2차 진출",
  },
  {
    title: "낙찰",
    description:
      "2~4명이 실시간으로 인형 경매를 벌이는 3D 파티 게임입니다.\n입찰 순서와 마감, 정산은 서버가 판정하고 WebSocket으로 방 상태를 동기화했습니다.\n사용자→방 순서의 잠금과 잠금 밖 DB 처리로 교착과 지연 전파를 막았습니다.",
    tags: [
      "Spring Boot",
      "WebSocket",
      "PostgreSQL",
      "Three.js",
      "TypeScript",
      "Oracle Cloud",
    ],
    href: "https://github.com/eastminnn/nackchal",
    links: [{ label: "플레이하기", href: "https://nackchal.duckdns.org" }],
    image: "/projects/nackchal.jpg",
  },
  {
    title: "Haggle98",
    description:
      "직접 쓴 한 문장으로 AI 상인과 흥정하는 PS1 감성의 웹 게임입니다.\nTypeSafe Jev로 문장의 의도를 분류하고, 가격과 성사 여부는 서버 규칙이 결정합니다.\nOpenAI가 거래 결과와 대화 기억을 바탕으로 상인의 대사와 표정을 만들어냅니다.",
    tags: ["Three.js", "Node.js", "TypeSafe Jev", "OpenAI", "Vercel"],
    href: "https://github.com/eastminnn/haggle98",
    links: [{ label: "플레이하기", href: "https://haggle98.vercel.app" }],
    image: "/projects/haggle98.jpg",
  },
];

export const education: Education[] = [
  {
    period: "2021.03 — 2027.02",
    school: "영남대학교",
    logo: "/logos/yu.png",
    major: "정보통신공학과",
    note: "학점 4.03 / 4.5",
  },
];

export const awards: Award[] = [
  {
    date: "2025.12",
    title: "AI Agent 해커톤",
    issuer: "Upstage",
    logo: "/logos/upstage.png",
    prize: "대상",
    description: "AI 기반 재고관리 서비스 UPScript 개발",
  },
  {
    date: "2025.12",
    title: "융합 그룹 실무경진대회",
    issuer: "영남대학교",
    logo: "/logos/yu.png",
    prize: "최우수상",
    description: "관광 웹 서비스 개발",
  },
];

export const certifications: Certification[] = [
  { date: "2026.09", name: "정보처리기사", issuer: "한국산업인력공단" },
  {
    date: "2025.07",
    name: "NAVER Cloud Platform Certified Associate",
    issuer: "NAVER Cloud",
  },
  { date: "2025.04", name: "SQLD", issuer: "한국데이터산업진흥원" },
];

export const writing: Writing[] = [];

export const footer =
  "Next.js와 Tailwind CSS로 만들고 GitHub Pages로 배포했습니다. 본문은 Pretendard 서체를 사용합니다.";
