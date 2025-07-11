<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isLainnyaOpen = ref(false) // State untuk dropdown "Lainnya"
const lainnyaMenu = ref(null) // ref untuk elemen dropdown

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Fungsi untuk toggle dropdown "Lainnya"
const toggleLainnyaMenu = () => {
  isLainnyaOpen.value = !isLainnyaOpen.value
}

// Fungsi untuk menutup dropdown jika klik di luar area
const handleClickOutside = (event) => {
  if (lainnyaMenu.value && !lainnyaMenu.value.contains(event.target)) {
    isLainnyaOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Tambahkan event listener untuk mendeteksi klik di luar dropdown
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  // Hapus event listener saat komponen dihancurkan
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <header
    :class="isScrolled ? 'bg-black shadow-md' : 'bg-transparent'"
    class="fixed top-0 left-0 w-full z-30 transition-all duration-300"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center relative">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="Adiwarna Studio Logo" class="h-8 w-auto" />
      </router-link>

      <div class="hidden md:flex items-center ml-auto space-x-8">
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

          <div class="relative" ref="lainnyaMenu">
            <button
              @click="toggleLainnyaMenu"
              class="nav-link flex items-center"
              :class="isScrolled ? 'text-gray-200' : 'text-white'"
            >
              <span>Lainnya</span>
              <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="fade">
              <div
                v-if="isLainnyaOpen"
                class="absolute top-full left-0 mt-2 w-56 bg-black bg-opacity-90 rounded-md shadow-lg py-2 z-40"
              >
                <router-link
                  to="/find-us"
                  @click="isLainnyaOpen = false"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-brand-accent-gold"
                >
                  Temukan Kami
                </router-link>
                <router-link
                  to="/policy"
                  @click="isLainnyaOpen = false"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-brand-accent-gold"
                >
                  Syarat dan Ketentuan
                </router-link>
                <router-link
                  to="/faq"
                  @click="isLainnyaOpen = false"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-brand-accent-gold"
                >
                  FAQ
                </router-link>
              </div>
            </transition>
          </div>
        </nav>

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

      <button class="md:hidden text-white focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-20 bg-black bg-opacity-90 md:hidden"
        @click.self="closeMenu"
      >
        <div class="flex flex-col space-y-4 px-6 py-6">
          <router-link to="/" class="nav-link text-white" @click="closeMenu">Beranda</router-link>
          <router-link to="/about" class="nav-link text-white" @click="closeMenu">
            Tentang Kami
          </router-link>
          <router-link to="/projects" class="nav-link text-white" @click="closeMenu">
            Our Project
          </router-link>
          <router-link to="/services" class="nav-link text-white" @click="closeMenu">
            Our Services
          </router-link>

          <router-link to="/syarat-ketentuan" class="nav-link text-white" @click="closeMenu">
            Syarat dan Ketentuan
          </router-link>
          <router-link to="/faq" class="nav-link text-white" @click="closeMenu"> FAQ </router-link>

          <router-link to="/booking" class="book-now-link mt-2 text-white" @click="closeMenu">
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
    </transition>
  </header>
</template>

<style scoped>
/* Tidak ada perubahan pada style, semua gaya yang ada sudah cukup */
.nav-link {
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s;
  cursor: pointer; /* Menambahkan cursor pointer untuk button dropdown */
}

.nav-link:hover {
  color: #cfaa3b;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: transparent;
  transition: background-color 0.3s;
}

.nav-link:hover::after {
  background-color: #cfaa3b;
}

.router-link-exact-active {
  font-weight: 700;
  color: #cfaa3b !important;
}

.router-link-exact-active::after {
  background-color: #cfaa3b;
}

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

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
