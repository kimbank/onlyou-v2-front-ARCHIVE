"use client";

import { useEffect, useState } from "react";
import BottomButton from "./BottomButton";
import OptionsList from "./OptionsList";

interface LifestyleData {
  fillStatus: number;
  workType: number;
  smoking: number;
  drinking: number;
  interest: number[];
  numberDating: number;
  athleticLife: number;
  religion: number;
}

interface Props {
  data: LifestyleData;
  setData: React.Dispatch<React.SetStateAction<LifestyleData>>;
  onClose: () => void;
}

const LifestyleTab = ({ data, setData, onClose }: Props) => {
  const [initialData] = useState(data); // 초기 데이터 저장
  const [isDataModified, setIsDataModified] = useState(false);

  useEffect(() => {
    const dataChanged = JSON.stringify(data) !== JSON.stringify(initialData);
    setIsDataModified(dataChanged);
  }, [data, initialData, isDataModified]);
  return (
    <>
      <OptionsList optionName="lifestyle" data={data} setData={setData} />
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={onClose}
      />
    </>
  );
};

export default LifestyleTab;
