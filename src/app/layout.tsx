import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { theme } from "@/assets";
import ReduxProvider from "@/store/provider.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header/Header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR" translate="no">
      <body>
        <ThemeProvider theme={theme}>
          <ReduxProvider>
            <div id="root">
              <div className="page">
                <Header />
                <CssBaseline>
                  {children}
                </CssBaseline>
              </div>
            </div>
            {/* { process.env.NEXT_PUBLIC_HOTJAR === 'true' && <Hotjar />} */}
          </ReduxProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
