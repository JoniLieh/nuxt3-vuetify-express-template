declare interface NuxtError {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  description: string
  data: any
}

export {
  NuxtError
}