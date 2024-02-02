"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton";
import useMe from "@/api/hooks/useMe";
import putMe from "@/api/putMe";
import Loading from "@/components/loading";


interface AppearanceData {
  animalImage: number | null;
  doubleEyelid: number | null;
  bodyType: number | null;
  externalCharm: number[] | null;
  tattoo: number | null;
}

const AppearancePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";
  const { me, isLoading, isError, mutate } = useMe("appearance");
  const [isPutMeLoading, setIsPutMeLoading] = useState<boolean>(false);
  const [appearanceData, setAppearanceData] = useState<AppearanceData>({
    // fillStatus: null,
    animalImage: null,
    doubleEyelid: null,
    bodyType: null,
    externalCharm: null,
    tattoo: null,
  });
  const isCompleteFillData = Object.values(appearanceData).every(
    (value) => value !== null
  );

  useEffect(() => {
    if (isLoading || isError) return;

    try {
      const { appearance } = me;
      const appearanceDataKeys = Object.keys(appearanceData);
      Object.keys(appearance).map((key) => {
        if (appearanceDataKeys.includes(key)) {
          setAppearanceData((prev) => ({
            ...prev,
            [key]: appearance[key as keyof AppearanceData],
          }));
        };
      });
    } catch (error) { return; }
  }, [me, isLoading, isError]);

  async function handleNext() {
    setIsPutMeLoading(true);
    const res = await putMe("appearance", appearanceData);

    if (res.status >= 200 && res.status < 300) {
      mutate();
      setIsPutMeLoading(false);
    } else {
      alert("저장에 실패했습니다. 관리자에게 문의해주세요.");
      setIsPutMeLoading(false);
      return;
    }

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
      {(isLoading || isPutMeLoading) && <Loading />}
      <OptionsList
        optionName="appearance"
        step={5}
        data={appearanceData}
        setData={setAppearanceData}
      />
      <br />
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
