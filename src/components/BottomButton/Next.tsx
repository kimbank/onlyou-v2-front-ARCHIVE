import { Button } from "@mui/material";

import Root from "./BottomButtonRoot";

const Next = ({ children }: { children: React.ReactNode}) => {
  return (
    <Root>
      {children}
    </Root>
  );
}

export default Next;
