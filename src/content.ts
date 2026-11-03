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
  title?: string;
  link?: Link;
  items: { label: string; value: string; note?: string }[];
  footnote?: string;
};

export type Flow = {
  title: string;
  steps: string[];
  reasons: { title: string; description: string }[];
};

export type ProjectDetail = {
  summary: string;
  role: string;
  period?: string;
  overview: string;
  tasks: string[];
  capacity?: Capacity;
  flow?: Flow;
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
  live?: boolean;
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

export type OpenSource = {
  date: string;
  owner: string;
  repo: string;
  stars: string;
  pr: number;
  prTitle: string;
  href: string;
  diff: { additions: number; deletions: number };
  description: string;
  metrics: { label: string; before: string; after: string }[];
  post?: Link;
  tags: string[];
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
    { label: "Email", href: "mailto:oh1334000@gmail.com", icon: "mail" },
  ] satisfies (Link & { icon: IconName })[],
};

export const about: string[] = [
  "실제 사용자가 쓰는 서비스를 만들고, *직접 운영*합니다.\n설계부터 배포, 모니터링까지 서비스의 뒤편을 책임집니다.\n공개한 뒤에도 지표와 로그를 보며 문제를 먼저 찾아 고치는 일을 중요하게 생각합니다.",
  "처음 다루는 기술도 실제 서비스에 붙여 보며 익힙니다.\n최근에는 반복 업무의 병목을 *AI Agent*로 푸는 일에 관심이 많습니다.\n데모에서 끝나지 않고, 실제 업무에 믿고 맡길 수 있게 만드는 것이 목표입니다.",
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
  },
  {
    period: "2026.01 — 2026.12",
    role: "백엔드 운영진",
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
  },
  {
    period: "2026.01",
    role: "서비스개발사업본부 인턴",
    company: "테이큰소프트",
    logo: "/logos/takensoft.png",
    href: "http://www.takensoft.co.kr/",
    description:
      "USDT를 활용한 외국인 대상 결제·출금 서비스의 백엔드를 개발하고,\n서비스 화면 설계와 디자인을 담당했습니다.",
  },
  {
    period: "2025.03 — 2025.12",
    role: "백엔드 멘티",
    company: "멋쟁이사자처럼 영남대학교",
    href: "https://www.instagram.com/likelion_yu/",
    logo: "/logos/likelion.png",
    description:
      "Spring Boot와 JPA 중심의 세션과 과제로 백엔드 기초를 다졌습니다.\n교육을 마친 뒤 팀을 꾸려 전국 대학 연합 해커톤에 참가했습니다.",
  },
];

export const projects: Project[] = [
  {
    slug: "bingang",
    title: "빈강",
    description:
      "영남대 빈 강의실과 남은 시간을 알려주는 서비스를 혼자 만들어 운영하고 있습니다.\n기획 단계에서 예상 TPS를 계산해 부하 테스트를 하고, 배포 후 실제 TPS와 비교했습니다.\n서버에 이상이 생기면 Discord 웹훅으로 알림을 받아 바로 조치하고 있습니다.",
    tags: [
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Oracle Cloud",
      "Grafana",
      "k6",
    ],
    href: "https://github.com/eastminnn/bingang",
    links: [{ label: "서비스 바로가기", href: "https://bingang.duckdns.org" }],
    image: "/projects/bingang.jpg",
    badge: "하루 평균 사용자 약 250명",
    live: true,
    detail: {
      summary: "영남대의 지금 빈 강의실과 남은 시간을 알려주는 웹 서비스",
      role: "기획 · 개발 · 운영 (1인)",
      period: "2026.10 — 운영 중",
      overview:
        "공강 시간에 건물을 돌며 빈 강의실을 찾던 불편을 풀기 위해 만들었습니다. 학교 시간표를 주기적으로 수집해 건물별 빈 강의실과 언제까지 비는지를 보여줍니다. 하루 평균 약 250명의 학생이 사용하고 있으며, 사용자 피드백을 받아 계속 개선하고 있습니다.",
      tasks: [
        "'빈 강의실 조회' 결과를 뒤집어 강의실별 시간표를 복원하는 수집기",
        "연강 병합과 보강일 요일 대체를 반영한 판정 로직과 테스트",
        "Oracle Cloud A1에 Docker Compose, Caddy HTTPS, GitHub Actions 자동 배포",
        "k6 부하 테스트, Prometheus·Grafana·Loki 모니터링과 Discord 장애 알림",
      ],
      capacity: {
        title: "서버와 트래픽",
        link: {
          label: "관련해서 작성한 기술 블로그 글",
          href: "https://velog.io/@eastminn/project-2",
        },
        items: [
          {
            label: "서버",
            value: "OCI A1 · 2 OCPU · 12GB",
            note: "arm64",
          },
          {
            label: "부하 테스트",
            value: "400 TPS · 오류 0%",
            note: "서버 p95 8.1ms · CPU 최대 75%",
          },
          {
            label: "예상 피크",
            value: "100 TPS",
            note: "하루 3,000명 가정 · 평소 피크 10 TPS",
          },
          {
            label: "실제 피크",
            value: "2.56 TPS",
            note: "공개 후 24시간 · 421명 · 서버 p95 11.5ms",
          },
        ],
        footnote:
          "실제 피크는 1분 평균 최댓값이고, 부하 테스트는 50 → 400 TPS 단계적 증가로 측정했습니다.",
      },
      designPoints: [
        {
          title: "없는 시간표를 만들어 내기",
          description:
            "학교 시스템은 시간 칸별 빈 강의실 목록만 알려주고 강의실별 시간표는 주지 않습니다. 요일 6일 × 시간 칸 24개, 144번을 조회한 뒤 결과를 뒤집어 강의실별 사용 시간을 복원했습니다.",
        },
        {
          title: "학교 시스템과 분리하기",
          description:
            "사용자 요청은 우리 DB만 조회하고, 학교 시스템에는 수집기만 1초에 1건 이하로 접근합니다. 조회가 하나라도 실패하거나 모든 칸의 결과가 같으면 저장하지 않고 이전 데이터를 유지합니다.",
        },
        {
          title: "정확한 판정 규칙",
          description:
            "학교 홈페이지의 학사 일정을 매일 따로 수집해, 보강일에는 그날 요일 대신 지정된 요일의 시간표로 판정합니다. 이어진 수업은 하나로 합쳐 언제부터 비는지 계산하고, 시간대는 서버와 관계없이 한국 시간으로 고정했습니다.",
        },
      ],
      troubleshooting: [
        {
          title: "DB 장애 때 모니터링까지 함께 멈추는 문제",
          problem:
            "장애 실험으로 DB를 멈추자, 앱은 살아 있는데 모니터링에서는 서버 전체가 다운으로 보였습니다.",
          cause:
            "지표를 만들 때마다 DB를 조회해, DB가 멈추면 장애를 보여줘야 할 지표까지 함께 사라졌습니다.",
          solution:
            "장애를 알려야 할 지표가 장애 대상에 기대지 않도록, 지표 값은 메모리에 두고 DB와는 필요한 순간에만 주고받게 바꿨습니다.",
          result:
            "지표 수집 중 DB 조회가 하루 5,760회에서 기동 시 1회로 줄었고, DB 장애 중에도 지표가 유지되어 원인을 바로 확인할 수 있습니다.",
          metric: {
            label: "지표 수집 중 DB 조회 · 하루",
            before: "5,760회",
            after: "기동 시 1회",
          },
        },
      ],
    },
  },
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
        "서버 규칙 필터와 소형 LLM 문맥 분류를 단계로 엮은 콘텐츠 안전 파이프라인",
      ],
      troubleshooting: [
        {
          title: "한국어 우회 표현을 걸러내지 못하는 콘텐츠 필터",
          problem: "Moderation API만으로는 유해 표현의 40%만 차단했습니다.",
          cause:
            "공백·특수문자·초성으로 비튼 한국어 표현을 판별하지 못했습니다.",
          solution:
            "임계값만 낮추면 우회 표현은 점수가 여전히 낮아 잘 걸리지 않고, 정상 글까지 막힐 위험만 커집니다. 모든 글을 LLM에 보내면 지연과 비용, 외부 장애 의존이 커집니다. 그래서 정규화와 한국어 규칙으로 명확한 표현은 외부 API를 부르기 전에 서버에서 바로 막고, 통과한 글만 외부 분류에 보내는 단계형 구조를 택했습니다.",
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
            "신고는 대상 유형과 ID만 저장하고 연관관계가 없어서 fetch join이나 @BatchSize를 쓸 수 없었습니다. 그래서 대상 ID를 유형별로 모아 IN 쿼리로 한 번에 조회하고, 필요한 값 3개만 담는 Projection으로 엔티티 연관 로딩까지 없앴습니다. 다시 늘어나지 않게 Hibernate Statistics로 쿼리 수 상한을 테스트로 고정했습니다.",
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
    detail: {
      summary:
        "경산의 장인, 청년 사업가, 골목 상인을 만나는 인물 중심 로컬 관광 플랫폼",
      role: "백엔드 (7인 팀, 백엔드 1인)",
      period: "2025.09 — 2025.11",
      overview:
        "장소가 아닌 사람을 중심으로 여행하는 서비스입니다. 지도에서 지역 호스트를 찾고, 그들이 여는 체험을 예약하며, 문장으로 원하는 체험을 추천받을 수 있습니다. 추천은 체험 정보를 임베딩해 PGVector에 저장하고 입력 문장과 비슷한 체험을 찾는 RAG 방식으로 구현했습니다. 백엔드를 혼자 맡아 설계부터 배포까지 진행했고, 영남대 융합 그룹 실무경진대회에서 최우수상을 받았습니다.",
      tasks: [
        "카카오·네이버 소셜 로그인과 JWT 인증",
        "국세청 사업자 상태 조회 API로 검증한 뒤 호스트로 전환, 체험을 가진 호스트만 보여주는 지도",
        "체험 예약·취소와 끝난 예약을 매시간 완료로 바꾸는 스케줄러",
        "PGVector와 OpenAI 임베딩으로 문장 기반 체험 추천(RAG)",
        "S3 이미지 업로드, GitHub Actions와 Docker로 EC2 자동 배포",
      ],
      flow: {
        title: "RAG 추천 구성",
        steps: [
          "체험을 등록하면 호스트 정보(이름, 카테고리, 소개, 위치)와 체험 정보(제목, 설명, 분야, 가격, 소요 시간, 인원)를 하나의 문장으로 만듭니다.",
          "이 문장을 OpenAI text-embedding-3-small로 임베딩해, 체험 ID와 함께 PGVector에 저장합니다.",
          '사용자가 "조용한 곳에서 힐링하고 싶어"처럼 문장을 입력하면, 같은 방식으로 임베딩해 가장 비슷한 체험을 찾습니다.',
          "찾은 체험 ID로 MySQL에서 최신 정보를 조회하고, 비슷한 순서대로 응답합니다.",
        ],
        reasons: [
          {
            title: "키워드가 아닌 의미로 찾기",
            description:
              '사용자는 "힐링", "친구랑"처럼 체험 제목에 없는 말로 원하는 걸 설명합니다. 키워드 검색으로는 찾을 수 없어, 문장의 의미가 가까운 체험을 찾는 임베딩 검색을 택했습니다.',
          },
          {
            title: "체험만이 아닌 호스트까지 함께 임베딩",
            description:
              'in경산은 사람을 보고 체험을 고르는 서비스라, 체험 설명만으로는 부족합니다. 호스트의 소개와 카테고리까지 한 문장에 넣어 "장인에게 배우는" 같은 요청에도 맞는 결과가 나오게 했습니다.',
          },
          {
            title: "답은 지어내지 않고 실제 데이터로",
            description:
              "LLM이 추천 문장을 생성하면 없는 체험이나 틀린 가격을 말할 수 있습니다. 검색 결과의 ID로 MySQL의 실제 데이터만 응답해, 추천에는 실제로 등록된 체험과 현재 가격만 나옵니다.",
          },
        ],
      },
      designPoints: [
        {
          title: "검색용 저장소와 원본 데이터 분리",
          description:
            "체험 정보는 MySQL에 두고, 추천용 문장과 임베딩만 PostgreSQL(PGVector)에 따로 저장했습니다. 유사도 검색으로 찾은 체험 ID로 MySQL에서 호스트까지 한 번에 조회하고, 추천 순서는 그대로 유지합니다.",
        },
        {
          title: "추천 실패가 체험 등록을 막지 않게",
          description:
            "체험을 등록할 때 임베딩 API가 실패해도 체험 저장은 롤백하지 않습니다. 외부 AI 서비스의 장애가 핵심 기능인 등록까지 번지지 않도록 했습니다.",
        },
        {
          title: "취소된 자리는 다시 예약 가능하게",
          description:
            "같은 시간대 예약 여부를 확인할 때 취소된 예약은 제외해, 누군가 취소한 시간대를 다른 사용자가 다시 예약할 수 있도록 했습니다.",
        },
      ],
      troubleshooting: [
        {
          title: "같은 이메일로 다른 소셜 로그인을 하면 실패하는 문제",
          problem:
            "카카오로 가입한 사용자가 같은 이메일의 네이버 계정으로 로그인하면 오류가 나서, 둘 중 하나로만 로그인할 수 있었습니다.",
          cause:
            "소셜 계정 ID로만 기존 사용자를 찾아, 처음 보는 소셜 계정이면 같은 이메일로 새 사용자를 만들려다 이메일 중복에 걸렸습니다.",
          solution:
            "이메일 중복 제약을 풀면 한 사람이 계정 두 개를 갖게 됩니다. 그래서 제약은 유지하고, 소셜 계정으로 찾지 못하면 이메일로 한 번 더 찾아 기존 계정으로 로그인하게 했습니다.",
          result:
            "카카오와 네이버 어느 쪽으로 로그인해도 같은 계정으로 이어지고, 한 사람의 계정이 둘로 나뉘지 않습니다.",
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

export const openSource: OpenSource[] = [
  {
    date: "2026.10",
    owner: "ai-job-search-dev",
    repo: "ai-job-search",
    stars: "6.9만",
    pr: 690,
    prTitle:
      "fix(tools): decode saved non-UTF-8 pages by their declared charset",
    href: "https://github.com/ai-job-search-dev/ai-job-search/pull/690",
    diff: { additions: 227, deletions: 11 },
    description:
      'EUC-KR 같은 비 UTF-8 채용공고가 깨진 채로 프롬프트 인젝션 검사를 "clean"으로 통과하던 문제를 실제 채용 사이트로 재현해 고쳤습니다. UTF-8을 먼저 시도하고 허용한 charset만 쓰도록 해 기존 페이지 동작은 바꾸지 않았습니다.',
    metrics: [
      { label: "깨진 문자", before: "1,206", after: "0" },
      { label: "읽힌 한글", before: "4", after: "905" },
    ],
    post: {
      label: "관련해서 작성한 기술 블로그 글",
      href: "https://velog.io/@eastminn/opensource",
    },
    tags: ["Python", "Security", "Encoding"],
  },
];

export const writing: Writing[] = [];

export const footer =
  "Next.js와 Tailwind CSS로 만들고 GitHub Pages로 배포했습니다. 본문은 Pretendard 서체를 사용합니다.";
