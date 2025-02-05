<template>
  <button :class="`bg-${this.variant}-300 p-3 rounded-lg shadow-md`">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'ghost',
      validator: (value) => ['blue', 'red', 'amber'].includes(value),
    },
  },
}
</script>
