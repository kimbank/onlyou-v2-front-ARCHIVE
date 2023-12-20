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
    <html lang="ko-KR">
      <body style={{ backgroundColor: "#FFE4CC" }}>
        <ThemeProvider theme={theme}>
          <Header />
          <ReduxProvider>
            <div
              style={{
                maxWidth: "480px",
                minHeight: "100vh",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#fff",
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  width: "480px",
                  height: "100vh",
                  backgroundColor: "#fff",
                  position: "fixed",
                  zIndex: "-4",
                  boxShadow: "0px 0px 32px -12px grey",
                }}
              />
              <CssBaseline>{children}</CssBaseline>
            </div>
            {/* { process.env.NEXT_PUBLIC_HOTJAR === 'true' && <Hotjar />} */}
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
