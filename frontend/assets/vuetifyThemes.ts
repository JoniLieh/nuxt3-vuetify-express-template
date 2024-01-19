import vuetifyColors from 'vuetify/lib/util/colors.mjs'

export const light = {
  dark: false,
  colors: {
    background: "#edf1f4",
    surface: "#FFFFFF",
    primary: "#6200EE",
    secondary: "#03DAC6",
    accent: "#cc0000",
    info: vuetifyColors.lightBlue.base,
    warning: vuetifyColors.amber.darken4,
    error: vuetifyColors.deepOrange.accent4,
    success: vuetifyColors.green.darken1
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
    info: vuetifyColors.lightBlue.base,
    warning: vuetifyColors.amber.darken4,
    error: vuetifyColors.deepOrange.accent4,
    success: vuetifyColors.green.darken1
  },
}