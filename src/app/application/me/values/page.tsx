"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton";
import useMe from "@/api/hooks/useMe";
import putMe from "@/api/putMe";
import Loading from "@/components/loading";

interface ValuesData {
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
  const isInit = searchParams.get("type") === "init";
  const { me, isLoading, isError } = useMe("values");
  const [isPutMeLoading, setIsPutMeLoading] = useState<boolean>(false);
  const [valuesData, setValuesData] = useState<ValuesData>({
    marriageValues: null,
    oppositeSexFriendValues: null,
    politicalValues: null,
    consumptionValues: null,
    careerFamilyValues: null,
    childrenValues: null,
  });
  const isCompleteFillData = Object.values(valuesData).every(
    (value) => value !== null
  );

  useEffect(() => {
    if (isLoading || isError) return;

    try {
      const { values } = me;
      const valuesDataKeys = Object.keys(valuesData);
      Object.keys(values).map((key) => {
        if (valuesDataKeys.includes(key)) {
          setValuesData((prev) => ({
            ...prev,
            [key]: values[key as keyof ValuesData],
          }));
        };
      });
    } catch (error) { return; }
  }, [me, isLoading, isError]);

  async function handleNext() {
    setIsPutMeLoading(true);
    const res = await putMe("values", valuesData);

    if (res.status >= 200 && res.status < 300) {
      setIsPutMeLoading(false);
    } else {
      alert("저장에 실패했습니다. 관리자에게 문의해주세요.");
      setIsPutMeLoading(false);
      return;
    }

    if (isInit) {
      router.push("/application/me/lifestyle?type=init");
    }
  }

  async function handlePrev() {
    if (isInit) {
      router.push("/matching");
    }
  }

  return (
    <>
      {isPutMeLoading && <Loading />}
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
