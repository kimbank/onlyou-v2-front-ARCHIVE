import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Hotjar from "@/utils/hotjar";
import DatadogRum from "@/utils/datadogRum";

import { theme } from "@/assets";
import ReduxProvider from "@/store/provider.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const metadata = {
  title: '아무나 만나지 마세요, 연애정보회사 ONLYou',
  description: '꼭 맞는 사람만 신중하게 매칭하는 소개팅 서비스에요. 외모, 가치관, 연애스타일 등 42개의 항목과 그 중요도까지 설정할 수 있어요.',
}


const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="ko-KR" translate="no">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        {/* Hotjar CDN Scripts */}
        { process.env.NODE_ENV == "production" && <Hotjar /> }
        {/* DatadogRUM CDN Scripts */}
        { process.env.NODE_ENV == "production" && <DatadogRum /> }
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <ReduxProvider>
              <div id="root">
                <div id="page">
                    {children}
                </div>
              </div>
            </ReduxProvider>
          </CssBaseline>
        </ThemeProvider>
        {/* Vercel Speed Isight */}
        <SpeedInsights />
      </body>
    </html>
  );
}

export default RootLayout;
