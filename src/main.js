<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as API from "@/api";

Vue.prototype.$API = API;
Vue.config.productionTip = false;

=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as API from "./api"
import * as HOME from "./api/home/home"
Vue.config.productionTip = false
Vue.prototype.$API = API
Vue.prototype.$HOME = HOME
// console.log(HOME.getPopular())
>>>>>>> dcd03e0c177b98183e6e22faf2f6fc511004a2f7
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
