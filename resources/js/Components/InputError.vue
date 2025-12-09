<template>
  <p v-if="message" class="input-error">{{ message }}</p>
</template>

<script>
export default {
  name: 'InputError',
  props: {
    message: {
      type: [String, Array, Object],
      default: null,
    },
  },
};
</script>

<style scoped>
.input-error { color: #dc2626; font-size: 0.875rem; margin-top: 0.25rem }
</style>
