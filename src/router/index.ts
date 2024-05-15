import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
// import IndexDark from './views/IndexDark.vue'
import Intro from '../views/Intro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
    // {
    //   path: '/index-dark',
    //   name: 'IndexDark',
    //   component: IndexDark
    // }
  ]
})

export default router
