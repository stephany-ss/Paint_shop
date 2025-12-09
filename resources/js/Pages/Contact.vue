<template>
  <AppLayout>
    <section class="contact-page">
      <div class="container">
        <!-- Hero Section -->
        <div class="hero-section">
          <h1>Get In Touch</h1>
          <p>Have questions about our paintings or want to learn more? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.</p>
        </div>

        <!-- Contact Info Cards -->
        <div class="contact-info-grid">
          <div class="info-card">
            <h3>Email</h3>
            <p>info@arcaneartifacts.com</p>
            <p>We typically respond within 24 hours</p>
          </div>
          <div class="info-card">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
            <p>Mon-Fri, 9:00 AM - 6:00 PM EST</p>
          </div>
          <div class="info-card">
            <h3>Location</h3>
            <p>123 Gallery Street</p>
            <p>New York, NY 10001</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-section">
          <h2>Send us a Message</h2>

          <div v-if="successMessage" class="success-message">
            {{ successMessage }}
          </div>

          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="full_name">Full Name</label>
              <input
                id="full_name"
                v-model="formData.full_name"
                type="text"
                :class="{ 'is-invalid': errors.full_name }"
                placeholder="Your name"
              />
              <div v-if="errors.full_name" class="error-message">{{ errors.full_name[0] }}</div>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                :class="{ 'is-invalid': errors.email }"
                placeholder="your@email.com"
              />
              <div v-if="errors.email" class="error-message">{{ errors.email[0] }}</div>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                :class="{ 'is-invalid': errors.subject }"
                placeholder="How can we help?"
              />
              <div v-if="errors.subject" class="error-message">{{ errors.subject[0] }}</div>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                :class="{ 'is-invalid': errors.message }"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
              <div v-if="errors.message" class="error-message">{{ errors.message[0] }}</div>
            </div>

            <button type="submit" class="send-btn" :disabled="loading">
              {{ loading ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

        <!-- FAQ Section -->
        <div class="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-item">
            <h3>How do I place a bid?</h3>
            <p>Browse our collection, find a painting you like, and enter your bid amount. Your bid must be higher than the current highest bid.</p>
          </div>
          <div class="faq-item">
            <h3>Is authentication guaranteed?</h3>
            <p>Yes, all paintings in our collection are authenticated by certified art experts. Each piece includes a certificate of authenticity.</p>
          </div>
          <div class="faq-item">
            <h3>What is the shipping cost?</h3>
            <p>Shipping costs vary based on location and painting size. You’ll receive an accurate quote after placing your order.</p>
          </div>
          <div class="faq-item">
            <h3>Do you offer insurance?</h3>
            <p>Yes, all shipments are fully insured against loss or damage. Insurance is included in the final cost.</p>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import AppLayout from '@/Components/AppLayout.vue';

const formData = ref({
  full_name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = ref({});
const successMessage = ref('');
const loading = ref(false);

const submitForm = async () => {
  errors.value = {};
  successMessage.value = '';
  loading.value = true;

  try {
    const res = await axios.post('/contact', formData.value);
    successMessage.value = 'Thank you for your message! We’ll get back to you soon.';
    formData.value = { full_name: '', email: '', subject: '', message: '' };
  } catch (err) {
    if (err.response?.data?.errors) {
      errors.value = err.response.data.errors;
    }
  } finally {
    loading.value = false;
  }
};
</script>