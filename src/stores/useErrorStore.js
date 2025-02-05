import { defineStore } from 'pinia'

export const useErrorStore = defineStore('error', {
  state: () => ({
    error: null,
  }),
  actions: {
    setError(message) {
      this.error = message
    },
    clearError() {
      this.error = null
    },
  },
})
