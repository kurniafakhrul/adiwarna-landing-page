<!-- src/App.vue -->
<script setup>
import Footer from '@/components/layout/Footer.vue'
import Navbar from '@/components/layout/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
  <!-- Footer bisa ditambahkan di sini nanti -->
</template>
