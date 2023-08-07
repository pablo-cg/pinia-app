<script setup lang="ts">
import { useCounterOptionsStore } from '../stores/counter-options'

const counter = useCounterOptionsStore()
</script>

<template>
  <main>
    <h1>El valor es: {{ counter.count }}</h1>
    <h4>Último cambio: {{ counter.lastChanged }}</h4>
  </main>
</template>
<style scoped>
button {
  font-size: 1.3rem;
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>
