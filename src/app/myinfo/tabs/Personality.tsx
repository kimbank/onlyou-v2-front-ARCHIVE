"use client";

import { useEffect, useState } from "react";
import BottomButton from "./BottomButton";
import OptionsList from "./OptionsList";

interface PersonalityData {
  fillStatus: number;
  extrovert_introvert: number;
  intuition_reality: number;
  emotion_reason: number;
  impromptu_plan: number;
  personalityCharm: number[];
}

interface Props {
  data: PersonalityData;
  setData: React.Dispatch<React.SetStateAction<PersonalityData>>;
  onClose: () => void;
}

const PersonalityTab = ({ data, setData, onClose }: Props) => {
  const [initialData] = useState(data); // 초기 데이터 저장
  const [isDataModified, setIsDataModified] = useState(false);

  useEffect(() => {
    const dataChanged = JSON.stringify(data) !== JSON.stringify(initialData);
    setIsDataModified(dataChanged);
  }, [data, initialData, isDataModified]);
  return (
    <>
      <OptionsList optionName="personality" data={data} setData={setData} />
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={onClose}
      />
    </>
  );
};

export default PersonalityTab;
