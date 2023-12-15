"use client";

import { RDStepNavButton } from "@/app/components/Button/RDStepButton";
import { InfoText } from "@/app/components/Notification/InfoText/InfoText";
import RDRadioInput from "@/app/components/RDRadio/RDRadioInput";
import { Container, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import ValueRoot from "./ValueRoot";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroup {
  title: string;
  options: RadioOption[];
}

const Index = () => {
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const radioGroups: RadioGroup[] = useMemo(
    () => [
      {
        title: "결혼 가치관",
        options: [
          { value: "0", label: "비혼주의에요" },
          { value: "1", label: "결혼은 원하지만 아직은 이르다고 생각해요" },
          { value: "2", label: "사랑한다면 3년 내로 결혼도 생각할 것 같아요" },
        ],
      },
      {
        title: "이성친구 가치관",
        options: [
          { value: "0", label: "친한 친구라면 술, 영화도 괜찮아요" },
          { value: "1", label: "식사, 커피 외에는 이해하기 어려워요" },
          {
            value: "2",
            label: "친한 친구라도 단둘이 만나는 것은 자제해야 해요",
          },
        ],
      },
      {
        title: "정치 성향",
        options: [
          { value: "0", label: "관심 없어요" },
          { value: "1", label: "진보에 가까워요" },
          { value: "2", label: "보수에 가까워요" },
          { value: "3", label: "중도에 가까워요" },
        ],
      },
      {
        title: "소비 가치관",
        options: [
          {
            value: "0",
            label: "조금 부족하더라도 편안한 미래를 위해 절약하고 싶어요",
          },
          {
            value: "1",
            label: "지금 아니면 못하는 것들에 충분히 투자하고 싶어요",
          },
        ],
      },
      {
        title: "커리어와 가정 가치관",
        options: [
          {
            value: "0",
            label: "두 사람 모두 가정이 커리어보다 우선이었으면 해요",
          },
          {
            value: "1",
            label: "두 사람 중 한 사람은 커리어보다 가정에 우선이었으면 해요",
          },
          {
            value: "2",
            label: "두 사람 모두 커리어가 가정보다 우선이었으면 해요",
          },
        ],
      },
      {
        title: "자녀 가치관",
        options: [
          { value: "0", label: "아직 모르겠어요" },
          { value: "1", label: "원하지 않아요" },
          { value: "2", label: "미래에 갖고 싶어요" },
        ],
      },
    ],
    []
  );

  const handleRadioChange = (groupTitle: string, value: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [groupTitle]: value,
    }));
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
    <ValueRoot>
      <Typography variant="subtitle2">1/6</Typography>
      <Typography variant="h3" sx={{ color: "black", fontWeight: "bold" }}>
        가치관 정보 입력하기
      </Typography>

      {radioGroups.map((group, index) => (
        <Container className="value-radio" key={index}>
          <Typography variant="h6">
            {index + 1}.{group.title}
          </Typography>
          <RDRadioInput
            onChange={(value: string) => handleRadioChange(group.title, value)}
            options={group.options}
          />
        </Container>
      ))}
      <RDStepNavButton
        prevText="이전"
        nextText="다음"
        prevHref="LetterSelect/"
        nextHref="LetterWhite/"
        nextType="button"
        checkedStates={allGroupsSelected}
      />
    </ValueRoot>
  );
};
export default Index;
