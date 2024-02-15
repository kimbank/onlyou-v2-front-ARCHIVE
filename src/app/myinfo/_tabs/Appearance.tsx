"use client";

import React from "react";
import BottomButton from "./BottomButton";
import OptionsList from "./OptionsList";

interface AppearanceData {
  fillStatus: number;
  animalImage: number | null;
  doubleEyelid: number | null;
  bodyType: number | null;
  tattoo: number | null;
  externalCharm: number[];
}

interface Props {
  data: AppearanceData;
  setData: React.Dispatch<React.SetStateAction<AppearanceData>> | any;
  onClose: () => Promise<boolean>;
}

const AppearanceTab = ({ data, setData, onClose }: Props) => {
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
      <OptionsList optionName="appearance" data={data} setData={setData} />
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={() => handleSubmit()}
      />
    </>
  );
};

export default AppearanceTab;
