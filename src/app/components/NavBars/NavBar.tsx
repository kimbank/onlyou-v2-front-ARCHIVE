import { BottomNavigation } from "@mui/material";

export default function LabelBottomNavigation({ recent }: any) {
  return (
    <BottomNavigation
      //   value={value}
      //   onChange={handleChange}
      sx={{
        width: "100%",
        height: "64px",
        borderRadius: "24px 24px 0 0",
        borderTop: "2px solid #fff",
        boxShadow: "1px -2px 12px -4px rgba(0, 0, 0, 0.25)",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: "480px",

        transform: "translate(-50%, 0)",
      }}
    >
      이전단계
    </BottomNavigation>
  );
}
