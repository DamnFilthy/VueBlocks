import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AppMainPage/AppMainPage.vue')
    },
    {
      path: '/demos',
      name: 'demos',
      component: () => import('../views/DemosListView.vue')
    },
    {
      path: '/demos/collapse',
      name: 'toggler',
      component: () => import('../views/demos/CollapseDemo.vue')
    }
  ]
});

export default router;
