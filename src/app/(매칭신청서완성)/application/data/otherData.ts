
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
