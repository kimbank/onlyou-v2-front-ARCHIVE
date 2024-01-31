"use client";

import { useRouter } from "next/navigation";
import {
  styled,
  Box,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import NoticeModal from "../NoticeModal";

import { useDispatch } from "react-redux";
import { showModal, closeModal } from "@/store/home/modalSlice";

import { useMatchingList } from "@/api/hooks/useMatchingList";

import Loading from "@/components/loading";
import TargetProfileCard from "../TargetProfileCard";
import Timer from "@/components/Timer/Timer";


const MatchingTargetWaitingPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { matchingList, isLoading, isError } = useMatchingList();

  if (!Loading && (isError || !matchingList || matchingList.length === 0)) {
    dispatch(
      showModal({
        title: "매칭 데이터 에러",
        body: "매칭 데이터에 문제가 있습니다. 새로고침 하거나, 관리자에게 문의해주세요.",
        cancel: "로그아웃",
        complete: "새로고침",
        onCancel: () => router.push("/signout"),
        onComplete: () => window.location.reload(),
      })
    );
  }

  return (
    (isLoading || isError) ? <Loading /> :
    (
      <MatchingTargetWaitingRoot id="content">
        <NoticeModal />
        <span className="title">
          <Typography variant="h1">
            상대의 선택을 기다리는 중이에요
          </Typography>
          <Typography variant="body1">
            곧 메시지로 결과를 알려드릴게요.
          </Typography>
        </span>

        <span className="content">
          <TargetProfileCard targetData={matchingList[0]} />
          <Timer
            timerText="상대의 선택 마감까지"
            expiryTimestamp={matchingList[0]?.deadline}
            onExpire={() => window.location.reload()}
          />
        </span>
      </MatchingTargetWaitingRoot>
    )
  )
}

const MatchingTargetWaitingRoot = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "24px",

    "& .title": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },

    "& .content": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
  };
});

export default MatchingTargetWaitingPage;
