import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Member/LogIn.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/serve1',
    name: 'serve1',
    component: function () {
      return import('../components/Serve/ServePage1.vue')
    }
  },
  {
    path: '/serve2',
    name: 'serve2',
    component: function () {
      return import('../components/Serve/ServePage2.vue')
    }
  },
  {
    path: '/serve3',
    name: 'serve3',
    component: function () {
      return import('../components/Serve/ServePage3.vue')
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path:'/productpage',
    name: 'productpage',
    component: function () {
      return import('../components/Member/ProductPage.vue')
    }
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
