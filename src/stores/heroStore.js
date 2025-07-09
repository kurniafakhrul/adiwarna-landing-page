// src/stores/heroStore.js
import heroService from '@/services/heroService'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeroStore = defineStore('hero', () => {
  const heroes = ref([])
  const isLoading = ref(false)

  async function fetchHeroes() {
    isLoading.value = true
    try {
      heroes.value = await heroService.getHeroData()
    } catch (error) {
      console.error('Gagal mengambil data hero:', error)
    } finally {
      isLoading.value = false
    }
  }

  return { heroes, isLoading, fetchHeroes }
})
