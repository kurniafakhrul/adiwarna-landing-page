<!-- src/views/OurProjectView.vue -->
<script setup>
import AccordionServicesSection from '@/components/our-services/AccordionServicesSection.vue'
import HeaderOurServicesSection from '@/components/our-services/HeaderOurServicesSection.vue'
</script>
<template>
  <main>
    <!-- Kita bisa menambahkan header halaman di sini nanti -->
    <div class="bg-white">
      <HeaderOurServicesSection />
      <AccordionServicesSection />
      <!-- Padding atas untuk memberi ruang dari navbar -->
    </div>
    <!-- Section lain tentang visi, misi, atau tim bisa ditambahkan di sini -->
  </main>
</template>
