const Storage                = require('./storage.js')

const baseUrl = 'https://dujuncheng.com/notebook'

Megalo.request.interceptors.after.use(res => {
  if (res.header && res.header['x_session']) {
    Storage.cookie.set(res.header['x_session'])
  }
  if (res && res.data && !res.data.success && Number(res.data.err_code) === 2) {
    // 跳去 login 页面
    Megalo.redirectTo({
      url: '/pages/login-page/index'
    })
  }
  return res
}, err => {
  return Promise.reject(err)
})

const ajax = (type, method, params) => {
  return Megalo.request({
    method: type,
    url: `${baseUrl}?method=${method}`,
    data: params,
    header: {
      'Cookie': `_x_session=${Storage.cookie.get()}`
    }
  })
}

module.exports = ajax
