<script setup lang="ts">
import LoadScreen from '@/modules/shared/components/LoadScreen.vue'
import ClientList from '../components/ClientList.vue'
import ListPagination from '../components/ListPagination.vue'
import { useClients } from '../composables'

const { isLoading, clients, currentPage, totalPages, changePage } = useClients()
</script>

<template>
  <main>
    <h1>Listado de Clientes</h1>
    <ClientList :clients="clients" />
    <ListPagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page="changePage"
    />
    <LoadScreen v-if="isLoading" />
  </main>
</template>
