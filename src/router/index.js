import { createRouter, createWebHistory } from 'vue-router'

import AdminRoutes from '@/router/AdminRoutes/AdminRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: import('@/layouts/AdminLayout.vue'),
      children: AdminRoutes,
    },
    { path: '/:pathMatch(.*)*', redirect: '/admin' },
  ],
})

export default router
