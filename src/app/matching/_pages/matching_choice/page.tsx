"use client";

import BirthIcon from "public/icons/birth.svg";
import HomeIcon from "public/icons/home.svg";
import JobIcon from "public/icons/job.svg";
import KakaoIcon from "public/icons/kakao.svg";
import VerifiedIcon from "public/icons/verified.svg";
import Image from "next/image";
import {
  styled,
  Box,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import NoticeModal from "../NoticeModal";
import { CertificationBadge } from "@/components/Badge/CertificationBadge";

import { useMatchingList } from "@/api/hooks/useMatchingList";
import Timer from "@/components/Timer/Timer";


const MatchingChoicePage = () => {
  const { matchingList, isLoading, isError } = useMatchingList();
  console.log(matchingList);

  return (
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
      <ProfileCardRoot>
        <ProfileCertification>
          <Image src={VerifiedIcon} width={20} height={20} alt="verified" />
          { matchingList?.verification && <CertificationBadge name="신분 인증" /> }
          { matchingList?.jobVerification && <CertificationBadge name="직장 인증" /> }
        </ProfileCertification>
        <ProfileAvatarRoot>
          <Avatar src={matchingList?.photo} sx={{ width: '56px', height: '56px', filter: 'blur(1px)', userSelect: 'none', pointerEvents: 'none' }} />
          <Typography variant="subtitle1">{matchingList?.nickname}</Typography>
        </ProfileAvatarRoot>
        <ProfileDetail>
          <span className="item">
            <Image src={JobIcon} width={20} alt="직장" />
            <Typography variant="body2">{matchingList?.jobGroup}</Typography>
          </span>
          <span className="item">
            <Image src={HomeIcon} width={20} alt="거주지" />
            <Typography variant="body2">{matchingList?.residence}</Typography>
          </span>
          <span className="item">
            <Image src={BirthIcon} width={20} alt="나이" />
            <Typography variant="body2">{matchingList?.birthYear}</Typography>
          </span>
          {/* <span className="item">
            <Box>
              <Image src={KakaoIcon} width={15} height={13.75} alt="카카오" />
            </Box>
            <Typography variant="body2">{matchingList?.kakaoId}</Typography>
          </span> */}
        </ProfileDetail>
        <Box className="button-box">
          <DetailButton
            variant="contained"
            color="secondary"
            // onClick={openModal}
          >
            <Typography variant="body2" color="gray2">
              프로필 상세보기
            </Typography>
          </DetailButton>
        </Box>
      </ProfileCardRoot>
      <Timer expiryTimestamp={matchingList?.deadline} />

      <span className="content">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {}}
        >
          <Typography variant="button">수락하기</Typography>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => {}}
        >
          <Typography variant="button">거절하기</Typography>
        </Button>
      </span>
    </MatchingChoiceRoot>
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

const ProfileCardRoot = styled("div")(({ theme }) => {
  return {
    borderRadius: "8px",
    border: `1px solid ${theme.palette.primary_lighten1}`,
    padding: "20px",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    ".button-box": {
      display: "flex",
      flexDirection: "row",
      gap: "16px",
    },
  };
});

const ProfileCertification = styled("div")({
  display: "flex",
  gap: 8,
  alignItems: "center",
  height: 21,
  "& Box": {},
});

const ProfileAvatarRoot = styled("div")(({ theme }) => {
    return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
  }
});

const ProfileDetail = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  ".item": {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    "&> div": {
      width: "20px",
      height: "20px",
      textAlign: "center",
      borderRadius: "4px",
      backgroundColor: "#FAE100",
    },
  },
  "&> span:last-child": {
    marginTop: 4,
  },
});

const DetailButton = styled(Button)({
  padding: "8px 12px",
});

export default MatchingChoicePage;
