"use client";

import { theme } from "@/assets";
import HomeHeader from "@/components/Header/HomeHeader";
import ProgressHeader from "@/components/Header/ProgressHeader";
import { useTransitionSelect } from "@/hooks/useTransitionSelect";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const currentPage = useMemo(() => {
    const pageMap: { [key: string]: number } = {
      "/application/me/value": 1,
      "/application/me/life": 2,
      "/application/me/character": 3,
      "/application/me/appearance": 4,
      "/application/me/dating": 5,
      "/application/me/other": 6,
      "/application/targeting": 7,
      "/application/targeting/details": 8,
      "/application/letter/select": 9,
      "/application/letter/write": 10,
    };
    return pageMap[pathname] || 1;
  }, [pathname]);

  const progress = useMemo(() => {
    const totalPages = 10;
    return (currentPage / totalPages) * 100;
  }, [currentPage]);

  const transition = useTransitionSelect();

  return (
    <ThemeProvider theme={theme}>
      {/* <Transitions pageKey={pathname} transition={transition}> */}
      <>
        {type === "init" ? (
          <ProgressHeader progress={progress} />
        ) : (
          <HomeHeader />
        )}
        <Container
          disableGutters
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            padding: "48px 0px",
            paddingBottom: "130px",
          }}
        >
          {children}
        </Container>
      </>
      {/* </Transitions> */}
    </ThemeProvider>
  );
}
