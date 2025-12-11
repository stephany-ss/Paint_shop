<template>
  <AppLayout>
    <section class="contact-page">
      <div class="container">

        <!-- Hero Section -->
        <div class="hero-section">
          <h1>Get In Touch</h1>
          <p>Have questions about our paintings or want to learn more? We’d love to hear from you.</p>
        </div>

        <!-- Contact Info Cards -->
        <div class="contact-info-grid">
          <div class="info-card">
            <h3>Email</h3>
            <p>info@arcaneartifacts.com</p>
          </div>

          <div class="info-card">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>

          <div class="info-card">
            <h3>Location</h3>
            <p>123 Gallery Street, New York, NY</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-section">
          <h2>Send us a Message</h2>

          <div v-if="successMessage" class="success-message">
            {{ successMessage }}
          </div>

          <form @submit.prevent="submitForm" class="contact-form">

            <!-- Full Name -->
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

            <!-- Email -->
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                :class="{ 'is-invalid': errors.email }"
                placeholder="example@email.com"
              />
              <div v-if="errors.email" class="error-message">{{ errors.email[0] }}</div>
            </div>

            <!-- Subject -->
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

            <!-- Message -->
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                :class="{ 'is-invalid': errors.message }"
                placeholder="Tell us more..."
              ></textarea>
              <div v-if="errors.message" class="error-message">{{ errors.message[0] }}</div>
            </div>

            <!-- Submit -->
            <button type="submit" class="send-btn" :disabled="loading">
              {{ loading ? "Sending..." : "Send Message" }}
            </button>
          </form>
        </div>

      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import AppLayout from "@/Components/AppLayout.vue";

// GLOBAL VALIDATION IMPORT
import { validateContactForm } from "@/utils/contactValidation";

// Form data
const formData = ref({
  full_name: "",
  email: "",
  subject: "",
  message: ""
});

// Error & state handling
const errors = ref({});
const successMessage = ref("");
const loading = ref(false);

// Submit form
const submitForm = async () => {
  errors.value = {};
  successMessage.value = "";


  const validationErrors = validateContactForm(formData.value);

  if (Object.keys(validationErrors).length > 0) {
    errors.value = validationErrors;
    return; // Stop submission
  }

  loading.value = true;

  try {
    const res = await axios.post("/contact", formData.value);
    successMessage.value = "Thank you! We'll get back to you soon.";

    // Clear form
    formData.value = {
      full_name: "",
      email: "",
      subject: "",
      message: ""
    };
  } catch (err) {
    if (err.response?.data?.errors) {
      errors.value = err.response.data.errors;
    }
  } finally {
    loading.value = false;
  }
};
</script>
