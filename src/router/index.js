import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import SystemView from '@/views/SystemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/foj/user/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/foj/system',
      name: 'system',
      component: SystemView,
    },
  ],
})

export default router
