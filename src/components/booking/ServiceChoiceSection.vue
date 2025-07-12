<!-- src/components/home/ServiceChoiceSection.vue -->
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBookingStore } from '@/stores/bookingStore'
import { useRouter } from 'vue-router' // ✅ tambahkan ini

const router = useRouter() // ✅ tambahkan ini
// --- STATE MANAGEMENT ---
const bookingStore = useBookingStore()
const step = ref(1)
const selectedLocation = ref(null)
const selectedServiceCategory = ref(null)
const selectedPackageId = ref(null)

onMounted(() => {
  bookingStore.fetchBookings()
})

// --- COMPUTED PROPERTIES ---
const availableServiceCategories = computed(() => {
  if (!selectedLocation.value) return []
  const categories = bookingStore.bookings
    .filter((pkg) => pkg.location === selectedLocation.value)
    .map((pkg) => pkg.category)
  return [...new Set(categories)]
})

const availablePackages = computed(() => {
  if (!selectedServiceCategory.value) return []
  return bookingStore.bookings.filter(
    (pkg) =>
      pkg.category === selectedServiceCategory.value && pkg.location === selectedLocation.value,
  )
})

const selectedPackageDetails = computed(() => {
  if (!selectedPackageId.value) return null
  return bookingStore.bookings.find((pkg) => pkg.id === selectedPackageId.value)
})

// --- METHODS ---
function selectLocation(location) {
  selectedLocation.value = location
  selectedServiceCategory.value = null
  selectedPackageId.value = null
  step.value = 2
}

function selectCategory(category) {
  selectedServiceCategory.value = category
  selectedPackageId.value = null // Reset pilihan paket saat kategori berubah
}

function selectPackage(packageId) {
  selectedPackageId.value = packageId
  step.value = 3
}

function proceedToSchedule() {
  if (selectedPackageDetails.value) {
    // Simpan pilihan ke store
    bookingStore.selectPackageForBooking(selectedPackageDetails.value)
    // Arahkan ke halaman jadwal
    router.push('/schedule')
  }
}

function goBack() {
  if (step.value === 3) {
    step.value = 2
    selectedPackageId.value = null
  } else if (step.value === 2) {
    step.value = 1
    selectedLocation.value = null
    selectedServiceCategory.value = null
  }
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value)
}
</script>
<template>
  <section class="bg-white text-black lg:py-6 lg:pb-5">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-baseline pb-4 mb-8">
        <h2 class="text-4xl lg:text-5xl font-light tracking-wider">PILIH JENIS LAYANAN</h2>
        <svg
          class="w-10 h-10 text-brand-accent-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 7l10 10M17 7v10H7" />
        </svg>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[550px]">
        <!-- Kolom Kiri -->
        <transition name="fade" mode="out-in">
          <div :key="selectedLocation" class="group">
            <div class="overflow-hidden">
              <img
                v-if="selectedLocation === 'Indoor' || !selectedLocation"
                src="https://img.freepik.com/free-photo/professional-ballet-studio-with-handrail_23-2148461804.jpg"
                alt="Interior studio foto"
                class="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <img
                v-if="selectedLocation === 'Outdoor'"
                src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/krjogja/news/2022/09/21/473044/hidden-gem-jogja-punya-studio-alam-di-kota-bisa-foto-ratusan-konsep-dalam-1-tempat-220921o.jpg"
                alt="Lokasi pernikahan outdoor"
                class="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="mt-6">
              <h3 class="text-2xl font-light text-brand-accent-gold">
                {{ selectedLocation || 'STUDIO (INDOOR)' }}
              </h3>
              <p class="text-sm text-black mt-2">Foto di dalam ruangan atau studio, seperti:</p>
              <div class="grid grid-cols-2 gap-x-4 text-sm text-black mt-4">
                <ul class="list-disc list-inside space-y-1">
                  <li>Pre-Wedding</li>
                  <li>Graduation</li>
                  <li>Maternity</li>
                </ul>
                <ul class="list-disc list-inside space-y-1">
                  <li>Family Session</li>
                  <li>Pas Foto (Siswa/Pranikah)</li>
                  <li>Self Foto (Grup/Couple)</li>
                </ul>
              </div>
              <button
                v-if="step === 1"
                @click="selectLocation('Indoor')"
                class="w-full mt-6 py-4 bg-black text-white font-semibold hover:opacity-90"
              >
                PILIH
              </button>
              <button
                v-else
                @click="goBack"
                class="w-full mt-6 py-4 bg-gray-200 text-black font-semibold hover:bg-gray-300"
              >
                &larr; Ganti Pilihan
              </button>
            </div>
          </div>
        </transition>

        <!-- Kolom Kanan -->
        <div class="group">
          <transition name="fade" mode="out-in">
            <!-- Langkah 1: Tampilkan kartu Outdoor -->
            <div v-if="step === 1">
              <div class="overflow-hidden">
                <img
                  src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/krjogja/news/2022/09/21/473044/hidden-gem-jogja-punya-studio-alam-di-kota-bisa-foto-ratusan-konsep-dalam-1-tempat-220921o.jpg"
                  alt="Lokasi outdoor"
                  class="w-full h-96 object-cover"
                />
              </div>
              <div class="mt-6">
                <h3 class="text-2xl font-light text-brand-accent-gold">OUTDOOR</h3>
                <p class="text-sm text-black mt-2">
                  Foto di luar ruangan dengan latar belakang alam atau tempat terbuka, seperti:
                </p>
                <div class="grid grid-cols-2 gap-x-4 text-sm text-black mt-4">
                  <ul class="list-disc list-inside space-y-1">
                    <li>Graduation</li>
                    <li>Pre-Wedding</li>
                  </ul>
                  <ul class="list-disc list-inside space-y-1">
                    <li>Wedding</li>
                    <li>Engagement</li>
                  </ul>
                </div>
                <button
                  @click="selectLocation('Outdoor')"
                  class="w-full mt-6 py-4 bg-black text-white font-semibold hover:opacity-90"
                >
                  PILIH
                </button>
              </div>
            </div>

            <!-- Langkah 2: Tampilkan pilihan layanan dan paket -->
            <div v-else-if="step === 2" class="bg-gray-50 p-8 h-full flex flex-col space-y-6">
              <div>
                <h4 class="font-semibold text-gray-800">1. Pilih Jenis Layanan</h4>
                <div class="flex flex-wrap gap-2 mt-2">
                  <button
                    v-for="cat in availableServiceCategories"
                    :key="cat"
                    @click="selectCategory(cat)"
                    :class="
                      selectedServiceCategory === cat
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 border'
                    "
                    class="px-4 py-2 text-sm font-semibold transition-colors"
                  >
                    {{ cat }}
                  </button>
                </div>
              </div>

              <div class="flex-grow space-y-4 overflow-y-auto pr-2">
                <h4 v-if="selectedServiceCategory" class="font-semibold text-gray-800">
                  2. Pilih Paket
                </h4>
                <transition-group name="list" tag="div" class="space-y-4">
                  <div
                    v-for="pkg in availablePackages"
                    :key="pkg.id"
                    @click="selectPackage(pkg.id)"
                    class="p-4 border-2 border-gray-200 hover:border-black hover:shadow-lg transition-all cursor-pointer flex items-start space-x-4"
                  >
                    <img
                      :src="pkg.imageUrls[0]"
                      :alt="pkg.name"
                      class="w-24 h-24 object-cover flex-shrink-0"
                    />
                    <div class="flex-grow">
                      <h5 class="font-bold text-black">{{ pkg.name }}</h5>
                      <p class="text-xs text-gray-600 mt-1">{{ pkg.description }}</p>
                      <div class="flex justify-between items-center mt-2">
                        <span class="text-xs text-gray-500">{{ pkg.duration }} Menit</span>
                        <span class="font-bold text-brand-accent-gold">{{
                          formatCurrency(pkg.basePrice)
                        }}</span>
                      </div>
                    </div>
                  </div>
                </transition-group>
              </div>
            </div>

            <!-- Langkah 3: Tampilkan detail paket yang dipilih -->
            <div
              v-else-if="step === 3 && selectedPackageDetails"
              class="bg-gray-50 p-8 h-full flex flex-col space-y-4"
            >
              <div>
                <h4 class="font-bold text-xl text-black">
                  {{ selectedPackageDetails.name }}
                </h4>
                <p class="text-sm text-gray-600 mt-1">{{ selectedPackageDetails.description }}</p>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <img
                  v-for="(url, index) in selectedPackageDetails.imageUrls"
                  :key="index"
                  :src="url"
                  class="w-full h-40 object-cover"
                />
              </div>
              <div class="flex-grow"></div>
              <button
                @click="proceedToSchedule"
                class="w-full py-4 bg-black text-white font-semibold hover:opacity-90 transition-opacity"
              >
                LANJUTKAN PEMESANAN
              </button>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
