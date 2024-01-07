/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,

  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? `${process.env.NEXT_PUBLIC_V2_BACK_URL}/api/:path*`
            : "/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
