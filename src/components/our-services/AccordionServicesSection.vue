<script setup>
import { ref } from 'vue'

const services = ref([
  {
    id: 'svc-01',
    name: 'SELF FOTO',
    basePrice: 999999,
    mainImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
    galleryImageUrls: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
    ],
    description: 'Momen pernikahan yang tidak terlupakan di tepi pantai.',
  },
  {
    id: 'svc-02',
    name: 'WEDDING',
    basePrice: 30000,
    mainImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
    galleryImageUrls: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
    ],
    description: 'Studio privat dengan ekspresi bebas dan menyenangkan.',
  },
  {
    id: 'svc-01',
    name: 'GRADUATION',
    basePrice: 999999,
    mainImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
    galleryImageUrls: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
    ],
    description: 'Momen pernikahan yang tidak terlupakan di tepi pantai.',
  },
  {
    id: 'svc-02',
    name: 'PAS FOTO',
    basePrice: 30000,
    mainImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
    galleryImageUrls: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
    ],
    description: 'Studio privat dengan ekspresi bebas dan menyenangkan.',
  },
  {
    id: 'svc-02',
    name: 'LAINNYA',
    basePrice: 30000,
    mainImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
    galleryImageUrls: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbqif1-pJzjNoBDoH6E_zGx9IyPzs4IQKQ&s',
    ],
    description: 'Studio privat dengan ekspresi bebas dan menyenangkan.',
  },
])

const activeIndex = ref(0)
const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
const formatCurrency = (value) => {
  return value === 0
    ? 'Hubungi Kami'
    : new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      }).format(value)
}
</script>

<template>
  <section class="bg-white text-black py-20 lg:py-32">
    <div class="container mx-auto px-6">
      <div class="border-t border-gray-700">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="border-b border-gray-700"
        >
          <!-- HEADER -->
          <div
            @click="toggleAccordion(index)"
            class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div class="flex items-center">
              <span
                class="transition-all duration-300 text-brand-accent-gold font-bold"
                :class="activeIndex === index ? 'w-8 mr-4' : 'w-0 opacity-0 font-bold'"
              >
                —
              </span>
              <h3
                class="text-2xl lg:text-4xl font-semibold"
                :class="activeIndex === index ? 'text-brand-accent-gold' : ''"
              >
                {{ service.name }}
              </h3>
            </div>
            <span class="text-xl text-gray-500">0{{ index + 1 }}</span>
          </div>

          <!-- CONTENT -->
          <transition name="slide">
            <!-- CONTENT -->
            <div
              v-if="activeIndex === index"
              class="grid gap-4 p-6"
              style="grid-template-columns: 5fr 3fr"
            >
              <!-- kiri -->
              <div class="relative overflow-hidden max-h-[500px]">
                <!-- Overlay atas -->
                <div
                  class="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 md:p-6 z-10"
                >
                  <p class="text-sm text-gray-300">mulai dari</p>
                  <p class="text-2xl font-bold text-brand-accent-gold">
                    {{ formatCurrency(service.basePrice) }}
                  </p>
                </div>

                <!-- Gambar utama -->
                <img
                  :src="service.mainImageUrl"
                  :alt="service.name"
                  class="w-full h-full object-cover"
                />

                <!-- Overlay bawah -->
                <div
                  class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 z-10"
                >
                  <p class="text-sm text-gray-300 mt-2 max-w-sm">{{ service.description }}</p>
                </div>
              </div>

              <!-- kanan: gallery -->
              <div class="flex flex-col gap-4">
                <div class="flex gap-4">
                  <img
                    v-if="service.galleryImageUrls[0]"
                    :src="service.galleryImageUrls[0]"
                    :alt="`${service.name} gallery 1`"
                    class="w-1/2 object-cover max-h-[245px]"
                  />
                  <img
                    v-if="service.galleryImageUrls[1]"
                    :src="service.galleryImageUrls[1]"
                    :alt="`${service.name} gallery 2`"
                    class="w-1/2 object-cover max-h-[245px]"
                  />
                </div>
                <img
                  v-if="service.galleryImageUrls[2]"
                  :src="service.galleryImageUrls[2]"
                  :alt="`${service.name} gallery 3`"
                  class="w-full object-cover max-h-[245px]"
                />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
  max-height: 1000px;
  overflow: hidden;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
