let storageUtil = (key) => ({
  set (v = '') {
    Megalo.setStorageSync(key, v)
  },
  get () {
    return Megalo.getStorageSync(key)
  },
  remove () {
    Megalo.removeStorageSync(key)
  }
})

module.exports = {
  cookie: storageUtil('_x_session')
}
