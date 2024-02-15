import Image from "next/image";

import verified from "public/icons/verified.svg";
import Job from "public/icons/job.svg";
import Home from "public/icons/home.svg";
import Birth from "public/icons/birth.svg";
import { Box, Button, styled, Typography, Avatar } from "@mui/material";

import { useMyinfo } from "@/api/hooks/useMyinfo";
import { useMyinfoDetails } from "@/api/hooks/useMyinfoDetails";
import { CertificationBadge } from "@/components/Badge/CertificationBadge";
import { getDetailsNameLabel, getDetailOptionLabel } from "@/constants/matching";

import useModal from "@/hooks/useModal";
import UserProfileModal from "./_profileModal/UserProfileModal";


const MyinfoProfileCard = () => {
  const { myInfo, isLoading, isError } = useMyinfo();
  const { isError: isMyinfoDetailsError } = useMyinfoDetails();
  const { openModal, isModalOpen, closeModal } = useModal();

  const manner = `${myInfo?.manner || 36.5}도`;

  return (
    <>
      {!isLoading && !isError &&
        <UserProfileModal open={isModalOpen} onClose={closeModal} />
      }
      <MyinfoProfileCardRoot>
        <ProfileCertification>
          <Image src={verified} width={20} height={20} alt="verified" />
          <CertificationBadge name="신분 인증" />
          <CertificationBadge name="직장 인증" />
        </ProfileCertification>

        <ProfileInfo>
          <Box>
          <Avatar src={myInfo?.photo} sx={{ width: '56px', height: '56px', userSelect: 'none', pointerEvents: 'none' }} />
            <Box>
              <Typography variant="subtitle1">{myInfo?.nickname}</Typography>
              <Box>
                <Typography variant="body3" color="gray2">
                  {manner}
                </Typography>
              </Box>
            </Box>
          </Box>
        </ProfileInfo>
        <ProfileDetail>
          <span className="item">
            <Image src={Job} width={20} alt="직장" />
            <Typography variant="body2">{myInfo?.jobGroup}</Typography>
          </span>
          <span className="item">
            <Image src={Home} width={20} alt="거주지" />
            <Typography variant="body2">{getDetailOptionLabel("residence", myInfo?.residence)}</Typography>
          </span>
          <span className="item">
            <Image src={Birth} width={20} alt="나이" />
            <Typography variant="body2">{myInfo?.birthYear}년생</Typography>
          </span>
        </ProfileDetail>
        {!isLoading && !isError && !isMyinfoDetailsError &&
          <DetailButton variant="contained" color="secondary" onClick={openModal}>
            <Typography variant="body2" color="gray2">
              프로필 상세보기
            </Typography>
          </DetailButton>
        }
      </MyinfoProfileCardRoot>
    </>
  );
};

const MyinfoProfileCardRoot = styled("div")(({ theme }) => {
  return {
    borderRadius: "8px",
    border: `1px solid ${theme.palette.primary_lighten1}`,
    padding: "20px",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
  }
});

const ProfileCertification = styled("div")({
  display: "flex",
  gap: 8,
  alignItems: "center",
  height: 21,
  "& Box": {},
});

const ProfileInfo = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 12,
    ".profileImage": {
      width: 56,
      height: 56,
      borderRadius: "50%",
      backgroundColor: theme.palette.black,
    },
    "> div": {
      display: "flex",
      flexDirection: "row",
      gap: 16,
      "> div": {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4,
        "> div": {
          display: "flex",
          justifyContent: "center",
          border: `1px solid ${theme.palette.gray4}`,
          padding: "2px 6px",
          borderRadius: 4,
          width: 47,
          height: 21,
          textAlign: "center",
          whiteSpace: "nowrap",
        },
      },
    },
  }
});

const ProfileDetail = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  ".item": {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
  },
});

const DetailButton = styled(Button)({
  padding: "8px 12px",
});

export default MyinfoProfileCard;
