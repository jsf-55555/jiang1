// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import axios from "axios"
import VueAxios from "vue-axios"
import ELementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import router from "./scripts/router"   //引入路由文件
import 'es6-promise/auto'
import VueCookies from 'vue-cookies'   //vue-cookie是专属于vue的cookie方法
// import VeeValidate from 'vee-validate'; //表单验证插件
 

Vue.use(VueRouter)
Vue.use(VueAxios,axios)
Vue.use(ELementUI)
Vue.use(VueCookies)
// Vue.use(VeeValidate, config);

Vue.config.productionTip = false

const $cookies = require('vue-cookies')

// const config = {
//   errorBagName: 'errorBags', // change if property conflicts.
//   fieldsBagName: 'fieldBags',
// };


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  render: h=>h(App),
})
