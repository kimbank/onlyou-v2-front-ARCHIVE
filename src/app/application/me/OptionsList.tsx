import { meCategories } from "@/constants/me";
import { styled, Typography } from "@mui/material";

import ChipOptions from "./ChipOptions";
import RadioOptions from "./RadioOptions";

interface OptionsListProps {
  optionName:
    | "values"
    | "lifestyle"
    | "personality"
    | "datingstyle"
    | "appearance"
    | "etc";
  step: number;
  data: any;
  setData: any;
}

const OptionsList = ({ optionName, step, data, setData }: OptionsListProps) => {
  const { name, label, options } = meCategories[optionName];

  return (
    <OptionsListRoot id="content">
      {/* <button onClick={() => console.log(data)}>data</button> */}
      <div className="title-box">
        <Typography variant="subtitle2">
          {step}
          <span>/6</span>
        </Typography>
        <Typography variant="h1">{label} 정보 입력하기</Typography>
      </div>
      {options.map((option, index) => {
        switch (option.me) {
          case "text":
            return <span key={index}>text</span>;
          case "radio":
            return (
              <RadioOptions
                key={index}
                index={index}
                option={option}
                data={data}
                setData={setData}
              />
            );
          case "chip":
            return (
              <ChipOptions
                key={index}
                index={index}
                option={option}
                data={data}
                setData={setData}
              />
            );
          case "slider":
            return <span key={index}>slider</span>;
          default:
            return <span key={index}>error</span>;
        }
      })}
    </OptionsListRoot>
  );
};

const OptionsListRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  ".title-box": {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",

    "& span": {
      color: "#5C5F63",
    },
  },
});

export default OptionsList;
