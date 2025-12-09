<template>
  <label v-bind="$attrs" class="input-label"><slot /></label>
</template>

<script>
export default {
  name: 'InputLabel',
};
</script>

<style scoped>
.input-label { display:block; font-weight:600; margin-bottom:0.5rem }
</style>
