import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as API from "./api"
Vue.config.productionTip = false
Vue.prototype.$API = API
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
