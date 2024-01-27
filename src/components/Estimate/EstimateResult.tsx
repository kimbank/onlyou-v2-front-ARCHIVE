import { useState } from "react";
import { styled, Typography, Divider, Skeleton, Collapse } from "@mui/material";
import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";

const EstimateResult = ({
  collapse = false,
  open = true,
}: {
  collapse?: boolean;
  open?: boolean;
}) => {
  const [isEstimateOpen, setIsEstimateOpen] = useState<boolean>(open);

  function handleOpen() {
    if (!collapse) return;

    setIsEstimateOpen(!isEstimateOpen);
  }

  return (
    <ResultBox>
      {collapse && (
        <ExpandIcon onClick={() => handleOpen()}>
          {isEstimateOpen ? <ExpandMoreRounded /> : <ExpandLessRounded />}
        </ExpandIcon>
      )}
      <Collapse in={isEstimateOpen}>
        <div className="title">
          <Typography variant="subtitle2">
            예상 매칭 주기를 계산 중이에요
          </Typography>
          {/* <Skeleton animation="wave" width={"80%"} sx={{ bgcolor: 'grey.400' }} /> */}
        </div>
        <GapDiv />
        <Divider />
        <GapDiv />
      </Collapse>

      <div onClick={() => handleOpen()}>
        <Skeleton animation="wave" width={"60%"} />
      </div>
    </ResultBox>
  );
};

const ResultBox = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0px",
  width: "100%",

  "& .title": {
    display: "flex",
    flexDirection: "row",
    gap: "0px",
    alignItems: "center",
  },

  "& .MuiDivider-root": {
    border: "1px solid #D3D6DB",
  },
});

const ExpandIcon = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  alignItems: "center",
  cursor: "pointer",
});

const GapDiv = styled("div")({
  height: "12px",
  width: "100%",
});

export default EstimateResult;
