import { useMemo } from "react";
import { useRouter } from "next/navigation";

import { meCategories } from "@/constants/me";
import RadioLayout from "../RadioLayout";


const Index = () => {
  const radioGroupsData = useMemo(() => meCategories.values, []);
  //  const handleNext = () => {
  //    if (allGroupsSelected) {
  //      router.push("character/");
  //    } else {
  //      alert("모든 그룹을 선택하세요.");
  //    }
  //  };
  return (
    <RadioLayout
      title="가치관 정보 입력하기"
      stepNumber="1"
      radioGroupsData={radioGroupsData}
      prevHref={"/matching"}
      nextHref={"life/"}
    />
  );
};

export default Index;
