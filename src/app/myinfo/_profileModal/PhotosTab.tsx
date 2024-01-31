import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import WatermarkedImage from "@/components/WatermarkImage";


export const PhotosTab = ({ targetPhotos, userId }: any) => {
  if (!targetPhotos) {
    return null;
  }

  return (
    <Root>
      <Box className="photos-box">
        {
          targetPhotos?.map((photo: any, index: number) => (
            <Box className="photo" key={index}>
              <WatermarkedImage src={photo?.url} watermarkText={userId} />
            </Box>
          ))
        }
      </Box>
    </Root>
  );
};

const Root = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  ".photos-box": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  ".photo": {
    borderRadius: "6px",
  },
});
