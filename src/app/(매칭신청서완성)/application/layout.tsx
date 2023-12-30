"use client";

import { theme } from "@/assets";
import ProgressHeader from "@/components/Header/ProgressHeader";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useTransitionSelect } from "@/hooks/useTransitionSelect";
import Transitions from "@/provider/transitions";
import { useMemo } from "react";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname();

     const currentPage = useMemo(() => {
     const pageMap: { [key: string]: number } = {
       "/application/value": 1,
       "/application/life": 2,
       "/application/character": 3,
       "/application/appearance": 4,
       "/application/dating": 5,
       "/application/other": 6,
     };
       return pageMap[pathname] || 1; 
     }, [pathname]);

       const progress = useMemo(() => {
         const totalPages = 6;
         return (currentPage / totalPages) * 100;
       }, [currentPage]);

  const transition = useTransitionSelect();
  return (
    <ThemeProvider theme={theme}>
      {/* <Transitions pageKey={pathname} transition={transition}> */}
      <>
        <ProgressHeader progress={progress} />
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
