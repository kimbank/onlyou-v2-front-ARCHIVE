import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/assets";
import { createTheme } from "@mui/material/styles";
type Props = {
  children: React.ReactNode;
};

const MuiProvider = ({ children }: Props) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          {children}
        </CssBaseline>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default MuiProvider;
