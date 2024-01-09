import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

import { meCategories } from "@/constants/me";
import RadioLayout from "../RadioLayout";

const Index = () => {
  const radioGroupsData = useMemo(() => meCategories.values, []);

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
