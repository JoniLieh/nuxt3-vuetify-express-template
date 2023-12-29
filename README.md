# Nuxt3-vuetify-express-template

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# Features
* SSR Frontend
* Secured Backend
* PWA 

# General Setup
1. Use `.env` files
2. Configure `nuxt.config.ts`
3. *(required for PWA)* Generate frontend images depending on `/public/images/logo.svg` run `bun run generate-pwa-assets`
4. *VSCode Extensions* `Nuxtr`,`Volar`*(`volar-takeover-mode`)* *(,`Vue 3 Snippets`,`Vue Volar extension Pack`)*
5. Install with `bun install` or `bun reset` in each directory

# Frontend `/frontend`
## Setup
```sh
bun install

# Development
bun run dev

# Production
bun run build
bun run start
```
## Packages
* `Nuxt`
* `Vuetify`
* `Vite/PWA`

# Backend `/backend`
## Setup
```sh
bun install

# Development
bun run dev

# Production
bun run start
```
## Packages
* `express` *w/* `body-parser`
* `cors`


## Security included
* `cors` origin whitelist
* `x-api-key` whitelist
* loggers
* rate limiter
* *optional* add HTTPS
* *optional* add `JWT` `Authorization`

# Troubleshooting


## Hydration Error
* Could be caching problem e.g. `pwa workbox` → check `globPatterns` in `nuxt.config.ts` or `injectManifest` w/ `sw.js`
## tsconfig.json Error / Auto-Imports not registered
* Open `frontend` and `backend` in a different vscode(ensure ts works as expected)