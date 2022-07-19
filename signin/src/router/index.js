import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      requiresAuth :true
    }

  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue'),
    meta:{
      requiresAuth :true
    }
  },
  {
    path:'/login',
    name : 'Login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
