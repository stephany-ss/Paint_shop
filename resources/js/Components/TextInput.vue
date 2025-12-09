<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="text-input"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: [String, Number],
  },
};
</script>

<style scoped>
.text-input { padding:0.5rem;border:1px solid #d1d5db;border-radius:4px;width:100% }
</style>
