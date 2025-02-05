<template>
  <div>
    <!-- Alerts Container -->
    <div class="fixed top-5 inset-x-0 flex flex-col gap-4 items-center justify-center z-[100]">
      <!-- Success Alert -->
      <transition name="fade-slide">
        <div
          v-if="isSuccess"
          role="alert"
          class="alert alert-success w-[320px] p-4 flex items-center gap-3 shadow-lg rounded-lg backdrop-blur-md bg-opacity-80"
        >
          <span class="font-semibold">{{ messageSuccess }}</span>
        </div>
      </transition>

      <!-- Loading Alert -->
      <transition name="fade-slide">
        <div
          v-if="isLoading"
          role="alert"
          class="alert alert-neutral w-[320px] p-4 flex justify-center items-center gap-3 shadow-lg rounded-lg backdrop-blur-md bg-opacity-80"
        >
          <span class="loading loading-spinner loading-lg"></span>
          <span class="font-semibold">Loading...</span>
        </div>
      </transition>

      <!-- Error Alert -->
      <transition name="fade-slide">
        <div
          v-if="error"
          role="alert"
          class="alert alert-error w-[320px] p-4 flex items-center gap-3 shadow-lg rounded-lg backdrop-blur-md bg-opacity-80"
        >
          <span class="font-semibold">{{ error }}</span>
        </div>
      </transition>
    </div>

    <RouterView />
  </div>
</template>

<script>
import { useLoadingStore } from '@/stores/useLoadStore'
import { useErrorStore } from '@/stores/useErrorStore'
import { useSuccessStore } from '@/stores/useSuccesStore'

export default {
  computed: {
    isLoading() {
      return useLoadingStore().isLoading
    },
    error() {
      return useErrorStore().error
    },
    isSuccess() {
      return useSuccessStore().isSuccess
    },
    messageSuccess() {
      return useSuccessStore().messageSuccess
    },
  },
  created() {
    const errorStore = useErrorStore()
    const successStore = useSuccessStore()
    const loadingStore = useLoadingStore()

    // Auto-hide error messages after 3 seconds
    errorStore.$subscribe((mutation, state) => {
      if (state.error) {
        setTimeout(() => {
          errorStore.clearError()
        }, 3000)
      }
    })

    // ✅ Auto-hide success message after 3 seconds
    loadingStore.$subscribe((mutation, state) => {
      if (state.isLoading) {
        setTimeout(() => {
          loadingStore.stopLoading()
        }, 1000)
      }
    })

    // ✅ Auto-hide success message after 3 seconds
    successStore.$subscribe((mutation, state) => {
      if (state.isSuccess) {
        setTimeout(() => {
          successStore.stopSuccess()
        }, 1000)
      }
    })
  },
}
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
