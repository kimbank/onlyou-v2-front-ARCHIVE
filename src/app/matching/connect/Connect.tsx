import { Box, Button, Collapse, styled, Typography } from "@mui/material";

import Stopwatch from "public/icons/stopwatch.svg";
import Image from "next/image";
import TargetProfileCard from "./TargetProfileCard";
import { useEffect, useState } from "react";
import Kakao from "public/icons/kakao.svg";
import KakaoDrawer from "@/components/Drawer/KakaoDrawer";
import useModal from "@/hooks/useModal";
import { useSearchParams } from "next/navigation";
import colors from "@/assets/theme/base/colors";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  InfoOption,
  LetterData,
  LetterOption,
  TargetingInfo,
} from "./ProfileData";

const UserStatus = {
  RECEIVE: "receive",
  MATCH: "match",
  WAIT: "wait",
};

const ConsistAPI = {
  statusCode: 200,
  message: "Find Success",
  data: {
    values: {
      dateBirth: 2001,
      dormant: null,
      education: "전문대",
      jobType: "Test",
      nickname: "male_Test2",
      residence: "인천",
      kakaoId: "inguk",
      letterOptions: LetterData.options,
      targetingOptions: TargetingInfo.options,
    },
  },
};

export interface ConsistData {
  dateBirth: number | null;
  dormant: number | null;
  education: string | null;
  jobType: string | null;
  nickname: string | null;
  residence: string | null;
  kakaoId: string | null;
  letterOptions: LetterOption[];
  targetingOptions: InfoOption[];
}

const { primary_lighten3 } = colors;

export const Connect = () => {
  const [status, setStatus] = useState(UserStatus.RECEIVE);
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";

  const [consistData, setConsistData] = useState<ConsistData>({
    dateBirth: null,
    dormant: null,
    education: null,
    jobType: null,
    nickname: null,
    residence: null,
    kakaoId: null,
    letterOptions: [],
    targetingOptions: [],
  });

  useEffect(() => {
    const { values } = ConsistAPI.data;
    setConsistData(values);
    console.log("values", values);
  }, []);
  const handleGoBack = () => {
    console.log("만남성사");
  };
  const {
    isModalOpen: isCollapseOpen,
    openModal: openCollapseModal,
    closeModal: closeCollapseModal,
  } = useModal(true);
  const {
    isModalOpen: isModalOpen,
    openModal: openModal,
    closeModal: closeModal,
  } = useModal();
  const handleStatusChange = () => {
    setStatus((currentStatus) => {
      switch (currentStatus) {
        case UserStatus.RECEIVE:
          return UserStatus.MATCH;
        case UserStatus.MATCH:
          return UserStatus.WAIT;
        case UserStatus.WAIT:
          return UserStatus.RECEIVE;
        default:
          return UserStatus.RECEIVE;
      }
    });
  };

  return (
    <ConnectRoot>
      {!isInit && (
        <Collapse in={isCollapseOpen}>
          <OriginModal>
            <CloseIcon onClick={closeCollapseModal} />
            <Typography>
              새롭게 추가된 조건인
              <br />
              <strong>연봉, 외향/내향, 외적 매력, 내적 매력</strong>을
              채워주세요.
            </Typography>
            <Button variant="contained" color="primary">
              내 정보 수정 바로가기
            </Button>
          </OriginModal>
        </Collapse>
      )}
      <Typography variant="h1">
        {status === UserStatus.MATCH
          ? "축하드려요"
          : status === UserStatus.WAIT
          ? "상대의 선택을 기다리는 중이에요"
          : "오늘의 인연이에요"}
        <Typography variant="body1">
          {status === UserStatus.MATCH
            ? "서로를 선택하여 연락처가 공개됐어요."
            : status === UserStatus.WAIT
            ? "곧 메시지로 결과를 알려드릴게요."
            : "마감 전까지 선택을 완료해 주세요!"}
        </Typography>
      </Typography>
      <Box className="profile-box">
        <TargetProfileCard data={consistData} />
      </Box>
      <Box className="caption">
        <Box>
          <Image src={Stopwatch} alt="logo" width={18} height={18} />
          <Typography color="warning" variant="body2">
            선택 마감까지 99:99:99
          </Typography>
        </Box>
        {status === UserStatus.RECEIVE && (
          <>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => handleGoBack()}
            >
              <Typography variant="button">수락하기</Typography>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => handleGoBack()}
            >
              <Typography variant="button">거절하기</Typography>
            </Button>
          </>
        )}
        {status === UserStatus.MATCH && (
          <Button
            className="kakaoButton"
            variant="contained"
            size="large"
            onClick={openModal}
          >
            <Image src={Kakao} width={18} height={16.5} alt="카카오" />
            <Typography variant="button">카카오톡 아이디 확인하기</Typography>
          </Button>
        )}
      </Box>
      <KakaoDrawer
        open={isModalOpen}
        onClose={closeModal}
        kakaoId={consistData.kakaoId}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleStatusChange}
      >
        <Typography variant="button">상태 변경</Typography>
      </Button>
    </ConnectRoot>
  );
};

const ConnectRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    "&> h1": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    ".profile-box": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "8px",
    },
    ".caption": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      "&> div": {
        display: "flex",
        flexDirection: "row",
        gap: "6px",
        "&> p": {
          color: "#FF4A31",
        },
      },

      "&> button:first-of-type": {
        marginTop: "4px",
      },
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

const OriginModal = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    backgroundColor: primary_lighten3,
    padding: "20px 16px 16px 16px",
    borderRadius: "6px",
    position: "relative",
    "&> button": {
      height: "34px !important",
    },
  };
});

const CloseIcon = styled(CloseRoundedIcon)(() => {
  return {
    position: "absolute",
    width: "20px",
    height: "20px",
    top: 0,
    right: 0,
    marginTop: "12px",
    marginRight: "16px",
    cursor: "pointer",
  };
});
