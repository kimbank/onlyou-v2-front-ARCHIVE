"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton";
import useMe from "@/api/hooks/useMe";
import putMe from "@/api/putMe";
import Loading from "@/components/loading";


interface LifestyleData {
  workType: number | null;
  smoking: number | null;
  drinking: number | null;
  interest: number[] | null;
  numberDating: number | null;
  athleticLife: number | null;
  petAnimal: number | null;
  religion: number | null;
}

const LifestylePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";
  const { me, isLoading, isError, mutate } = useMe("lifestyle");
  const [isPutMeLoading, setIsPutMeLoading] = useState<boolean>(false);
  const [lifestyleData, setLifestyleData] = useState<LifestyleData>({
    workType: null,
    smoking: null,
    drinking: null,
    interest: null,
    numberDating: null,
    athleticLife: null,
    petAnimal: null,
    religion: null,
  });
  const isCompleteFillData = Object.values(lifestyleData).every(
    (value) => value !== null
  );

  useEffect(() => {
    if (isLoading || isError) return;

    try {
      const { lifestyle } = me;
      const lifestyleDataKeys = Object.keys(lifestyleData);
      Object.keys(lifestyle).map((key) => {
        if (lifestyleDataKeys.includes(key)) {
          setLifestyleData((prev) => ({
            ...prev,
            [key]: lifestyle[key as keyof LifestyleData],
          }));
        };
      });
    } catch (error) { return; }
  }, [me, isLoading, isError]);

  async function handleNext() {
    setIsPutMeLoading(true);
    const res = await putMe("lifestyle", lifestyleData);

    if (res.status >= 200 && res.status < 300) {
      mutate();
      setIsPutMeLoading(false);
    } else {
      alert("저장에 실패했습니다. 관리자에게 문의해주세요.");
      setIsPutMeLoading(false);
      return;
    }

    if (isInit) {
      router.push("/application/me/personality?type=init");
    }
  }

  async function handlePrev() {
    if (isInit) {
      router.push("/application/me/values?type=init");
    }
  }

  return (
    <>
      {(isLoading || isPutMeLoading) && <Loading />}
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
