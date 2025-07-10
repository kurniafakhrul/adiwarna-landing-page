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
    :class="isScrolled ? 'bg-black shadow-md' : 'bg-transparent'"
    class="fixed top-0 left-0 w-full z-30 transition-all duration-300"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="Adiwarna Studio Logo" class="h-8 w-auto" />
      </router-link>

      <!-- Menu dan Tombol Aksi di Kanan -->
      <div class="hidden md:flex items-center ml-auto space-x-8">
        <!-- Menu Navigasi -->
        <nav class="flex items-center space-x-8">
          <router-link to="/" class="nav-link" :class="isScrolled ? 'text-gray-200' : 'text-white'">
            Beranda
          </router-link>
          <router-link
            to="/about"
            class="nav-link"
            :class="isScrolled ? 'text-gray-200' : 'text-white'"
          >
            Tentang Kami
          </router-link>
          <router-link
            to="/projects"
            class="nav-link"
            :class="isScrolled ? 'text-gray-200' : 'text-white'"
          >
            Our Project
          </router-link>
          <router-link
            to="/services"
            class="nav-link"
            :class="isScrolled ? 'text-gray-200' : 'text-white'"
          >
            Our Services
          </router-link>
        </nav>

        <!-- Tombol Aksi -->
        <router-link
          to="/booking"
          class="book-now-link"
          :class="isScrolled ? 'text-white' : 'text-white'"
        >
          <span>Book Now</span>
          <svg
            class="w-4 h-4 text-brand-accent-gold ml-1"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6l4 4-4 4" />
          </svg>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s;
}

/* Hover warna emas */
.nav-link:hover {
  color: #cfaa3b;
}

/* Underline custom menggunakan ::after */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px; /* Jarak underline */
  width: 100%;
  height: 2px;
  background-color: transparent;
  transition: background-color 0.3s;
}

.nav-link:hover::after {
  background-color: #cfaa3b;
}

/* Aktif link */
.router-link-exact-active {
  font-weight: 700;
  color: #cfaa3b !important;
}

.router-link-exact-active::after {
  background-color: #cfaa3b;
}

/* Book Now link underline menyeluruh */
.book-now-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-bottom: 2px;
  color: white;
  transition: color 0.3s;
}

.book-now-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transition: background-color 0.3s;
}

.book-now-link:hover {
  color: #cfaa3b;
}

.book-now-link:hover::after {
  background-color: #cfaa3b;
}
</style>
