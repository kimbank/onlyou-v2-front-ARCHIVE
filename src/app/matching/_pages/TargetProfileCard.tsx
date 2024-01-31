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
import { CertificationBadge } from "@/components/Badge/CertificationBadge";

import useModal from "@/hooks/useModal";
import TargetProfileModal from "./TargetProfileModal";
import KakaoDrawer from "@/components/Drawer/KakaoDrawer";
import { getDetailsNameLabel, getDetailOptionLabel } from "@/constants/matching";


const TargetProfileCard = ({ targetData, handleAccept, handleReject } : any) => {
  const { openModal, isModalOpen, closeModal } = useModal();

  return (
    <>
      <TargetProfileModal
        open={isModalOpen}
        onClose={closeModal}
        matchingId={targetData?.matchingId}
        handleAccept={handleAccept}
        handleReject={handleReject}
      />
      <ProfileCardRoot>
        <ProfileCertification>
          <Image src={VerifiedIcon} width={20} height={20} alt="verified" />
          { targetData?.verification && <CertificationBadge name="신분 인증" /> }
          { targetData?.jobVerification && <CertificationBadge name="직장 인증" /> }
        </ProfileCertification>
        <ProfileAvatarRoot>
          <Avatar src={targetData?.photo} sx={{ width: '56px', height: '56px', filter: 'blur(1px)', userSelect: 'none', pointerEvents: 'none' }} />
          <Typography variant="subtitle1">{targetData?.nickname}</Typography>
        </ProfileAvatarRoot>
        <ProfileDetail>
          <span className="item">
            <Image src={JobIcon} width={20} alt="직장" />
            <Typography variant="body2">{targetData?.jobGroup}</Typography>
          </span>
          <span className="item">
            <Image src={HomeIcon} width={20} alt="거주지" />
            <Typography variant="body2">{getDetailOptionLabel("residence", targetData?.residence)}</Typography>
          </span>
          <span className="item">
            <Image src={BirthIcon} width={20} alt="나이" />
            <Typography variant="body2">{targetData?.birthYear}년생</Typography>
          </span>
          {/* {
            targetData?.kakaoId && (
              <span className="item">
                <Box>
                  <Image src={KakaoIcon} width={15} height={13.75} alt="카카오" />
                </Box>
                <Typography variant="body2">{targetData?.kakaoId}</Typography>
              </span>
            )
          } */}
        </ProfileDetail>
        <Box className="button-box">
          <DetailButton
            variant="contained"
            color="secondary"
            onClick={openModal}
          >
            <Typography variant="body2" color="gray2">
              프로필 상세보기
            </Typography>
          </DetailButton>
        </Box>
      </ProfileCardRoot>
    </>
  )
}

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

export default TargetProfileCard;
