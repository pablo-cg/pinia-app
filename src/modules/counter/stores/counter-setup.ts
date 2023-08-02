import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const counterSetupStore = () => {
  const count = ref<number>(0)
  const lastChanged = ref<Date>()

  function incrementBy(value: number) {
    count.value += value
    lastChanged.value = new Date()
  }

  return {
    count,
    increment: () => incrementBy(1),
    incrementBy,
    lastChanged,
    squaredCount: computed(() => count.value ** 2)
  }
}

export const useCounterSetupStore = defineStore('counterSetupStore', counterSetupStore)
