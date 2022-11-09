import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useStore } from '@/store'
import type { AnimalType } from '@/model'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    {
      path: '/:type/:id',
      component: () => import('@/views/AnimalDetailsView.vue'),
      props: (route) => {
        const store = useStore()
        return {
          animal: store[route.params.type as AnimalType].find(
            (a) => a.id.toString() === route.params.id
          ),
          type: route.params.type,
        }
      },
      name: 'animal_details',
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
