// src/stores/bookingStore.js

import { defineStore } from 'pinia'
import { ref } from 'vue'
import bookingService from '@/services/bookingService'

export const useBookingStore = defineStore('booking', () => {
  const bookings = ref([])
  const isLoading = ref(false)

  async function fetchBookings() {
    isLoading.value = true
    try {
      bookings.value = await bookingService.getBookings()
    } catch (error) {
      console.error('Gagal mengambil data pesanan:', error)
    } finally {
      isLoading.value = false
    }
  }

  return { bookings, isLoading, fetchBookings }
})
