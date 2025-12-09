<template>
  <footer class="site-footer">
    <div class="container">
      <!-- Column 1 -->
      <div class="footer-col">
        <h3>Arcane Artifacts Gallery</h3>
        <p>
          Curating timeless masterpieces for
          collectors and art enthusiasts worldwide.
        </p>
      </div>

      <!-- Column 2 -->
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div class="footer-col">
        <h4>Information</h4>
        <ul>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/shipping">Shipping</Link></li>
          <li><Link href="/returns">Returns</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </div>

      <!-- Column 4 -->
      <div class="footer-col">
        <h4>Contact</h4>
        <p>Email: info@arcaneartifacts.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Copyright -->
      <div class="copyright">
        © 2025 Arcane Artifacts Gallery. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
</script>
