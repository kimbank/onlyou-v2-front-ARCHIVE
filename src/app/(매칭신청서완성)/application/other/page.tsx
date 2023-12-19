"use client";

import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import { InfoBox } from "@/app/components/Notification/InfoBox/InfoText";
import RDInput from "@/app/components/RDInput";
import RDRadioInput from "@/app/components/RDRadio/RDRadioInput";
import { Box, Container, Divider, Input, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { datingRadioGroups } from "../data/datingData";
import { otherRadioGroups } from "../data/otherData";
import OtherRoot from "./OtherRoot";
import DatingRoot from "./OtherRoot";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";

const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const radioGroups = useMemo(() => otherRadioGroups, []);

  const handleRadioChange = (groupTitle: string, value: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [groupTitle]: value,
    }));
    const nextIndex =
      radioGroups.findIndex((group) => group.title === groupTitle) + 1;
    if (nextIndex < radioGroups.length) {
      setActiveGroupIndex(nextIndex);
    }
  };
  const allGroupsSelected = radioGroups.every(
    (group) => selectedValues[group.title] != null
  );

  useEffect(() => {
    console.log("selectedValues", selectedValues);
    console.log("radioGroups", radioGroups);
    console.log("allGroupsSelected", allGroupsSelected);
  }, [selectedValues, radioGroups, allGroupsSelected]);

  return (
    <OtherRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">6/6</Typography>
        <Typography variant="h3">기타 정보 입력하기</Typography>
      </Box>
      {radioGroups.map((group, index) => (
        <Container
          key={group.title}
          className={
            index <= activeGroupIndex ? "other-radio visible" : "other-radio"
          }
        >
          <Typography variant="h6">{group.title}</Typography>
          <RDRadioInput
            onChange={(value: string) => handleRadioChange(group.title, value)}
            options={group.options}
          />
        </Container>
      ))}
      <Box className="kakao-box">
        <RDInput
          label="카카오톡 아이디"
          placeholder="카카오톡 아이디를 입력해주세요"
        />
        <Typography variant="body2">
          *매칭 성사 시, 카카오톡 아이디가 교환되어요.
          <br />꼭 카카오톡에서 카카오톡 아이디를 ‘검색 허용’으로 설정해 주세요.
        </Typography>

        <InfoBox align="left" textAlign="left" marginB="none" bgColor="primary">
          <Box className="info-box">
            <TipsAndUpdatesOutlinedIcon className="info-icon" />
            <Typography variant="h5">카카오톡 아이디 찾기</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2">
            카카오톡 실행 &gt; 더보기 &gt; 설정 &gt; 프로필관리 &gt; 카카오톡 ID
          </Typography>
        </InfoBox>
        <InfoBox
          align="left"
          textAlign="left"
          marginB="none"
          bgColor="secondary"
        >
          <Box className="info-box">
            <TipsAndUpdatesOutlinedIcon className="info-icon" />
            <Typography variant="h5">카카오톡 검색 허용하기</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2">
            카카오톡 실행 &gt; 더보기 &gt; 설정 &gt; 프로필관리 &gt; 카카오톡 ID
            <br />
            &gt; ID 검색 허용
          </Typography>
        </InfoBox>
      </Box>
      <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="LetterSelect/"
        nextHref="life/"
        nextType="button"
        checkedStates={allGroupsSelected}
        tips
      />
    </OtherRoot>
  );
};
export default Index;
