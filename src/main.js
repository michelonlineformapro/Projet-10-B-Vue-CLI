//Appel du framework vuejs
import Vue from 'vue'
//Appel du point d'entrée App.vue
import App from './App.vue'
import router from './router'

//Import de bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
