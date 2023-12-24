interface RangeOption {
  name: string;
  label: string;
  me: string;
  targeting: string;
  from: number;
  to: number;
}

interface Option {
  name: string;
  label: string;
  me: string;
  targeting: string;
  options: { [key: string]: string };
}


export const birthYear: RangeOption = {
  name: "birthYear",
  label: "나이",
  me: "dropdown",
  targeting: "slider",

  from: 1980, // 최소 생년월일
  to: 2004,   // 최대 생년월일
}

export const residence: Option = {
  name: "residence",
  label: "거주지",
  me: "dropdown",
  targeting: "button",

  options: {
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
  }
}

const jobType = {
  name: "jobType",
  label: "직업",
  me: "dropdown",
  targeting: "button",

  options: {
    0: "대학생",
    1: "대학원생",
    2: "중견기업",
    3: "중소기업",
    4: "스타트업",
    5: "자영업자",
    6: "프리랜서",
    7: "전문직",
    8: "공무원",
    9: "공기업",
    10: "대기업",
    11: "법인 대표",
    12: "외국계 기업",
    13: "연구소",
    14: "이직 준비 중",
    15: "기타(유치원, 병원 등)",
  }
}

export const salary = {
  name: "salary",
  label: "연봉",
  me: "dropdown",
  targeting: "button",

  options: {
    0: "2천만 원 미만",
    1: "2천만 원 이상",
    2: "3천만 원 이상",
    3: "4천만 원 이상",
    4: "5천만 원 이상",
    5: "6천만 원 이상",
    6: "7천만 원 이상",
    7: "8천만 원 이상",
    8: "9천만 원 이상",
    9: "1억 원 이상",
  }
}

export const height = {
  name: "height",
  label: "키",
  me: "dropdown",
  targeting: "slider",
  
  from: 150, // 최소 키
  to: 190,   // 최대 키
}

export const workType = {
  name: "workType",
  label: "근무형태",
  me: "dropdown",
  targeting: "button",

  options: {
    0: "재택근무",
    1: "출퇴근",
    2: "편입근무",
    3: "협의 후 결정",
  }
}


interface TargetingOptions {
  [key: string]: (Option | RangeOption)[];
}

interface TargetingCategories {
  [key: string]: {
    name: string;
    label: string;
    options: (Option | RangeOption)[];
  }
}

interface TargetingAllOptions {
  [key: string]: Option | RangeOption;
}

export const targetingOptions: TargetingOptions = {
  default: [
    birthYear,
    residence,
    // "관심사",
    // "성격적 매력",
    // "외적 매력",
  ],
  lifestyle: [
    workType,
  ]
}

export const targetingAllOptions: TargetingAllOptions = {
  birthYear,
  residence,
  jobType,
  salary,
  height,
  workType,
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
  }
}
