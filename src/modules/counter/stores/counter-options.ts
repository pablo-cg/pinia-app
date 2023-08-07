import { defineStore } from 'pinia'

interface CounterOptionsStoreState {
  count: number
  lastChanged?: Date
}

export const useCounterOptionsStore = defineStore('counterOptions', {
  state: () =>
    ({
      count: 0,
      lastChanged: undefined
    }) as CounterOptionsStoreState,

  getters: {
    squareCount: (state) => state.count ** 2
  },

  actions: {
    incrementBy(value: number) {
      this.count += value
      this.lastChanged = new Date()
    },
    increment() {
      this.incrementBy(1)
    },
    decrement() {
      this.incrementBy(-1)
    }
  }
})
