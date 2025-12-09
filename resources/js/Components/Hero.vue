<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
      <span class="hero-tag">Discover Timeless Artistry</span>

      <h1 class="hero-title">
        Curated<br />
        Vintage<br />
        Paintings &<br />
        Live Auctions
      </h1>

      <p class="hero-text">
        Explore our exquisite collection of vintage masterpieces from renowned
        artists. Bid on rare artworks and add them to your personal gallery.
      </p>

      <div class="hero-buttons">
        <router-link to="/shop" class="btn-primary">
          Browse Collection
        </router-link>
        <router-link to="/about" class="btn-outline">
          Learn More
        </router-link>
      </div>
      </div>

      <div class="hero-image">
        <img src="/images/hero-painting.jpg" alt="Vintage Painting" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
/* keep styling in global CSS; small local adjustments can go here */
</style>
