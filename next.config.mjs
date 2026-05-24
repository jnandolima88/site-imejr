/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // gera pasta /out com HTML estático
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
