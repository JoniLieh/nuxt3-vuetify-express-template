// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from '@nuxt/types'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// PWA Config
const title = 'MA - MyApp';
const shortTitle = 'MA - MyApp';
const description = 'My App description'

const config: NuxtConfig = {
  runtimeConfig: {
    NUXT_PUBLIC_API_BASE: process.env.NUXT_PUBLIC_API_BASE,
    public: {
      
    }
  },

  // import styles
  css: ['@/assets/main.scss', '@/assets/variables.scss'],
  //...
  build: {
    transpile: ['vuetify'],
  },
  buildModules: ['@nuxt/typescript-build'],

  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@pinia/nuxt',
    // @ts-ignore
    (_options, nuxt) => {
      return nuxt.hooks.hook('vite:extendConfig', (config: any) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // https://nitro.unjs.io/guide/routing#route-rules
  nitro: {
    routeRules: {
      "/api/**": {
        proxy: {
          to: process.env.NUXT_PUBLIC_API_BASE + "/**",
          headers: {
            "X-API-KEY": process.env.NUXT_API_SECRET,
            // "authorization": "123456" // will be JWT Token after login, set in request
          },
          cors: true
        }
      },
      '/auth/**': { ssr: false },
    },
  },

  pwa: {
    meta: {
      name: title,
      theme_color: '#003b79',
      description: description,
    },
    manifest: {
      name: title,
      short_name: shortTitle,
      theme_color: '#003b79',
      description: description,
    },
  },

  imports: {
    dirs: [
      // scan all modules within given directory
      'composables/**',
      '../types/*.ts',
      '../types/**/*.ts'
    ]
  },

  devtools: {
    enabled: process.env.NODE_ENV !== 'production',
  },
}

export default config