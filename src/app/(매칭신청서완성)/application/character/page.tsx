import { targetingCategories } from "@/constants/me";
import { useMemo } from "react";
import ChipLayout from "../Common/ChipLayout";
import { useRouter } from "next/navigation";


const Index = () => {
const radioGroupsData = useMemo(() => targetingCategories.appearance, []);
//  const handleNext = () => {
//    if (allGroupsSelected) {
//      router.push("character/");
//    } else {
//      alert("모든 그룹을 선택하세요.");
//    }
//  };
    return (
      <ChipLayout
        title="외모 정보 입력하기"
        stepNumber="3"
        radioGroupsData={radioGroupsData}
        nextHref={"life/"}
        prevHref={"appearance/"}
      />
    );
}
export default Index;