"use client";

import Image from "next/image";
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
import KakaoIcon from "public/icons/kakao.svg";
import KakaoDrawer from "@/components/Drawer/KakaoDrawer";


const MatchingSuccessPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { matchingList, isLoading, isError } = useMatchingList();
  const { openModal, isModalOpen, closeModal } = useModal();

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
      <MatchingSuccessRoot id="content">
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
          <TargetProfileCard targetData={matchingList[0]} />
          <Timer
            timerText={"카카오톡 아이디 공개 마감까지"}
            expiryTimestamp={matchingList[0]?.deadline}
            onExpire={() => window.location.reload()}
          />
          <Button
            className="kakaoButton"
            variant="contained"
            size="large"
            onClick={openModal}
          >
            <Image src={KakaoIcon} width={18} height={16.5} alt="카카오" />
            <Typography variant="button">카카오톡 아이디 확인하기</Typography>
          </Button>
          <KakaoDrawer
            open={isModalOpen}
            onClose={closeModal}
            kakaoId={matchingList[0]?.kakaoId}
          />
        </span>
      </MatchingSuccessRoot>
    )
  )
}

const MatchingSuccessRoot = styled("div")(({ theme }) => {
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

    ".kakaoButton": {
      display: "flex",
      flexDirection: "row",
      gap: "8px",
      backgroundColor: "#FAE100",
      color: "#371D1E",
      "&:hover": {
        backgroundColor: "#FAE100 !important",
      },
      "&:focus:not(:hover)": {
        backgroundColor: "#FAE100 !important",
      },
    },
  };
});

export default MatchingSuccessPage;
