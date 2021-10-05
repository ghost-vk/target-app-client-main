export const setApiErrorCallback = (api, cb) => {
  if (typeof cb !== 'function') {
    return
  }
  api?.interceptors.response.use(
    (config) => config,
    (e) => {
      if (!e.response) {
        console.log('Please check your internet connection.')
      }
      cb()
      return Promise.reject(e)
    }
  )
}