import Button from "@mui/material/Button";
import { styled, Theme } from "@mui/material/styles";

export default styled(Button)(({
  theme,
  ownerState,
}: {
  theme?: Theme | any;
  ownerState: any;
}) => {
  const { palette } = theme;
  const { color, variant } = ownerState;

  const { white, text, transparent, gray, light, secondary, disabled } =
    palette;

  // variant="contained 스타일"
  const containedStyles = () => {
    const backgroundValue = palette[color] ? palette[color].main : white.main;

    const focusedBackgroundValue = palette[color]
      ? palette[color].focus
      : white.focus;

    // color value when button is focused
    let colorValue = white.main;

    if (color === "white") {
      colorValue = text.main;
    } else if (color === "primary" || color === "error" || color === "dark") {
      colorValue = white.main;
    }

    return {
      background: backgroundValue,
      color: colorValue,

      "&:hover": {
        backgroundColor: backgroundValue,
        color: colorValue,
      },

      "&:focus:not(:hover)": {
        backgroundColor: focusedBackgroundValue,
        color: colorValue,
      },

      "&:disabled": {
        backgroundColor: disabled.main,
        color: disabled.focus,
      },
    };
  };

  // variant="outlined 스타일"
  const outlinedStyles = () => {
    // color value
    const colorValue = palette[color] ? palette[color].main : white.main;

    return {
      background: transparent.main,
      color: colorValue,
      borderColor: colorValue,

      "&:hover": {
        background: transparent.main,
        color: colorValue,
        borderColor: colorValue,
        opacity: 0.85,
      },

      "&:focus:not(:hover)": {
        background: transparent.main,
        color: colorValue,
      },

      "&:active:not(:hover)": {
        backgroundColor: colorValue,
        color: white.main,
        opacity: 0.85,
      },

      "&:disabled": {
        color: secondary.main,
        borderColor: secondary.main,
        backgroundColor: secondary.main,
      },
    };
  };

  // variant="text 스타일"
  const textStyles = () => {
    // color value
    const colorValue = palette[color] ? palette[color].main : white.main;

    // color value when button is focused
    const focusedColorValue = palette[color]
      ? palette[color].focus
      : white.focus;

    return {
      color: colorValue,

      "&:hover": {
        color: focusedColorValue,
      },

      "&:focus:not(:hover)": {
        color: focusedColorValue,
      },
    };
  };

  return {
    ...(variant === "contained" && containedStyles()),
    ...(variant === "outlined" && outlinedStyles()),
    ...(variant === "text" && textStyles()),
  };
});
