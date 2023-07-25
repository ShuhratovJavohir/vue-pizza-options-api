import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'


const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/cart', name: 'Cart', component: () => import('@/pages/Cart.vue')},
  {path: '/:NotFound', name: 'NotFound', component: () => import('@/pages/404.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
