import Vue from "vue";
import router from "./router/index"
import App from "./App";
require("font-awesome/css/font-awesome.min.css");

Vue.config.productionTip = false;


new Vue({
    el : "#app",
    router,
    render : h=>h(App)
});