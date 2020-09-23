

let storageUtil = (key) => ({
  set (v = '') {
    window.localStorage.setItem(key, v)
  },
  get (key) {
    return window.localStorage.getItem(key)
  },
  remove (key) {
    window.localStorage.removeItem(key)
  }
})

module.exports = {
  cookie: storageUtil('_x_session')
}
