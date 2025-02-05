import { defineStore } from 'pinia'

export const useSuccessStore = defineStore('success', {
  state: () => ({ isSuccess: false, messageSuccess: 'Success' }),
  actions: {
    startSuccess(value) {
      this.isSuccess = true
      this.messageSuccess = value
    },
    stopSuccess() {
      this.isSuccess = false
    },
  },
})
