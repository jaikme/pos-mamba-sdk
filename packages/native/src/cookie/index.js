import CookieMock from './mock.js'

let Cookie = window.MbCookie
if (process.env.NODE_ENV !== 'production') {
  Cookie = window.MbCookie = new CookieMock()
} else {
  if (!Cookie) {
    throw new Error("[@mamba/native] 'Cookie' module not found")
  }
}

export default Cookie