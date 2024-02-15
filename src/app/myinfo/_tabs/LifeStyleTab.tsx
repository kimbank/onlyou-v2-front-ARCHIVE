"use client";

import React from "react";
import BottomButton from "./BottomButton";
import OptionsList from "./OptionsList";

import Loading from "@/components/loading";


interface LifestyleData {
  fillStatus: number;
  workType: number | null;
  smoking: number | null;
  drinking: number | null;
  interest: number[];
  numberDating: number | null;
  athleticLife: number | null;
  religion: number | null;
}

interface Props {
  data: LifestyleData;
  setData: React.Dispatch<React.SetStateAction<LifestyleData>> | any;
  onClose: () => Promise<boolean>;
}

const LifestyleTab = ({ data, setData, onClose }: Props) => {
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
      {loading && <Loading />}
      <OptionsList optionName="lifestyle" data={data} setData={setData} />
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={() => handleSubmit()}
      />
    </>
  );
};

export default LifestyleTab;
