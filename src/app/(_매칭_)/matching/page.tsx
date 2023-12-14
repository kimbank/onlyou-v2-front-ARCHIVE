"use client";

import SubmitNavButton from "@/app/components/NavBars/\bSubmitNavButton";
import { Container, Typography } from "@mui/material";

const Index = () => {
  return (
    <Container>
      {/* <Icon/> 아이콘 배치 */}
      <Typography className="complete-title heading3">
        매칭신청서 작성완료
      </Typography>
      <Typography className="complete-caption">
        작성하느라 수고하셨어요
        <br />딱 맞는 인연을 찾아드릴게요!
      </Typography>
    </Container>
  );
};

export default Index;
