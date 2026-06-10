import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/views/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/pages/SignUp.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/pages/Login.vue'),
    },
    {
      path: '/winners',
      name: 'winners',
      component: () => import('@/views/pages/WinnersArchive.vue'),
    },
    {
      path: '/award/:id',
      name: 'awardDetail',
      component: () => import('@/views/pages/AwardDetail.vue'),
    },
    {
      path: '/about/contact',
      name: 'contactUs',
      component: () => import('@/views/AboutUs/ContactUs.vue'),
    },
    {
      path: '/news',
      name: 'announcements',
      component: () => import('@/views/AboutUs/AnnounceInform.vue'),
    },
    {
      path: '/news/:id',
      name: 'newsDetail',
      component: () => import('@/views/pages/NewsDetail.vue'),
    },
    {
      path: '/about/intro',
      name: 'ideaIntro',
      component: () => import('@/views/AboutUs/IdeaIntro.vue'),
    },
    {
      path: '/about/charter',
      name: 'ideaCharter',
      component: () => import('@/views/AboutUs/IdeaConstitution.vue'),
    },
    {
      path: '/about/council',
      name: 'interCouncil',
      component: () => import('@/views/AboutUs/InterCouncil.vue'),
    },
    {
      path: '/about/criteria',
      name: 'reviewCriteria',
      component: () => import('@/views/AboutUs/ReviewCriteria.vue'),
    },
  ],
})

export default router
