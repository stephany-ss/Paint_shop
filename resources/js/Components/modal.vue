<template>
  <div v-if="modelValue" class="modal-backdrop" @click.self="close">
    <div class="modal-card">
      <header class="modal-header">
        <h3>{{ title }}</h3>
        <button class="modal-close" @click="close" aria-label="Close">×</button>
      </header>
      <div class="modal-body">
        <slot />
      </div>
      <footer class="modal-footer">
        <button class="btn-primary" @click="close">{{ okText }}</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  title: { type: String, default: '' },
  okText: { type: String, default: 'OK' }
});

const emit = defineEmits(['update:modelValue']);

const close = () => emit('update:modelValue', false);
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
}
.modal-card {
  background: white;
  border-radius: 8px;
  width: 420px;
  max-width: calc(100% - 40px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  overflow: hidden;
}
.modal-header {
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
}
.modal-header h3 { margin:0; font-size:16px; color:#2f2a26; }
.modal-close { background:transparent; border:none; font-size:20px; cursor:pointer; }
.modal-body { padding: 16px; color:#444; }
.modal-footer { padding: 12px 16px; border-top:1px solid #f0e0d0; text-align:right; }
.modal-footer .btn-primary { padding: 8px 14px; border-radius: 6px; }
</style>
