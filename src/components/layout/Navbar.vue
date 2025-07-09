<!-- src/components/layout/Navbar.vue -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <header
    :class="isScrolled ? 'bg-white shadow-md' : 'bg-transparent'"
    class="fixed top-0 left-0 w-full z-30 transition-all duration-300"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold" :class="isScrolled ? 'text-brand-dark-blue' : 'text-white'">
        Adiwarna Studio.
      </div>
      <!-- Menu Navigasi -->
      <nav class="hidden md:flex items-center space-x-8">
        <router-link to="/" class="nav-link" :class="isScrolled ? 'text-gray-600' : 'text-gray-200'"
          >Beranda</router-link
        >
        <router-link
          to="/about"
          class="nav-link"
          :class="isScrolled ? 'text-gray-600' : 'text-gray-200'"
          >Tentang Kami</router-link
        >
        <router-link
          to="/projects"
          class="nav-link"
          :class="isScrolled ? 'text-gray-600' : 'text-gray-200'"
          >Our Project</router-link
        >
        <router-link
          to="/services"
          class="nav-link"
          :class="isScrolled ? 'text-gray-600' : 'text-gray-200'"
          >Our Services</router-link
        >
      </nav>
      <!-- Tombol Aksi -->
      <router-link
        to="/booking"
        class="hidden md:flex items-center space-x-2 px-6 py-2 border rounded-full font-semibold transition-colors"
        :class="
          isScrolled
            ? 'text-brand-dark-blue border-brand-dark-blue hover:bg-brand-dark-blue hover:text-white'
            : 'text-white border-white hover:bg-white hover:text-brand-dark-blue'
        "
      >
        <span>Book Now</span>
        <svg
          class="w-5 h-5 text-brand-accent-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </router-link>
    </div>
  </header>
</template>
<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #cfaa3b; /* brand-accent-gold */
}
.router-link-exact-active {
  font-weight: 700;
  color: #cfaa3b !important; /* brand-accent-gold */
}
.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #cfaa3b; /* brand-accent-gold */
}
</style>
