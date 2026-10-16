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

export type Troubleshooting = {
  title: string;
  problem: string;
  cause: string;
  solution: string;
  result: string;
  metric?: { label: string; before: string; after: string };
};

export type Capacity = {
  items: { label: string; value: string; note?: string }[];
  footnote?: string;
};

export type ProjectDetail = {
  summary: string;
  role: string;
  period?: string;
  overview: string;
  tasks: string[];
  capacity?: Capacity;
  designPoints?: { title: string; description: string }[];
  troubleshooting: Troubleshooting[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  links?: Link[];
  image?: string;
  badge?: string;
  detail?: ProjectDetail;
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
    slug: "yufesta",
    title: "YU FESTA",
    description:
      "축제 당일 2,080명이 다녀간 대학 축제 모바일 웹 서비스의 백엔드를 맡았습니다.\n소셜 로그인과 JWT 인증부터 축제 지도, 익명 게시판, 신고 기능까지 만들었고,\n한국어 우회 표현 필터를 보강해 유해 표현 차단률을 40%에서 100%로 높였습니다.",
    tags: ["Spring Boot", "Spring Security", "JPA", "MySQL", "Redis", "OpenAI"],
    href: "https://github.com/eastminnn/yufesta-server",
    image: "/projects/yufesta.jpg",
    badge: "축제 당일 2,080명",
    detail: {
      summary: "축제 당일 2,080명이 다녀간 대학 축제 통합 모바일 웹 서비스",
      role: "백엔드",
      period: "2026.10 축제 운영",
      overview:
        "축제 방문객이 앱 설치 없이 QR로 접속해 공연 일정, 동아리 라인업, 축제 지도와 공지를 확인하고, 인스타팅 동행 매칭과 분실물·응원 게시판을 쓰는 서비스입니다. 축제 당일 2,080명이 방문해 30,100회의 페이지뷰를 기록했습니다.",
      tasks: [
        "카카오·구글 OAuth 로그인과 쿠키 기반 JWT 인증, CSRF 보호",
        "전역 예외 처리와 공통 응답 포맷, Flyway 마이그레이션 관리",
        "축제 지도·장소 이벤트와 공지사항 조회 및 운영자 API",
        "익명 응원·분실물 게시판, 이미지 업로드, 댓글과 1단계 답글",
        "통합 신고 모델과 누적 신고 자동 숨김, 운영자 검토 기능",
        "로컬 규칙 필터와 소형 LLM 문맥 분류를 단계로 엮은 콘텐츠 안전 파이프라인",
      ],
      troubleshooting: [
        {
          title: "한국어 우회 표현을 걸러내지 못하는 콘텐츠 필터",
          problem: "Moderation API만으로는 유해 표현의 40%만 차단했습니다.",
          cause:
            "공백·특수문자·초성으로 비튼 한국어 표현을 판별하지 못했습니다.",
          solution:
            "Unicode 정규화와 한국어 규칙으로 명확한 표현을 로컬에서 먼저 차단했습니다. 이후 규칙이 놓친 문맥성 표현은 소형 LLM 분류로 보완했습니다.",
          result:
            "평가 데이터 50건 기준 차단률 100%, 오탐 0%. 외부 API 호출이 줄어 p95가 1,410ms → 550ms로 줄었습니다.",
          metric: {
            label: "유해 표현 차단률 · 50건",
            before: "40%",
            after: "100%",
          },
        },
        {
          title: "운영자 신고 목록의 N+1 쿼리",
          problem: "신고 50건 조회에 SQL이 74번 실행됐습니다.",
          cause: "신고마다 대상 콘텐츠 상태를 따로 조회했습니다.",
          solution:
            "대상 ID를 유형별로 모아 IN 쿼리와 Projection으로 한 번에 조회하고, Hibernate Statistics로 쿼리 수 상한을 고정하는 회귀 테스트를 추가했습니다.",
          result:
            "SQL 74회 → 10회(86.5% 감소), 다시 늘어나면 테스트가 실패합니다.",
          metric: { label: "50건 조회 시 SQL", before: "74회", after: "10회" },
        },
      ],
    },
  },
  {
    slug: "ingyeongsan",
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
    slug: "bridgee",
    title: "Bridgee",
    description:
      "경산 소상공인이 공모전으로 도움을 요청하고 학생이 작품으로 참여하는 플랫폼입니다.\n백엔드를 맡아 공모전 관리, 마감 후 상태 전환 스케줄러, 우승자 보상 기능을 만들었습니다.\nERD를 설계하고 GitHub Actions로 CI/CD를 구성해 AWS EC2에 배포했습니다.",
    tags: ["Spring Boot", "JPA", "MySQL", "AWS EC2", "GitHub Actions"],
    href: "https://github.com/Likelion-YeungNam-Univ/CoCoNut-was",
    image: "/projects/bridgee.jpg",
    badge: "멋사 연합 해커톤 2차 진출",
  },
  {
    slug: "nackchal",
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
    detail: {
      summary: "2~4명이 실시간으로 인형 경매를 벌이는 3D 파티 게임",
      role: "기획 · 백엔드 · 프론트엔드",
      overview:
        "겉모습만 보고 값을 매겨 친구보다 한 푼 더 불러 낙찰받는 경매 게임입니다. 10라운드 동안 물건이 하나씩 오르고, 낙찰 5초 뒤 공개되는 실제 가치와 낙찰가의 차이가 손익이 됩니다. 입찰 순서, 마감, 숨은 가치, 정산은 모두 서버가 판정합니다.",
      tasks: [
        "WebSocket 실시간 프로토콜과 방·대기실·재접속(30초 유예) 처리",
        "Spring 없는 순수 객체로 경매 규칙을 분리해 결정적으로 테스트",
        "캐시 원장과 상점, 아이템 던지기의 트랜잭션·중복 처리 설계",
        "JWT 쿠키 인증과 refresh 토큰 교체, CSRF, WebSocket Origin 검증",
        "React Three Fiber로 3D 경매장 장면과 연출 구현",
        "Oracle Cloud 운영 서버, HTTPS, 자동 배포와 DB 백업 구성",
      ],
      capacity: {
        items: [
          {
            label: "서버",
            value: "ARM VM 1대",
            note: "Oracle Cloud · 2 OCPU · 12GB",
          },
          {
            label: "동시 접속 상한",
            value: "4,000명",
            note: "방 1,000개 × 방당 4명",
          },
          {
            label: "입찰 처리 (상한 부하)",
            value: "초당 약 4,000건",
            note: "참가자당 초당 1회 입찰 가정 · 방송은 초당 약 16,000건",
          },
          {
            label: "연결당 메시지 제한",
            value: "초당 20개",
            note: "초과 요청은 서버에서 거절",
          },
          {
            label: "DB 쓰기 (상한 부하)",
            value: "초당 약 7건",
            note: "판 시작과 정산만 기록 · 한 판 약 4분 40초",
          },
          {
            label: "경매 타이머",
            value: "100ms 주기",
            note: "방 1,000개 기준 초당 1만 번 마감 확인",
          },
        ],
        footnote:
          "코드에 정한 상한과 서버 스펙으로 계산한 값이며, 부하 테스트로 측정한 수치는 아닙니다.",
      },
      designPoints: [
        {
          title: "DB 작업은 잠금 밖에서",
          description:
            "'잠금 안에서 확인 → 잠금 밖에서 트랜잭션 → 다시 잠가 반영' 3단계로 나눠, 한 방의 DB 지연이 다른 방의 타이머와 방송으로 번지지 않게 했습니다.",
        },
        {
          title: "고정된 잠금 순서와 한 번만 하는 정산",
          description:
            "잠금은 항상 '사용자 → 방' 순서로 잡고, 정산은 게임 행을 FOR UPDATE로 잠근 뒤 RUNNING일 때만 처리해 교착과 이중 지급을 막았습니다.",
        },
        {
          title: "예약 없는 경매 타이머",
          description:
            "마감을 예약하지 않고 100ms마다 현재 마감 시각과 비교해, 시간이 연장돼도 라운드가 두 번 마감되지 않게 했습니다.",
        },
      ],
      troubleshooting: [
        {
          title: "게임 중에 WebSocket 연결이 끊기는 문제",
          problem: "게임 도중 연결이 4401로 끊기고 준비 상태가 풀렸습니다.",
          cause:
            "연결의 인증 만료가 처음 연결할 때의 JWT 만료(최대 15분)로 고정돼, 토큰을 갱신해도 열린 연결에는 반영되지 않았습니다.",
          solution:
            "토큰 갱신 시 이벤트를 발행해 같은 계정의 열린 연결 만료를 연장하고 AUTH_RENEWED로 알렸습니다. 프론트는 만료 1분 전에 미리 갱신합니다.",
          result:
            "게임 중 인증 만료로 끊기는 일이 사라졌고, 통합 테스트로 연장 동작을 검증했습니다.",
        },
        {
          title: "서버 재시작 직후 시작한 게임이 보상 없이 끝나는 문제",
          problem:
            "서버가 뜨자마자 시작된 게임이 ABORTED로 바뀌고 보상 없이 정산됐습니다.",
          cause:
            "기동 시 미완료 게임을 정리하는데, 웹 서버가 ApplicationReadyEvent보다 먼저 요청을 받아 방금 시작된 게임까지 정리 대상에 섞였습니다.",
          solution:
            "정리기가 만들어진 시각보다 먼저 시작된 게임만 정리하도록 조건을 바꿨습니다.",
          result:
            "이번 실행에서 시작한 게임은 정리되지 않고, 테스트로 경계 조건을 고정했습니다.",
        },
      ],
    },
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
