import type { NextConfig } from "next";
import withMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
    swcMinify: true,
};

export default withMDX({
    extension: /\.mdx?$/,
})(nextConfig);

// export default nextConfig;
