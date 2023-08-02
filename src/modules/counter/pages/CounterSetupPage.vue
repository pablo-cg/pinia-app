<script setup lang="ts">
import { storeToRefs } from 'pinia'
import CounterSetupValue from '../components/CounterSetupValue.vue'
import { useCounterSetupStore } from '../stores/counter-setup'

const counterSetupStore = useCounterSetupStore()
const { count, squaredCount } = storeToRefs(counterSetupStore)
const { increment, incrementBy } = counterSetupStore
</script>

<template>
  <main>
    <h1>Pinia Setup</h1>
    <h2>Counter: {{ count }}</h2>
    <h3>Squared Counter: {{ squaredCount }}</h3>

    <button @click="increment()">+ 1</button>
    <button @click="incrementBy(2)">+ 2</button>
    <button @click="incrementBy(5)">+ 5</button>
  </main>
  <CounterSetupValue />
</template>
<style scoped>
button {
  font-size: 1.3rem;
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>
