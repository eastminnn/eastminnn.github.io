# Kim Dong Min · Portfolio

https://eastminnn.github.io

백엔드 엔지니어 김동민의 포트폴리오 사이트입니다.

## 내용 수정

사이트에 보이는 글, 경력, 프로젝트, 학력은 모두 `src/content.ts` 한 파일에서 고칩니다.

- 로고 이미지: `public/logos/`
- 프로젝트 썸네일: `public/projects/`
- 강의자료 PDF: `public/lectures/`

## 로컬 실행

```sh
npm ci
npm run dev
```

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 정적 사이트를 빌드해 GitHub Pages에 배포합니다.
GitHub 잔디 그래프를 최신으로 유지하려고 매일 한국 시간 자정에도 다시 배포합니다.

Next.js · Tailwind CSS · Pretendard
