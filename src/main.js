import Vue from 'vue'
import App from './App.vue'
import router from './router'
import navbar from './components/navbar.vue'

Vue.component('navbar', navbar)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
