"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton";
import useMe from "@/api/hooks/useMe";
import putMe from "@/api/putMe";
import Loading from "@/components/loading";


interface DatingStyleData {
  preferredDate: number | null;
  preferredContactMethod: number | null;
  loveInitiative: number | null;
  datingFrequency: number | null;
  contactStyle: number | null;
  premaritalPurity: number | null;
  conflictResolutionMethod: number | null;
}

const DatingStylePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";
  const { me, isLoading, isError, mutate } = useMe("datingstyle");
  const [isPutMeLoading, setIsPutMeLoading] = useState<boolean>(false);
  const [datingStyleData, setDatingStyleData] = useState<DatingStyleData>({
    preferredDate: null,
    preferredContactMethod: null,
    loveInitiative: null,
    datingFrequency: null,
    contactStyle: null,
    premaritalPurity: null,
    conflictResolutionMethod: null,
  });
  const isCompleteFillData = Object.values(datingStyleData).every(
    (value) => value !== null
  );

  useEffect(() => {
    if (isLoading || isError) return;
    
    try {
      const { datingstyle } = me;
      const datingstyleDataKeys = Object.keys(datingStyleData);
      Object.keys(datingstyle).map((key) => {
        if (datingstyleDataKeys.includes(key)) {
          setDatingStyleData((prev) => ({
            ...prev,
            [key]: datingstyle[key as keyof DatingStyleData],
          }));
        };
      });
    } catch (error) { return; }
  }, [me, isLoading, isError]);

  async function handleNext() {
    setIsPutMeLoading(true);
    const res = await putMe("datingstyle", datingStyleData);

    if (res.status >= 200 && res.status < 300) {
      mutate();
      setIsPutMeLoading(false);
    } else {
      alert("저장에 실패했습니다. 관리자에게 문의해주세요.");
      setIsPutMeLoading(false);
      return;
    }

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
      {(isLoading || isPutMeLoading) && <Loading />}
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
