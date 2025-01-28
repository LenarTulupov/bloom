import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.boohoo.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true
          }
        }
      ],
      exclude: /node_modules/,
    });

    return config;
  },
};

export default nextConfig;
