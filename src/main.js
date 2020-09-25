import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as API from "./api";
import * as HOME from "./api/home/home";
Vue.config.productionTip = false;
Vue.prototype.$API = API;
Vue.prototype.$HOME = HOME;
// console.log(HOME.getPopular())
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
