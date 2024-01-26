"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton";
import useMe from "@/api/hooks/useMe";

interface AppearanceData {
  // fillStatus: number | null;
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
    // fillStatus: null,
    animalImage: null,
    doubleEyelid: null,
    bodyType: null,
    externalCharm: null,
    tattoo: null,
  });
  const isInit = searchParams.get("type") === "init";
  const isCompleteFillData = Object.values(appearanceData).every(
    (value) => value !== null
  );

  const { me, isLoading, isError } = useMe("appearance");

  useEffect(() => {
    if (!isLoading && !isError) {
      const { appearance } = me;

      const updatedAppearanceData: AppearanceData = Object.keys(
        appearance
      ).reduce(
        (result, key) => {
          if (appearance[key] !== null) {
            result[key as keyof AppearanceData] = appearance[key];
          }
          return result;
        },
        { ...appearanceData } as AppearanceData
      );

      setAppearanceData(updatedAppearanceData);
      console.log("me data", me);
    }
  }, [me, isLoading, isError]);

  async function handleNext() {
    if (isInit) {
      router.push("/application/me/etc?type=init");
    }
  }

  async function handlePrev() {
    if (isInit) {
      router.push("/application/me/datingstyle?type=init");
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
