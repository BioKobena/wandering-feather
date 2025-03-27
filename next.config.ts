import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'commercehope-app.vercel.app',
      'res.cloudinary.com',
      'img.freepik.com',
      'webzinecb.cartes-bancaires.com',
      'encrypted-tbn0.gstatic.com'
    ]
  }
};

export default nextConfig;
