import colors from "@/assets/theme/base/colors";
import CloseIcon from "@mui/icons-material/CloseRounded";
import { Box, Modal, styled, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";


const UserDataAll = {
  "statusCode": 200,
  "message": "Find Success",
  "data": {
      "nickname": "뱅크",
      "appearance": { // 외모
          "fillStatus": 2,
          "animalImage": 1,
          "doubleEyelid": 0,
          "bodyType": 0,
          "externalCharm": [
              0,
              3
          ],
          "tattoo": 0
      },
      "datingstyle": { // 연애 스타일
          "fillStatus": 2,
          "preferredDate": 0,
          "preferredContactMethod": 0,
          "loveInitiative": 0,
          "datingFrequency": 0,
          "contactStyle": 0,
          "conflictResolutionMethod": 0
      },
      "lifestyle": { // 생활
          "fillStatus": 2,
          "workType": 0,
          "smoking": 0,
          "drinking": 0,
          "interest": [
              0,
              1,
              4,
              5
          ],
          "numberDating": 0,
          "athleticLife": 0,
          "religion": 0
      },
      "personality": { // 성격
          "fillStatus": 2,
          "extrovert_introvert": 0,
          "intuition_reality": 0,
          "emotion_reason": 0,
          "impromptu_plan": 0,
          "personalityCharm": [
              3,
              4
          ]
      },
      "values": { // 가치관
        "fillStatus": 2,
        "marriageValues": 0,
        "oppositeSexFriendValues": 0,
        "politicalValues": 0,
        'consumptionValues': 0,
        "careerFamilyValues": 0,
        "childrenValues": 0,
      },
  }
}

interface ModifyModalProps {
  open: boolean;
  onClose: () => void;
}

export const ModifyModal = ({ open, onClose }: ModifyModalProps) => {
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
          {priority === 1 && <Box></Box>}
          {priority === 2 && <Box></Box>}
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
