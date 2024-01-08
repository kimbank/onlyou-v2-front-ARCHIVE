'use client'

import colors from "@/assets/theme/base/colors";
import { Box, Button, Divider, Typography , styled } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { Certify } from "../certifyBadge/certify";
import { Job } from "../certifyBadge/job";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CakeIcon from "@mui/icons-material/Cake";
export const Profile = () =>{
    return (
      <ProfileRoot>
        {/* 이름 */}
        <Box>
          <Certify />
        </Box>
        <Divider sx={{color:"#fff",backgroundColor:"#fff"}}/>
        <Typography variant="subtitle1">지혀닝</Typography>
        {/* 직업명 */}

        <Typography className="content" variant="body2">
          <WorkIcon />
          디자이너
        </Typography>
        {/* 지역 */}

        <Typography className="content" variant="body2">
          <HomeRoundedIcon />
          서울 서부
        </Typography>
        {/* 생년월일 */}
        <Typography className="content" variant="body2">
          <CakeIcon />
          1994
        </Typography>
        <Button className="button" color="primary" variant="outlined">
          <Typography variant="subtitle2">내정보 미리보기</Typography>
        </Button>
      </ProfileRoot>
    );
}


const ProfileRoot = styled(Box)(() => {
    const {primary_lighten3 , white} = colors
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    justifyContent: "flex-start",
    gap: "12px",
    backgroundColor: primary_lighten3,
    borderRadius: "6px",
    padding: "16px 20px 20px 20px",
    ".content": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap:"8px",

    },
    ".button":{
        backgroundColor:white,
    },
  };
});

