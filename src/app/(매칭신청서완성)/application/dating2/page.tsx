import { targetingCategories } from "@/constants/me";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import RadioLayout from "../Common/RadioLayout";

const Index = () => {
  const radioGroupsData = useMemo(() => targetingCategories.datingstyle, []);
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
