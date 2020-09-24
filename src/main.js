import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as API from "@/api";

Vue.prototype.$API = API;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
