import { useMemo } from "react";
import { useRouter } from "next/navigation";

import { meCategories } from "@/constants/me";
import ChipLayout from "../ChipLayout";


const Index = () => {
  const radioGroupsData = useMemo(() => meCategories.lifestyle, []);
  //  const handleNext = () => {
  //    if (allGroupsSelected) {
  //      router.push("character/");
  //    } else {
  //      alert("모든 그룹을 선택하세요.");
  //    }
  //  };
  return (
    <ChipLayout
      title="생활 정보 입력하기"
      stepNumber="2"
      radioGroupsData={radioGroupsData}
      prevHref={"value/"}
      nextHref={"character/"}
    />
  );
};

export default Index;
