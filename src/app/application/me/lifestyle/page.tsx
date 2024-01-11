"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton"


const LifestyleAPI = {
  "statusCode": 200,
  "message": "Find Success",
  "data": {
      "nickname": "뱅크",
      "lifestyle": {
          "fillStatus": 2,
          "workType": 0,
          "smoking": 0,
          "drinking": 0,
          "interest": [
              0,
              1,
              4,
              5
          ],
          "numberDating": 0,
          "athleticLife": 0,
          "religion": 0
      }
  }
}

interface LifestyleData {
  fillStatus: number | null;
  workType: number | null;
  smoking: number | null;
  drinking: number | null;
  interest: number[] | null;
  numberDating: number | null;
  athleticLife: number | null;
  religion: number | null;
}


const LifestylePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [lifestyleData, setLifestyleData] = useState<LifestyleData>({
    fillStatus: null,
    workType: null,
    smoking: null,
    drinking: null,
    interest: null,
    numberDating: null,
    athleticLife: null,
    religion: null
  });
  const isInit = searchParams.get("type") === "init";
  const isCompleteFillData = Object.values(lifestyleData).every((value) => value !== null);

  useEffect(() => {
    const { lifestyle } = LifestyleAPI.data;
    setLifestyleData(lifestyle);
  }, [])

  async function handleNext() {
    if (isInit) {
      router.push("/application/me/personality?type=init")
    }
  }

  async function handlePrev() {
    if (isInit) {
      router.push("/application/me/values?type=init")
    }
  }

  return (
    <>
      <OptionsList
        optionName="lifestyle"
        step={2}
        data={lifestyleData}
        setData={setLifestyleData}
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

export default LifestylePage;
