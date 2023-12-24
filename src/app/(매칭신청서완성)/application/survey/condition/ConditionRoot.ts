import colors from "@/assets/theme/base/colors";
import { Container, styled } from "@mui/material";

export default styled(Container)(({ theme }) => {
    const {primary ,info} = colors
    
    return {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      ".title-box":{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      },
      '.content-box': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        paddingTop:'24px',
      },
      '.chip-box': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      },
      '.chip': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '8px',
        alignItems: 'center',
      },
      ".tab-box":{
        width:"100%"
      },
      '.tap': {
        flex: 1,
      },
    };
})