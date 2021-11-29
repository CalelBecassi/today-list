import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const authMiddle = (to, from, next) => {
  const user = store.getters.getCurrentUser;
  if (to.name != 'Login' && !user) {
    return next({
      path: '/login'
    })
  }
  else next()
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue') 
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: authMiddle,

  },
  {
    path: '/config',
    name: 'Config',
    component: () => import('../views/Config.vue'),
    beforeEnter: authMiddle
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
