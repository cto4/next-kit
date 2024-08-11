import path from "path";
const output = process.env.OUTPUT;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output,
  images: { unoptimized: output == "standalone" },
  sassOptions: {
    prependData: `@import "#a/styles/_mantine.scss";`,
    includePaths: [path.join(import.meta.dirname, "aseets/styles")],
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    serverSourceMaps: false,
  },
};

export default nextConfig;
