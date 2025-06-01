// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use basePath in production (GitHub Pages)
  // Make sure this matches your GitHub repository name exactly
  ...(process.env.NODE_ENV === "production" &&
    process.env.GITHUB_ACTIONS && {
      basePath: "/ProjectPortfolio/", // Replace with your actual repo name
    }),

  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
