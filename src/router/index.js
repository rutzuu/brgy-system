import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home'
import history from '../components/history'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})

export default router
