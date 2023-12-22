"use client";

import SubmitNavButton from "@/app/components/NavBars/SubmitNavButton";
import { Typography } from "@mui/material";
import CompleteRoot from "./CompleteRoot";

const Index = () => {
  return (
    //추후에 매칭신청서 작성완료 부분을 인자로 받아 Complete템플릿 공통으로 사용예정
    <>
      <CompleteRoot>
        {/* <Icon/> 아이콘 배치 */}
        <Typography className="complete-title heading3">
          매칭신청서 작성완료
        </Typography>
        <Typography className="complete-caption">
          작성하느라 수고하셨어요
          <br />딱 맞는 인연을 찾아드릴게요!
        </Typography>
      </CompleteRoot>
      <SubmitNavButton submitText="매칭으로 이동하기" submitHref="/matching" />
    </>
  );
};

export default Index;
