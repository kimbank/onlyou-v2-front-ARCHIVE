"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton"


const AppearanceAPI = {
  "statusCode": 200,
  "message": "Find Success",
  "data": {
      "nickname": "뱅크",
      "appearance": {
          "fillStatus": 2,
          "animalImage": 1,
          "doubleEyelid": 0,
          "bodyType": 0,
          "externalCharm": [
              0,
              3
          ],
          "tattoo": 0
      }
  }
}

interface AppearanceData {
  fillStatus: number | null;
  animalImage: number | null;
  doubleEyelid: number | null;
  bodyType: number | null;
  externalCharm: number[] | null;
  tattoo: number | null;
}

const AppearancePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [appearanceData, setAppearanceData] = useState<AppearanceData>({
    fillStatus: null,
    animalImage: null,
    doubleEyelid: null,
    bodyType: null,
    externalCharm: null,
    tattoo: null
  });
  const isInit = searchParams.get("type") === "init";
  const isCompleteFillData = Object.values(appearanceData).every((value) => value !== null);

  useEffect(() => {
    const { appearance } = AppearanceAPI.data;
    setAppearanceData(appearance);
  }, [])


  async function handleNext() {
    if (isInit) {
      router.push("/application/me/etc?type=init")
    }
  }

  async function handlePrev() {
    if (isInit) {
      router.push("/application/me/datingstyle?type=init")
    }
  }

  return (
    <>
      <OptionsList
        optionName="appearance"
        step={5}
        data={appearanceData}
        setData={setAppearanceData}
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

export default AppearancePage;
