"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton";
import useMe from "@/api/hooks/useMe";

interface PersonalityData {
  // fillStatus: number | null;
  extrovert_introvert: number | null;
  intuition_reality: number | null;
  emotion_reason: number | null;
  impromptu_plan: number | null;
  personalityCharm: number[] | null;
}

const PersonalityPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [personalityData, setPersonalityData] = useState<PersonalityData>({
    // fillStatus: null,
    extrovert_introvert: null,
    intuition_reality: null,
    emotion_reason: null,
    impromptu_plan: null,
    personalityCharm: null,
  });
  const isInit = searchParams.get("type") === "init";
  const isCompleteFillData = Object.values(personalityData).every(
    (value) => value !== null
  );
  const { me, isLoading, isError } = useMe("personality");

  useEffect(() => {
    if (!isLoading && !isError) {
      const { personality } = me;

      const updatedPersonalityData: PersonalityData = Object.keys(
        personality
      ).reduce(
        (result, key) => {
          if (personality[key] !== null) {
            result[key as keyof PersonalityData] = personality[key];
          }
          return result;
        },
        { ...personalityData } as PersonalityData
      );

      setPersonalityData(updatedPersonalityData);
      console.log("me data", me);
    }
  }, [me, isLoading, isError]);

  async function handleNext() {
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
