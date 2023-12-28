import { twColors } from "./tw-colors"

export const lightTheme = {
  dark: false,
  colors: {
    background: "#edf1f4",
    surface: "#FFFFFF",
    primary: "#6200EE",
    secondary: "#03DAC6",
    accent: "#cc0000",
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
  },
}

export const darkTheme = {
  dark: true,
  colors: {
    // background: '#FFFFFF',
    // surface: '#FFFFFF',
    primary: "#6200EE", // lighter blue
    secondary: "#03DAC6",
    accent: "#cc0000",
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
  },
}