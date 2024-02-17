import { useState } from "react";
import { Slider, Box, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setTargetingRangeField } from "@/store/targetingSlice";
import { allRangeOptions } from "@/constants/targeting";
import { RangeOption } from "@/constants/application_option";

const SettingSliderOption = ({ optionName }: { optionName: string }) => {
  const dispatch = useDispatch();
  const { from, to } = useSelector(
    (state: RootState) => state.targeting[optionName]
  );
  const { from: min, to: max } = allRangeOptions[optionName] as RangeOption;
  const [value, setValue] = useState<number[]>([
    from ? from : min,
    to ? to : max,
  ]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const handleChangeComitted = async (
    event: any,
    newValue: number | number[]
  ) => {
    newValue = newValue as number[];
    dispatch(
      setTargetingRangeField({
        field: optionName,
        from: value[0],
        to: value[1],
      })
    );
  };

  const salaryOptions = allRangeOptions[optionName].options || {};
  const optionsMarks = Object.keys(allRangeOptions[optionName].options || {}).map((key) => {
    return {
      value: Number(key),
      label: (allRangeOptions[optionName].options as Record<string, string>)[key],
    };
  });

  return (
    <>
      {/* <div>{optionName}</div> */}
      <Box sx={{ width: "100%", paddingX: "10px" }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleChangeComitted}
          valueLabelDisplay={optionsMarks.length > 0 ? "off" : "auto"}
          min={min}
          max={max}
          // marks={optionsMarks}
        />
      </Box>
      <span
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="caption">
          {
            optionsMarks.length <= 0 ? (
              optionName === "birthYear" ? `${value[0]}년생` :
              optionName === "height" && `${value[0]}cm`
            ) : (
              optionName === "salary" && `${salaryOptions[value[0]]}`
            )
          }
        </Typography>
        <Typography variant="caption">
          {
            optionsMarks.length <= 0 ? (
              optionName === "birthYear" ? `${value[1]}년생` :
              optionName === "height" && `${value[1]}cm`
            ) : (
              optionName === "salary" && `${salaryOptions[value[1]]}`
            )
          }
        </Typography>
      </span>
    </>
  );
};

export default SettingSliderOption;
