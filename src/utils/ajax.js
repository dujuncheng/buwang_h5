const Storage = require("./storage.js");
const axios = require('axios')

const baseUrl = "https://dujuncheng.com/notebook";

axios.interceptors.response.use(function (res) {
  if (
    res &&
    res.data &&
    !res.data.success &&
    Number(res.data.err_code) === 2
  ) {
    // 跳去 login 页面
    window.location.href = "/login-page"
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
