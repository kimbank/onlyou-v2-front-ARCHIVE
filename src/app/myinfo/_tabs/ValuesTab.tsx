"use client";

import React from "react";
import BottomButton from "./BottomButton";
import OptionsList from "./OptionsList";

import Loading from "@/components/loading";


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
  onClose: () => Promise<boolean>;
}

export const ValuesTab = ({ data, setData, onClose }: ValuesTabProps) => {
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
      <OptionsList optionName="values" data={data} setData={setData} />
      <BottomButton
        saveText="저장하기"
        isSaveDisabled={!isDataModified}
        onClose={() => handleSubmit()}
      />
    </>
  );
};

export default ValuesTab;
