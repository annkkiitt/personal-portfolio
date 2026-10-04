import type { NextConfig } from "next";

// `.wgsl` files are imported as modules by the ocean renderer; the vgpu loader
// resolves their import graph at build time. Next reads `turbopack` only under
// --turbopack and calls `webpack()` only without it, so both blocks coexist.
const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.wgsl": {
        loaders: ["@vgpu/wgsl/loader-webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    config.module ??= {};
    config.module.rules ??= [];
    config.module.rules.push({
      test: /\.wgsl$/,
      loader: "@vgpu/wgsl/loader-webpack",
      options: { minify: true },
    });
    return config;
  },
};

export default nextConfig;
