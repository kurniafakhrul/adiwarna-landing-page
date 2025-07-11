<template>
  <div class="text-black bg-white">
    <div class="">
      <template v-if="project">
        <section
          class="text-white bg-black grid md:grid-cols-2 gap-x-16 items-start pt-24 pb-6 md:pt-20 md:pb-20 mx-auto px-4 md:px-6"
        >
          <div class="space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-start gap-4">
              <h1 class="text-3xl md:text-5xl font-light leading-tight">{{ project.title }}</h1>
              <svg
                class="w-14 h-14 md:w-20 md:h-20 text-brand-accent-gold mt-2 md:mt-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 7l10 10M17 7v10H7" />
              </svg>
            </div>
            <div class="space-y-4">
              <div>
                <p class="font-semibold text-white">Klien</p>
                <p class="text-gray-300">{{ project.client }}</p>
              </div>
              <div>
                <p class="font-semibold text-white">Tanggal</p>
                <p class="text-gray-300">{{ project.date }}</p>
              </div>
              <div>
                <p class="font-semibold text-white">Lokasi</p>
                <p class="text-gray-300">{{ project.location }}</p>
              </div>
            </div>
          </div>
          <div class="w-full mt-6 md:mt-0">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-56 md:h-[400px] object-cover"
              style="border-radius: 0"
            />
          </div>
        </section>

        <section
          class="grid md:grid-cols-2 items-stretch bg-white rounded-none p-4 md:p-10 m-0 gap-4 md:gap-0"
        >
          <img
            :src="project.studio.image"
            :alt="project.title"
            class="w-full h-48 md:h-full object-cover rounded-none grayscale"
            style="min-height: 160px; max-height: 400px"
          />
          <div
            class="flex flex-col justify-center p-4 md:p-8"
            style="min-height: 160px; max-height: 400px"
          >
            <h3 class="font-bold text-black mb-2 tracking-widest">
              {{ project.studio.name }}
            </h3>
            <p class="text-gray-800 leading-relaxed">{{ project.studio.description }}</p>
          </div>
        </section>
        <section
          v-if="project.galleryImages && project.galleryImages.length > 0"
          class="p-4 md:p-10 bg-black text-white rounded-none"
        >
          <div class="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-10 gap-4">
            <h2 class="text-2xl md:text-3xl font-bold text-center md:text-left">
              MOMEN–MOMEN BERHARGA
            </h2>
            <svg
              class="w-8 h-8 md:w-10 md:h-10 text-brand-accent-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 7l10 10M17 7v10H7" />
            </svg>
          </div>
          <div class="flex flex-col md:flex-row gap-4 h-auto md:h-[500px]">
            <!-- Kiri: Gambar besar -->
            <div class="md:flex-[3]">
              <img
                v-if="project.galleryImages[0]"
                :src="project.galleryImages[0].src"
                :alt="project.galleryImages[0].alt"
                class="w-full h-48 md:h-full object-cover rounded-lg mb-4 md:mb-0"
              />
            </div>

            <!-- Kanan: 2 atas + 1 bawah -->
            <div class="md:flex-[2] flex flex-col gap-4">
              <!-- Dua gambar di baris atas -->
              <div class="flex gap-4 h-24 md:h-[245px] mb-4 md:mb-0">
                <img
                  v-if="project.galleryImages[1]"
                  :src="project.galleryImages[1].src"
                  :alt="project.galleryImages[1].alt"
                  class="w-1/2 h-full object-cover rounded-lg"
                />
                <img
                  v-if="project.galleryImages[2]"
                  :src="project.galleryImages[2].src"
                  :alt="project.galleryImages[2].alt"
                  class="w-1/2 h-full object-cover rounded-lg"
                />
              </div>

              <!-- Gambar bawah penuh -->
              <img
                v-if="project.galleryImages[3]"
                :src="project.galleryImages[3].src"
                :alt="project.galleryImages[3].alt"
                class="w-full h-24 md:h-[245px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        <section
          v-if="project.testimonial && project.testimonial.quote"
          class="relative py-10 md:py-16 mt-6 md:mt-10 mb-6 md:mb-10"
          :style="
            project.testimonial.image
              ? `background-image: url('${project.testimonial.image}'); background-size: cover; background-position: center; margin-top: 5%; margin-bottom: 5%;`
              : ''
          "
        >
          <div class="absolute inset-0 bg-black bg-opacity-70"></div>
          <div class="relative max-w-7xl mx-auto flex justify-end z-10">
            <div class="w-full md:w-1/2 text-right">
              <h2 class="text-2xl md:text-4xl font-light mb-4 text-right text-white">
                KATA MEREKA
                <br />
                — TENTANG KAMI
              </h2>
              <p class="text-gray-200 italic text-base md:text-lg leading-relaxed">
                "{{ project.testimonial.quote }}"
              </p>
              <p class="mt-4 font-semibold text-white">— {{ project.testimonial.author }}</p>
            </div>
          </div>
        </section>
      </template>

      <template v-else>
        <div class="text-center py-20">
          <h2 class="text-2xl font-semibold text-gray-300 mb-4">Project not found</h2>
          <router-link to="/" class="text-brand-accent-gold underline hover:opacity-80">
            Kembali ke Beranda
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const allProjects = [
  {
    slug: 'calvin-merry-enchanted-forest',
    title: "Calvin & Merry's Enchanted Forest Wedding",
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    client: 'Calvin & Merry',
    date: 'June 12, 2025',
    location: 'Araya Arcade Garden, Malang',
    studio: {
      name: '#ADIWERNASTUDIO',
      image:
        'https://images.unsplash.com/photo-1598012224427-734f50f4faf7?auto=format&fit=crop&w=800&q=80',
      description:
        'Pernikahan Calvin & Merry adalah perayaan cinta yang penuh kehangatan dan kebahagiaan. Pasangan yang luar biasa ini merayakan hari spesial mereka dengan cara yang indah, dikelilingi oleh keluarga dan sahabat tercinta.',
    },
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800',
        alt: 'Calvin & Merry berpelukan di taman',
      },
      {
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800',
        alt: 'Close up Calvin & Merry tersenyum',
      },
      {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800',
        alt: 'Momen bahagia pernikahan Calvin & Merry',
      },
      {
        src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800',
        alt: 'Calvin & Merry bergandengan tangan',
      },
    ],
    testimonial: {
      quote:
        'Adiwerna berhasil menangkap momen pernikahan kami dengan begitu indah dan autentik. Setiap foto terasa hidup dan hasilnya benar-benar mencerminkan cinta di hari spesial kami. Terima kasih telah mengabadikan kenangan tak ternilai ini!',
      author: 'Calvin & Merry',
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800',
    },
  },
  {
    slug: 'kevin-sasha-cozy-outdoor',
    title: 'Kevin & Sasha’s Cozy Outdoor Wedding',
    location: 'Danau Tamblingan, Bali',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800',
    client: 'Kevin & Sasha',
    date: 'May 20, 2025',
    studio: {
      name: '#ADIWERNASTUDIO',
      image:
        'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800&q=80',
      description:
        'Pernikahan Kevin & Sasha berlangsung di tengah keindahan alam Bali. Dikelilingi oleh danau dan pepohonan hijau, suasana pernikahan mereka terasa hangat, intim, dan penuh cinta.',
    },
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800',
        alt: 'Calvin & Merry berpelukan di taman',
      },
      {
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800',
        alt: 'Close up Calvin & Merry tersenyum',
      },
      {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800',
        alt: 'Momen bahagia pernikahan Calvin & Merry',
      },
      {
        src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800',
        alt: 'Calvin & Merry bergandengan tangan',
      },
    ],
    testimonial: {
      quote:
        'Sungguh pengalaman yang luar biasa! Tim Adiwerna Studio menangkap setiap momen dengan sempurna. Kami merasa seperti kembali hidup dalam hari pernikahan kami setiap kali melihat hasil fotonya.',
      author: 'Kevin & Sasha',
      image:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&sat=0',
    },
  },
]

const route = useRoute()
const project = ref(null)

onMounted(() => {
  project.value = allProjects.find((p) => p.slug === route.params.slug)
})
</script>

<style scoped>
.text-brand-accent-gold {
  color: #cfaa3b;
}
</style>
