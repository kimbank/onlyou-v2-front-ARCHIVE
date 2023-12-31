"use client";

import { SubmitDrawer } from "@/components/Drawer/SubmitDrawer/SubmitDrawer";
import { InfoBox } from "@/components/Notification/InfoBox/InfoBox";
import RDInput from "@/components/RDInput";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { Box, Container, Divider, Typography,Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { otherRadioGroups } from "../../../(매칭신청서완성)/application/data/otherData";
import OtherRoot from "./OtherRoot";
import BottomButton from "@/components/BottomButton/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
      const router = useRouter();

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

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

        const handleNext = () => {
          if (allGroupsSelected) {
           handleOpenDrawer()
          } else {
            alert("모든 그룹을 선택하세요.");
          }
        };

  return (
    <OtherRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">
          <strong>6</strong>/6
        </Typography>
        <Typography variant="h1">기타 정보 입력하기</Typography>
      </Box>
      {radioGroups.map((group, index) => (
        <Container
          key={group.title}
          className={
            index <= activeGroupIndex ? "other-radio visible" : "other-radio"
          }
        >
          <Typography variant="subtitle2">{group.title}</Typography>
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
            <Typography variant="subtitle2">카카오톡 아이디 찾기</Typography>
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
            <Typography variant="subtitle2">카카오톡 검색 허용하기</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2">
            카카오톡 실행 &gt; 더보기 &gt; 설정 &gt; 프로필관리 &gt; 카카오톡 ID
            <br />
            &gt; ID 검색 허용
          </Typography>
        </InfoBox>
      </Box>
      <BottomButton sx={{ gap: "18px" }}>
        <Link href={"/matching"} style={{ width: "100%" }} passHref>
          <Button size="large" variant="outlined">
            이전
          </Button>
        </Link>

        <Button size="large" onClick={handleNext} variant="contained" fullWidth>
          다음
        </Button>
      </BottomButton>
      {/* <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="dating/"
        nextType="button"
        checkedStates={allGroupsSelected}
        onClick={handleOpenDrawer}
        tips
      /> */}
      <SubmitDrawer
        nextHref="/apply/targeting"
        open={drawerOpen}
        onClose={handleCloseDrawer}
      />
    </OtherRoot>
  );
};
export default Index;
