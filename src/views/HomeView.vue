<!-- src/views/HomeView.vue -->
<script setup>
import HeroSection from '@/components/hero/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
</script>
<template>
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />

    <!-- Section-section lain (Tentang Kami, Layanan, dll) akan ditambahkan di sini -->
  </main>
</template>
