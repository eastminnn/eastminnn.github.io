import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages에 올릴 수 있도록 정적 HTML로 빌드한다 (결과물: out/)
  output: "export",
  images: { unoptimized: true },
  // cacheComponents·partialPrefetching은 export 모드와 함께 쓸 수 없어서 끔
  // 개발 중 왼쪽 아래에 뜨는 Next.js 아이콘 숨김 (에러는 그대로 표시됨)
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
