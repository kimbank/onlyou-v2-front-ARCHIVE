"use client";

import Image from "next/image";
import colors from "@/assets/theme/base/colors";

import { Box, Button, Container, styled, Typography } from "@mui/material";
import HomeHeader from "@/components/Header/HomeHeader";
import BottomNavi from "@/components/BottomNavi";

const EventPage = () => {
  return (
    <>
      <HomeHeader />
      <EventRoot id="content">
        <Box className="event-box">
          <Typography variant="h1" className="event-title">
            프립 후기 이벤트
          </Typography>
          <Typography variant="body2" className="event-text">
            많은 분을 모셔 정확도를 올릴 수 있도록
            <br />
            <strong>프립 후기</strong>를 작성해 주세요!
          </Typography>
          <Typography variant="body2">
            작성 후 문자로 인증해주시면,
            <br />
            <strong>스타벅스 기프티콘</strong>을 드립니다!
          </Typography>
          <Image
            src="/images/event/starbucks.png"
            alt="starbucks"
            width={62}
            height={100}
            className="starbucks"
          />
          <Button
            size="large"
            component="a"
            href="https://www.frip.co.kr/products/172133"
            target="_blank"
          >
            <Typography variant="subtitle1">프립 후기 작성하기</Typography>
          </Button>
        </Box>
        <Box className="event-box">
          <Typography variant="h1" className="event-title">
            연애 골인 이벤트
          </Typography>
          <Typography variant="body2">
            <strong>ONLYou</strong>를 통해 연애에 골인하신 스토리를 들려주세요.
            <br />
            보답으로 <strong>아웃백 상품권</strong>을 드려요!
          </Typography>
          <Image
            src="/images/event/outback.png"
            alt="outback"
            width={106}
            height={39}
            className="outback"
          />
          <Button
            size="large"
            component="a"
            href="https://g8h7y7g082m.typeform.com/to/tCIRXQac?typeform-source=only-you.co.kr"
            target="_blank"
          >
            <Typography variant="subtitle1">연애 스토리 작성하기 </Typography>
          </Button>
        </Box>
      </EventRoot>
      <BottomNavi />
    </>
  );
};

export default EventPage;

const EventRoot = styled(Container)(({ theme }) => {
  const { primary_lighten3, white } = colors;
  return {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    paddingBottom: "60px",
    alignItems: "center",
    overflow: "scroll",
    width: "100%",
    backgroundColor: white,
    ".event-box": {
      width: "100%",
      borderRadius: "6px",
      backgroundColor: primary_lighten3,
      padding: "24px 16px 20px 16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    ".event-title": {
      marginBottom: "12px",
    },
    ".event-text": {
      marginBottom: "8px",
    },
    ".starbucks": {
      marginTop: "4px",
      marginBottom: "15px",
    },
    ".outback": {
      margin: "24px",
    },
  };
});
