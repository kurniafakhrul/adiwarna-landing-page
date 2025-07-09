<!-- src/components/home/ServicesSection.vue -->
<script setup>
import { computed, ref } from 'vue'

const services = ref([
  {
    id: 'svc-01',
    name: 'WEDDING',
    basePrice: 999999,
    imageUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop',
    description: 'Biarkan kisah cinta Anda abadi dalam setiap bingkai yang kami tangkap.',
  },
  {
    id: 'svc-02',
    name: 'SELF FOTO',
    basePrice: 30000,
    imageUrl:
      'https://i0.wp.com/images.squarespace-cdn.com/content/v1/6270a99b1201930f133cd56a/2b9d6be1-e8a8-4a6a-82a0-0f0283785fcb/DSC00423.JPG?w=720&ssl=1',
    description: 'Ekspresikan diri Anda sebebas mungkin di studio pribadi kami.',
  },
  {
    id: 'svc-03',
    name: 'GRADUATION',
    basePrice: 200000,
    imageUrl: 'https://bambiniphoto.sg/wp-content/uploads/Graduation-Photoshoot.jpg',
    description: 'Rayakan pencapaian akademis Anda dengan potret yang tak terlupakan.',
  },
  {
    id: 'svc-04',
    name: 'PAS FOTO',
    basePrice: 15000,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELOv2eXXrXh99gezaNmuiXpbs9pxGt_av1w&s',
    description: 'Dapatkan pas foto berkualitas tinggi untuk semua kebutuhan formal Anda.',
  },
  {
    id: 'svc-05',
    name: 'LAINNYA',
    basePrice: 0,
    imageUrl:
      'https://swift-thumbor.sirclocdn.com/unsafe/0x0/filters:format(webp):quality(80)/admin.focusnusantara.com/media/wysiwyg/Article/2023/bukalapak-blog-pilihan-kamera-street-photography.jpeg',
    description: 'Hubungi kami untuk mendiskusikan kebutuhan fotografi kustom Anda.',
  },
])

const activeServiceIndex = ref(0)

const activeService = computed(() => {
  return services.value[activeServiceIndex.value] || null
})

const setActiveService = (index) => {
  activeServiceIndex.value = index
}

const formatCurrency = (value) => {
  if (value === 0) return 'Hubungi Kami'
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value)
}
</script>

<template>
  <section class="bg-black text-white min-h-screen flex items-center py-16 lg:py-24">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold">OUR SERVICES</h2>
        <a href="#" class="inline-flex items-center font-semibold group">
          <span>LIHAT SEMUA</span>
          <svg
            class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <!-- Kolom Kiri: Pratinjau Gambar & Info -->
        <div v-if="activeService" class="flex flex-col h-full">
          <div class="relative flex-grow">
            <transition name="fade" mode="out-in">
              <img
                :key="activeService.id"
                :src="activeService.imageUrl"
                :alt="activeService.name"
                class="object-cover w-full h-[400px]"
              />
            </transition>
          </div>
          <div class="mt-4 flex justify-between items-start">
            <div>
              <p class="text-sm text-gray-400">mulai dari</p>
              <p class="text-2xl font-bold">{{ formatCurrency(activeService.basePrice) }}</p>
            </div>
            <p class="text-sm text-gray-300 mt-1 max-w-xs text-right">
              {{ activeService.description }}
            </p>
          </div>
        </div>

        <!-- Kolom Kanan: Daftar Layanan -->
        <div class="flex flex-col">
          <ul class="border-t border-gray-700 flex-grow flex flex-col">
            <li
              v-for="(service, index) in services"
              :key="service.id"
              @mouseover="setActiveService(index)"
              class="group border-b border-gray-700 transition-colors hover:bg-gray-900 flex-grow flex"
            >
              <a
                href="#"
                class="flex justify-between items-center p-6 text-2xl lg:text-3xl font-semibold w-full"
              >
                <div class="flex items-center">
                  <span
                    class="overflow-hidden inline-block w-0 opacity-0 group-hover:w-8 group-hover:mr-4 group-hover:opacity-100 transition-all duration-300 text-brand-accent-gold"
                    >—</span
                  >
                  <span class="transition-colors group-hover:text-brand-accent-gold">{{
                    service.name
                  }}</span>
                </div>
                <span class="text-xl text-gray-500">0{{ index + 1 }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
