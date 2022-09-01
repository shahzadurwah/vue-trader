import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Portfolio from '../components/Portfolio/Portfolio.vue'
import Stocks from '../components/Stock/Stocks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/Stocks',
      name: 'Stocks',
      component: Stocks
    },

  ]
})

export default router
