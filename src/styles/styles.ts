import { useTheme } from "@mui/material/styles";

export function useThemeValues() {
  const theme = useTheme();
  return {
    primaryColor: theme.palette.primary.main,
    secondaryColor: theme.palette.secondary.main,
  };
}
