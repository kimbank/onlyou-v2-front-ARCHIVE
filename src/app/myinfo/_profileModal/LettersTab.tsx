import React from "react";
import {
  Box,
  styled,
  Typography
} from "@mui/material";
import {
  VisibilityOff
} from "@mui/icons-material";
import Image from "next/image";
import LetterIcon from "public/icons/letter.png";
import { getLetterOptionLabel } from "@/constants/letter";


export const LettersTab = ({ targetLetters }: any) => {
  if (!targetLetters) {
    return null;
  }

  const renderLetterContent = (content: any) => {
    const splitContent = content.split("\n");
    console.log("splitContent", splitContent);
    return splitContent?.map((content: any, index: number) => (
      <React.Fragment key={index}>
        {content}
        <br />
      </React.Fragment>
    ));
  }

  return (
    <Root>
      {targetLetters?.length > 0 ? (
        targetLetters?.map((letter: any, index: number) => (
        // letter?.status > 0 &&
          <Box
            key={index}
            style={{
              backgroundColor: ["#FFF6EF", "#F8F2FC"][index % 2],
            }}
            className="letter-box"
          >
            <Box className="letter-icon">
              <Box className="letter-text">
                {letter?.status > 0 ?
                  <Image src={LetterIcon} width={20} height={20} alt="Letter" /> :
                  <VisibilityOff color="disabled" />
                }
                <Typography variant="subtitle2">
                  { getLetterOptionLabel(letter?.index) }
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ wordWrap: "break-word" }}>
              { renderLetterContent(letter?.content) }
            </Typography>
          </Box>
        ))
        ) : (
          <Typography variant="body2" sx={{ wordWrap: "break-word" }}>
            편지가 없습니다.
          </Typography>
      )}
    </Root>
  );
};

const Root = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  ".letter-box": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    borderRadius: "8px",
    padding: "20px",
  },
  ".letter-icon": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  ".letter-text": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
});
