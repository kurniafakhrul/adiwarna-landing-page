<!-- src/components/projects/ProjectsSection.vue -->
<template>
  <section class="bg-white text-black py-20">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group cursor-pointer"
          @click="goToProjectDetail(project.slug)"
        >
          <div class="overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-[450px] object-cover transform transition duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
          </div>
          <div class="mt-4 flex justify-between items-start">
            <div>
              <p class="font-semibold leading-tight text-sm sm:text-base">{{ project.title }}</p>
              <p class="text-sm text-brand-accent-gold mt-1">{{ project.location }}</p>
            </div>
            <p class="text-4xl font-semibold text-black whitespace-nowrap">{{ project.index }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToProjectDetail = (slug) => {
  router.push(`/projects/${slug}`)
}

const projects = [
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
    },
  },
  {
    slug: 'albert-gill',
    index: '02/06',
    title: 'Albert & Gill’s Eternal Romance Wedding',
    location: 'Piramida Louvre, Paris',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800',
  },
  {
    slug: 'paul-merry',
    index: '03/06',
    title: 'Paul & Merry’s Enchanted Forest Wedding',
    location: 'Piramida Louvre, Paris',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800',
  },
  {
    slug: 'tania-yusuf',
    index: '04/06',
    title: 'Tania & Yusuf’s Wedding at Hills',
    location: 'Bukit Sapu Angin, Batu',
    image:
      'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800',
  },
  {
    slug: 'lina-arif',
    index: '05/06',
    title: 'Lina & Arif’s Beachside Celebration',
    location: 'Pantai Melasti, Bali',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800',
  },
  {
    slug: 'dina-fikri',
    index: '06/06',
    title: 'Dina & Fikri’s Modern Indoor Wedding',
    location: 'Gedung Pewayangan, Jakarta',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkjtuN4ARsvhthbEdygR2e37XHMD5VTIIh8w&s',
  },
]
</script>

<style scoped>
.text-brand-accent-gold {
  color: #cfaa3b;
}
</style>
