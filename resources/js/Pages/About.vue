<template>
  <AppLayout>
    <section class="about-page">
      <!-- Hero Section -->
      <div class="hero-section-about">
        <div class="container-about">
          <h1 class="about-h1">About Arcane Artifacts Gallery</h1>
          <p>Celebrating timeless masterpieces and connecting passionate collectors with exceptional vintage artworks.</p>
        </div>
      </div>

      <!-- Our Story -->
      <section class="our-story-section">
        <div class="container">
            <div class="story-text">
              <h2>Our Story</h2>
              <p>Founded in 2010, Arcane Artifacts Gallery began as a passion project by a group of art enthusiasts who believed that exceptional artworks deserved to be appreciated by collectors worldwide. What started as a small gallery in New York has grown into a premier platform for vintage art auctions.</p>
              <p>We’ve spent over a decade curating one of the finest collections of vintage paintings, working directly with museums, estates, and collectors to bring authentic masterpieces to our community.</p>
              <p>Today, we’re proud to serve thousands of collectors across the globe, maintaining the highest standards of authentication, preservation, and customer service.</p>
            </div>
            <div class="story-image">
              <img src='/assets/about.jpg' class= "placeholder-image" alt="Arcane Artifacts Gallery" />
            </div>
          </div>
      </section>

      <!-- Our Values -->
      <section class="values-section">
        <div class="container">
          <h2>Our Values</h2>
          <div class="values-grid">
            <div class="value-card">
              <h3>Authenticity</h3>
              <p>Every painting is meticulously authenticated by certified experts. We guarantee the provenance and originality of each work in our collection.</p>
            </div>
            <div class="value-card">
              <h3>Transparency</h3>
              <p>We believe in honest dealing. Full details about each artwork’s history, condition, and pricing are always available to our clients.</p>
            </div>
            <div class="value-card">
              <h3>Excellence</h3>
              <p>We maintain the highest standards in every aspect of our business, from curation to customer service, ensuring your complete satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Meet Our Team -->
      <section class="team-section">
        <div class="container">
          <h2>Meet Our Team</h2>
          <div class="team-grid">
            <div class="team-member">
              <img src="https://placehold.co/200x200?text=Margaret" alt="Margaret Ashford" />
              <h3>Margaret Ashford</h3>
              <p>Founder & Chief Curator</p>
              <p>30+ years in art acquisition and curation</p>
            </div>
            <div class="team-member">
              <img src="https://placehold.co/200x200?text=James" alt="James Richardson" />
              <h3>James Richardson</h3>
              <p>Authentication Expert</p>
              <p>Museum conservator and art historian</p>
            </div>
            <div class="team-member">
              <img src="https://placehold.co/200x200?text=Sophie" alt="Sophie Laurent" />
              <h3>Sophie Laurent</h3>
              <p>Client Relations</p>
              <p>Dedicated to collector satisfaction</p>
            </div>
            <div class="team-member">
              <img src="https://placehold.co/200x200?text=David" alt="David Chen" />
              <h3>David Chen</h3>
              <p>Restoration Specialist</p>
              <p>Expert in painting conservation</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Collect With Us -->
      <section class="why-collect-section">
        <div class="container">
          <h2>Why Collect With Us</h2>
          <div class="benefits-grid">
            <div class="benefit-item">
              <div class="check">✓</div>
              <div class="text">
                <strong>Curated Selection</strong>
                <p>Access to hand-picked paintings vetted by our expert curators, ensuring quality and authenticity.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="check">✓</div>
              <div class="text">
                <strong>Fair Bidding Process</strong>
                <p>Transparent, competitive auctions with real-time bidding, ensuring you get fair market value.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="check">✓</div>
              <div class="text">
                <strong>Full Insurance Coverage</strong>
                <p>All pieces are fully insured from our warehouse to your home, protecting your investment.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="check">✓</div>
              <div class="text">
                <strong>Global Community</strong>
                <p>Join thousands of collectors worldwide in a vibrant community passionate about vintage art.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="check">✓</div>
              <div class="text">
                <strong>White Glove Service</strong>
                <p>From authentication to delivery, we handle every detail with care and professionalism.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="check">✓</div>
              <div class="text">
                <strong>Expert Support</strong>
                <p>Our team is always available to answer questions and provide guidance on your art purchases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Begin Your Collection -->
      <section class="begin-collection-section">
        <div class="container">
          <h2>Begin Your Collection</h2>
          <p>Explore our curated collection of vintage masterpieces and start your collecting journey with us today.</p>
          <router-link to="/shop" class="btn-primary">Browse Collection</router-link>
        </div>
      </section>
    </section>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/Components/AppLayout.vue';
</script>