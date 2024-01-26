"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton";
import useMe from "@/api/hooks/useMe";

const DatingStyleAPI = {
  statusCode: 200,
  message: "Find Success",
  data: {
    nickname: "뱅크",
    datingstyle: {
      fillStatus: 2,
      preferredDate: 0,
      preferredContactMethod: 0,
      loveInitiative: 0,
      datingFrequency: 0,
      contactStyle: 0,
      conflictResolutionMethod: 0,
    },
  },
};

interface DatingStyleData {
  // fillStatus: number | null;
  preferredDate: number | null;
  preferredContactMethod: number | null;
  loveInitiative: number | null;
  datingFrequency: number | null;
  contactStyle: number | null;
  conflictResolutionMethod: number | null;
}

const DatingStylePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [datingStyleData, setDatingStyleData] = useState<DatingStyleData>({
    // fillStatus: null,
    preferredDate: null,
    preferredContactMethod: null,
    loveInitiative: null,
    datingFrequency: null,
    contactStyle: null,
    conflictResolutionMethod: null,
  });
  const isInit = searchParams.get("type") === "init";
  const isCompleteFillData = Object.values(datingStyleData).every(
    (value) => value !== null
  );

  const { me, isLoading, isError } = useMe("datingstyle");

  useEffect(() => {
    if (!isLoading && !isError) {
      const { datingstyle } = me;

      const updatedDatingstyleData: DatingStyleData = Object.keys(
        datingstyle
      ).reduce(
        (result, key) => {
          if (datingstyle[key] !== null) {
            result[key as keyof DatingStyleData] = datingstyle[key];
          }
          return result;
        },
        { ...datingStyleData } as DatingStyleData
      );

      setDatingStyleData(updatedDatingstyleData);
      console.log("me data", me);
    }
  }, [me, isLoading, isError]);

  async function handleNext() {
    if (isInit) {
      router.push("/application/me/appearance?type=init");
    }
  }

  async function handlePrev() {
    if (isInit) {
      router.push("/application/me/personality?type=init");
    }
  }

  return (
    <>
      <OptionsList
        optionName="datingstyle"
        step={4}
        data={datingStyleData}
        setData={setDatingStyleData}
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

export default DatingStylePage;
