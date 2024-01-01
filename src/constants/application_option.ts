/** 범위형 선지 */
export interface RangeOption {
  /** 영문 명 */
  name: string;
  /** 한국 명 */
  label: string;
  /** 내정보 방식 */
  me: "text" | "radio" | "button" | "dropdown" | "none";
  /** 타게팅 방식 */
  targeting: "radio" | "button" | "dropdown" | "slider" | "none";
  /** 최대 선택 가능 갯수 */
  me_limit?: number;
  targeting_limit?: number;

  /** 범위 시작 */
  from: number;
  /** 범위 끝 */
  to: number;
}

/** 일반적 선지 */
export interface Option {
  /** 영문 명 */
  name: string;
  /** 한국 명 */
  label: string;
  /** 내정보 방식 */
  me: "button" | "dropdown" | "checkbox" | "radio" | "slider";
  /** 타게팅 방식 */
  targeting: "button" | "dropdown" | "checkbox" | "radio" | "slider" | "chip";
  /** 최대 선택 가능 갯수 */
  me_limit?: number;
  targeting_limit?: number;

  /** 선지 */
  options: { [key: string]: string };
}

interface GroupedOption extends Omit<Option, "options"> {
  options: { [group: string]: { [key: string]: string } };
}

// 생년월일(나이) : 무조건 반영
export const birthYear: RangeOption = {
  name: "birthYear",
  label: "나이",
  me: "radio",
  targeting: "slider",

  from: 1980, // 최소 생년월일
  to: 2004,   // 최대 생년월일
}


// 거주지 : 무조건 반영
export const residence: GroupedOption = {
  name: "residence",
  label: "선호하는 거주지를 모두 설정해주세요",
  me: "dropdown",
  targeting: "chip",
  options: {
    서울: {
      0: "서울 동부",
      1: "서울 서부",
      2: "서울 남부",
      3: "서울 북부",
    },
    경기: {
      4: "경기 중부",
      5: "경기 북서부",
      6: "경기 북동부",
      7: "경기 북부",
      8: "경기 남부",
      9: "경기 남서부",
      10: "경기 남동부",
      11: "경기 중부",
    },
    인천: {
      12: "인천 서부",
      13: "인천 동부",
    },
    기타: {
      14: "수도권 내 상관 없음",
    },
  },
};


// 직장 유형 : 선택 반영
export const jobType: Option = {
  name: "jobType",
  label: "직장 유형",
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

// 연봉 : 선택 반영
export const salary: Option = {
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


// 키 : 선택 반영
export const height: RangeOption = {
  name: "height",
  label: "키",
  me: "dropdown",
  targeting: "slider",
  
  from: 150, // 최소 키
  to: 190,   // 최대 키
}


// 대학 : 선택 반영
export const university: Option = {
  name: "university",
  label: "대학",
  me: "button",
  targeting: "button",

  options: {
    0: "대학 미진학",
    1: "전문대",
    2: "일반 4년제 대학",
    3: "명문대",
    4: "일류대"
  }
}


// 돌싱 여부 : 선택 반영
export const divorce: Option = {
  name: "dolsing",
  label: "divorce 여부",
  me: "radio",
  targeting: "button",
  targeting_limit: 1,

  options: {
    0: "돌싱",
    1: "돌싱 아님",
  }
}


// 근무 형태 : 선택 반영
export const workType: Option = {
  name: "workType",
  label: "근무형태",
  me: "dropdown",
  targeting: "button",

  options: {
    0: "교대 근무",
    1: "주 5일 or 주 4일",
    2: "기타(프리랜서, 자영엄자 등)",
  }
}


// 흡연 경력 : 선택 반영
export const smoking: Option = {
  name: "smoking",
  label: "흡연 경력",
  me: "radio",
  targeting: "button",

  options: {
    0: "비흡연",
    1: "전자담배만",
    2: "흡연",
    3: "금연 중"
  }
}


// 음주 생활 : 선택 반영
export const drinking: Option = {
  name: "drinking",
  label: "음주 생활",
  me: "radio",
  targeting: "button",

  options: {
    0: "전혀 마시지 않아요",
    1: "어쩔 수 없을 때만 마셔요",
    2: "가끔 마셔요",
    3: "어느 정도 즐기는 편이에요",
    4: "즐겨 마셔요"
  }
}


// 관심사 : 선택 반영
export const interest: Option = {
  name: "interest",
  label: "관심사",
  me: "button",
  targeting: "button",

  options: {
    0: "여행",
    1: "운동/스포츠",
    2: "책",
    3: "직무",
    4: "외국/언어",
    5: "영화/넷플릭스",
    6: "콘서트/공연/뮤지컬",
    7: "전시회",
    8: "재테크",
    9: "공예/만들기",
    10: "음악/악기",
    11: "댄스/무용",
    12: "봉사/기부",
    13: "사교/인맥",
    14: "차/오토바이",
    15: "반려동물",
    16: "게임/오락",
    17: "사진/영상",
    18: "요리",
    19: "맛집/카페",
    20: "애니메이션"
  }
}


// 연애 횟수 : 선택 반영
export const numberDating: Option = {
  name: "numberDating",
  label: "연애 횟수",
  me: "radio",
  targeting: "button",

  options: {
    0: "0회",
    1: "1~2회",
    2: "3~4회",
    3: "5~6회",
    4: "7회 이상"
  }
}


// 운동 생활 : 선택 반영
export const athleticLife: Option = {
  name: "athleticLife",
  label: "운동 생활",
  me: "radio",
  targeting: "button",

  options: {
    0: "전혀 하지 않음",
    1: "어쩔 수 없을 때만 함",
    2: "가끔 함",
    3: "어느 정도 즐기는 편",
    4: "즐겨 함"
  }
}


// 반려 동물 : 선택 반영
export const petAnimal: Option = {
  name: "petAnimal",
  label: "반려 동물",
  me: "radio",
  targeting: "button",

  options: {
    0: "키우기 어렵습니다",
    1: "키우지 않으나 반려동물에 거부감은 없습니다",
    2: "한 마리 키웁니다",
    3: "두 마리 이상 키웁니다"
  }
}


// 종교 : 선택 반영
export const religion: Option = {
  name: "religion",
  label: "종교",
  me: "radio",
  targeting: "button",

  options: {
    0: "무교",
    1: "기독교",
    2: "천주교",
    3: "불교",
    4: "원불교",
    5: "기타"
  }
}


// 외향/내향 : 선택 반영
export const extrovert_introvert: Option = {
  name: "extrovert_introvert",
  label: "외향/내향",
  me: "radio",
  targeting: "button", // TODO: slider로 변경

  options: {
    0: "외향적이에요",
    1: "외향적인 편이에요",
    2: "내향적인 편이에요",
    3: "내향적이에요"
  }
}


// 직관/현실 : 선택 반영
export const intuition_reality: Option = {
  name: "intuition_reality",
  label: "직관/현실",
  me: "radio",
  targeting: "button", // TODO: slider로 변경

  options: {
    0: "상상력이 풍부해요",
    1: "상상력이 풍부한 편이에요",
    2: "현실적인 편이에요",
    3: "현실적이에요"
  }
}


// 감성/이성 : 선택 반영
export const emotion_reason: Option = {
  name: "emotion_reason",
  label: "감성/이성",
  me: "radio",
  targeting: "button", // TODO: slider로 변경

  options: {
    0: "감성이 풍부해요",
    1: "감성이 풍부한 편이에요",
    2: "이성적인 편이에요",
    3: "이성적이에요"
  }
}


// 즉흥/계획 : 선택 반영
export const impromptu_plan: Option = {
  name: "impromptu_plan",
  label: "즉흥/계획",
  me: "radio",
  targeting: "button", // TODO: slider로 변경

  options: {
    0: "즉흥적이에요",
    1: "즉흥적인 편이에요",
    2: "계획적인 편이에요",
    3: "계획적이에요"
  }
}


// 성격 매력 : 선택 반영
export const personalityCharm: Option = {
  name: "personalityCharm",
  label: "성격 매력",
  me: "button",
  targeting: "button",

  me_limit: 3,
  targeting_limit: 3,

  options: {
    0: "책임감 강함",
    1: "애교가 넘치는",
    2: "유머러스한",
    3: "성실한",
    4: "지적인",
    5: "열정적인",
    6: "긍정적인",
    7: "자유로운",
    8: "밝은",
    9: "자신감 있는",
    10: "배려심 있는",
    11: "섬세한",
    12: "다정한",
    13: "예의 바른",
    14: "털털한",
    15: "가정적인"
  }
}


// 결혼 가치관 : 선택 반영
export const marriageValues: Option = {
  name: "marriageValues",
  label: "결혼 가치관",
  me: "radio",
  targeting: "button",

  options: {
    0: "비혼주의에요",
    1: "결혼은 원하지만 아직은 이르다고 생각해요",
    2: "사랑한다면 3년 내로 결혼도 생각할 것 같아요"
  }
}


// 이성 친구 가치관 : 선택 반영
export const oppositeSexFriendValues: Option = {
  name: "oppositeSexFriendValues",
  label: "이성 친구 가치관",
  me: "radio",
  targeting: "button",

  options: {
    0: "친한 친구라면 술, 영화도 괜찮아요",
    1: "식사, 커피 외에는 이해하기 어려워요",
    2: "친한 친구라도 단둘이 만나는 것은 자제해야 해요"
  }
}


// 정치 성향 : 선택 반영
export const politicalValues: Option = {
  name: "politicalValues",
  label: "정치 성향",
  me: "radio",
  targeting: "button",

  options: {
    0: "관심 없어요",
    1: "진보에 가까워요",
    2: "보수에 가까워요",
    3: "중도에 가까워요"
  }
}


// 소비 가치관 : 선택 반영
export const consumptionValues: Option = {
  name: "consumptionValues",
  label: "소비 가치관",
  me: "radio",
  targeting: "button",
  targeting_limit: 1,

  options: {
    0: "조금 부족하더라도 편안한 미래를 위해 절약하고 싶어요",
    1: "지금 아니면 못하는 것들에 충분히 투자하고 싶어요"
  }
}


// 커리어와 가정 가치관 : 선택 반영
export const careerFamilyValues: Option = {
  name: "careerFamilyValues",
  label: "커리어와 가정 가치관",
  me: "radio",
  targeting: "button",

  options: {
    0: "두 사람 모두 가정이 커리어보다 우선이었으면 해요",
    1: "두 사람 중 한 사람은 커리어보다 가정에 우선이었으면 해요",
    2: "두 사람 모두 한 사람은 커리어보다 가정에 우선이었으면 해요"
  }
}


// 자녀 가치관 : 선택 반영
export const childrenValues: Option = {
  name: "childrenValues",
  label: "자녀 가치관",
  me: "radio",
  targeting: "button",

  options: {
    0: "아직 모르겠어요",
    1: "원하지 않아요",
    2: "미래에 갖고 싶어요"
  }
}


// 동물 이미지 : 선택 반영
export const animalImage: Option = {
  name: "animalImage",
  label: "동물 이미지",
  me: "radio",
  targeting: "button",

  options: {
    0: "강아지",
    1: "고양이",
    2: "여우",
    3: "곰돌이",
    4: "햄스터",
    5: "공룡"
  }
}


// 쌍커풀 : 선택 반영
export const doubleEyelid: Option = {
  name: "doubleEyelid",
  label: "쌍커풀",
  me: "radio",
  targeting: "button",

  options: {
    0: "무쌍",
    1: "속쌍",
    2: "유쌍"
  }
}


// 체형 : 선택 반영
export const bodyType: Option = {
  name: "bodyType",
  label: "체형",
  me: "radio",
  targeting: "button",

  options: {
    0: "슬림",
    1: "표준",
    2: "통통",
    3: "탄탄",
    4: "근육근육"
  }
}


// 외적 매력 : 선택 반영
export const externalCharm: Option = {
  name: "externalCharm",
  label: "외적 매력",
  me: "button",
  targeting: "button",

  me_limit: 3,
  targeting_limit: 3,

  // TODO: 외적 매력 선지 결정
  options: {
    0: "구릿빛 피부에요",
    1: "하얀 피부에요",
    2: "피부가 좋아요",
    // 3: "뚜렷한 이목구비",
    4: "오똑한 콧날",
    5: "비율이 좋아요",
    6: "목소리가 좋아요",
    7: "패션 센스가 좋아요",
    8: "보조개가 있어요",
    9: "동안이에요",
    10: "몸매가 좋아요",
    11: "탄탄한 근육",
    // 12: "단발 머리",
    // 13: "긴생머리",
    14: "큰 눈",
    // 15: "여성스러운 외모",
    16: "귀여운 외모",
    17: "성숙한 외모",
    18: "건강미가 있어요",
    19: "지적인 이미지에요"
  }
}


// 문신 유무 : 선택 반영
export const tattoo: Option = {
  name: "tattoo",
  label: "문신 유무",
  me: "radio",
  targeting: "button",

  options: {
    0: "없음",
    1: "작은 문신 한 두 개",
    2: "작은 문신 여러 개 혹은 큰 문신"
  }
}


// 선호 데이트 : 선택 반영
export const preferredDate: Option = {
  name: "preferredDate",
  label: "선호 데이트",
  me: "radio",
  targeting: "button",
  targeting_limit: 1,

  options: {
    0: "정적인 데이트 선호",
    1: "활동적인 데이트 선호"
  }
}


// 선호 연락 수단 : 선택 반영
export const preferredContactMethod: Option = {
  name: "preferredContactMethod",
  label: "선호 연락 수단",
  me: "radio",
  targeting: "button",
  targeting_limit: 1,

  options: {
    0: "전화를 더 선호해요",
    1: "카톡을 더 선호해요"
  }
}


// 연애 주도성 : 선택 반영
export const loveInitiative: Option = {
  name: "loveInitiative",
  label: "연애 주도성",
  me: "radio",
  targeting: "button",

  options: {
    0: "보통 따라간다",
    1: "가끔 리드한다",
    2: "종종 리드한다",
    3: "주로 리드한다"
  }
}


// 데이트 빈도 : 선택 반영
export const datingFrequency: Option = {
  name: "datingFrequency",
  label: "데이트 빈도",
  me: "radio",
  targeting: "button",

  options: {
    0: "일주일에 1번",
    1: "일주일에 2번",
    2: "일주일에 3번 이상"
  }
}


// 연락 스타일 : 선택 반영
export const contactStyle: Option = {
  name: "contactStyle",
  label: "연락 스타일",
  me: "radio",
  targeting: "button",
  targeting_limit: 1,

  options: {
    0: "시간 여유가 있고 서로 생각 날 때 연락했으면 해요",
    1: "바쁘더라도 연락은 최대한 자주 하는 게 좋아요"
  }
}


// 혼전 순결 : 선택 반영
export const premaritalPurity: Option = {
  name: "premaritalPurity",
  label: "혼전 순결",
  me: "radio",
  targeting: "button",
  targeting_limit: 1,

  options: {
    0: "관계도 연애의 중요한 요소라고 생각해요",
    1: "결혼 전 관계는 원하지 않아요"
  }
}


// 갈등 해결 방식 : 선택 반영
export const conflictResolutionMethod: Option = {
  name: "conflictResolutionMethod",
  label: "갈등 해결 방식",
  me: "radio",
  targeting: "button",
  targeting_limit: 1,

  options: {
    0: "시간을 가지고 감정을 진정시킨 후 이야기하는 게 좋아요",
    1: "갈등은 바로 풀어야 해요"
  }
}
