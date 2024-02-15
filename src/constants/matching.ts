import * as option from "./application_option";

interface AllOptions {
  [key: string]: any;
}

export const allOptionName: AllOptions  = {
  birthYear: option.birthYear.label,
  height: option.height.label,

  residence: option.residence.label,
  jobType: option.jobType.label,
  salary: option.salary.label,
  divorce: option.divorce.label,
  university: option.university.label,
  workType: option.workType.label,
  smoking: option.smoking.label,
  drinking: option.drinking.label,
  interest: option.interest.label,
  numberDating: option.numberDating.label,
  athleticLife: option.athleticLife.label,
  petAnimal: option.petAnimal.label,
  religion: option.religion.label,
  extrovert_introvert: option.extrovert_introvert.label,
  intuition_reality: option.intuition_reality.label,
  emotion_reason: option.emotion_reason.label,
  impromptu_plan: option.impromptu_plan.label,
  personalityCharm: option.personalityCharm.label,
  marriageValues: option.marriageValues.label,
  oppositeSexFriendValues: option.oppositeSexFriendValues.label,
  politicalValues: option.politicalValues.label,
  consumptionValues: option.consumptionValues.label,
  careerFamilyValues: option.careerFamilyValues.label,
  childrenValues: option.childrenValues.label,
  animalImage: option.animalImage.label,
  doubleEyelid: option.doubleEyelid.label,
  bodyType: option.bodyType.label,
  externalCharm: option.externalCharm.label,
  tattoo: option.tattoo.label,
  preferredDate: option.preferredDate.label,
  preferredContactMethod: option.preferredContactMethod.label,
  loveInitiative: option.loveInitiative.label,
  datingFrequency: option.datingFrequency.label,
  contactStyle: option.contactStyle.label,
  premaritalPurity: option.premaritalPurity.label,
  conflictResolutionMethod: option.conflictResolutionMethod.label,
  informationBeforeMeeting: "만나기 전 정보",
};

export const allOptions: AllOptions  = {
  residence: {
    0: "서울 동부",
    1: "서울 서부",
    2: "서울 남부",
    3: "서울 북부",
    4: "경기 중부",
    5: "경기 북서부",
    6: "경기 북동부",
    7: "경기 북부",
    8: "경기 남부",
    9: "경기 남서부",
    10: "경기 남동부",
    11: "경기 중부",
    12: "인천 서부",
    13: "인천 동부",
    14: "수도권 내 상관 없음",
  },
  jobType: option.jobType.options,
  salary: option.salary.options,
  divorce: option.divorce.options,
  university: option.university.options,
  workType: option.workType.options,
  smoking: option.smoking.options,
  drinking: option.drinking.options,
  interest: option.interest.options,
  numberDating: option.numberDating.options,
  athleticLife: option.athleticLife.options,
  petAnimal: option.petAnimal.options,
  religion: option.religion.options,
  extrovert_introvert: option.extrovert_introvert.options,
  intuition_reality: option.intuition_reality.options,
  emotion_reason: option.emotion_reason.options,
  impromptu_plan: option.impromptu_plan.options,
  personalityCharm: option.personalityCharm.options,
  marriageValues: option.marriageValues.options,
  oppositeSexFriendValues: option.oppositeSexFriendValues.options,
  politicalValues: option.politicalValues.options,
  consumptionValues: option.consumptionValues.options,
  careerFamilyValues: option.careerFamilyValues.options,
  childrenValues: option.childrenValues.options,
  animalImage: option.animalImage.options,
  doubleEyelid: option.doubleEyelid.options,
  bodyType: option.bodyType.options,
  externalCharm: option.externalCharm.options,
  tattoo: option.tattoo.options,
  preferredDate: option.preferredDate.options,
  preferredContactMethod: option.preferredContactMethod.options,
  loveInitiative: option.loveInitiative.options,
  datingFrequency: option.datingFrequency.options,
  contactStyle: option.contactStyle.options,
  premaritalPurity: option.premaritalPurity.options,
  conflictResolutionMethod: option.conflictResolutionMethod.options,
  informationBeforeMeeting: {
    0: "자세한 건 만나서 알아가요!",
    1: "카톡으로 미리 서로를 알아가요",
  },

  education: option.education.options,
};

export const getDetailsNameLabel = (key: string): string => {
  try {
    return allOptionName[key];
  }
  catch (e) {
    return "error";
  }
}

export const getDetailOptionLabel = (key: string, value: number): string | number => {
  if (key === "birthYear" || key === "height") {
    return value;
  }
  try {
    return allOptions[key][value];
  }
  catch (e) {
    return "error";
  }
}
