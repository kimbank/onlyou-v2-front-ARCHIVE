import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { styled } from "@mui/material";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import MatchingIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AgreementIcon from "@mui/icons-material/MarkunreadOutlined";
import EventIcon from "@mui/icons-material/LocalActivityOutlined";
import MyInfoIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function Navigation({ recent }: any) {
  const pathname = usePathname();
  const [value, setValue] = React.useState(pathname.split("/")[1]);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <NavigationRoot>
      <BottomNavigation value={value} onChange={handleChange}>
        {/* <Link href="/matching" passHref className="next-link"> */}
        <BottomNavigationAction
          href="/matching"
          label="매칭"
          value="matching"
          icon={<MatchingIcon />}
          showLabel
        />
        {/* </Link> */}
        {/* <Link href="/agreement" passHref className="next-link"> */}
        <BottomNavigationAction
          href="/agreement"
          label="성사"
          value="agreement"
          icon={<AgreementIcon />}
          showLabel
        />
        {/* </Link> */}
        {/* <Link href="/board" passHref className="next-link"> */}
        <BottomNavigationAction
          href="/event"
          label="이벤트"
          value="event"
          icon={<EventIcon />}
          showLabel
        />
        {/* </Link> */}
        {/* <Link href="/my_info" passHref className="next-link"> */}
        <BottomNavigationAction
          href="/myinfo"
          label="내정보"
          value="myinfo"
          icon={<MyInfoIcon />}
          showLabel
        />
        {/* </Link> */}
      </BottomNavigation>
    </NavigationRoot>
  );
}

const NavigationRoot = styled("div")(() => {
  return {
    position: "fixed",
    bottom: "0px",
    // left: "50%",
    // transform: "translateX(-50%)",
    zIndex: "10",
    width: "100%",
    height: "72px",
    maxWidth: "480px",
    backgroundColor: "#fff",
    borderTop: "1px solid #D3D6DB",
    padding: "0px 24px",

    "& .MuiBottomNavigation-root": {
      height: "72px",
      width: "100%",
      maxWidth: "480px",

      display: "flex",
      "-webkit-box-align": "center",
      alignItems: "center",
      "-webkit-box-pack": "center",
      justifyContent: "center",
    },

    "& .MuiBottomNavigationAction-root": {
      display: "inline-flex",
      justifyContent: "flex-start",
      padding: "0px",
      paddingTop: "8px",
      minWidth: "auto",
      height: "72px",
      gap: "4px",
      color: "#999DA3",
    },

    "& .MuiBottomNavigationAction-label": {
      fontFamily: "Pretendard",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      color: "#999DA3",
      lineHeight: "140%",
    },

    "& .Mui-selected": {
      fontFamily: "Pretendard",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "600",
      color: "#FF7700",
      lineHeight: "140%",
      animation: "colorChange 0.3s ease-in-out",
    },
  };
});
