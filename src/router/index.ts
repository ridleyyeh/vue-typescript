import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import MemberCenter from '@/views/MemberCenter.vue'
import LessonSectionPage from '@/views/LessonSectionPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/memberCenter',
      name: 'MemberCenter',
      component: MemberCenter
    },
    {
      path: '/lessonSectionPage',
      name: 'LessonSectionPage',
      component: LessonSectionPage
    }
  ]
})

export default router
