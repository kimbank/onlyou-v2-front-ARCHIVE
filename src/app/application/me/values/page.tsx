"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OptionsList from "../OptionsList";
import BottomButton from "../BottomButton";
import useMe from "@/api/hooks/useMe";

interface ValuesData {
  // fillStatus: number | null;
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
  const [valuesData, setValuesData] = useState<ValuesData>({
    // fillStatus: null,
    marriageValues: null,
    oppositeSexFriendValues: null,
    politicalValues: null,
    consumptionValues: null,
    careerFamilyValues: null,
    childrenValues: null,
  });
  const isInit = searchParams.get("type") === "init";
  const isCompleteFillData = Object.values(valuesData).every(
    (value) => value !== null
  );

  const { me, isLoading, isError } = useMe("values");

  useEffect(() => {
    if (!isLoading && !isError) {
      const { values } = me;

      const updatedvaluesData: ValuesData = Object.keys(values).reduce(
        (result, key) => {
          if (values[key] !== null) {
            result[key as keyof ValuesData] = values[key];
          }
          return result;
        },
        { ...valuesData } as ValuesData
      );

      setValuesData(updatedvaluesData);
      console.log("me data", me);
    }
  }, [me, isLoading, isError]);
  async function handleNext() {
    if (isInit) {
      router.push("/application/me/values?type=init");
    }
  }

  async function handlePrev() {
    if (isInit) {
      router.push("/matching");
    }
  }

  return (
    <>
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
