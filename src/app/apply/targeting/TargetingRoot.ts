import colors from "@/assets/theme/base/colors";
import { Container, styled } from "@mui/material";

export default styled(Container)(() => {
    const {primary ,info} = colors
    
    return {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',

      '.title-box': {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      },

      '.subtitle-box': {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
      },

      '.content-box': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
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
        color: primary.Primary_lighten2,
      },

      '.check': {
        position: 'absolute',
        left: 4,
        bottom: '1px',
        marginRight: '10px',
        color: primary.main,
        fontSize: '24px',
      },
    };
})