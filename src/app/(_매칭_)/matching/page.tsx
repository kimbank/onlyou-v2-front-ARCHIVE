"use client";

import SubmitNavButton from "@/app/components/NavBars/\bSubmitNavButton";
import { Container, Typography } from "@mui/material";
import MatchingRoot from "./MatchingRoot";

const Index = () => {
  return (
    <MatchingRoot>
      {/* <Icon/> 아이콘 배치 */}
      <Typography variant="h3">신청서 완성하기</Typography>
      <Typography variant="subtitle2">
        신청서를 완성하고
        <br />
        나와 맞는 인연을 빠르게 찾아보세요!
      </Typography>
    </MatchingRoot>
  );
};

export default Index;
