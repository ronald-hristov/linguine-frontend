import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import moment from 'vue-moment'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(moment);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
