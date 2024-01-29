import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import Letter from "public/icons/letter.png";
import { ConsistData } from "../Connect";

interface Props {
  data?: ConsistData;
}

export const PictureTab = ({ data }: Props) => {
  return (
    <Root>
      <Box className="picture-box">
        <Box className="picture"></Box>
        <Box className="picture"></Box>
      </Box>
    </Root>
  );
};

const Root = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  ".picture-box": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  ".picture": {
    height: "200px",
    backgroundColor: "#484848",
    borderRadius: "6px",
  },
});
