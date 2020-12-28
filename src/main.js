// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'

import axios from 'axios'
import 'jquery'
import swal from 'sweetalert'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  swal,
  components: {
    App
  },
  template: '<App/>'
})
