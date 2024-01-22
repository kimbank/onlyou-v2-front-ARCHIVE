import Image from "next/image";

import verified from "public/icons/verified.svg";
import Job from "public/icons/job.svg";
import Home from "public/icons/home.svg";
import Birth from "public/icons/birth.svg";
import Kakao from "public/icons/kakao.svg";
import Siren from "public/images/agreement/siren.png";

import { useMyinfo } from "@/api/hooks/useMyinfo";
import colors from "@/assets/theme/base/colors";
import { Box, Button, styled, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { Certify } from "@/app/myinfo/Certify";

const { gray4, black, primary_lighten1 } = colors;
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
    },
  },
};

interface ConsistData {
  dateBirth: number | null;
  dormant: number | null;
  education: string | null;
  jobType: string | null;
  nickname: string | null;
  residence: string | null;
  kakaoId: string | null;
}

const ConsistCard = () => {
  const [consistData, setConsistData] = useState<ConsistData>({
    dateBirth: null,
    dormant: null,
    education: null,
    jobType: null,
    nickname: null,
    residence: null,
    kakaoId: null,
  });

  useEffect(() => {
    const { values } = ConsistAPI.data;
    setConsistData(values);
    console.log("values", values);
  }, []);
  const { myInfo, isLoading, isError } = useMyinfo();

  console.log("myInfo", myInfo);

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
            <Typography variant="subtitle1">{consistData?.nickname}</Typography>
          </Box>
        </Box>
      </ProfileInfo>
      <ProfileDetail>
        <span className="item">
          <Image src={Job} width={20} alt="직장" />
          <Typography variant="body2">{consistData?.jobType}</Typography>
        </span>
        <span className="item">
          <Image src={Home} width={20} alt="거주지" />
          <Typography variant="body2">{consistData?.residence}</Typography>
        </span>
        <span className="item">
          <Image src={Birth} width={20} alt="나이" />
          <Typography variant="body2">{consistData?.dateBirth}</Typography>
        </span>
        <span className="item">
          <Box>
            <Image src={Kakao} width={15} height={13.75} alt="나이" />
          </Box>
          <Typography variant="body2">{consistData?.kakaoId}</Typography>
        </span>
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
  ".button-box": {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
  },
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

export default ConsistCard;
