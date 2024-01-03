import * as option from "./application_option";


/** 이상형 타겟팅 */
interface TargetingOptions {
  /** 이상형 타겟팅 선지 */
  [key: string]: (option.Option | option.RangeOption | option.GroupedOption)[];
}

/** 모든 이상형 타겟팅 */
interface TargetingAllOptions {
  /** 모든 이상형 타겟팅 선지 */
  [key: string]: option.Option | option.RangeOption | option.GroupedOption;
}

interface AllOptions {
  [key: string]: option.Option | option.GroupedOption;
}

interface AllRangeOptions {
  [key: string]: option.RangeOption | option.GroupedOption;
}

/** 이상형 타겟팅 카테고리 */
interface TargetingCategories {
  /** 이상형 타겟팅 */
  [key: string]: {
    name: string;
    label: string;
    options: (option.Option | option.RangeOption | option.GroupedOption)[];
  };
}


export const targetingOptions: TargetingOptions = {
  default: [
    option.birthYear,
    option.residence,
    option.interest,
    option.personalityCharm,
    option.externalCharm
  ],
  lifestyle: [
    option.workType,
    option.smoking,
    option.drinking,
    // option.interest, // default
    option.numberDating,
    option.athleticLife,
    option.petAnimal,
    option.religion
  ],
  personality: [
    option.extrovert_introvert,
    option.intuition_reality,
    option.emotion_reason,
    option.impromptu_plan,
    // option.personalityCharm // default
  ],
  values: [
    option.marriageValues,
    option.oppositeSexFriendValues,
    option.politicalValues,
    option.consumptionValues,
    option.careerFamilyValues,
    option.childrenValues
  ],
  appearance: [
    option.animalImage,
    option.doubleEyelid,
    option.bodyType,
    // option.externalCharm, // default
    option.tattoo
  ],
  datingstyle: [
    option.preferredDate,
    option.preferredContactMethod,
    option.loveInitiative,
    option.datingFrequency,
    option.contactStyle,
    option.premaritalPurity,
    option.conflictResolutionMethod
  ]
}


export const targetingAllOptions: TargetingAllOptions = {
  birthYear: option.birthYear,
  residence: option.residence,
  jobType: option.jobType,
  salary: option.salary,
  height: option.height,
  workType: option.workType,
  smoking: option.smoking,
  drinking: option.drinking,
  interest: option.interest,
  numberDating: option.numberDating,
  athleticLife: option.athleticLife,
  petAnimal: option.petAnimal,
  religion: option.religion,
  extrovert_introvert: option.extrovert_introvert,
  intuition_reality: option.intuition_reality,
  emotion_reason: option.emotion_reason,
  impromptu_plan: option.impromptu_plan,
  personalityCharm: option.personalityCharm,
  marriageValues: option.marriageValues,
  oppositeSexFriendValues: option.oppositeSexFriendValues,
  politicalValues: option.politicalValues,
  consumptionValues: option.consumptionValues,
  careerFamilyValues: option.careerFamilyValues,
  childrenValues: option.childrenValues,
  animalImage: option.animalImage,
  doubleEyelid: option.doubleEyelid,
  bodyType: option.bodyType,
  externalCharm: option.externalCharm,
  tattoo: option.tattoo,
  preferredDate: option.preferredDate,
  preferredContactMethod: option.preferredContactMethod,
  loveInitiative: option.loveInitiative,
  datingFrequency: option.datingFrequency,
  contactStyle: option.contactStyle,
  premaritalPurity: option.premaritalPurity,
  conflictResolutionMethod: option.conflictResolutionMethod
}

export const allRangeOptions: AllRangeOptions = {
  birthYear: option.birthYear,
  height: option.height
}

export const allOptions: AllOptions = {
  residence: option.residence,
  jobType: option.jobType,
  salary: option.salary,
  workType: option.workType,
  smoking: option.smoking,
  drinking: option.drinking,
  interest: option.interest,
  numberDating: option.numberDating,
  athleticLife: option.athleticLife,
  petAnimal: option.petAnimal,
  religion: option.religion,
  extrovert_introvert: option.extrovert_introvert,
  intuition_reality: option.intuition_reality,
  emotion_reason: option.emotion_reason,
  impromptu_plan: option.impromptu_plan,
  personalityCharm: option.personalityCharm,
  marriageValues: option.marriageValues,
  oppositeSexFriendValues: option.oppositeSexFriendValues,
  politicalValues: option.politicalValues,
  consumptionValues: option.consumptionValues,
  careerFamilyValues: option.careerFamilyValues,
  childrenValues: option.childrenValues,
  animalImage: option.animalImage,
  doubleEyelid: option.doubleEyelid,
  bodyType: option.bodyType,
  externalCharm: option.externalCharm,
  tattoo: option.tattoo,
  preferredDate: option.preferredDate,
  preferredContactMethod: option.preferredContactMethod,
  loveInitiative: option.loveInitiative,
  datingFrequency: option.datingFrequency,
  contactStyle: option.contactStyle,
  premaritalPurity: option.premaritalPurity,
  conflictResolutionMethod: option.conflictResolutionMethod
}


export const targetingCategories: TargetingCategories = {
  default: {
    name: "default",
    label: "기본 반영",
    options: targetingOptions.default,
  },
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
}
