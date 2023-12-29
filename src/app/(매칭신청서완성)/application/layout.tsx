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
       // URL 경로에 따른 페이지 번호 결정
     const pageMap: { [key: string]: number } = {
       "/value": 1,
       "/life": 2,
       "/character": 3,
       "/appearance": 4,
       "/dating": 5,
       "/other": 6,
     };
       return pageMap[pathname] || 1; // 경로가 없으면 기본값은 1
     }, [pathname]);

       const progress = useMemo(() => {
         // 총 페이지 수
         const totalPages = 6;
         // 현재 진행률 계산
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
