"use client";

import React from "react";
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
  onClose: () => Promise<boolean>;
}

export const DatingstyleTab = ({
  data,
  setData,
  onClose,
}: DatingstyleTabProps) => {
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
      <OptionsList optionName="datingstyle" data={data} setData={setData} />
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={() => handleSubmit()}
      />
    </>
  );
};

export default DatingstyleTab;
