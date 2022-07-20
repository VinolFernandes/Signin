import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
// import { auth } from 'firebase/auth'
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
  },
  {
    path:'/register',
    name:'Register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to,from,next)=>{                       //preserves authentication after routing to home page
//   if(to.path === '/login' && auth.currentUser){
//     next('/')
//     return;
//   }
//   if(to.matched.some(record=> record.meta.requiresAuth)&& !auth.currentUser){
//     next('/login')
//     return;
//   }
//   next();
// })


export default router
