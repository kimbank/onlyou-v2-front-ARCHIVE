"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useMatchingStatus } from "@/api/hooks/useMatchingStatus";

import HomeHeader from "@/components/Header/HomeHeader";
import BottomNavi from "@/components/BottomNavi";
import { useDispatch } from "react-redux";
import { showModal, closeModal } from "@/store/home/modalSlice";

import Loading from "@/components/loading";


const Dormancy              = dynamic(() => import("./_pages/dormancy/page"),                { ssr: false, loading: () => <Loading />});
const MatchingFailure       = dynamic(() => import("./_pages/matching_failure/page"),        { ssr: false, loading: () => <Loading /> });
const MatchingWaiting       = dynamic(() => import("./_pages/matching_waiting/page"),        { ssr: false, loading: () => <Loading /> });
const MatchingChoice        = dynamic(() => import("./_pages/matching_choice/page"),         { ssr: false, loading: () => <Loading /> });
const MatchingTargetWaiting = dynamic(() => import("./_pages/matching_target_waiting/page"), { ssr: false, loading: () => <Loading /> });
const MatchingSuccess       = dynamic(() => import("./_pages/matching_success/page"),        { ssr: false, loading: () => <Loading /> });
const ApplicationNeed       = dynamic(() => import("./_pages/application_need/page"),        { ssr: false, loading: () => <Loading /> });


const MatchingPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
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
      Page = MatchingChoice;
      break;
    case "MATCHING_FAILURE":
      // 매칭 실패 - 상호 선택 실패
      Page = MatchingFailure;
      break;
    case "MATCHING_SUCCESS":
      // 매칭 성공 - 상호 선택 성공
      Page = MatchingSuccess;
      break;
    case "MATCHING_TARGET_WAITING":
      // 매칭 상대 선택 대기 - 나는 선택 완료
      Page = MatchingTargetWaiting;
      break;
    case "ERROR":
      dispatch(
        showModal({
          title: "데이터 에러",
          body: "유저 데이터에 문제가 있습니다. 관리자에게 문의해주세요.",
          cancel: "로그아웃",
          complete: "새로고침",
          onCancel: () => router.push("/signout"),
          onComplete: () => window.location.reload(),
        })
      );
      break;
  }

  if (isError) {
    dispatch(
      showModal({
        title: "서버 에러",
        body: "잠시 후 다시 시도해주세요.",
        cancel: "로그아웃",
        complete: "새로고침",
        onCancel: () => router.push("/signout"),
        onComplete: () => window.location.reload(),
      })
    );
  } else {
    dispatch(closeModal());
  }

  return (
    <>
      <HomeHeader />
      {
        isLoading || isError ? (
          <Loading />
        ) : (
          <>
            {Page && <Page />}
            {/* {children} */}
          </>
        )
      }
      <BottomNavi />
    </>
  );
}

export default MatchingPage;
