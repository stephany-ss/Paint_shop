<template>
  <AppLayout>
    <section class="product-detail">
      <div class="container">
        <!-- Breadcrumb -->
        <div class="breadcrumb">
          <router-link to="/shop" class = "collection" >Collection</router-link> / <span>{{ product.title }}</span>
        </div>

        <!-- Main Content -->
        <div class="product-content">
          <!-- Left: Image -->
          <div class="product-image">
            <img
              :src="product.image"
              :alt="product.title"
              loading="lazy"
              @error="onImageError"
            />
          </div>

          <!-- Right: Info & Bidding -->
          <div class="product-info">
            <h1>{{ product.title }}</h1>
            <p class="artist">by {{ product.artist }}</p>

            <!-- Auction Info -->
            <div class="auction-info">
              <div class="info-item">
                <span class="label">Starting Bid</span>
                <span class="value">${{ product.startingBid }}</span>
              </div>
              <div class="info-item">
                <span class="label">Current Highest Bid</span>
                <span class="value-current-bid">${{ product.currentBid }}</span>
              </div>
              <div class="info-item">
                <span class="label">Auction Ends</span>
                <span class="value">{{ product.auctionEnds }}</span>
              </div>
            </div>

            <!-- Place Bid -->
            <div class="bid-section">
              <h3>Place Your Bid</h3>
               <div class="input-help" style="margin-top:8px;">
                <small style="color:#6b5a4a;">Minimum acceptable bid: <strong>{{ formatCurrency(minAcceptableBid) }}</strong></small>
              </div>
              <div class="bid-input-group">
                <input
                  v-model.number="bidAmount"
                  type="number" class="type-bid"
                  :min="minAcceptableBid"
                  :step="bidStep"
                  :placeholder="`Minimum: ${formatCurrency(minAcceptableBid)}`"
                  @input="validateBid"
                />
                <button @click="placeBid" class="place-bid-btn" :disabled="!!errorMessage || !bidAmount">Place Bid</button>
              </div>
              <div v-if="errorMessage" class="error" style="margin-top:6px;">{{ errorMessage }}</div>
              <button @click="toggleWishlist" class="wishlist-btn">
                <i class="fas" :class="{ 'fa-heart': isWishlisted, 'fa-heart-o': !isWishlisted }"></i>
                {{ isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist' }}
              </button>
            </div>

          

            <!-- Success Message -->
            <!-- Success Modal -->
            <Modal v-model="showModal" title="Bid Placed">
              <div style="line-height:1.4; color:#333;">{{ modalMessage }}</div>
            </Modal>
          </div>
        </div>

        <!-- About Sections -->
        <div class="about-sections">
          <div class="about-painting">
            <h3>About This Painting</h3>
            <p>{{ product.aboutPainting }}</p>
          </div>
          <div class="about-artist">
            <h3>About the Artist</h3>
            <p>{{ product.aboutArtist }}</p>
          </div>
        </div>

        <!-- You Might Also Like -->
        <div class="related-section">
          <h2>You Might Also Like</h2>
          <div class="painting-grid">
            <PaintingCard v-for="p in relatedPaintings" :key="p.id" :painting="p" />
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import AppLayout from '@/Components/AppLayout.vue';
import PaintingCard from '@/Components/PaintingCard.vue';
import Modal from '@/Components/Modal.vue';

const props = defineProps({
  id: { type: Number, required: true }
});

const product = ref({
  id: 1,
  title: 'Portrait of Elegance',
  artist: 'Isabella Romano',
  image: 'https://placehold.co/600x800?text=Portrait+of+Elegance',
  startingBid: 2000,
  currentBid: 4200,
  auctionEnds: '3 days',
  minimumBid: 4300,
  aboutPainting: 'An exquisite portrait capturing the grace and sophistication of a Victorian-era woman. The artist\'s skillful rendering of fabric textures and facial expressions is remarkable.',
  aboutArtist: 'Isabella Romano (1875-1950) was an acclaimed portrait artist celebrated for her ability to capture the personality and elegance of her subjects. Her works remain highly sought after.',
  bidHistory: [
    { collector: 'Collector P', time: '02:59 PM', amount: 4200 },
    { collector: 'Collector L', time: '12:59 PM', amount: 3900 }
  ]
});

const bidAmount = ref('');
const isWishlisted = ref(false);
const successMessage = ref('');
const modalMessage = ref('');
const showModal = ref(false);
const errorMessage = ref('');

// Bid increment step (default $100). Adjust as needed.
const bidStep = 100;

// Minimum acceptable bid: must be at least the configured minimum AND higher than current highest bid by the step
const minAcceptableBid = computed(() => {
  const current = Number(product.value.currentBid || 0);
  const configuredMin = Number(product.value.minimumBid || 0);
  const byCurrent = current + bidStep;
  return Math.max(configuredMin, byCurrent);
});

const formatCurrency = (amount) => {
  if (amount == null || Number.isNaN(Number(amount))) return '$0.00';
  return Number(amount).toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
};

const validateBid = () => {
  errorMessage.value = '';
  if (bidAmount.value === '' || bidAmount.value == null) return;
  const v = Number(bidAmount.value);
  if (Number.isNaN(v)) {
    errorMessage.value = 'Enter a valid number.';
    return;
  }
  if (v < minAcceptableBid.value) {
    errorMessage.value = `Your bid must be at least ${formatCurrency(minAcceptableBid.value)}.`;
  }
};

const placeBid = () => {
  errorMessage.value = '';
  const v = Number(bidAmount.value);
  if (!bidAmount.value || Number.isNaN(v)) {
    errorMessage.value = 'Please enter a bid amount.';
    return;
  }
  if (v < minAcceptableBid.value) {
    errorMessage.value = `Your bid must be at least ${formatCurrency(minAcceptableBid.value)}.`;
    return;
  }

  // Simulate successful bid: update currentBid and bid history
  modalMessage.value = `Bid of ${formatCurrency(v)} placed successfully! Added to your bid cart.`;
  // update local product state for immediate feedback
  product.value.currentBid = v;
  product.value.bidHistory.unshift({ collector: 'You', time: new Date().toLocaleTimeString(), amount: v });
  bidAmount.value = '';
  showModal.value = true;

  // In real app: send to backend, update cart state
};

const toggleWishlist = () => {
  isWishlisted.value = !isWishlisted.value;
};

// Related paintings
const relatedPaintings = [
  {
    id: 2,
    title: 'Autumn Reflections',
    artist: 'Thomas Mitchell',
    currentBid: '$2,100',
    image: 'https://placehold.co/300x200?text=Autumn'
  },
  {
    id: 3,
    title: 'Moonlit Garden',
    artist: 'Edward Davis',
    currentBid: '$2,800',
    image: 'https://placehold.co/300x200?text=Moonlit'
  }
];

onMounted(() => {
  console.log('Product ID:', props.id);
});

const onImageError = (e) => {
  // set a reliable fallback placeholder if the image fails to load
  e.target.src = 'https://placehold.co/600x800?text=No+Image';
};
</script>