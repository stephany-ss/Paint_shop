<template>
  <button v-bind="$attrs" class="btn btn-primary"><slot /></button>
</template>

<script>
export default { name: 'PrimaryButton' };
</script>

<style scoped>
.btn-primary { background:#2563eb;color:#fff;padding:0.5rem 1rem;border-radius:4px;border:none }
</style>
