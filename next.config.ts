import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — Cloudflare Pages deploys the generated `out/` folder.
  output: "export",

  // Required for `output: "export"` — the Next.js Image Optimization API
  // is a server feature and is unavailable on a static host.
  images: {
    unoptimized: true,
  },

  // Emit directory-style routes (/about/ -> /about/index.html) so a static
  // host serves clean URLs without per-route rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
