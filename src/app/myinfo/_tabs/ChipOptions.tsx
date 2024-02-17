import { useEffect, useState } from "react";
import { styled, Zoom, Chip, Typography } from "@mui/material";
import { Option } from "@/constants/application_option";

interface ChipOptionsProps {
  index: number;
  option: Option;
  data: any;
  setData: any;
}

const ChipOptions = ({ index, option, data, setData }: ChipOptionsProps) => {
  const { name, label, me, meDescription, options, me_limit } = option;
  const [selectedChips, setSelectedChips] = useState<number[]>([]);

  useEffect(() => {
    if (data[name] !== null) {
      setSelectedChips(data[name]);
    }
  }, [data, name]);

  function handleChange(value: number[]) {
    setData({
      ...data,
      [name]: value,
    });
  }

  function toggleChip(chipIndex: number) {
    setSelectedChips((prevSelectedChips) => {
      // 이미 선택된 칩이면 제거, 아니면 추가
      if (prevSelectedChips.includes(chipIndex)) { // 제거
        handleChange(prevSelectedChips.filter((index) => index !== chipIndex));
        return prevSelectedChips.filter((index) => index !== chipIndex);
      } else { // 추가
        if (me_limit && prevSelectedChips.length >= me_limit) {
          // TODO: alert 대신에 모달로 변경
          alert(`최대 ${me_limit}개까지 선택 가능합니다.`);
          return prevSelectedChips;
        }
        handleChange([...prevSelectedChips, chipIndex]);
        return [...prevSelectedChips, chipIndex];
      }
    });
  }

  return (
    <Zoom in={true} unmountOnExit>
      <ChipOptionsRoot>
        {/* <button onClick={() => console.log(selectedChips)}>selectedChips</button> */}
        <Typography variant="subtitle2">
          { index + 1 }. { meDescription || label }
        </Typography>
        <div className="chips-box">
          {Object.keys(options).map((optionIndex, index) => (
            <Chip
              key={index}
              label={options[optionIndex]}
              color={
                selectedChips.includes(Number(optionIndex))
                  ? "primary"
                  : "default"
              }
              onClick={() => toggleChip(Number(optionIndex))}
            />
          ))}
        </div>
      </ChipOptionsRoot>
    </Zoom>
  );
};

const ChipOptionsRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "12px",

  "& .chips-box": {
    display: "flex",
    alignItems: "flex-start",
    alignContent: "flex-start",
    gap: "9px",
    flexWrap: "wrap",
    width: "100%",
  },
});

export default ChipOptions;
