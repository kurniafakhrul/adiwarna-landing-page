<template>
  <section class="bg-black text-white py-20 lg:py-32 lg:pb-5">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-baseline border-b border-gray-700 pb-4 mb-8">
        <h2 class="text-4xl lg:text-5xl font-light tracking-wider">PEMESANAN</h2>
      </div>
    </div>
  </section>
  <section class="bg-white text-black py-12 px-4 lg:px-12">
    <h1 class="text-4xl font-light mb-10">PILIH WAKTU PEMESANAN</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <vue-cal
          style="height: 400px"
          locale="id"
          default-view="month"
          :hide-title-bar="false"
          :disable-views="['years', 'year', 'week', 'day']"
          :time="false"
          :events="[]"
          @cell-click="onDateSelect"
          :cell-class="getCellClass"
          :min-date="new Date()"
        />
      </div>

      <div class="grid grid-cols-3 gap-3">
        <button
          v-for="(time, index) in timeSlots"
          :key="index"
          :disabled="time.disabled"
          @click="selectTime(time.value)"
          :class="[
            'py-2 px-2 border text-sm font-semibold text-center transition',
            time.disabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : selectedTime === time.value
                ? 'bg-black text-white'
                : 'bg-white hover:bg-gray-100',
          ]"
        >
          {{ time.label }}
        </button>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="text-lg font-bold mb-2">RINGKASAN PESANAN</h2>
      <div class="text-sm text-right mb-6 min-h-[40px]">
        <p v-if="selectedPackage" class="font-semibold">{{ selectedPackage.name }}</p>
        <p>{{ orderSummaryDisplay }}</p>
      </div>

      <button
        class="w-full bg-black text-white py-4 font-semibold hover:opacity-90 transition disabled:opacity-50"
        :disabled="!selectedTime || !selectedDate"
        @click="proceed"
      >
        LANJUTKAN PILIH LAYANAN
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBookingStore } from '@/stores/bookingStore' // Impor store
import 'vue-cal/dist/vuecal.css'
import VueCal from 'vue-cal'

const router = useRouter()
const bookingStore = useBookingStore() // Inisialisasi store

const selectedDate = ref(null)
const selectedTime = ref(null)

// Ambil data booking saat komponen dimuat
onMounted(() => {
  if (bookingStore.bookings.length === 0) {
    bookingStore.fetchBookings()
  }
})

const selectedPackage = computed(() => {
  if (!bookingStore.currentSelection.packageId || bookingStore.bookings.length === 0) {
    return null
  }
  return bookingStore.bookings.find((pkg) => pkg.id === bookingStore.currentSelection.packageId)
})

const timeSlots = [
  { label: '09:00', value: '09:00' },
  { label: '09:30', value: '09:30' },
  { label: '10:00', value: '10:00', disabled: true },
  { label: '10:30', value: '10:30' },
  { label: '11:00', value: '11:00', disabled: true },
  { label: '11:30', value: '11:30', disabled: true },
  { label: '12:00', value: '12:00' },
  { label: '12:30', value: '12:30' },
  { label: '13:00', value: '13:00' },
  { label: '13:30', value: '13:30' },
  { label: '14:00', value: '14:00' },
  { label: '14:30', value: '14:30' },
  { label: '15:00', value: '15:00' },
  { label: '15:30', value: '15:30' },
  { label: '16:00', value: '16:00' },
  { label: '16:30', value: '16:30' },
  { label: '17:00', value: '17:00' },
  { label: '17:30', value: '17:30' },
  { label: '18:00', value: '18:00' },
  { label: '18:30', value: '18:30' },
  { label: '19:00', value: '19:00' },
  { label: '19:30', value: '19:30' },
  { label: '20:00', value: '20:00' },
  { label: '20:30', value: '20:30' },
  { label: '21:00', value: '21:00' },
  { label: '21:30', value: '21:30' },
  { label: '22:00', value: '22:00' },
]

const orderSummaryDisplay = computed(() => {
  if (!selectedDate.value) return '-'

  const datePart = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'long',
  }).format(selectedDate.value)

  if (!selectedTime.value) return datePart

  return `${selectedTime.value}, ${datePart}`
})

function onDateSelect(dateObj) {
  let rawDate = dateObj?.date || dateObj?.startDate || dateObj
  if (typeof rawDate === 'string') {
    rawDate = new Date(rawDate)
  }
  if (rawDate instanceof Date && !isNaN(rawDate.getTime())) {
    selectedDate.value = rawDate
    selectedTime.value = null
  }
}

function selectTime(time) {
  if (!selectedDate.value) {
    alert('Silakan pilih tanggal terlebih dahulu.')
    return
  }
  selectedTime.value = time
}

function proceed() {
  if (selectedDate.value && selectedTime.value && selectedPackage.value) {
    const formattedDate = selectedDate.value.toISOString().split('T')[0]

    // Simpan ke store
    bookingStore.setSchedule(formattedDate, selectedTime.value)

    // Arahkan ke halaman checkout
    router.push('/checkout')
  }
}

function getCellClass(date) {
  if (!selectedDate.value) return ''
  const selected = new Date(selectedDate.value)
  const current = new Date(date)
  selected.setHours(0, 0, 0, 0)
  current.setHours(0, 0, 0, 0)
  return selected.getTime() === current.getTime() ? 'selected' : ''
}
</script>

<style>
.vuecal__cell {
  padding: 10px !important;
  cursor: pointer;
  text-align: center;
  color: black !important;
  font-weight: 500;
  transition: all 0.2s ease;
}

.vuecal__cell.selected,
.vuecal__cell.vuecal__cell--selected {
  background-color: black !important;
  color: white !important;
  border-radius: 6px;
  font-weight: bold;
  border: 2px solid white !important;
  box-shadow:
    0 0 0 2px white,
    0 0 0 4px black !important;
  z-index: 2;
  position: relative;
  transform: scale(1.05);
}

.vuecal__cell:hover {
  background-color: #222 !important;
  color: white !important;
}

.vuecal__cell--disabled {
  cursor: not-allowed;
  color: #c0c0c0 !important;
  background-color: #f7f7f7 !important;
  opacity: 0.5;
}
</style>
