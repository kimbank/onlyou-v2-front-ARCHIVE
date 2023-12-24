/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,

  // rewrites: async () => {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination:
  //         process.env.NODE_ENV === "development"
  //           ? "https://test.onlyou.co.kr/api/:path*"
  //           : "/api/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
