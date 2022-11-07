import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    {
      path: '/:id',
      component: () => import('@/views/AnimalDetailsView.vue'),
      props: true,
    },
  ],
})
