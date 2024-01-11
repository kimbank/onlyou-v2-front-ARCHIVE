"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton"


const ValuesAPI = {
  "statusCode": 200,
  "message": "Find Success",
  "data": {
      "nickname": "뱅크",
      "values": {
          "fillStatus": 2,
          "marriageValues": 0,
          "oppositeSexFriendValues": 0,
          "politicalValues": 0,
          "consumptionValues": 0,
          "careerFamilyValues": 0,
          "childrenValues": 0
      }
  }
}

interface ValuesData {
  fillStatus: number | null;
  marriageValues: number | null;
  oppositeSexFriendValues: number | null;
  politicalValues: number | null;
  consumptionValues: number | null;
  careerFamilyValues: number | null;
  childrenValues: number | null;
}

const ValuesPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [valuesData, setValuesData] = useState<ValuesData>({
    fillStatus: null,
    marriageValues: null,
    oppositeSexFriendValues: null,
    politicalValues: null,
    consumptionValues: null,
    careerFamilyValues: null,
    childrenValues: null
  });
  const isInit = searchParams.get("type") === "init";
  const isCompleteFillData = Object.values(valuesData).every((value) => value !== null);

  useEffect(() => {
    const { values } = ValuesAPI.data;
    setValuesData(values);
  }, [])

  async function handleNext() {
    if (isInit) {
      router.push("/application/me/lifestyle?type=init")
    }
  }

  async function handlePrev() {
    if (isInit) {
      router.push("/matching")
    }
  }

  return (
    <>
      <OptionsList
        optionName="values"
        step={1}
        data={valuesData}
        setData={setValuesData}
      />
      <BottomButton
        onNext={handleNext}
        onPrev={handlePrev}
        nextText={isInit ? "다음" : "저장하기"}
        isNextDisabled={!isCompleteFillData}
        isPrevDisabled={!isInit}
      />
    </>
  );
};

export default ValuesPage;
