
const root = {
  borderRadius: "99px",
  lineHeight: "100%",

  "&:disabled": {
    pointerEvent: "none",
    backgroundColor: "#999DA3",
    color: "#D3D6DB",
  },

  "&:hover": {
    backgroundColor: "#F16416",
    color: "#FFF",
    fontWeight: "600",
  },

  "& .MuiChip-label": {
    padding: "0px",
  },
}

export default root;
