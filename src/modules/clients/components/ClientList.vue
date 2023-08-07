<script setup lang="ts">
import type { Client } from '../interfaces'

interface ClientListProps {
  clients: Client[]
}
defineProps<ClientListProps>()
</script>

<template>
  <ul>
    <li v-for="client in clients" :key="client.id">
      <RouterLink :to="{ name: 'client-by-id', params: { id: client.id } }">
        {{ client.name }}
      </RouterLink>
    </li>
  </ul>
</template>
