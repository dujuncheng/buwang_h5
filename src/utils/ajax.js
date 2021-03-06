const axios = require('axios')

const baseUrl = process.NODE_ENV === 'production' ? "https://dujuncheng.com/notebook" : "/notebook";

axios.interceptors.response.use(function (res) {
  if (
    res &&
    res.data &&
    !res.data.success &&
    Number(res.data.err_code) === 2
  ) {
    // 跳去 login 页面
    window.location.href = "/buwang_h5/login-page.html"
  }
  return res;
}, function (error) {
  console.log(error)
  return Promise.reject(error);
});
const ajax = (type, method, params) => {
  return axios({
    method: type,
    url: `${baseUrl}?method=${method}`,
    data: params,
    withCredentials: true,
  });
};

module.exports = ajax;
