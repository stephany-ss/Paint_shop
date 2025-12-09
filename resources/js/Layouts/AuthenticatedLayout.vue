<template>
  <div class="authenticated-layout">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
</script>

<style scoped>
.authenticated-layout { min-height:100vh; display:flex; flex-direction:column }
main { flex:1 }
</style>
