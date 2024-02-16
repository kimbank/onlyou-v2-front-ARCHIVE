"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CloseHeader from "@/components/Header/CloseHeader";
import HomeHeader from "@/components/Header/HomeHeader";
import ProgressHeader from "@/components/Header/ProgressHeader";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
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

  const currentPage = React.useMemo(() => {
    return pageMap[pathname] || 1;
  }, [pathname]);

  const progress = React.useMemo(() => {
    const totalPages = Object.keys(pageMap).length;
    return (currentPage / totalPages) * 100;
  }, [currentPage]);

  return (
    <>
      {type === "init" ? (
        <ProgressHeader progress={progress} />
      ) : (
        <CloseHeader href="/myinfo" />
      )}
      {children}
    </>
  );
}
