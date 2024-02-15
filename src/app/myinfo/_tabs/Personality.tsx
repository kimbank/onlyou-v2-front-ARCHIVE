"use client";

import React from "react";
import BottomButton from "./BottomButton";
import OptionsList from "./OptionsList";

interface PersonalityData {
  fillStatus: number;
  extrovert_introvert: number | null;
  intuition_reality: number | null;
  emotion_reason: number | null;
  impromptu_plan: number | null;
  personalityCharm: number[];
}

interface Props {
  data: PersonalityData;
  setData: React.Dispatch<React.SetStateAction<PersonalityData>> | any;
  onClose: () => Promise<boolean>;
}

const PersonalityTab = ({ data, setData, onClose }: Props) => {
  const [initialData, setInitalData] = React.useState(data); // 초기 데이터 저장
  const [isDataModified, setIsDataModified] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  React.useEffect(() => {
    const dataChanged = JSON.stringify(data) !== JSON.stringify(initialData);
    setIsDataModified(dataChanged);
  }, [data, initialData]);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await onClose();
    if (res) {
      setInitalData(data);
    }
    setLoading(false);
  }

  return (
    <>
      <OptionsList optionName="personality" data={data} setData={setData} />
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={() => handleSubmit()}
      />
    </>
  );
};

export default PersonalityTab;
