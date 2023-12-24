import { markRaw } from 'vue'
// adapt this based on where your router is
// https://pinia.vuejs.org/core-concepts/plugins.html#adding-new-external-properties
export default defineNuxtPlugin((nuxtApp) => {
  usePinia().use(({ store } : any) => {
    store.router = markRaw(useRouter())
  })
})
