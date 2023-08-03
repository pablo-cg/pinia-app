import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Client } from '../interfaces'

const clientsStoreDefinition = () => {
  const currentPage = ref(1)
  const totalPages = ref(5)
  const clients = ref<Client[]>([])

  function setClients(data: Client[]) {
    clients.value = data
  }

  function setPage(page: number) {
    if (page <= 0 || page > totalPages.value) return

    currentPage.value = page
  }

  return {
    currentPage,
    totalPages,
    clients,
    setClients,
    setPage
  }
}

export const useClientsStore = defineStore('clientsStore', clientsStoreDefinition)
