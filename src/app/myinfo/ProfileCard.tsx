import Image from "next/image";

import verified from "public/icons/verified.svg";
import Job from "public/icons/job.svg";
import Home from "public/icons/home.svg";
import Birth from "public/icons/birth.svg";

import { useMyinfo } from "@/api/hooks/useMyinfo";
import colors from "@/assets/theme/base/colors";
import { Box, Button, styled, Typography } from "@mui/material";
import { Certify } from "./myinfo/components/certifyBadge/certify";

const { gray4, black, primary_lighten1 } = colors;

const ProfileCard = () => {
  const { myInfo, isLoading, isError } = useMyinfo();

  const manner = "36.5도";

  return (
    <ProfileCardRoot>
      <ProfileCertification>
        <Image src={verified} width={20} height={20} alt="verified" />
        <Certify>
          <Typography variant="body3">신분 인증</Typography>
        </Certify>
        <Certify>
          <Typography variant="body3">직장 인증</Typography>
        </Certify>
      </ProfileCertification>

      <ProfileInfo>
        <Box>
          <Box className="profileImage" />
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
          <Typography variant="body2">{myInfo?.jobType}</Typography>
        </span>
        <span className="item">
          <Image src={Home} width={20} alt="거주지" />
          <Typography variant="body2">{myInfo?.residence}</Typography>
        </span>
        <span className="item">
          <Image src={Birth} width={20} alt="나이" />
          <Typography variant="body2">{myInfo?.dateBirth}</Typography>
        </span>
      </ProfileDetail>
      <DetailButton variant="contained" color="secondary">
        <Typography variant="body2" color="gray2">
          프로필 상세보기
        </Typography>
      </DetailButton>
    </ProfileCardRoot>
  );
};

const ProfileCardRoot = styled("div")({
  borderRadius: "8px",
  border: `1px solid ${primary_lighten1}`,
  padding: "20px",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
});

const ProfileCertification = styled("div")({
  display: "flex",
  gap: 8,
  alignItems: "center",
  height: 21,
  "& Box": {},
});

const ProfileInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 12,
  ".profileImage": {
    width: 56,
    height: 56,
    borderRadius: "50%",
    backgroundColor: black,
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
        border: `1px solid ${gray4}`,
        padding: "2px 6px",
        borderRadius: 4,
        width: 47,
        height: 21,
        textAlign: "center",
        whiteSpace: "nowrap",
      },
    },
  },
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

export default ProfileCard;
