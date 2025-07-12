<!-- src/App.vue -->
<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import { RouterView } from 'vue-router'
import FooterBooking from '@/components/layout/FooterBooking.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterBooking />
  <!-- Footer bisa ditambahkan di sini nanti -->
</template>
