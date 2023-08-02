import CounterOptionsPage from '@/modules/counter/pages/CounterOptionsPage.vue'
import CounterSetupPage from '@/modules/counter/pages/CounterSetupPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-options',
      component: CounterOptionsPage
    },
    {
      path: '/setup',
      name: 'counter-setup',
      component: CounterSetupPage
    }
  ]
})

export default router
