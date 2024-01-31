export interface LetterOption {
  name: string;
  options: {
    [key: string]: string;
  };
}

export const letterOptions: LetterOption = {
  name: "letterValue",
  options: {
    0: "지금 어떤 일을 하고 있나요?",
    1: "인생의 목표가 있다면?",
    2: "내가 연인에게 해줄 수 있는 것은?",
    3: "주변인이 말하는 내 매력은?",
    4: "내 취미 생활은?",
    5: "이런 연애를 지향해요",
    6: "잊지 못할 일생일대의 경험은?",
    7: "연인이 생기면 하고싶은 일은?",
    8: "내가 인생에서 가장 잘한 일은?",
    9: "자유편지",
  },
};

export const getLetterOptionLabel = (key: string): string => {
  try {
    return letterOptions.options[key];
  }
  catch (e) {
    return "error";
  }
}