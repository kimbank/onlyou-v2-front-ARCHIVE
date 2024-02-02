"use client";

import CloseHeader from "@/components/Header/CloseHeader";
import { Box, Modal, styled, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AppearanceTab from "./tabs/Appearance";
import { DatingstyleTab } from "./tabs/Datingstyle";
import LifestyleTab from "./tabs/LifeStyle";
import PersonalityTab from "./tabs/Personality";
import { ValuesTab } from "./tabs/Values";

import { useMe } from "@/api/hooks/useMe";
import { putMe } from "@/api/putMe";
import Loading from "@/components/loading";


const UserDataAll = {
  data: {
    appearance: {
      // 외모
      fillStatus: 2,
      animalImage: null,
      doubleEyelid: null,
      bodyType: null,
      externalCharm: [],
      tattoo: null,
    },
    datingstyle: {
      // 연애 스타일
      fillStatus: 2,
      preferredDate: null,
      preferredContactMethod: null,
      loveInitiative: null,
      datingFrequency: null,
      contactStyle: null,
      conflictResolutionMethod: null,
    },
    lifestyle: {
      // 생활
      fillStatus: 2,
      workType: null,
      smoking: null,
      drinking: null,
      interest: [],
      numberDating: null,
      athleticLife: null,
      religion: null,
    },
    personality: {
      // 성격
      fillStatus: 2,
      extrovert_introvert: null,
      intuition_reality: null,
      emotion_reason: null,
      impromptu_plan: null,
      personalityCharm: [],
    },
    values: {
      marriageValues: null,
      oppositeSexFriendValues: null,
      politicalValues: null,
      consumptionValues: null,
      careerFamilyValues: null,
      childrenValues: null,
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
  const [priority, setPriority] = useState(initialPriority || 1);

  const { appearance, datingstyle, lifestyle, personality, values } =
    UserDataAll.data;
  const [valuesData, setValuesData] = useState(values);
  const [lifestyleData, setLifestyleData] = useState(lifestyle);
  const [personalityData, setPersonalityData] = useState(personality);
  const [datingstyleData, setDatingstyleData] = useState(datingstyle);
  const [appearanceData, setAppearanceData] = useState(appearance);

  const { me, isLoading, isError, mutate } = useMe('all');

  const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setPriority(newValue);
  };

  const handlePutMe = async (type: string, data: any) => {
    const res = await putMe(type, data);
    if (res.status >= 200 && res.status < 300) {
      mutate();
      // onClose();
    } else {
      alert("저장에 실패했습니다.\n문제가 지속적으로 발생하면 관리자에게 문의해주세요.");
    }
  };

  useEffect(() => {
    if (me && !isLoading && !isError) {
      setValuesData(me?.values);
      setLifestyleData(me?.lifestyle);
      setPersonalityData(me?.personality);
      setDatingstyleData(me?.datingstyle);
      setAppearanceData(me?.appearance);

    }
  }, [isLoading, isError, me]);

  return (
    <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
      <div id="page">
        {isLoading && <Loading />}
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
                onClose={() => handlePutMe("values", valuesData)}
              />
            </Box>
          )}
          {priority === 2 && (
            <Box>
              <LifestyleTab
                data={lifestyleData}
                setData={setLifestyleData}
                onClose={() => handlePutMe("lifestyle", lifestyleData)}
              />
            </Box>
          )}
          {priority === 3 && (
            <Box>
              <PersonalityTab
                data={personalityData}
                setData={setPersonalityData}
                onClose={() => handlePutMe("personality", personalityData)}
              />
            </Box>
          )}
          {priority === 4 && (
            <Box>
              <DatingstyleTab
                data={datingstyleData}
                setData={setDatingstyleData}
                onClose={() => handlePutMe("datingstyle", datingstyleData)}
              />
            </Box>
          )}
          {priority === 5 && (
            <Box>
              <AppearanceTab
                data={appearanceData}
                setData={setAppearanceData}
                onClose={() => handlePutMe("appearance", appearanceData)}
              />
            </Box>
          )}
          <br/><br/>
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
