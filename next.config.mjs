/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
