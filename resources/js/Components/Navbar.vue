<template>
  <header class="site-header">
    <div class="container">
      <!-- Brand -->
      <div class="logo" style="flex:0 0 auto;">
        <h1> Arcane Artifacts </h1>
      </div>

      <!-- Center search (flex-grow) -->
      <div style="flex:1; display:flex; justify-content:center;">
        <div class="search-bar" style="width:480px;">
          <input v-model="q" type="text" placeholder="Search paintings..." />
          <button @click="onSearch" aria-label="Search">🔍</button>
        </div>
      </div>

      <!-- Navigation links -->
      <nav class="main-nav" style="flex:0 0 auto; display:flex; align-items:center; gap:1rem;">
        <router-link to="/" @click="onNav('/')">Home</router-link>
        <router-link to="/shop" @click="onNav('/shop')">Shop</router-link>
        <router-link to="/about" @click="onNav('/about')">About</router-link>
        <router-link to="/contact" @click="onNav('/contact')">Contact</router-link>
        <router-link to="/cart" class="cart-icon" @click="onNav('/cart')">🛒</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return { q: '' };
  },
  methods: {
    onSearch() {
      // Preserve simple behavior: redirect to shop with query param
      if (this.q && this.q.trim()) {
        this.$router.push({ path: '/shop', query: { q: this.q.trim() } });
      } else {
        this.$router.push({ path: '/shop' });
      }
    },
    onNav(path) {
      console.log('Navbar click ->', path, ' Vue mounted?', !!window.__VUE_APP_MOUNTED__);
      // let router-link handle navigation; this is only for logging/diagnostics
    },
  },
};
</script>


