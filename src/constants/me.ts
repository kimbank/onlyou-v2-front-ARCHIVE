
import * as option from "./application_option";

/** 이상형 타겟팅 */
interface TargetingOptions {
  /** 이상형 타겟팅 선지 */
  [key: string]: (option.Option | option.RangeOption)[];
}

/** 이상형 타겟팅 카테고리 */
interface TargetingCategories {
  /** 이상형 타겟팅 */
  [key: string]: {
    name: string;
    label: string;
    options: (option.Option | option.RangeOption)[];
  };
}


export const targetingOptions: TargetingOptions = {
  lifestyle: [
    option.workType,
    option.smoking,
    option.drinking,
    option.numberDating,
    option.athleticLife,
    option.petAnimal,
    option.religion,
    option.interest, // default
  ],
  personality: [
    option.extrovert_introvert,
    option.intuition_reality,
    option.emotion_reason,
    option.impromptu_plan,
    option.personalityCharm, // default
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
    option.externalCharm, // default
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

export const targetingCategories: TargetingCategories = {
  lifestyle: {
    name: "lifestyle",
    label: "생활",
    options: targetingOptions.lifestyle,
  },
  personality: {
    name: "personality",
    label: "성격",
    options: targetingOptions.personality,
  },
  values: {
    name: "values",
    label: "가치관",
    options: targetingOptions.values,
  },
  appearance: {
    name: "appearance",
    label: "외모",
    options: targetingOptions.appearance,
  },
  datingstyle: {
    name: "datingstyle",
    label: "연애스타일",
    options: targetingOptions.datingstyle,
  },
};
