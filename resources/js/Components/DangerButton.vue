<template>
  <button v-bind="$attrs" class="btn btn-danger"><slot /></button>
</template>

<script>
export default {
  name: 'DangerButton',
};
</script>

<style scoped>
.btn-danger { background:#dc2626;color:#fff;padding:0.5rem 1rem;border-radius:4px;border:none }
</style>
