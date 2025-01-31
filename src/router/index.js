import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import SystemView from '@/views/SystemView.vue'
import LayoutView from '@/views/LayoutView.vue'
import UserView from '@/views/UserView.vue'
import QuestionView from '@/views/QuestionView.vue'
import ExamView from '@/views/ExamView.vue'
import { getToken } from '@/utils/cookie'
import UpdateExam from '@/views/UpdateExam.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/foj/user/login',
    },
    {
      path: '/foj/user/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/foj/layout',
      name: 'layout',
      redirect: '/foj/layout/question',
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
        {
          path: '/foj/layout/UpdateExam',
          name: 'updateExam',
          component: UpdateExam,
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (getToken()) {
    //已经登陆过
    /* has token*/
    if (to.path === '/foj/user/login') {
      next({ path: '/foj/layout/question' })
    } else {
      next()
    }
  } else {
    if (to.path !== '/foj/user/login') {
      next({ path: '/foj/user/login' })
    } else {
      next()
    }
  }
})

export default router
