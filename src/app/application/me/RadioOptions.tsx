import { useEffect, useState } from "react";
import { styled, Zoom, Typography } from "@mui/material";
import { Option } from "@/constants/application_option";
import RDRadioInput from "@/components/RDRadio/RDRadioInput";


interface RadioOptionsProps {
  index: number
  option: Option
  data: any
  setData: any
}

const RadioOptions = ({
  index,
  option,
  data,
  setData
}: RadioOptionsProps) => {
  const { name, label, me, options } = option;
  const [initialValue, setInitialValue] = useState(null);

  useEffect(() => {
    if (data[name] !== null) {
      setInitialValue(data[name]?.toString());
    }
  }, [data, name])

  function handleChange(value: string) {
    setData({
      ...data,
      [name]: Number(value)
    })
  }

  return (
    <Zoom in={true} unmountOnExit>
      <RadioOptionsRoot>
        {/* <button onClick={() => console.log(data[name])}>data</button> */}
        <Typography variant="subtitle2">{index+1}. {label}</Typography>
        <div className="radios-box">
          <RDRadioInput
            options={Object.keys(options).map((optionIndex) => ({
              value: optionIndex,
              label: options[optionIndex],
            }))}
            onChange={handleChange}
            initialValue={initialValue}
          />
        </div>
      </RadioOptionsRoot>
    </Zoom>
  )
}

const RadioOptionsRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "12px",

  "& .radios-box": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    width: "100%",
  }
})

export default RadioOptions
