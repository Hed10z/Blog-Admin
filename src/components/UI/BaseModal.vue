<template>
  <!-- Modal -->
  <div>
    <div @click="getModal"><slot name="button">Open Modal</slot></div>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box rounded-3xl">
        <!-- Main -->
        <div>
          <slot name="main"> Main </slot>
        </div>

        <!-- Button -->
        <form method="dialog">
          <button method="dialog" class="btn w-full btn-lg rounded-2xl mt-2 shadow-xl border border-neutral-300">Close</button>
        </form>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  methods: {
    getModal() {
      document.getElementById('my_modal_1').showModal()
    },
  },
}
</script>
