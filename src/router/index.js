import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home'
import history from '../components/history'
import dashboard from '../components/dashboard'
import newresident from '../components/new-resident'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
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
    },
    {
      path: '/residents/new',
      name: 'new-resident',
      component: newresident
    }
  ]
})

export default router
