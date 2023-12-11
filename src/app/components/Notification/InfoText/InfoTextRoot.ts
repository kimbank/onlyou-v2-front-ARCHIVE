import { styled } from "@mui/material";

interface infoTextProps {
  shadow: boolean;
}

export default styled("div")<infoTextProps>(({ theme, shadow }) => {
  return {
    ".info-text-button": {
      borderRadius: "8px",
      // height: '33px',  // 수정: 230926 높이가 정해져 있어 Typograpy가 위 아래로 삐져 나오는 문제 발생.
      padding: "8px 12px",
      backgroundColor: "#F7F4F2",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: !shadow && "none", // initial, inherit, none, unset
      width: "100%",
    },
    ".info-icon": {
      marginRight: 1,
      color: "#FF7700",
    },
  };
});
