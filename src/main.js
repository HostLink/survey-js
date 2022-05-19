import Vue from 'vue'
import App from './App.vue'


import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import locale from 'element-ui/lib/locale/lang/en';

Vue.use(ElementUI, { size: 'small', locale });



Vue.config.productionTip = false

import "@fortawesome/fontawesome-free/css/all.css";

new Vue({
  render: h => h(App),
}).$mount('#app')
