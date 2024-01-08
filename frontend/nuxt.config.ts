// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from '@nuxt/types'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import isDocker from 'is-docker'

// PWA Config
const title = 'NA - NuxtApp';
const shortTitle = 'NA - NuxtApp';
const description = 'My App description'

const { NUXT_PUBLIC_API_BASE, NUXT_API_SECRET, NODE_ENV } = process.env
const IS_PRODUCTION = NODE_ENV === 'production'

var oldAPIUrl = NUXT_PUBLIC_API_BASE || "http://localhost:33001/api";
var newAPIUrl = new URL(oldAPIUrl);

// When run in docker, the url is the service name of the docker backend container due to the use of a proxy
if (isDocker())
  newAPIUrl.hostname = 'backend';

const proxyTo = (process.browser ? `${NUXT_PUBLIC_API_BASE}` : `${newAPIUrl.toString()}`)
console.log(proxyTo);
const config: NuxtConfig = {
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/images/favicon.ico' }]
    }
  },

  // Variabes to access on runtime for nuxt backend and public in browser
  runtimeConfig: {
    public: { }
  },

  // import styles
  css: ['@/assets/main.scss', '@/assets/variables.scss'],
  //...
  build: {
    transpile: ['vuetify'],
  },
  buildModules: ['@nuxt/typescript-build'],

  modules: [
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    'nuxt-security',
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
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    routeRules: {
      "/api/**": {
        proxy: {
          to: proxyTo + "/**",
          headers: {
            "X-API-KEY": NUXT_API_SECRET,
            // "authorization": "123456" // will be JWT Token after login, set in request
          },
          cors: true
        }
      },
      '/auth/**': { ssr: false },
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: title,
      short_name: shortTitle,
      theme_color: '#003b79',
      description: description,
      // gona look like an app
      display: "standalone",
      icons: [
        {
          src: 'images/pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'images/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'images/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'images/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],
    },
    workbox: {
      navigateFallback: null,
      cleanupOutdatedCaches: true,
      globPatterns: ['**/*.{json,ico,svg,ttf,woff,css,scss,txt,jpg,png,woff2,mjs,otf,ani}'], // files to cache in prod
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 14 // <== 14 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },{
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 14 // <== 14 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    client: {
      installPrompt: true,
    }
  },

  imports: {
    autoImport: true,
    dirs: [
      // scan all modules within given directory
      'composables/**',
      '../types/*.ts',
      '../types/**/*.ts'
    ]
  },

  devtools: {
    enabled: !IS_PRODUCTION,
  },
}

export default config