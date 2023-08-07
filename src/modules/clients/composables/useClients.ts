import { computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import clientsApi from '@/api/clientsApi'
import type { Client } from '../interfaces'
import { useClientsStore } from '../stores'

async function getClients(page: number): Promise<Client[]> {
  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`)
  return data
}

export const useClients = () => {
  const store = useClientsStore()
  const { clients, currentPage } = storeToRefs(store)

  const { isLoading, data } = useQuery({
    queryKey: ['clients?_page=', currentPage],
    queryFn: () => getClients(currentPage.value)
  })

  watch(data, (clientsData) => {
    if (!clientsData) return

    store.setClients(clientsData)
  })

  return {
    clients,
    currentPage,
    isLoading,
    totalPages: computed(() => store.totalPages),
    changePage: store.setPage
  }
}
