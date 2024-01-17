import CloseHeader from "@/components/Header/CloseHeader";
import EmptyHeader from "@/components/Header/EmptyHeader";
import { Box, Modal, styled, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/CloseRounded";
import { ConsistData } from "./Connect";

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
  data: ConsistData;
}

export const ProfileModal = ({ open, onClose, data }: ProfileModalProps) => {
  const [priority, setPriority] = useState(1);
  const titles = ["편지가 도착했어요", "자세한 정보에요", "사진이에요"];

  const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setPriority(newValue);
  };
  return (
    <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
      <div id="page" style={{ height: "100vh" }}>
        <Root id="content">
          <CloseIcon className="close-button" onClick={onClose} />
          <Typography variant="h1">
            ddd님의 <br />
            {titles[priority - 1]}
          </Typography>
          <Tabs
            variant="fullWidth"
            value={priority}
            onChange={handleTabsChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="편지" value={1} />
            <Tab label="상세정보" value={2} />
            <Tab label="사진" value={3} />
          </Tabs>
          {priority === 1 && (
            <Box>
              {data.letterOptions.map((letter, index) => (
                <Box key={index}>
                  <Typography variant="h5">{letter.title}</Typography>
                  <Typography>{letter.description}</Typography>
                </Box>
              ))}
            </Box>
          )}
          {priority === 2 && (
            <Box>
              {data.targetingOptions.map((option, index) => (
                <Box key={index}>
                  <Typography variant="h6">
                    직업 유형: {option.jobType}
                  </Typography>
                  <Typography variant="h6">
                    거주지: {option.residence}
                  </Typography>
                  <Typography variant="h6">
                    생년월일: {option.dateBirth}
                  </Typography>
                  {/* 'me'와 'target'의 우선순위 조건 렌더링 */}
                  <Box>
                    <Typography variant="subtitle1">나의 우선순위</Typography>
                    <Typography>
                      1순위: {option.me.firstPriority.label} -{" "}
                      {option.me.firstPriority.values.join(", ")}
                    </Typography>
                    <Typography>
                      2순위: {option.me.secondPriority.label} -{" "}
                      {option.me.secondPriority.values.join(", ")}
                    </Typography>
                    <Typography>
                      3순위: {option.me.thirdPriority.label} -{" "}
                      {option.me.thirdPriority.values.join(", ")}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">
                      상대방의 우선순위
                    </Typography>
                    <Typography>
                      1순위:
                      {option.target.firstPriority.label} -{" "}
                      {option.target.firstPriority.values.join(", ")}
                    </Typography>
                    <Typography>
                      2순위: {option.target.secondPriority.label} -{" "}
                      {option.target.secondPriority.values.join(", ")}
                    </Typography>
                    <Typography>
                      3순위: {option.target.thirdPriority.label} -{" "}
                      {option.target.thirdPriority.values.join(", ")}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
          {priority === 3 && <Box>ccc</Box>}
        </Root>
      </div>
    </Modal>
  );
};
const Root = styled(Box)({
  height: "calc(100vh - 146px)",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  overflowX: "hidden",
  overflowY: "scroll",
  paddingBottom: "36px",
  position: "relative",

  ".close-button": {
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
    marginTop: "24px",
    marginRight: "24px",
  },
  ".title-box": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  ".category-box": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  ".options-box": {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  // "& .MuiButton-sizeMedium": {
  //   fontSize: "14px",
  //   padding: "8px 12px",
  // },

  ".btn-prior-selected": {
    backgroundColor: "#fff !important",
    color: "#f70 !important",
    fontWeight: "700",
    border: "1px solid #F70",
  },

  "& .MuiTabs-root": {
    width: "calc(100% + 24*2)",
    margin: "0 -24px",
    overflow: "unset",
  },

  "& .MuiTab-root": {
    fontWeight: "400",
    borderBottom: "1px solid #D3D6DB",
  },

  "& .Mui-selected": {
    fontWeight: "700",
  },

  "& .MuiTabs-indicator": {
    height: "4px",
  },
});
