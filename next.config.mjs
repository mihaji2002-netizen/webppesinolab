/** @type {import('next').NextConfig} */

// When building for GitHub Pages the site is served from a repository subpath
// (https://<user>.github.io/<repo>/), so we need a basePath/assetPrefix.
// Local `next dev` / `next build` keep working without it.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "webppesinolab";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repo}` : undefined,
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,
};

export default nextConfig;
