import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/HomePage/HomePage.vue'),
  },
  {
    path: '/service',
    component: () => import('@/pages/ServicePage/ServicePage.vue'),
  },
  {
    path: '/education',
    component: () => import('@/pages/EducationPage/EducationPage.vue'),
  },
  {
    path: '/free',
    component: () => import('@/pages/FreeDocuments.vue'),
  },
  {
    path: '/calc',
    component: () => import('@/pages/CalculationPage/CalculationPage.vue'),
  },
  {
    path: '/privacy',
    component: () => import('@/pages/CalculationPage/CalculationPage.vue'),
  },
  {
    path: '/cases/:id',
    component: () => import('@/pages/CasePage/CasePage.vue'),
  },
  {
    path: '/cases',
    component: () => import('@/pages/CaseArchievePage.vue')
  },
  {
    path: '/t/:name',
    component: () => import('@/pages/TripwirePage/TripwirePage.vue')
  },
  {
    path: '/404',
    component: () => import('@/pages/NotFound/NotFound.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/pages/NotFound/NotFound.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash }
    } else {
      return { left: 0, top: 0 }
    }
  },
})

export default router
