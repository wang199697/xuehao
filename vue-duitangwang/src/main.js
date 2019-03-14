// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "./stylesheets/main.scss"

import "./modules/rem"
//引入axios
import axios from "axios"
Vue.prototype.$http = axios;//在所有的组件中可以通过this.$http就可以获取axios了
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
