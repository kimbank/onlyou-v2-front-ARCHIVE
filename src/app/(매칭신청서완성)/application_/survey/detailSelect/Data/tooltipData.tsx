import { Box, Divider, Typography, styled } from "@mui/material"


export const tooltipTitle = () =>{ 
    return (
      <TooltipTitleRoot>
        <Typography variant="body3">
          <strong>서울</strong>
        </Typography>
        <Divider />
        <Typography className="content-box" variant="body3">
          <strong>서울 동부</strong> : 동대문구, 중랑구, 광진구, 성동구, 강동구
          <br />
          <strong>서울 서부</strong> : 강서구, 영등포구, 양천구, 구로구, 금천구
          <br />
          <strong>서울 남부</strong> : 동작구, 관악구, 서초구, 강남구, 송파구
          <br />
          <strong>서울 북부</strong> : 강북구, 도봉구, 노원구, 성북구
          <br />
          <strong>서울 중부</strong> : 은평구, 종로구, 서대문구, 마포구, 중구,
          용산구
        </Typography>
        <Typography variant="body3">경기</Typography>
        <Divider />
        <Typography variant="body3">
          <strong>경기 북서부</strong> : 파주, 김포, 고양 <br />
          <strong>경기 북동부</strong> : 남양주, 가평, 구리 경기 북부 : 연천,
          포천, 동두천, 양주, 의정부 <br />
          <strong>경기 남부</strong> : 평택, 안성, 오산, 화성, 용인 <br />
          <strong>경기 남서부</strong> : 부천, 광명, 시흥, 안산 <br />
          <strong>경기 남동부</strong> : 광주,이천, 여주, 양평, 하남 <br />
          <strong>경기 중부</strong> : 과천, 군포, 성남, 수원, 안양, 의왕
        </Typography>
        <Typography variant="body3">
          <strong>인천</strong>
        </Typography>
        <Divider />
        <Typography variant="body3">
          <strong>인천 서부</strong> : 서구, 동구, 중구, 남구, 연수구, 강화군,
          영종도 <br />
          <strong>인천 동부 </strong>: 계양구, 부평구, 남동구
        </Typography>
      </TooltipTitleRoot>
    );
};

const TooltipTitleRoot = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection:"column",
    gap:'8px',
    ".content-box":{
      marginBottom:"4px",
    },
  };
});