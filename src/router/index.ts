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
      component: () => import('../views/AppDemoList/AppDemoList.vue')
    },
    {
      path: '/demos/collapse',
      name: 'collapse',
      component: () => import('../views/demos/AppCollapseDemo/AppCollapseDemo.vue')
    }
  ]
});

export default router;
