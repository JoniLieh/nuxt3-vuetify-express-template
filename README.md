# Nuxt3-vuetify-express-template

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# Features
* SSR Frontend
* Secured Backend
* PWA 
* Bunjs
* Docker

# General Setup
1. Use `.env` files
2. Configure `nuxt.config.ts`
3. *(required for PWA)* Generate frontend images depending on `/public/images/logo.svg` run `bun run generate-pwa-assets`
<small>(You need special sized images for PWA, if you don't have any, you can generate them)</small>
4. *VSCode Extensions* `Nuxtr`,`Volar`*(`volar-takeover-mode`)* *(,`Vue 3 Snippets`,`Vue Volar extension Pack`)*
5. Install with `bun install` or `bun reset` in each directory

# Docker
```sh
# simple
docker compose -d --env-file .env.production up
# run with rebuilt
docker compose -d --env-file .env.production --build --force-recreate up
# force rebuilt container
docker compose --env-file .env.production build --no-cache
```

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

## Info

* Proxy from frontend to backend, env `NUXT_PUBLIC_API_BASE` should be service "`backend`" domain look at `const proxyTo` in `nuxt.config.ts`

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
## `error: zlib.BrotliDecompress is not implemented`
* Docker `FROM oven/bun` does not support BrotliDecompress, use different image instead
