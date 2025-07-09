<!-- src/components/hero/HeroSection.vue -->
<script setup>
import { useHeroStore } from '@/stores/heroStore'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const heroStore = useHeroStore()
let slideInterval = null

const currentIndex = ref(0)

// Hitung berapa banyak "langkah" geser yang mungkin dilakukan
const totalSteps = computed(() => {
  if (!heroStore.heroes || heroStore.heroes.length <= 3) return 0
  // Jika ada 6 item, ada 3 langkah (indeks 1, 2, 3) setelah posisi awal (indeks 0)
  return heroStore.heroes.length - 3
})

// Computed property untuk style transformasi CSS
const carouselStyle = computed(() => ({
  // Geser ke kiri sejauh lebar satu item (33.33%) dikali indeks saat ini
  transform: `translateX(-${currentIndex.value * (100 / 3)}%)`,
}))

const nextSlide = () => {
  // Jika sudah di akhir, kembali ke awal
  if (currentIndex.value >= totalSteps.value) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}

function goToStep(index) {
  currentIndex.value = index
}

onMounted(async () => {
  await heroStore.fetchHeroes()
  // Hanya mulai interval jika ada cukup gambar untuk digeser
  if (heroStore.heroes.length > 3) {
    slideInterval = setInterval(nextSlide, 3000)
  }
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>
<template>
  <section class="h-screen w-full relative overflow-hidden bg-black">
    <!-- Wrapper untuk semua item, yang akan kita geser -->
    <div class="h-full flex transition-transform duration-700 ease-in-out" :style="carouselStyle">
      <!-- Loop melalui SEMUA hero, bukan hanya yang sedang tampil -->
      <div
        v-for="hero in heroStore.heroes"
        :key="hero.id"
        class="relative h-full w-1/3 flex-shrink-0 group"
      >
        <img
          :src="hero.imageUrl"
          :alt="hero.title"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-8 text-white">
          <h3 class="text-2xl font-semibold">{{ hero.title }}</h3>
          <p class="text-sm text-gray-300 mt-1">{{ hero.description }}</p>
          <p class="text-lg font-bold mt-4">{{ hero.date }}</p>
        </div>
      </div>
    </div>

    <!-- Indikator Carousel -->
    <div
      v-if="totalSteps > 0"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-10"
    >
      <!-- Tampilkan indikator untuk setiap "langkah" geser yang mungkin -->
      <button
        v-for="step in totalSteps + 1"
        :key="step"
        @click="goToStep(step - 1)"
        :class="currentIndex === step - 1 ? 'bg-white' : 'bg-white/50'"
        class="h-1 w-8 rounded-full cursor-pointer transition-colors"
      ></button>
    </div>
  </section>
</template>
