import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreateLaunchView from '@/views/CreateLaunchView.vue'
import LaunchView from '@/views/LaunchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create-launch',
      name: 'create-lauch',
      component: CreateLaunchView,
    },
    {
      path: '/launches/:id',
      component: LaunchView,
      props: true,
    },
  ],
})

export default router
