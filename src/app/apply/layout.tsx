"use client";

import { theme } from "@/assets";
import ProgressHeader from "@/components/Header/ProgressHeader";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useTransitionSelect } from "@/hooks/useTransitionSelect";
import Transitions from "@/provider/transitions";
import { useEffect, useMemo } from "react";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname();
     const currentPage = useMemo(() => {
     const pageMap: { [key: string]: number } = {
       "apply/me/value": 1,
       "apply/me/life": 2,
       "apply/me/character": 3,
       "apply/me/appearance": 4,
       "apply/me/dating": 5,
       "apply/me/other": 6,
       "apply/targeting": 7,
       "apply/targeting/details": 8,
       "apply/letter/select": 9,
       "apply/letter/write": 10,
     };
       return pageMap[pathname] || 1; 
     }, [pathname]);

       const progress = useMemo(() => {
         const totalPages = 10;
         return (currentPage / totalPages) * 100;
       }, [currentPage]);

  const transition = useTransitionSelect();

  useEffect(()=>{
    console.log("pathname", pathname);
  })
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
