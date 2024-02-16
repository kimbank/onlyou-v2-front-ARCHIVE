import { useSelector, useDispatch } from 'react-redux';
import { targetingAllOptions } from "@/constants/targeting";

import {
  styled,
  Box,
  List,
  Divider,
  Typography
} from "@mui/material";


const OptionCard = () => {
  const targetingState = useSelector((state: RootState) => state.targeting);

  const firstOptions = Object.keys(targetingState).filter((field: string) => {
    return targetingState[field].priority === 1;
  });
  const secondOptions = Object.keys(targetingState).filter((field: string) => {
    return targetingState[field].priority === 2;
  });
  const thirdOptions = Object.keys(targetingState).filter((field: string) => {
    return targetingState[field].priority === 3;
  });

  return (
    <Root>
      <Typography variant="subtitle2">선택한 조건</Typography>
      <List className="option-list">
        <Box className="option-list-item">
          <Typography variant="subtitle2" sx={{ minWidth:"34px", color: "#f70" }}>1순위</Typography>
          { firstOptions.length > 0 ?
            <Typography variant="body2">
              {
                firstOptions.map((option: string) => (
                  targetingAllOptions[option].label
                )).join(", ")
              }
            </Typography>
            :
            <Typography variant="body2" className="option-empty">선택 안함</Typography>
          }
        </Box>
        <Divider />
        <Box className="option-list-item">
          <Typography variant="subtitle2" sx={{ minWidth:"34px", color: "#f70" }}>2순위</Typography>
          { secondOptions.length > 0 ?
            <Typography variant="body2">
              {
                secondOptions.map((option: string) => (
                  targetingAllOptions[option].label
                )).join(", ")
              }
            </Typography>
            :
            <Typography variant="body2" className="option-empty">선택 안함</Typography>
          }
        </Box>
        <Divider />
        <Box className="option-list-item">
          <Typography variant="subtitle2" sx={{ minWidth:"34px", color: "#f70" }}>3순위</Typography>
          { thirdOptions.length > 0 ?
            <Typography variant="body2">
              {
                thirdOptions.map((option: string) => (
                  targetingAllOptions[option].label
                )).join(", ")
              }
            </Typography>
            :
            <Typography variant="body2" className="option-empty">선택 안함</Typography>
          }
        </Box>
      </List>
    </Root>
  )
}

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px 20px",
  width: "100%",
  borderRadius: "6px",
  border: "1px solid #FFD9B7",

  ".option-list": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  ".option-list-item": {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  ".option-empty": {
    color: "#A3A3A3",
  },
});

export default OptionCard;
