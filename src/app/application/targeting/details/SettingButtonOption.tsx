import { Chip, styled } from "@mui/material";

import { allOptions } from "@/constants/targeting";
import { setTargetingDataField } from "@/store/targetingSlice";
import { useDispatch, useSelector } from "react-redux";

const SettingButtonOption = ({ optionName }: { optionName: string }) => {
  const dispatch = useDispatch();
  const optionState = useSelector(
    (state: RootState) => state.targeting[optionName]
  );
  const currentData = optionState.data || [];

  const allOption = allOptions[optionName].options;
  const limit = allOptions[optionName].targeting_limit;

  const ascending = (a: number, b: number) => a - b;

  function handleOptionClick(idx: number) {
    if (currentData.includes(idx)) {
      dispatch(
        setTargetingDataField({
          field: optionName,
          data: currentData.filter((data: number) => data !== idx),
        })
      );
    } else if (limit && currentData.length >= limit) {
      const newData = [...currentData];
      if (!newData.includes(idx)) {
        newData.shift();
        newData.push(idx);
      }
      dispatch(
        setTargetingDataField({
          field: optionName,
          data: newData.sort(ascending),
        })
      );
    } else {
      dispatch(
        setTargetingDataField({
          field: optionName,
          data: [...currentData, idx].sort(ascending),
        })
      );
    }
  }

  return (
    <>
      <Root>
        {Object.keys(allOption).map((option: string, index: number) => {
          const labelValue = allOption[option];
          return (
            <Chip
              key={index}
              label={typeof labelValue === "string" ? labelValue : ""}
              variant="filled"
              color={
                currentData.includes(Number(option)) ? "primary" : "default"
              }
              onClick={() => handleOptionClick(Number(option))}
            />
          );
        })}
      </Root>
    </>
  );
};

const Root = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "9px",
});

export default SettingButtonOption;
