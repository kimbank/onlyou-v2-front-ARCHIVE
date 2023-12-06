import ReduxProvider from "@/store/provider.tsx";
import { CssBaseline } from "@mui/material";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#FFE4CC" }}>
        <ReduxProvider>
          <div
            style={{
              maxWidth: "480px",
              minHeight: "100vh",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#fff",
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
      </body>
    </html>
  );
}
