import { createRouter, createWebHistory } from 'vue-router'
import ClientsLayout from '@/modules/clients/layouts/ClientsLayout.vue'
import CounterOptionsPage from '@/modules/counter/pages/CounterOptionsPage.vue'
import CounterSetupPage from '@/modules/counter/pages/CounterSetupPage.vue'
import ListPage from '@/modules/clients/pages/ListPage.vue'
import ClientPage from '@/modules/clients/pages/ClientPage.vue'

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
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      redirect: { name: 'list' },
      children: [
        {
          path: 'list',
          name: 'list',
          component: ListPage
        },
        {
          path: '/clients/:id',
          name: 'client-by-id',
          component: ClientPage
        }
      ]
    }
  ]
})

export default router
