const root = {
  borderRadius: "99px",
  lineHeight: "100%",
  border: "none",

  "&:disabled": {
    pointerEvent: "none",
    backgroundColor: "#999DA3",
    color: "#D3D6DB",
  },

  "&:hover": {
    opacity: 0.95,
    boxShadow: "0px 5px 6.8px 0px rgba(0, 0, 0, 0.09)",
  },

  "& .MuiChip-label": {
    padding: "0px",
  },
};

export default root;
