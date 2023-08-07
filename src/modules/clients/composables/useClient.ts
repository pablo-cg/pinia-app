import { ref, watch } from 'vue'
import { useMutation, useQuery } from '@tanstack/vue-query'
import type { Client } from '../interfaces'
import clientsApi from '@/api/clientsApi'

async function getClient(id: number) {
  const { data } = await clientsApi.get<Client>(`/clients/${id}`)
  return data
}

async function updateClient(client: Client): Promise<Client> {
  const { id, ...clientDetails } = client

  const { data } = await clientsApi.patch<Client>(`/clients/${id}`, clientDetails)

  // const queries = queryClient.getQueryCache().findAll(['clients?page='], { exact: true })
  // queries.forEach((query) => query.reset())

  return data
}

export const useClient = (id: number) => {
  const client = ref<Client>()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['client', id],
    queryFn: () => getClient(id),
    retry: false
  })

  watch(
    data,
    (clientData) => {
      if (!clientData) return

      client.value = { ...clientData }
    },
    { immediate: true }
  )

  const {
    isLoading: isSaving,
    mutate,
    isSuccess,
    reset
  } = useMutation({
    mutationFn: updateClient
  })

  watch(isSuccess, () => {
    setTimeout(() => {
      reset()
    }, 2000)
  })

  return {
    client,
    isError,
    isLoading,
    isSaving,
    saveClient: mutate,
    saved: isSuccess
  }
}
