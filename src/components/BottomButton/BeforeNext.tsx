import { Button } from "@mui/material";

import Root from "./BottomButtonRoot";

const NextBefore = () => {
  return (
    <Root>
      <Button variant="outlined">이전</Button>
      <Button variant="contained">다음</Button>
    </Root>
  );
}

export default NextBefore;