<!-- src/components/about/MeetOurTeamSection.vue -->
<template>
  <section class="bg-white text-black py-20">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-12 flex-wrap gap-4">
        <h2 class="text-4xl font-bold flex items-center gap-3">
          MEET OUR TEAM
          <svg
            class="w-10 h-10 text-brand-accent-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 7l10 10M17 7v10H7" />
          </svg>
        </h2>

        <!-- Navigasi panah -->
        <div class="flex gap-4 text-3xl font-semibold">
          <button @click="scrollPrev" class="p-2 group">
            <svg
              class="w-8 h-8 text-black group-hover:text-brand-accent-gold transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="scrollNext" class="p-2 group">
            <svg
              class="w-8 h-8 text-black group-hover:text-brand-accent-gold transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Carousel Wrapper -->
      <div
        ref="carouselRef"
        class="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory pb-2 hide-scrollbar"
      >
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="snap-start shrink-0 w-[90%] sm:w-[48%] lg:w-[32%] group cursor-pointer"
        >
          <div class="overflow-hidden">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-[400px] object-cover transform transition duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
          </div>
          <div class="mt-4 flex justify-between items-start">
            <div class="flex flex-row justify-between items-center w-full">
              <p class="font-semibold leading-tight text-sm sm:text-base">{{ member.name }}</p>
              <p class="text-sm text-brand-accent-gold mt-1">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const carouselRef = ref(null)

const scrollNext = () => {
  carouselRef.value?.scrollBy({ left: 400, behavior: 'smooth' })
}

const scrollPrev = () => {
  carouselRef.value?.scrollBy({ left: -400, behavior: 'smooth' })
}

const teamMembers = [
  {
    name: 'Kevin Sutanto',
    role: 'Photographer',
    id: '01 / 06',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800',
  },
  {
    name: 'Sasha Oktaviani',
    role: 'Creative Director',
    id: '02 / 06',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800',
  },
  {
    name: 'Albert Wijaya',
    role: 'Videographer',
    id: '03 / 06',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800',
  },
  {
    name: 'Merry Natalia',
    role: 'Editor',
    id: '04 / 06',
    image:
      'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800',
  },
  {
    name: 'Tania Rahma',
    role: 'Make-up Artist',
    id: '05 / 06',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800',
  },
  {
    name: 'Fikri Hidayat',
    role: 'Lighting Specialist',
    id: '06 / 06',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkjtuN4ARsvhthbEdygR2e37XHMD5VTIIh8w&s',
  },
]
</script>

<style scoped>
.text-brand-accent-gold {
  color: #cfaa3b;
}

/* Sembunyikan scrollbar horizontal */
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
