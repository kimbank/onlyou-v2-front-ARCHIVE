import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import Letter from "public/icons/letter.png";
import { ConsistData } from "../Connect";

interface Props {
  data: ConsistData;
}

export const LetterTab = ({ data }: Props) => {
  return (
    <Root>
      {data.letterOptions.map((letter, index) => (
        <Box
          style={{
            backgroundColor: ["#FFF6EF", "#F8F2FC"][index % 2],
          }}
          className="letter-box"
          key={index}
        >
          <Box className="letter-icon">
            <Box className="letter-text">
              <Image src={Letter} width={20} height={20} alt="Letter" />
              <Typography variant="subtitle2">{letter.title}</Typography>
            </Box>
            <Typography variant="body2">{letter.description}</Typography>
          </Box>
        </Box>
      ))}
    </Root>
  );
};

const Root = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  ".letter-box": {
    display: "flex",
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
