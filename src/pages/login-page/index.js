import App from './index.vue'
import Vue from 'vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'


Vue.use(Mint);


const app = new Vue(App)

app.$mount()
