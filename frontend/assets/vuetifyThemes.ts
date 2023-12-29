import { twColors } from "./tw-colors"

export const light = {
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

export const dark = {
  dark: true,
  colors: {
    // background: "#edf1f4",
    // surface: "#FFFFFF",
    primary: "#6200EE",
    secondary: "#03DAC6",
    accent: "#cc0000",
    error: twColors.red[500],
    info: twColors.blue[500],
    success: twColors.emerald[500],
    warning: twColors.amber[500],
  },
}