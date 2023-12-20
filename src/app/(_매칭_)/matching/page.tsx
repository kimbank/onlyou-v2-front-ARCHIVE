"use client";

import SubmitNavButton from "@/app/components/NavBars/\bSubmitNavButton";
import { InfoBox } from "@/app/components/Notification/InfoBox/InfoText";
import RDButton from "@/app/components/RDButton/RDButton";
import { Container, Typography } from "@mui/material";
import { MatchingBox } from "./components/MatchingBox";
import MatchingRoot from "./MatchingRoot";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Index = () => {
  return (
    <MatchingRoot>
      {/* <Icon/> 아이콘 배치 */}
      <Container className="matching-Box">
        <Typography variant="h3">신청서 완성하기</Typography>
        <Typography variant="subtitle2" className="subtitle2">
          신청서를 완성하고
          <br />
          나와 맞는 인연을 빠르게 찾아보세요!
        </Typography>
        <MatchingBox />
        <InfoBox align="center">
          <InfoOutlinedIcon className="info-icon" />
          <Typography variant="body2">
            매칭신청서를 작성하다 중단해도 자동 저장되니
          </Typography>
          <Typography variant="body2">언제든 다시 작성할 수 있어요!</Typography>
        </InfoBox>
        <RDButton variant="contained" color="primary" size="large">
          <Typography variant="h5">매칭신청서 완성하기</Typography>
        </RDButton>
      </Container>
    </MatchingRoot>
  );
};

export default Index;
