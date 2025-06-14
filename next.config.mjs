/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [new URL('https://image.tmdb.org/**')],
  },
  trailingSlash: true,
};

export default nextConfig;
