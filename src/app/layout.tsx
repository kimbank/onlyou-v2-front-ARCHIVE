import "./globals.css";

import DatadogRum from "@/utils/datadogRum";
import Hotjar from "@/utils/hotjar";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Provider from "@/provider";

export const metadata = {
  title: "아무나 만나지 마세요, 연애정보회사 ONLYou",
  description:
    "꼭 맞는 사람만 신중하게 매칭하는 소개팅 서비스에요. 외모, 가치관, 연애스타일 등 42개의 항목과 그 중요도까지 설정할 수 있어요.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko-KR" translate="no">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        {/* Hotjar CDN Scripts */}
        { process.env.NODE_ENV === "production" && <Hotjar /> }
        {/* DatadogRUM CDN Scripts */}
        { process.env.NODE_ENV === "production" && <DatadogRum /> }
      </head>
      <body>
        <div id="root">
          {/* page를 프로바이더가 감싸야 애니메이션진행가능 헤더는 고정  */}
          <div id="page">
            <Provider>{children}</Provider>
          </div>
        </div>
        {/* Vercel Speed Isight */}
        { process.env.NODE_ENV === "production" && <SpeedInsights /> }
      </body>
    </html>
  );
};

export default RootLayout;
