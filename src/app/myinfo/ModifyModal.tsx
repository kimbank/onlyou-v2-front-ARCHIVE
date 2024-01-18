import colors from "@/assets/theme/base/colors";
import CloseHeader from "@/components/Header/CloseHeader";
import CloseIcon from "@mui/icons-material/CloseRounded";
import { Box, Modal, styled, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AppearanceTab from "./tabs/Appearance";
import { DatingstyleTab } from "./tabs/Datingstyle";
import LifestyleTab from "./tabs/LifeStyle";
import PersonalityTab from "./tabs/Personality";
import { ValuesTab } from "./tabs/Value";

const UserDataAll = {
  statusCode: 200,
  message: "Find Success",
  data: {
    nickname: "뱅크",
    appearance: {
      // 외모
      fillStatus: 2,
      animalImage: 1,
      doubleEyelid: 0,
      bodyType: 0,
      externalCharm: [0, 3],
      tattoo: 0,
    },
    datingstyle: {
      // 연애 스타일
      fillStatus: 2,
      preferredDate: 0,
      preferredContactMethod: 0,
      loveInitiative: 0,
      datingFrequency: 0,
      contactStyle: 0,
      conflictResolutionMethod: 0,
    },
    lifestyle: {
      // 생활
      fillStatus: 2,
      workType: 0,
      smoking: 0,
      drinking: 0,
      interest: [0, 1, 4, 5],
      numberDating: 0,
      athleticLife: 0,
      religion: 0,
    },
    personality: {
      // 성격
      fillStatus: 2,
      extrovert_introvert: 0,
      intuition_reality: 0,
      emotion_reason: 0,
      impromptu_plan: 0,
      personalityCharm: [3, 4],
    },
    values: {
      // 가치관
      fillStatus: 2,
      marriageValues: 0,
      oppositeSexFriendValues: 0,
      politicalValues: 0,
      consumptionValues: 0,
      careerFamilyValues: 0,
      childrenValues: 0,
    },
  },
};

interface ModifyModalProps {
  open: boolean;
  initialPriority: number;
  onClose: () => void;
}

export const ModifyModal = ({
  open,
  onClose,
  initialPriority,
}: ModifyModalProps) => {
  const [priority, setPriority] = useState(initialPriority);

  const { appearance, datingstyle, lifestyle, personality, values } =
    UserDataAll.data;
  const [valuesData, setValuesData] = useState(values);
  const [lifestyleData, setLifestyleData] = useState(lifestyle);
  const [personalityData, setPersonalityData] = useState(personality);
  const [datingstyleData, setDatingstyleData] = useState(datingstyle);
  const [appearanceData, setAppearanceData] = useState(appearance);

  const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setPriority(newValue);
  };

  useEffect(() => {
    setPriority(initialPriority);
  }, [initialPriority]);
  return (
    <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
      <div id="page">
        <CloseHeader href="/myinfo" onClose={onClose} />
        <Root id="content">
          <Typography variant="h1">내 정보 수정하기</Typography>
          <Tabs
            variant="fullWidth"
            value={priority}
            onChange={handleTabsChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="가치관" value={1} />
            <Tab label="생활" value={2} />
            <Tab label="성격" value={3} />
            <Tab label="연애" value={4} />
            <Tab label="외모" value={5} />
          </Tabs>
          {priority === 1 && (
            <Box>
              <ValuesTab
                data={valuesData}
                setData={setValuesData}
                onClose={onClose}
              />
            </Box>
          )}
          {priority === 2 && (
            <Box>
              <LifestyleTab
                data={lifestyleData}
                setData={setLifestyleData}
                onClose={onClose}
              />
            </Box>
          )}
          {priority === 3 && (
            <Box>
              <PersonalityTab
                data={personalityData}
                setData={setPersonalityData}
                onClose={onClose}
              />
            </Box>
          )}
          {priority === 4 && (
            <Box>
              <DatingstyleTab
                data={datingstyleData}
                setData={setDatingstyleData}
                onClose={onClose}
              />
            </Box>
          )}
          {priority === 5 && (
            <Box>
              <AppearanceTab
                data={appearanceData}
                setData={setAppearanceData}
                onClose={onClose}
              />
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
