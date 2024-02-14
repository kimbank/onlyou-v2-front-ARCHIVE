import { Backdrop, CircularProgress } from "@mui/material";

const SkeletonPage = () => {

  return (
    <div className="skeleton-page">
      <Backdrop
        open={true}
        unselectable="on"
        sx={{
          zIndex: 3000,
          color: "#fff",
          backdropFilter: "blur(4px)",
          backgroundColor:'rgba(0,0,30,0.4)'
        }}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  )
}

export default SkeletonPage;
