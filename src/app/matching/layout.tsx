"use client";

import React from "react";
import { authedAxios } from "@/api/base/axisoInstance";
import dynamic from "next/dynamic";
import { useMatchingStatus } from "@/api/hooks/useMatchingStatus";

import Skeleton from "./_pages/skeleton";


// const Skeleton = dynamic(() => import("./_pages/skeleton"), { ssr: false });
const Dormancy = dynamic(() => import("./_pages/dormancy/page"), { ssr: false, loading: () => <Skeleton />});
const MatchingFailure = dynamic(() => import("./_pages/matching_failure/page"), { ssr: false, loading: () => <Skeleton /> });
const MatchingWaiting = dynamic(() => import("./_pages/matching_waiting/page"), { ssr: false, loading: () => <Skeleton /> });
const ApplicationNeed = dynamic(() => import("./_pages/application_need/page"), { ssr: false, loading: () => <Skeleton /> });

const MatchingLayout = ({ children }: { children: React.ReactNode }) => {
  const { matchingStatus, isLoading, isError } = useMatchingStatus();

  let Page;
  switch (matchingStatus) {
    case "PROMOTION_REJECTED_PERMANENT":
      // 현재 릴리즈에는 없음
      break;
    case "PROMOTION_REJECTED":
      // 현재 릴리즈에는 없음
      break;
    case "PROMOTION_WAITING":
      // 현재 릴리즈에는 없음
      break;
    case "PROMOTION_NEED":
      // 현재 릴리즈에는 없음
      break;
    case "APPLICATION_NEED":
      Page = ApplicationNeed;
      break;
    case "DORMANCY":
      // 휴면 계정
      Page = Dormancy;
      break;
    case "MATCHING_WAITING":
      // 매칭 대기
      Page = MatchingWaiting;
      break;
    case "MATCHING_CHOICE":
      // 매칭 활성화 - 선택

      break;
    case "MATCHING_FAILURE":
      // 매칭 실패 - 상호 선택 실패
      Page = MatchingFailure;
      break;
    case "MATCHING_SUCCESS":
      // 매칭 성공 - 상호 선택 성공

      break;
    case "MATCHING_TARGET_WAITING":
      // 매칭 상대 선택 대기 - 나는 선택 완료

      break;
    case "ERROR": // 서버 에러
      Page = Skeleton;
      break;
    default: // null, undefined, 서버 에러
      Page = Skeleton;
      break;
  }

  return (
    isError ? (
      <>Error Page</>
    ) :
    isLoading ? (
      <Skeleton />
    ) : (
      <>
        {Page && <Page />}
        {/* {children} */}
      </>
    )
  );
}

export default MatchingLayout;
