export const lifeRadioGroups: RadioGroup[] = [
  {
    title: "근무 형태",
    value: "workType",
    options: [
      { id: "0", label: "교대 근무" },
      { id: "1", label: "주 5일 or 주 4일" },
      { id: "2", label: "기타(프리랜서, 자영업자 등)" },
    ],
  },
  {
    title: "흡연 경력",
    value: "smoking",
    options: [
      { id: "0", label: "비흡연" },
      { id: "1", label: "전자담배만" },
      {
        id: "2",
        label: "흡연",
      },
      {
        id: "3",
        label: "금연 중",
      },
    ],
  },
  {
    title: "음주 생활",
    value: "drinking",
    options: [
      { id: "0", label: "전혀 마시지 않음" },
      { id: "1", label: "어쩔 수 없을 때만 마셔요" },
      { id: "2", label: "가끔 마셔요" },
      { id: "3", label: "어느 정도 즐기는 편이에요" },
      { id: "4", label: "즐겨 마셔요" },
    ],
  },
  {
    title: "연애 횟수",
    value: "numberDating",
    options: [
      {
        id: "0",
        label: "0회",
      },
      {
        id: "1",
        label: "1~2회",
      },
      {
        id: "2",
        label: "3~4회",
      },
      {
        id: "3",
        label: "5~6회",
      },
      {
        id: "4",
        label: "7회이상",
      },
    ],
  },
  {
    title: "운동 생활",
    value: "athleticLife",
    options: [
      {
        id: "0",
        label: "중요성엔 공감하지만 규칙적으로 하고 있진 않다",
      },
      { id: "1", label: "운동을 규칙적으로 꾸준히 한다" },
    ],
  },
  {
    title: "반려동물",
    value: "petAnimal",
    options: [
      { id: "0", label: "키우기 어렵습니다" },
      { id: "1", label: "키우지 않으나 반려동물에 거부감은 없습니다" },
      { id: "2", label: "한 마리 키웁니다" },
      { id: "3", label: "두 마리 이상 키웁니다" },
    ],
  },
  {
    title: "종교",
    value: "religion",
    options: [
      { id: "0", label: "무교" },
      { id: "1", label: "기독교" },
      { id: "2", label: "천주교" },
      { id: "3", label: "불교" },
      { id: "4", label: "원불교" },
      { id: "5", label: "기타" },
    ],
  },
];

export const interestRadioGroups: RadioGroup[] = [
  {
    title: "관심사",
    value: "interest",
    options: [
      {
        id: "0",
        label: "여행",
      },
      {
        id: "1",
        label: "운동/스포츠",
      },
      {
        id: "2",
        label: "책",
      },
      {
        id: "3",
        label: "직무",
      },
      {
        id: "4",
        label: "외국/언어",
      },
      {
        id: "5",
        label: "영화/넷플릭스",
      },
      {
        id: "6",
        label: "콘서트/공연/뮤지컬",
      },
      {
        id: "7",
        label: "전시회",
      },
      {
        id: "8",
        label: "재태크",
      },
      {
        id: "9",
        label: "공예/만들기",
      },
      {
        id: "10",
        label: "음악/악기",
      },
      {
        id: "11",
        label: "댄스/무용",
      },
      {
        id: "12",
        label: "봉사/기부",
      },
      {
        id: "13",
        label: "사교/인맥",
      },
      {
        id: "14",
        label: "차/오토바이",
      },
      {
        id: "15",
        label: "반려동물",
      },
      {
        id: "16",
        label: "게임/오락",
      },
      {
        id: "17",
        label: "사진/영상",
      },
      {
        id: "18",
        label: "요리",
      },
      {
        id: "19",
        label: "맛집/카페",
      },
      {
        id: "20",
        label: "애니메이션",
      },
    ],
  },
];
