# Nuxt3-vuetify-express-template

![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)

# General Setup
Use `.env` files

# Frontend
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

# Backend
## Setup
```sh
bun install

# Development
bun run dev

# Production
bun run start
```
## Packages
* `express` *with* `body-parser`
* `cors`


## Security included
* `cors` domain whitelisting
* `x-api-key` whitelisting
* *optional* HTTPS
* *optional* `JWT` `Authorization`