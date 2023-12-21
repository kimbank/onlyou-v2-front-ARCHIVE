"use client";

import { Box, Typography, Button } from "@mui/material";
import { ReportGmailerrorredOutlined } from "@mui/icons-material";

import { InfoBox } from "@/components/Notification/InfoBox/InfoText";
import RDButton from "@/components/RDButton/RDButton";
import { MatchingBox } from "./components/MatchingBox";
import StepInfo from "./StepInfo";
import SaveInfo from "./SaveInfo";

import MatchingRoot from "./MatchingRoot";


const Index = () => {
  return (
    <MatchingRoot>
      <Box className="title">
        <Typography variant="h1">신청서 완성하기</Typography>
        <Typography variant="body1">
          신청서를 완성하고
          <br />
          나와 맞는 인연을 빠르게 찾아보세요!
        </Typography>
      </Box>

      <Box className="content">
        {/* <MatchingBox /> */}
        <StepInfo />

        {/* <InfoBox align="center">
          <ReportGmailerrorredOutlined color="primary" />
          <Typography variant="body2">
            매칭신청서를 작성하다 중단해도 자동 저장되니<br />
            언제든 다시 작성할 수 있어요!
          </Typography>
        </InfoBox> */}
        <SaveInfo />
        <RDButton variant="contained" color="primary" size="large">
          <Typography variant="button">매칭신청서 완성하기</Typography>
        </RDButton>
      </Box>
    </MatchingRoot>
  );
};

export default Index;
