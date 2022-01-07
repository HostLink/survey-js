import Vue from 'vue'
import App from './App.vue'


import ElementUI from "element-ui";

import locale from 'element-ui/lib/locale/lang/en';

Vue.use(ElementUI, { size: 'small', locale });

import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false

import "@fortawesome/fontawesome-free/css/all.css";

new Vue({
  render: h => h(App),
}).$mount('#app')
