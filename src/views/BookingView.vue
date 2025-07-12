<!-- src/views/AboutView.vue -->
<script setup>
import ServiceChoiceSection from '@/components/booking/ServiceChoiceSection.vue'
</script>
<template>
  <main>
    <!-- Kita bisa menambahkan header halaman di sini nanti -->
    <section class="bg-black text-white py-20 lg:py-32 lg:pb-5">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-baseline border-b border-gray-700 pb-4 mb-8">
          <h2 class="text-4xl lg:text-5xl font-light tracking-wider">PEMESANAN</h2>
        </div>
      </div>
    </section>
    <ServiceChoiceSection />
    <!-- Section lain tentang visi, misi, atau tim bisa ditambahkan di sini -->
  </main>
</template>
