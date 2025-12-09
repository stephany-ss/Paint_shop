<template>
  <AppLayout>
    <section class="shop-page">
      <div class="container">
        <h1>Our Collection</h1>
        <p>Browse and bid on our curated selection of vintage paintings</p>

        <!-- Filters -->
        <div class="filters">
          <div class="category-filter">
            <span>Category: </span>
            <button
              v-for="cat in categories"
              :key="cat"
              :class="{ active: selectedCategory === cat }"
              @click="setCategory(cat)"
            >
              {{ cat }}
            </button>
          </div>
          <div class="sort-filter">
            <span>Sort By</span>
            <select v-model="selectedSort" @change="sortPaintings">
              <option value="latest">Latest Added</option>
              <option value="highest">Highest Bid</option>
              <option value="lowest">Lowest Bid</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        <!-- Painting Grid -->
        <div class="painting-grid">
          <PaintingCard
            v-for="p in filteredAndSortedPaintings"
            :key="p.id"
            :painting="p"
          />
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppLayout from '@/Components/AppLayout.vue';
import PaintingCard from '@/Components/PaintingCard.vue';

// Define categories
const categories = ['All', 'Landscape', 'Portrait', 'Still Life'];
const selectedCategory = ref('All');
const selectedSort = ref('latest');

// Sample data with full auction info
const allPaintings = [
  {
    id: 1,
    title: 'Autumn Reflections',
    artist: 'Thomas Mitchell',
    category: 'Landscape',
    startingBid: 1200,
    currentBid: 2100,
    auctionEnds: '7 days',
    image: '/assets/Autumn_Reflections.jpg'
  },
  {
    id: 2,
    title: 'Moonlit Garden',
    artist: 'Edward Davis',
    category: 'Landscape',
    startingBid: 1500,
    currentBid: 2800,
    auctionEnds: '5 days',
    image: '/assets/Moonlit_Garden.jpg'
  },
  {
    id: 3,
    title: 'Still Life Harmony',
    artist: 'Margaret Foster',
    category: 'Still Life',
    startingBid: 1000,
    currentBid: 1600,
    auctionEnds: '2 days',
    image: '/assets/Still_Life_Harmony.jpg'
  },
  {
    id: 4,
    title: 'Coastal Dreams',
    artist: 'James Sterling',
    category: 'Landscape',
    startingBid: 2000,
    currentBid: 3500,
    auctionEnds: '4 days',
    image: '/assets/Coastal_Dreams.jpg'
  },
  {
    id: 5,
    title: 'Portrait of Elegance',
    artist: 'Isabella Romano',
    category: 'Portrait',
    startingBid: 2000,
    currentBid: 4200,
    auctionEnds: '3 days',
    image: '/assets/Portrait_of_Elegance.jpg'
  },
  {
    id: 6,
    title: 'Victorian Romance',
    artist: 'Caroline Wells',
    category: 'Portrait',
    startingBid: 3000,
    currentBid: 5000,
    auctionEnds: '1 day',
    image: '/assets/Victorian_Romance.jpg'
  }
];

// Computed: Filter paintings by category
const filteredPaintings = computed(() => {
  if (selectedCategory.value === 'All') return allPaintings;
  return allPaintings.filter(p => p.category === selectedCategory.value);
});

// Computed: Sort paintings
const sortedPaintings = computed(() => {
  const sorted = [...filteredPaintings.value];
  switch (selectedSort.value) {
    case 'latest':
      return sorted; // Assume order is by ID or date added
    case 'highest':
      return sorted.sort((a, b) => b.currentBid - a.currentBid);
    case 'lowest':
      return sorted.sort((a, b) => a.currentBid - b.currentBid);
    case 'popular':
      return sorted.sort((a, b) => b.currentBid - a.currentBid); // Simplified
    default:
      return sorted;
  }
});

// Final computed: Filtered + Sorted
const filteredAndSortedPaintings = computed(() => sortedPaintings.value);

// Methods
const setCategory = (cat) => {
  selectedCategory.value = cat;
};

const sortPaintings = () => {
  // Sorting handled by computed property
};
</script>