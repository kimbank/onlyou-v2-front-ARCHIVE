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
  data: any;
  setData: any;
}

const OptionsList = ({ optionName, data, setData }: OptionsListProps) => {
  const { name, label, options } = meCategories[optionName];

  return (
    <OptionsListRoot>
      {options.map((option, index) => {
        switch (option.me) {
          case "text":
            return <span key={index}>text</span>;
          case "radio":
            return (
              <>
                <RadioOptions
                  key={index}
                  index={index}
                  option={option}
                  data={data}
                  setData={setData}
                />
              </>
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
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export default OptionsList;
