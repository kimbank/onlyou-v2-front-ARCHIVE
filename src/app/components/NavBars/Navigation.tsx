import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { usePathname } from "next/navigation";

export default function Navigation({ recent }: any) {
  const pathname = usePathname();
  const [value, setValue] = React.useState(pathname.split("/")[1]);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{
        width: "100%",
        height: "64px",
        borderTop: "1px solid #B2B0AE",
        position: "fixed",
        bottom: 0,
        right: 0,
        left: "50%",
        maxWidth: "480px",
        transform: "translate(-50%, 0)",
      }}
    >
      <BottomNavigationAction
        href="/matching"
        label="매칭"
        value="matching"
        icon={<FavoriteIcon />}
        showLabel
      />
      <BottomNavigationAction
        href="/agreement"
        label="성사"
        value="agreement"
        icon={<EmailIcon />}
        showLabel
      />
      <BottomNavigationAction
        href="/board"
        label="게시판"
        value="board"
        icon={<AssignmentIcon />}
        showLabel
      />
      <BottomNavigationAction
        href="/my_info"
        label="내 정보"
        value="my_info"
        icon={<AccountCircleIcon />}
        showLabel
      />
    </BottomNavigation>
  );
}
