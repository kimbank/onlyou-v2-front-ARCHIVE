import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MatchingBoxRoot from "./MatchingBoxRoot";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

export const MatchingBox = () => {
  const timelineData = [
    { number: 1, content: "내정보" },
    { number: 2, content: "이상형 정보" },
    { number: 3, content: "편지" },
  ];
  return (
    <MatchingBoxRoot>
      <Image src="/matchingIcon.png" alt="matching" width={149} height={149} />

      <InfoOutlinedIcon className="info-icon" />
      <Typography variant="body2">
        매칭신청서 작성은 이 순서로 구성되어 있어요
      </Typography>
      <Container className="timeline-container">
        {timelineData.map((item, index) => (
          <>
            <Box
              key={index}
              className="timeline-item"
              sx={
                {
                  // marginRight: index === 1 ? "5px" : "0",
                  // marginLeft: index === 1 ? "5px" : "0",
                }
              }
            >
              <Box className="timeline-number">{item.number}</Box>
              <Box className="timeline-content">
                <Typography variant="body2">{item.content}</Typography>
              </Box>
            </Box>
            <Box
              className="timeline-arrow"
              sx={{
                marginRight: index === 1 ? "15px" : "0",
                // marginLeft: index === 1 ? "5px" : "0",
              }}
            >
              {index < timelineData.length - 1 && (
                <Image src="/Arrow.png" alt="Arrow" width={64} height={6} />
              )}
            </Box>
          </>
        ))}
      </Container>
    </MatchingBoxRoot>
  );
};
