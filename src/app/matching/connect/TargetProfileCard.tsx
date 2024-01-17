import colors from "@/assets/theme/base/colors";
import CloseIcon from "@mui/icons-material/CloseRounded";
import { Box, Modal, styled, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { ConsistData } from "./Connect";
import { InfoTab } from "./tabs/InfoTab";
import { LetterTab } from "./tabs/LetterTab";

interface TargetProfileCardProps {
  open: boolean;
  onClose: () => void;
  data: ConsistData;
}

export const TargetProfileCard = ({
  open,
  onClose,
  data,
}: TargetProfileCardProps) => {
  const [priority, setPriority] = useState(1);
  const titles = ["편지가 도착했어요", "자세한 정보에요", "사진이에요"];

  const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setPriority(newValue);
  };
  return (
    <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
      <div id="page">
        <Root id="content">
          <CloseIcon className="close-button" onClick={onClose} />
          <Typography variant="h1">
            {data?.nickname}님의 <br />
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
          {priority === 1 && <LetterTab data={data} />}
          {priority === 2 && <InfoTab data={data} />}
          {priority === 3 && (
            <Box className="picture-box">
              <Box className="picture"></Box>
              <Box className="picture"></Box>
            </Box>
          )}
        </Root>
      </div>
    </Modal>
  );
};
const Root = styled(Box)({
  height: "100vh",
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

  ".caption": {
    marginBottom: "16px",
  },
  ".picture-box": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  ".picture": {
    height: "200px",
    backgroundColor: "#484848",
    borderRadius: "6px",
  },
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
