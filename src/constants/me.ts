
import * as option from "./application_option";

/** 이상형 타겟팅 */
interface MeOptions {
  /** 이상형 타겟팅 선지 */
  [key: string]: (option.Option | option.RangeOption)[];
}

/** 이상형 타겟팅 카테고리 */
interface MeCategories {
  /** 이상형 타겟팅 */
  [key: string]: {
    name: string;
    label: string;
    options: (option.Option | option.RangeOption)[];
  };
}


export const meOptions: MeOptions = {
  lifestyle: [
    option.workType,
    option.smoking,
    option.drinking,
    option.numberDating,
    option.athleticLife,
    option.petAnimal,
    option.religion,
    option.interest,
  ],
  personality: [
    option.extrovert_introvert,
    option.intuition_reality,
    option.emotion_reason,
    option.impromptu_plan,
    option.personalityCharm, 
  ],
  values: [
    option.marriageValues,
    option.oppositeSexFriendValues,
    option.politicalValues,
    option.consumptionValues,
    option.careerFamilyValues,
    option.childrenValues,
  ],
  appearance: [
    option.animalImage,
    option.doubleEyelid,
    option.bodyType,
    option.tattoo,
    option.externalCharm,
  ],
  datingstyle: [
    option.preferredDate,
    option.preferredContactMethod,
    option.loveInitiative,
    option.datingFrequency,
    option.contactStyle,
    option.premaritalPurity,
    option.conflictResolutionMethod,
  ],
};

export const meCategories: MeCategories = {
  lifestyle: {
    name: "lifestyle",
    label: "생활",
    options: meOptions.lifestyle,
  },
  personality: {
    name: "personality",
    label: "성격",
    options: meOptions.personality,
  },
  values: {
    name: "values",
    label: "가치관",
    options: meOptions.values,
  },
  appearance: {
    name: "appearance",
    label: "외모",
    options: meOptions.appearance,
  },
  datingstyle: {
    name: "datingstyle",
    label: "연애스타일",
    options: meOptions.datingstyle,
  },
};



interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroup {
  title: string;
  options: RadioOption[];
}



export const otherRadioGroups: RadioGroup[] = [
  {
    title: "만나기 전 정보",
    options: [
      { value: "0", label: "만나기 전에는 간단히 장소와 시간만 정하고 싶어요" },
      {
        value: "1",
        label: "만나기 전에도 카톡,전화 등으로 서로를 알아가고 싶어요",
      },
    ],
  },
];