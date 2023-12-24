"use client";

import { theme } from "@/assets";
import ProgressHeader from "@/components/Header/ProgressHeader";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useTransitionSelect } from "@/hooks/useTransitionSelect";
import Transitions from "@/provider/transitions";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname();
  const transition = useTransitionSelect();
  return (
    <ThemeProvider theme={theme}>
      {/* <Transitions pageKey={pathname} transition={transition}> */}
        <>
          <ProgressHeader />
          <Container
            disableGutters
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              padding: "48px 0",
              paddingBottom: "90px",
            }}
          >
            {children}
          </Container>
        </>
      {/* </Transitions> */}
    </ThemeProvider>
  );
}
