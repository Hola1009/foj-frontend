import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import SystemView from '@/views/SystemView.vue'
import LayoutView from '@/views/LayoutView.vue'
import UserView from '@/views/UserView.vue'
import QuestionView from '@/views/QuestionView.vue'
import ExamView from '@/views/ExamView.vue'

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
    {
      path: '/foj/layout',
      name: 'layout',
      component: LayoutView,
      children: [
        {
          path: '/foj/layout/user',
          name: 'user',
          component: UserView,
        },
        {
          path: '/foj/layout/question',
          name: 'question',
          component: QuestionView,
        },
        {
          path: '/foj/layout/Exam',
          name: 'exam',
          component: ExamView,
        },
      ],
    },
  ],
})

export default router
