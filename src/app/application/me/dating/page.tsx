import { useMemo } from "react";
import { useRouter } from "next/navigation";

import { meCategories } from "@/constants/me";
import RadioLayout from "../RadioLayout";


const Index = () => {
  const radioGroupsData = useMemo(() => meCategories.datingstyle, []);
  //  const handleNext = () => {
  //    if (allGroupsSelected) {
  //      router.push("character/");
  //    } else {
  //      alert("모든 그룹을 선택하세요.");
  //    }
  //  };
  return (
    <RadioLayout
      title="연애 정보 입력하기"
      stepNumber="5"
      radioGroupsData={radioGroupsData}
      prevHref={"appearance/"}
      nextHref={"other/"}
    />
  );
};

export default Index;
