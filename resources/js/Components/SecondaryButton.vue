<template>
  <button v-bind="$attrs" class="btn btn-secondary"><slot /></button>
</template>

<script>
export default { name: 'SecondaryButton' };
</script>

<style scoped>
.btn-secondary { background:#6b7280;color:#fff;padding:0.5rem 1rem;border-radius:4px;border:none }
</style>
