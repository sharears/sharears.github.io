const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = isGitHubPagesBuild
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
      typescript: { tsconfigPath: "./tsconfig.pages.json" },
    }
  : {};

export default nextConfig;
