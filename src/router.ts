import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home.vue'),
    },
    {
      path: '/settings',
      component: () => import('@/pages/settings.vue'),
    },
  ],
})

export default router
