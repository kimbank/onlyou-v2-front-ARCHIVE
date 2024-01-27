import { styled, Typography, Divider, Skeleton } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import EstimateResult from "./EstimateResult";

const Estimate = () => {
  return (
    <EstimateRoot>
      <Typography variant="subtitle2">예상 매칭 주기</Typography>
      <ResultBox>
        <EstimateResult />
      </ResultBox>
      <ExplainBox>
        <span className="title">
          <InfoOutlined sx={{ fontSize: "18px" }} />
          <p>예상 매칭 주기란?</p>
        </span>
        <p>
          ONLYou는 회원님의 인기도와 조건 설정에 따라 매칭 주기를 조절하고
          있습니다. 많은 분들께서 회원 님과 매칭받기를 원할 수록, 회원님의 조건
          상세 설정이 느슨할 수록, 매칭이 짧은 주기로 자주 이루어집니다.
        </p>
      </ExplainBox>
    </EstimateRoot>
  );
};

const EstimateRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const ResultBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  borderRadius: "6px",
  border: "1px solid #999DA3",
  padding: "12px 20px",

  "& .MuiDivider-root": {
    border: "1px solid #D3D6DB",
  },
});

const ExplainBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  color: "#5C5F63",

  fontSize: "12px",
  lineHeight: "140%",

  ".title": {
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    alignItems: "center",
    fontWeight: "600",
  },
});

export default Estimate;
