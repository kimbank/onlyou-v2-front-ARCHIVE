"use client";

import { useEffect, useState } from "react";
import BottomButton from "./BottomButton";
import OptionsList from "./OptionsList";

interface DatingstyleData {
  fillStatus: number;
  preferredDate: number | null;
  preferredContactMethod: number | null;
  loveInitiative: number | null;
  datingFrequency: number | null;
  contactStyle: number | null;
  conflictResolutionMethod: number | null;
}

interface DatingstyleTabProps {
  data: DatingstyleData;
  setData: React.Dispatch<React.SetStateAction<DatingstyleData>> | any;
  onClose: () => void;
}

export const DatingstyleTab = ({
  data,
  setData,
  onClose,
}: DatingstyleTabProps) => {
  const [initialData] = useState(data); // 초기 데이터 저장
  const [isDataModified, setIsDataModified] = useState(false);

  useEffect(() => {
    const dataChanged = JSON.stringify(data) !== JSON.stringify(initialData);
    setIsDataModified(dataChanged);
  }, [data, initialData, isDataModified]);
  return (
    <>
      <OptionsList optionName="datingstyle" data={data} setData={setData} />
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={onClose}
      />
    </>
  );
};
