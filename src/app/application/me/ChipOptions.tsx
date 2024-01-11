import { useEffect, useState } from "react";
import { styled, Zoom, Chip, Typography } from "@mui/material";
import { Option } from "@/constants/application_option";


interface ChipOptionsProps {
  index: number
  option: Option
  data: any
  setData: any
}

const ChipOptions = ({
  index,
  option,
  data,
  setData
}: ChipOptionsProps) => {
  const { name, label, me, options } = option;
  const [selectedChips, setSelectedChips] = useState<number[]>([]);

  useEffect(() => {
    if (data[name] !== null) {
      setSelectedChips(data[name]);
    }
  }, [data, name])

  function handleChange(value: number[]) {
    setData({
      ...data,
      [name]: value
    })
  }

  function toggleChip(chipIndex: number) {
    setSelectedChips(prevSelectedChips => {
      // 이미 선택된 칩이면 제거, 아니면 추가
      if (prevSelectedChips.includes(chipIndex)) {
        handleChange(prevSelectedChips.filter(index => index !== chipIndex));
        return prevSelectedChips.filter(index => index !== chipIndex);
      } else {
        handleChange([...prevSelectedChips, chipIndex]);
        return [...prevSelectedChips, chipIndex];
      }
    });
  };

  return (
    <Zoom in={true} unmountOnExit>
      <ChipOptionsRoot>
        {/* <button onClick={() => console.log(selectedChips)}>selectedChips</button> */}
        <Typography variant="subtitle2">{index+1}. {label}</Typography>
        <div className="chips-box">
          {
            Object.keys(options).map((optionIndex) => (
              <Chip
                key={optionIndex}
                label={options[optionIndex]}
                variant="outlined"
                color={selectedChips.includes(Number(optionIndex)) ? "primary" : "default"}
                onClick={() => toggleChip(Number(optionIndex))}
              />
            ))
          }
        </div>
      </ChipOptionsRoot>
    </Zoom>
  )
}

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
  }
})

export default ChipOptions
