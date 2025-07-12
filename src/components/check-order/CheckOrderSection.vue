<template>
  <section class="bg-black text-white py-20 lg:py-32 lg:pb-5">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-baseline border-b border-gray-700 pb-4 mb-8">
        <h2 class="text-4xl lg:text-5xl font-light tracking-wider">CEK PESANAN</h2>
      </div>
    </div>
  </section>

  <section class="bg-white text-black py-12 px-4 lg:px-12">
    <h1 class="text-4xl font-light mb-10">MASUKKAN NOMOR ORDER/WHATSAPP</h1>
    <div>
      <form class="space-y-6" @submit.prevent="goToDetailOrder">
        <div>
          <input
            v-model="orderNumber"
            type="text"
            id="orderNumber"
            class="mt-1 block w-full px-3 py-2 border-0 border-b border-black shadow-sm focus:outline-none focus:ring-brand-accent-gold focus:border-brand-accent-gold sm:text-xl"
            placeholder="Masukkan nomor order atau WhatsApp"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-black text-white py-4 font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          Cek Pesanan
        </button>
      </form>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const orderNumber = ref('')

const goToDetailOrder = () => {
  if (!orderNumber.value) return
  // Bisa juga dikirim sebagai query atau param
  router.push({ path: '/detail-order', query: { order: orderNumber.value } })
}
</script>
