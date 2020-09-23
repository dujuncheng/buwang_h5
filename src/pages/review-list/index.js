import App from './App.vue'
import Vue from 'vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'


Vue.use(Mint);


new Vue({
  render: h => h(App)
}).$mount('#app')


if (typeof window.hideLoadingSpin() === 'function') {
  window.hideLoadingSpin()
}

