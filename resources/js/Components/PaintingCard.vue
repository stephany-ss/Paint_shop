<template>
  <div class="painting-card">
    <div class="image-wrap">
      <img :src="painting.image" :alt="painting.title || 'Painting'" @error="onImageError" />
    </div>
    <div class="painting-info">
      <h3>{{ painting.title }}</h3>
      <p class="artist">by {{ painting.artist }}</p>
      <p class="current-bid">Current Bid
        <strong>{{ displayCurrentBid }}</strong>
      </p>
      <div class="card-bottom">
        <router-link :to="`/product/${painting.id}`" class="view-btn">View</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  painting: {
    type: Object,
    required: true
  }
});

const formatCurrency = (value) => {
  if (value == null || value === '') return '$0';
  const n = Number(String(value).replace(/[^0-9.-]/g, ''));
  if (Number.isNaN(n)) return String(value);
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
};

const displayCurrentBid = computed(() => formatCurrency(props.painting.currentBid));

const onImageError = (e) => {
  e.target.src = 'https://placehold.co/300x200?text=No+Image';
};
</script>