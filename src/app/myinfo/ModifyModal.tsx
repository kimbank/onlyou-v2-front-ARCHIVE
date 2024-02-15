"use client";

import React from "react";
import {
  Box,
  Modal,
  styled,
  Tab,
  Tabs,
  Typography
} from "@mui/material";

import AppearanceTab from "./_tabs/AppearanceTab";
import DatingstyleTab from "./_tabs/DatingstyleTab";
import LifestyleTab from "./_tabs/LifeStyleTab";
import PersonalityTab from "./_tabs/PersonalityTab";
import ValuesTab from "./_tabs/ValuesTab";
import EtcTab from "./_tabs/EtcTab";

import { useMe } from "@/api/hooks/useMe";
import { putMe } from "@/api/putMe";
import CloseHeader from "@/components/Header/CloseHeader";
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
    etc: {
      kakaoId: null,
      informationBeforeMeeting: null,
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
  const [priority, setPriority] = React.useState(initialPriority || 0);

  const { appearance, datingstyle, lifestyle, personality, values } =
    UserDataAll.data;
  const [valuesData, setValuesData] = React.useState(values);
  const [lifestyleData, setLifestyleData] = React.useState(lifestyle);
  const [personalityData, setPersonalityData] = React.useState(personality);
  const [datingstyleData, setDatingstyleData] = React.useState(datingstyle);
  const [appearanceData, setAppearanceData] = React.useState(appearance);
  const [etcData, setEtcData] = React.useState(UserDataAll.data.etc);

  const { me, isLoading, isError, mutate } = useMe('all');

  const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setPriority(newValue);
  };

  const handlePutMe = async (type: string, data: any) => {
    const res = await putMe(type, data);
    if (res.status >= 200 && res.status < 300) {
      mutate();
      return true
    } else {
      alert("저장에 실패했습니다.\n문제가 지속적으로 발생하면 관리자에게 문의해주세요.");
      return false
    }
  };

  React.useEffect(() => {
    if (me && !isLoading && !isError) {
      setValuesData(me?.values);
      setLifestyleData(me?.lifestyle);
      setPersonalityData(me?.personality);
      setDatingstyleData(me?.datingstyle);
      setAppearanceData(me?.appearance);
      setEtcData(me?.etc);
    }
  }, [isLoading]);

  return (
    <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
      <div id="page">
        {isLoading && <Loading />}
        <CloseHeader onClose={onClose} />
        <Root id="content">
          <Typography variant="h1">내 정보 수정하기</Typography>
          <Tabs
            variant="fullWidth"
            value={priority}
            onChange={handleTabsChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="기본" value={0} />
            <Tab label="가치관" value={1} />
            <Tab label="생활" value={2} />
            <Tab label="성격" value={3} />
            <Tab label="연애" value={4} />
            <Tab label="외모" value={5} />
            <Tab label="기타" value={6} />
          </Tabs>
          {priority === 0 && (
            <Box>
              <Typography variant="h2" className="caption">
                기본 정보
              </Typography>
              <Box className="picture-box">
                <div className="picture"></div>
                <div className="picture"></div>
              </Box>
            </Box>
          )}
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
          {priority === 6 && (
            <Box>
              <EtcTab
                data={etcData}
                setData={setEtcData}
                onClose={() => handlePutMe("etc", etcData)}
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
