"use client";

import { useEffect, useState } from "react";
import BottomButton from "./BottomButton";
import OptionsList from "./OptionsList";

interface AppearanceData {
  fillStatus: number;
  animalImage: number;
  doubleEyelid: number;
  bodyType: number;
  tattoo: number;
  externalCharm: number[];
}

interface Props {
  data: AppearanceData;
  setData: React.Dispatch<React.SetStateAction<AppearanceData>>;
  onClose: () => void;
}

const AppearanceTab = ({ data, setData, onClose }: Props) => {
  const [initialData] = useState(data); // 초기 데이터 저장
  const [isDataModified, setIsDataModified] = useState(false);

  useEffect(() => {
    const dataChanged = JSON.stringify(data) !== JSON.stringify(initialData);
    setIsDataModified(dataChanged);
  }, [data, initialData, isDataModified]);
  return (
    <>
      <OptionsList optionName="appearance" data={data} setData={setData} />
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={onClose}
      />
    </>
  );
};

export default AppearanceTab;
