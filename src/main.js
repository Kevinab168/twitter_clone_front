import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
