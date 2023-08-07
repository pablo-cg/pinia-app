<script setup lang="ts">
interface ListPaginationProps {
  totalPages: number
  currentPage: number
}

interface ListPaginationEmits {
  (e: 'page', page: number): void
}

defineProps<ListPaginationProps>()
const emit = defineEmits<ListPaginationEmits>()
</script>

<template>
  <section>
    <button :disabled="currentPage === 1" @click="emit('page', currentPage - 1)">
      Anterior
    </button>
    <button
      v-for="page of totalPages"
      :key="page"
      @click="emit('page', page)"
      :class="[{ active: page === currentPage }]"
    >
      {{ page }}
    </button>
    <button :disabled="currentPage === totalPages" @click="emit('page', currentPage + 1)">
      Siguiente
    </button>
  </section>
</template>

<style scoped>
section {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}

button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  padding: 0.8rem;
  transition: all 150ms;
}

button:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

button:disabled,
button:hover:disabled {
  cursor: not-allowed;
  background-color: transparent;
}

.active {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
