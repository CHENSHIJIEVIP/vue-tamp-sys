// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'

import axios from 'axios'
Vue.prototype.$http=axios
axios.defaults.headers.post['source'] = 'web'
axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.use(Element)

import Mock from './mock'
Mock.init()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
