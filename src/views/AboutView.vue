<!-- src/views/AboutView.vue -->
<script setup>
import TeamIntroSection from '@/components/about/TeamIntroSection.vue'
import TeamAboutSection from '@/components/about/TeamAboutSection.vue'
import CompanyValuesSection from '@/components/about/CompanyValuesSection.vue'
import MeetOurTeamSection from '@/components/about/MeetOurTeamSection.vue'
</script>
<template>
  <main>
    <!-- Kita bisa menambahkan header halaman di sini nanti -->
    <div class="bg-white">
      <!-- Padding atas untuk memberi ruang dari navbar -->
    </div>

    <TeamIntroSection />
    <TeamAboutSection />
    <CompanyValuesSection />
    <MeetOurTeamSection />

    <!-- Section lain tentang visi, misi, atau tim bisa ditambahkan di sini -->
  </main>
</template>
