// src/stores/bookingStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import bookingService from '@/services/bookingService'

export const useBookingStore = defineStore(
  'booking',
  () => {
    const bookings = ref([])
    const isLoading = ref(false)

    const attributes = ref([]) // Atribut tambahan (Background, Kostum, dll)
    const items = ref([]) // Item per atribut

    const currentSelection = ref({
      packageId: null,
      location: null,
      category: null,
      date: null,
      time: null,
      background: null,
      extras: [],
    })

    // Fetch data paket booking
    async function fetchBookings() {
      isLoading.value = true
      try {
        bookings.value = await bookingService.getPackages()
      } catch (error) {
        console.error('Gagal mengambil data paket:', error)
      } finally {
        isLoading.value = false
      }
    }

    // Pilih paket saat user pilih layanan
    function selectPackageForBooking(pkg) {
      currentSelection.value = {
        ...currentSelection.value,
        packageId: pkg.id,
        location: pkg.location,
        category: pkg.category,
      }
    }

    // Simpan jadwal yang dipilih user
    function setSchedule(date, time) {
      currentSelection.value = {
        ...currentSelection.value,
        date,
        time,
      }
    }

    // Dummy data attributes dan items
    function fetchAttributesAndItems() {
      attributes.value = [
        { id: 'ATTR-01', name: 'Background Foto' },
        { id: 'ATTR-02', name: 'Kostum' },
        { id: 'ATTR-03', name: 'Aksesoris' },
      ]

      items.value = [
        {
          id: 'ITEM-01',
          attributeId: 'ATTR-01',
          name: 'Kain Biru',
          imageUrl: 'https://placehold.co/100x100/3a86ff/FFFFFF?text=Biru',
          trackQuantity: false,
          isFree: true,
          price: 0,
        },
        {
          id: 'ITEM-02',
          attributeId: 'ATTR-01',
          name: 'Kain Merah',
          imageUrl: 'https://placehold.co/100x100/d62828/FFFFFF?text=Merah',
          trackQuantity: false,
          isFree: true,
          price: 0,
        },
        {
          id: 'ITEM-03',
          attributeId: 'ATTR-02',
          name: 'Baju Sekolah',
          imageUrl: 'https://placehold.co/100x100/2a9d8f/FFFFFF?text=Sekolah',
          trackQuantity: true,
          isFree: false,
          price: 15000,
        },
        {
          id: 'ITEM-04',
          attributeId: 'ATTR-03',
          name: 'Topi Hitam',
          imageUrl: 'https://placehold.co/100x100/111111/FFFFFF?text=Topi',
          trackQuantity: false,
          isFree: false,
          price: 5000,
        },
      ]
    }

    return {
      bookings,
      isLoading,
      attributes,
      items,
      currentSelection,
      fetchBookings,
      fetchAttributesAndItems,
      selectPackageForBooking,
      setSchedule,
    }
  },
  {
    persist: true, // Agar data tetap tersimpan meski reload
  },
)
