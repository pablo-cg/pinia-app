<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useClient } from '../composables'
import LoadScreen from '@/modules/shared/components/LoadScreen.vue'

const route = useRoute()
const router = useRouter()

const clientId = computed(() => +route.params.id)

const { client, isError, isLoading, isSaving, saveClient, saved } = useClient(clientId.value)

watch(isError, () => {
  if (isError.value) {
    router.replace('/clients')
  }
})
</script>

<template>
  <section>
    <LoadScreen v-if="isLoading || isSaving" />
    <div v-if="client">
      <h1>{{ client.name }}</h1>
      <small v-if="saved">Guardado</small>
      <form @submit.prevent="saveClient(client)">
        <input v-model="client.name" type="text" placeholder="Nombre" />
        <input v-model="client.address" type="text" placeholder="Dirección" />
        <button :disabled="isLoading || isSaving" type="submit">Guardar</button>
      </form>
      <pre>{{ client }}</pre>
    </div>
  </section>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 50%;
  margin: 1rem 0;
}

input {
  padding: 5px 10px;
}

button {
  width: 50%;
}
</style>
