<template>
  <AppLayout>
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Curated Vintage Paintings & Live Auctions</h1>
          <p>Explore our exquisite collection of vintage masterpieces from renowned artists. Bid on rare artworks and add them to your personal gallery.</p>
          <div class="hero-buttons">
            <router-link to="/shop" class="btn-primary">Browse Collection</router-link>
            <router-link to="/about" class="btn-secondary">Learn More</router-link>
          </div>
        </div>
        <div class="hero-image">
          <img src="/assets/home-hero.jpg" alt="Featured Painting" />
        </div>
      </div>
    </section>

    <!-- FEATURED WORKS SECTION -->
    <section class="featured-section">
      <div class="container">
        <h2>Featured Works</h2>
        <p>Explore some of our most sought-after paintings currently available for bidding.</p>
        <div class="painting-grid">
          <PaintingCard v-for="p in featuredPaintings" :key="p.id" :painting="p" />
        </div>

        <div class="container-view-all-button">
          <div class="view-all-button">
            <router-link to="/shop" class="btn-primary">View All Paintings</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY COLLECT WITH US SECTION -->
    <section class="why-collect-section">
      <div class="container">
        <h2>Why Collect With Us</h2>
        <div class="benefits-grid">
          <div class="benefit-card">

            <h3>Curated Selection</h3>
            <p>Each artwork is carefully authenticated and selected by our expert curators.</p>
          </div>
          <div class="benefit-card">
            <h3>Secure Bidding</h3>
            <p>Transparent auction process with secure payment options for your peace of mind.</p>
          </div>
          <div class="benefit-card">
            <h3>Global Delivery</h3>
            <p>We ship authenticated artworks worldwide with full insurance coverage.</p>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import AppLayout from '@/Components/AppLayout.vue';
import PaintingCard from '@/Components/PaintingCard.vue';

const featuredPaintings = [
  {
    id: 1,
    title: 'Masterpiece 1',
    artist: 'Renowned Artist',
    currentBid: '$2,500',
    image: '/assets/paint_1.jpg'
  },
  {
    id: 2,
    title: 'Masterpiece 2',
    artist: 'Renowned Artist',
    currentBid: '$2,500',
    image: '/assets/paint_2.jpg'
  },
  {
    id: 3,
    title: 'Masterpiece 3',
    artist: 'Renowned Artist',
    currentBid: '$2,500',
    image: '/assets/paint_3.jpg'
    }
];
</script>