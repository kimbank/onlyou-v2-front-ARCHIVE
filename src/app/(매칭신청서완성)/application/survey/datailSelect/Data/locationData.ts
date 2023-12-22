interface Option {
  value: string;
  label: string;
}

interface LocationGroup {
  title: string;
  options: Option[];
}
export const SeoulLocation: LocationGroup []= [
  {
    title: "서울",
    options: [
      { value: "0", label: "서울 동부" },
      { value: "1", label: "서울 서부" },
      { value: "2", label: "서울 남부" },
      { value: "3", label: "서울 북부" },
      { value: "4", label: "서울 중부" },
    ],
  },
];
export const KyeongkiLocation: LocationGroup[] = [
  {
    title: "경기",
    options: [
      { value: "5", label: "경기 북서부" },
      { value: "6", label: "경기 북동부" },
      { value: "7", label: "경기 북부" },
      { value: "8", label: "경기 남부" },
      { value: "9", label: "경기 남서부" },
      { value: "10", label: "경기 남동부" },
      { value: "11", label: "경기 중부" },
    ],
  },
];
export const IncheonLocation: LocationGroup[] = [
  {
    title: "인천",
    options: [
      { value: "12", label: "인천 서부" },
      { value: "13", label: "인천 동부" },
    ],
  },
];
