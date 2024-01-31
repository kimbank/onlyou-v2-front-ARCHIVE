"use client";

import React from "react";
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

import useModal from "@/hooks/useModal";
import Drawer from "@/components/Drawer";
import { useMatchingStatus } from "@/api/hooks/useMatchingStatus";
import { putMatchingChoice } from "@/api/putMatchingChoice";


const MatchingChoicePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { matchingList, isLoading, isError, mutate: mutateMatchingList } = useMatchingList();
  const { mutate: mutateMatchingStatus } = useMatchingStatus();
  const { openModal, isModalOpen, closeModal } = useModal();
  const [choice, setChoice] = React.useState<boolean>(true);

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

  const handleChoice = async (choice: boolean) => {
    const res = await putMatchingChoice(choice, matchingList[0]?.matchingId);
    if (res.status >= 200 && res.status < 300) {
      mutateMatchingList();
      mutateMatchingStatus();
    } else {
      dispatch(
        showModal({
          title: "매칭 선택 에러",
          body: "매칭 선택에 문제가 있습니다. 새로고침 하거나, 관리자에게 문의해주세요.",
          cancel: "로그아웃",
          complete: "새로고침",
          onCancel: () => router.push("/signout"),
          onComplete: () => window.location.reload(),
        })
      );
    }
  }

  const handleAccept = () => {
    setChoice(true);
    openModal();
  }

  const handleReject = () => {
    setChoice(false);
    openModal();
  }

  return (
    (isLoading || isError) ? <Loading /> :
    (
      <MatchingChoiceRoot id="content">
        <NoticeModal />
        <span className="title">
          <Typography variant="h1">
            오늘의 인연이에요
          </Typography>
          <Typography variant="body1">
            마감 전까지 선택을 완료해 주세요!
          </Typography>
        </span>

        <span className="content">
          <TargetProfileCard
            targetData={matchingList[0]}
            handleAccept={handleAccept}
            handleReject={handleReject}
          />
          <Timer
            timerText="선택 마감까지"
            expiryTimestamp={matchingList[0]?.deadline}
            onExpire={() => window.location.reload()}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleAccept}
          >
            <Typography variant="button">수락하기</Typography>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleReject}
          >
            <Typography variant="button">거절하기</Typography>
          </Button>
        </span>
        <Drawer
          title={choice ? "정말로 수락하시겠어요?" : "정말로 거절하시겠어요?"}
          body={"한 번 선택하면 변경할 수 없습니다"}
          open={isModalOpen}
          onClose={closeModal}
          complete={choice ? "수락하기" : "거절하기"}
          onComplete={() => handleChoice(choice)}
        />
      </MatchingChoiceRoot>
    )
  )
}

const MatchingChoiceRoot = styled("div")(({ theme }) => {
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

export default MatchingChoicePage;
