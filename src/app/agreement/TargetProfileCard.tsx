import Image from "next/image";

import verified from "public/icons/verified.svg";
import Job from "public/icons/job.svg";
import Home from "public/icons/home.svg";
import Birth from "public/icons/birth.svg";
import Kakao from "public/icons/kakao.svg";
import Siren from "public/images/agreement/siren.png";

import { styled, Box, Button, Typography } from "@mui/material";
import { CertificationBadge } from "@/components/Badge/CertificationBadge";


const TargetProfileCard = ({ targetData }: any) => {

  return (
    <>
      <Typography variant="subtitle1">{targetData?.createdAt}</Typography>
      <ProfileCardRoot>
        <ProfileCertification>
          <Image src={verified} width={20} height={20} alt="verified" />
          {targetData?.verification && <CertificationBadge name="신분 인증" /> }
          {targetData?.jobVerification && <CertificationBadge name="직장 인증" /> }
        </ProfileCertification>

        <ProfileInfo>
          <Box>
            <Box className="profileImage" />
            <Box>
              <Typography variant="subtitle1">{targetData?.nickname}</Typography>
            </Box>
          </Box>
        </ProfileInfo>
        <ProfileDetail>
          <span className="item">
            <Image src={Job} width={20} alt="직장" />
            <Typography variant="body2">{targetData?.jobGroup}</Typography>
          </span>
          <span className="item">
            <Image src={Home} width={20} alt="거주지" />
            <Typography variant="body2">{targetData?.residence}</Typography>
          </span>
          <span className="item">
            <Image src={Birth} width={20} alt="나이" />
            <Typography variant="body2">{targetData?.birthYear}</Typography>
          </span>
          {
            targetData?.kakaoId && (
              <span className="item">
                <Box>
                  <Image src={Kakao} width={15} height={13.75} alt="나이" />
                </Box>
                <Typography variant="body2">{targetData?.kakaoId}</Typography>
              </span>
            )
          }
        </ProfileDetail>
        <Box className="button-box">
          <DetailButton variant="contained" color="secondary">
            <Typography variant="body2" color="gray2">
              프로필 상세보기
            </Typography>
          </DetailButton>
          <SirenButton>
            <Image src={Siren} alt="siren" width={18} height={18} />
          </SirenButton>
        </Box>
      </ProfileCardRoot>
    </>
  );
};

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
  };
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

const SirenButton = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  width: "34px",
  height: "34px",
  backgroundColor: "#FFE1DD",
  cursor: "pointer",
  "&:hover": {
    opacity: 0.75,
    boxShadow: "0px 5px 6.8px 0px rgba(0, 0, 0, 0.09)",
  },
});

export default TargetProfileCard;
