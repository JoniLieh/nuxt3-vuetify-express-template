// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { lightTheme, darkTheme } from '~/assets/vuetifyThemes'

// Translations provided by Vuetify
import { de, en } from 'vuetify/locale'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    locale: {
      locale: 'de',
      fallback: 'en',
      messages: { de, en },
    },
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme,
        darkTheme
      },
      variations: {
        colors: ['primary', 'secondary', 'accent'],
        lighten: 3,
        darken: 3,
      },
    }
  })
  app.vueApp.use(vuetify)
})
