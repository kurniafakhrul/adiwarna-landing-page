<script setup>
import { useHeroStore } from '@/stores/heroStore'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const heroStore = useHeroStore()
let slideInterval = null

const currentIndex = ref(0)
const itemsPerSlide = ref(3) // default desktop 3

// Hitung total steps sesuai itemsPerSlide
const totalSteps = computed(() => {
  if (!heroStore.heroes || heroStore.heroes.length <= itemsPerSlide.value) return 0
  return heroStore.heroes.length - itemsPerSlide.value
})

// Hitung carousel translate berdasarkan currentIndex dan itemsPerSlide
const carouselStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * (100 / itemsPerSlide.value)}%)`,
}))

const nextSlide = () => {
  if (currentIndex.value >= totalSteps.value) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}

function goToStep(index) {
  currentIndex.value = index
}

function updateItemsPerSlide() {
  itemsPerSlide.value = window.innerWidth < 640 ? 1 : 3
}

onMounted(async () => {
  updateItemsPerSlide()
  window.addEventListener('resize', updateItemsPerSlide)

  await heroStore.fetchHeroes()

  if (heroStore.heroes.length > itemsPerSlide.value) {
    slideInterval = setInterval(nextSlide, 3000)
  }
})

onUnmounted(() => {
  clearInterval(slideInterval)
  window.removeEventListener('resize', updateItemsPerSlide)
})
</script>

<template>
  <section class="h-screen w-full relative overflow-hidden bg-black">
    <div class="h-full flex transition-transform duration-700 ease-in-out" :style="carouselStyle">
      <div
        v-for="hero in heroStore.heroes"
        :key="hero.id"
        class="relative h-full w-full sm:w-1/3 flex-shrink-0 group"
      >
        <img
          :src="hero.imageUrl"
          :alt="hero.title"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        <!-- Updated text layout -->
        <div class="absolute bottom-0 left-0 p-8 text-white w-full">
          <div class="flex justify-between items-end">
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wide">{{ hero.title }}</h3>
              <p class="text-xs text-gray-300 mt-1">{{ hero.description }}</p>
            </div>
            <h1 class="text-4xl font-semibold">{{ hero.date }}</h1>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel indicators -->
    <div
      v-if="totalSteps > 0"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-10"
    >
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
