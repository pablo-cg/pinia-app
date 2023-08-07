<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterOptionsStore } from '../stores/counter-options'
import CounterOptionsValue from '../components/CounterOptionsValue.vue'

const counterOptionsStore = useCounterOptionsStore()
const { count, squareCount } = storeToRefs(counterOptionsStore)
const { increment, incrementBy } = counterOptionsStore
</script>

<template>
  <main>
    <h1>Pinia Options</h1>
    <h2>Counter: {{ count }}</h2>
    <h3>Squared Counter: {{ squareCount }}</h3>

    <button @click="increment()">+ 1</button>
    <button @click="incrementBy(2)">+ 2</button>
    <button @click="incrementBy(5)">+ 5</button>
    <button @click="counterOptionsStore.$reset">Reset</button>
  </main>
  <CounterOptionsValue />
</template>
<style scoped>
button {
  font-size: 1.3rem;
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>
