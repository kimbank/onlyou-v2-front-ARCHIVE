"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton";
import useMe from "@/api/hooks/useMe";
import putMe from "@/api/putMe";
import Loading from "@/components/loading";


interface PersonalityData {
  extrovert_introvert: number | null;
  intuition_reality: number | null;
  emotion_reason: number | null;
  impromptu_plan: number | null;
  personalityCharm: number[] | null;
}

const PersonalityPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";
  const { me, isLoading, isError, mutate } = useMe("personality");
  const [isPutMeLoading, setIsPutMeLoading] = useState<boolean>(false);
  const [personalityData, setPersonalityData] = useState<PersonalityData>({
    extrovert_introvert: null,
    intuition_reality: null,
    emotion_reason: null,
    impromptu_plan: null,
    personalityCharm: null,
  });
  const isCompleteFillData = Object.values(personalityData).every(
    (value) => value !== null
  );

  useEffect(() => {
    if (isLoading || isError) return;
    
    try {
    const { personality } = me;
    const personalityDataKeys = Object.keys(personalityData);
    Object.keys(personality).map((key) => {
      if (personalityDataKeys.includes(key)) {
        setPersonalityData((prev) => ({
          ...prev,
          [key]: personality[key as keyof PersonalityData],
        }));
      };
    });
  } catch (error) { return; }
  }, [me, isLoading, isError]);

  async function handleNext() {
    setIsPutMeLoading(true);
    const res = await putMe("personality", personalityData);

    if (res.status >= 200 && res.status < 300) {
      mutate();
      setIsPutMeLoading(false);
    } else {
      alert("저장에 실패했습니다. 관리자에게 문의해주세요.");
      setIsPutMeLoading(false);
      return;
    }

    if (isInit) {
      router.push("/application/me/datingstyle?type=init");
    }
  }

  async function handlePrev() {
    if (isInit) {
      router.push("/application/me/lifestyle?type=init");
    }
  }

  return (
    <>
      {(isLoading || isPutMeLoading) && <Loading />}
      <OptionsList
        optionName="personality"
        step={3}
        data={personalityData}
        setData={setPersonalityData}
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

export default PersonalityPage;
