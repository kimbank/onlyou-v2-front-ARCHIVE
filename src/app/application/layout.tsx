"use client";

import HomeHeader from "@/components/Header/HomeHeader";
import ProgressHeader from "@/components/Header/ProgressHeader";
import { useTransitionSelect } from "@/hooks/useTransitionSelect";
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

  const pageMap: { [key: string]: number } = {
    "/application/me/values": 1,
    "/application/me/lifestyle": 2,
    "/application/me/personality": 3,
    "/application/me/datingstyle": 4,
    "/application/me/appearance": 5,
    "/application/me/etc": 6,
    "/application/targeting": 7,
    "/application/targeting/details": 8,
    "/application/letter/select": 9,
    "/application/letter/write": 10,
  };

  const currentPage = useMemo(() => {
    return pageMap[pathname] || 1;
  }, [pathname]);

  const progress = useMemo(() => {
    const totalPages = Object.keys(pageMap).length;
    return (currentPage / totalPages) * 100;
  }, [currentPage]);

  const transition = useTransitionSelect();

  return (
    <>
      {type === "init" ? (
        <ProgressHeader progress={progress} />
      ) : (
        <HomeHeader />
      )}

      {children}
    </>
  );
}
