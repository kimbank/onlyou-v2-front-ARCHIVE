"use client";

import { useEffect, useState } from "react";
import BottomButton from "./BottomButton";
import OptionsList from "./OptionsList";

interface ValuesData {
  marriageValues: number | null;
  oppositeSexFriendValues: number | null;
  politicalValues: number | null;
  consumptionValues: number | null;
  careerFamilyValues: number | null;
  childrenValues: number | null;
}

interface ValuesTabProps {
  data: ValuesData;
  setData: React.Dispatch<React.SetStateAction<ValuesData>> | any;
  onClose: () => void;
}

export const ValuesTab = ({ data, setData, onClose }: ValuesTabProps) => {
  const [initialData] = useState(data); // 초기 데이터 저장
  const [isDataModified, setIsDataModified] = useState(false);

  useEffect(() => {
    const dataChanged = JSON.stringify(data) !== JSON.stringify(initialData);
    setIsDataModified(dataChanged);
  }, [data, initialData, isDataModified]);

  return (
    <>
      <OptionsList optionName="values" data={data} setData={setData} />
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={onClose}
      />
    </>
  );
};
