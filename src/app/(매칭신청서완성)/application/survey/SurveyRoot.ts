import colors from "@/assets/theme/base/colors";
import { Container, styled } from "@mui/material";

export default styled(Container)(({ theme }) => {
    const {primary ,primary_lighten2} = colors
    
    return {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      '.title-box': {
        marginBottom: '9px;',
      },
      '.content-box': {
        marginBottom: '10px;',
      },
      '.check-icon': {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '18px',
        height: '16px',
        marginRight: '14px',
      },
      '.box': {
        position: 'absolute',
        left: 0,
        color: primary_lighten2,
      },
      '.check': {
        position: 'absolute',
        left: 4,
        bottom: '1px',
        marginRight: '10px',
        color: primary,
        fontSize: '24px',
      },
    };
})