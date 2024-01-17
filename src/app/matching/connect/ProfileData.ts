export interface LetterOption {
  title: string;
  description: string;
}

export interface PriorityCondition {
  label: string;
  values: string[];
}

export interface InfoOption {
  jobType: string;
  residence: string;
  dateBirth: number;
  me: {
    firstPriority: PriorityCondition;
    secondPriority: PriorityCondition;
    thirdPriority: PriorityCondition;
  };
  target: {
    firstPriority: PriorityCondition;
    secondPriority: PriorityCondition;
    thirdPriority: PriorityCondition;
  };
}

export interface InfoData {
  name: string;
  options: InfoOption[];
}

export const LetterData = {
  name: "letter",
  options: [
    {
      title: "내가 연인에게 해줄 수 있는 것은?",
      description: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트",
    },
    {
      title: "내가 연인에게 해주고 싶은 것은?",
      description: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트",
    },
    {
      title: "내가 연인에게 장점은?",
      description: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트",
    },
  ],
};

export const TargetingInfo: InfoData = {
  name: "targetinginfo",
  options: [
    {
      jobType: "디자이너",
      residence: "서울",
      dateBirth: 1998,
      me: {
        firstPriority: {
          label: "1순위 조건",
          values: ["운동", "종교"],
        },
        secondPriority: {
          label: "2순위 조건",
          values: ["성격", "이미지"],
        },
        thirdPriority: {
          label: "3순위 조건",
          values: ["커리어", "정치성향"],
        },
      },
      target: {
        firstPriority: {
          label: "1순위 조건",
          values: ["운동", "종교"],
        },
        secondPriority: {
          label: "2순위 조건",
          values: ["성격", "이미지"],
        },
        thirdPriority: {
          label: "3순위 조건",
          values: ["커리어", "정치성향"],
        },
      },
    },
  ],
};
