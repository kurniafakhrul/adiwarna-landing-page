<!-- src/components/projects/HeaderProjectSection.vue -->
<template>
  <!-- Section Header (tetap) -->
  <section class="bg-black text-white py-20 lg:py-32 lg:pb-5">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-baseline border-b border-gray-700 pb-4 mb-8">
        <h2 class="text-4xl lg:text-5xl font-light tracking-wider">YANG SERING DITANYAKAN</h2>
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
    </div>
  </section>

  <section class="bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="border-b border-gray-200">
        <div v-for="(item, index) in faqItems" :key="index" class="border-t border-gray-200">
          <button
            @click="toggleItem(index)"
            class="w-full flex justify-between items-center text-left py-6"
          >
            <h3 class="text-lg font-medium text-brand-dark-blue">{{ item.question }}</h3>
            <span class="text-2xl text-brand-dark-blue">
              {{ openIndex === index ? '−' : '+' }}
            </span>
          </button>
          <transition name="fade">
            <div v-if="openIndex === index" class="pb-6 text-gray-600">
              <p>{{ item.answer }}</p>
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
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
<script setup>
import { ref } from 'vue'

// State untuk melacak item mana yang sedang terbuka
const openIndex = ref(null) // null berarti semua tertutup

// Data statis untuk FAQ
const faqItems = ref([
  {
    question: 'Apa saja yang termasuk dalam paket foto?',
    answer:
      'Setiap paket dasar kami sudah termasuk sesi foto sesuai durasi, semua file soft copy yang telah dipilih, dan properti dasar yang tersedia di studio seperti kacamata, topi, dan lainnya.',
  },
  {
    question: 'Kapan hasil foto akan dikirim?',
    answer:
      'Untuk sesi foto biasa, Anda akan menerima link Google Drive berisi semua file dalam waktu maksimal 1x24 jam. Untuk sesi yang memerlukan editing berat seperti pre-wedding, prosesnya memakan waktu maksimal 3 hari kerja.',
  },
  {
    question: 'Bisa request gaya atau konsep tertentu nggak?',
    answer:
      'Tentu saja! Kami sangat terbuka untuk diskusi. Sampaikan konsep yang Anda inginkan saat melakukan pemesanan, dan fotografer kami akan membantu mewujudkannya.',
  },
  {
    question: 'Apa boleh bawa properti atau outfit sendiri?',
    answer:
      'Boleh banget! Kalau kamu punya barang spesial (kayak kado, bunga, atau outfit tertentu), silakan dibawa. Tambahan sentuhan personal selalu bikin foto makin bermakna 💛',
  },
  {
    question: 'File foto disimpan sampai kapan?',
    answer:
      'Kami akan menyimpan semua file Anda di Google Drive selama maksimal 1 bulan setelah link dibagikan. Kami sangat menyarankan Anda untuk segera mengunduh dan membuat cadangan file Anda sendiri.',
  },
  {
    question: 'Bisa cetak foto juga di Adiwarna?',
    answer:
      'Ya, kami menyediakan layanan cetak dengan berbagai ukuran dan material. Anda bisa memilih item "Cetak Foto" sebagai add-on saat melakukan pemesanan atau memintanya setelah sesi selesai.',
  },
  {
    question: 'Kalau mau reschedule, bisa nggak?',
    answer:
      'Bisa, dengan syarat dan ketentuan berlaku. Harap informasikan kepada kami maksimal 2 hari sebelum jadwal sesi Anda untuk melakukan penjadwalan ulang tanpa biaya tambahan.',
  },
])

const toggleItem = (index) => {
  // Jika item yang sama diklik lagi, tutup. Jika tidak, buka item baru.
  openIndex.value = openIndex.value === index ? null : index
}
</script>
