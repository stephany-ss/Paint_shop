<!-- resources/js/Layouts/AppLayout.vue -->
<template>
  <div class="app-layout">
    <Navbar />
    <main class="site-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
</script>