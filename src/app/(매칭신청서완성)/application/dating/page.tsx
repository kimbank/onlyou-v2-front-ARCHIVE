"use client";

import { RDStepNavButton } from "@/components/Button/RDStepButton";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";
import { Box, Container, Typography , Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { datingRadioGroups } from "../data/datingData";
import DatingRoot from "./DatingRoot";
import BottomButton from "@/components/BottomButton/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const radioGroups = useMemo(() => datingRadioGroups, []);
     const router = useRouter();

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
            router.push("other/");
          } else {
            alert("모든 그룹을 선택하세요.");
          }
        };

  return (
    <DatingRoot>
      <Box className="title-box">
        <Typography variant="subtitle2">5/6</Typography>
        <Typography variant="h1">연애스타일 정보 입력하기</Typography>
      </Box>
      {radioGroups.map((group, index) => (
        <Container
          key={group.title}
          className={
            index <= activeGroupIndex ? "dating-radio visible" : "dating-radio"
          }
        >
          <Typography variant="subtitle2">
            {index + 1}.{group.title}
          </Typography>
          <RDRadioInput
            onChange={(value: string) => handleRadioChange(group.title, value)}
            options={group.options}
          />
        </Container>
      ))}
      <BottomButton sx={{ gap: "18px" }}>
        <Link href={"/matching"} style={{ width: "100%" }} passHref>
          <Button variant="outlined">이전</Button>
        </Link>

        <Button onClick={handleNext} variant="contained" size="large" fullWidth>
          다음
        </Button>
      </BottomButton>
      {/* <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="appearance/"
        nextHref="other/"
        nextType="button"
        checkedStates={allGroupsSelected}
      /> */}
    </DatingRoot>
  );
};
export default Index;
