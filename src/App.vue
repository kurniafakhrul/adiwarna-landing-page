<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/LandingPageLayout.vue'
import BookingLayout from '@/layouts/BookingLayout.vue'

const route = useRoute()

// Pilih layout berdasarkan meta `layout`
const layout = computed(() => {
  switch (route.meta.layout) {
    case 'booking-layout':
      return BookingLayout
    case 'default':
    default:
      return DefaultLayout
  }
})
</script>

<template>
  <component :is="layout" />
</template>
