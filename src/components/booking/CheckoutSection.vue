<template>
  <section v-if="attributes.length > 0" class="bg-white text-black py-16 px-4 lg:px-12">
    <h1 class="text-4xl font-light mb-10">ISI DATA PEMESANAN</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- KIRI: Tambahan per attribute -->
      <div class="space-y-10">
        <h2 class="text-xl font-semibold mb-4">
          TAMBAHAN <span class="text-yellow-500 text-sm font-normal">OPSIONAL</span>
        </h2>

        <div v-for="attribute in attributes" :key="attribute.id" class="border-t pt-4">
          <div
            class="flex justify-between items-center cursor-pointer mb-2"
            @click="toggleAttribute(attribute.id)"
          >
            <span class="font-semibold uppercase text-gray-700">
              {{ attribute.name }}
            </span>
            <span
              v-html="
                collapsedAttributes.includes(attribute.id) ? iconChevronRight : iconChevronDown
              "
            ></span>
          </div>

          <div v-if="!collapsedAttributes.includes(attribute.id)" class="space-y-4">
            <label
              v-for="item in items.filter((i) => i.attributeId === attribute.id)"
              :key="item.id"
              class="flex items-center gap-4"
            >
              <input
                type="checkbox"
                :value="item.id"
                v-model="selectedItems[item.id]"
                @change="toggleItem(item)"
              />
              <img :src="item.imageUrl" class="w-20 h-20 object-cover rounded border shrink-0" />
              <div class="flex-1">
                <p class="font-semibold uppercase">{{ item.name }}</p>
                <p class="text-sm text-yellow-600">IDR {{ formatPrice(item.price) }}</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- KANAN: Formulir -->
      <div class="space-y-10">
        <div>
          <h2 class="text-xl font-semibold mb-2">INFORMASI PEMESAN</h2>
          <input
            v-model="form.name"
            type="text"
            placeholder="MASUKKAN NAMA"
            class="w-full border-b p-2 mb-4 outline-none"
          />
          <input
            v-model="form.whatsapp"
            type="text"
            placeholder="MASUKKAN NOMOR WHATSAPP"
            class="w-full border-b p-2 mb-4 outline-none"
          />
          <select v-model="form.payment" class="w-full border-b p-2 mb-4 outline-none">
            <option disabled value="">PILIH METODE BAYAR</option>
            <option value="transfer">Transfer Bank</option>
            <option value="cod">Bayar di Tempat</option>
          </select>
          <textarea
            v-model="form.notes"
            placeholder="MASUKKAN CATATAN"
            class="w-full border-b p-2 outline-none"
          ></textarea>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-2">PERSETUJUAN</h2>
          <label class="block mb-2">
            <input type="checkbox" v-model="agreement.terms" />
            <span class="ml-2">
              Saya menyetujui <a href="#" class="underline">syarat & ketentuan</a>.
            </span>
          </label>
          <label>
            <input type="checkbox" v-model="agreement.portfolio" />
            <span class="ml-2">Setuju digunakan untuk portfolio</span>
          </label>
        </div>
      </div>
    </div>

    <!-- RINGKASAN -->
    <div class="mt-16 border-t pt-6 text-sm">
      <h2 class="text-lg font-bold mb-2">RINGKASAN PESANAN</h2>
      <table class="w-full mb-6 text-left">
        <tbody>
          <tr>
            <td class="py-1">WAKTU DAN TANGGAL</td>
            <td class="py-1 text-right">
              {{ formatFullDate(bookingStore.currentSelection.date) }} —
              {{ bookingStore.currentSelection.time }}
            </td>
          </tr>
          <tr>
            <td class="py-1">JENIS LAYANAN</td>
            <td class="py-1 text-right">
              {{ selectedPackage?.category || '-' }} — {{ selectedPackage?.name || '-' }}<br />
              IDR {{ formatPrice(selectedPackage?.basePrice || 0) }}
            </td>
          </tr>
          <tr>
            <td class="py-1 align-top">TAMBAHAN</td>
            <td class="py-1 text-right">
              <template v-if="Object.keys(selectedItems).length > 0">
                <div
                  v-for="(checked, id) in selectedItems"
                  v-if="checked"
                  :key="id"
                  class="flex justify-between"
                >
                  <span>{{ getItemName(id) }}</span>
                  <span>IDR {{ formatPrice(getItemPrice(id)) }}</span>
                </div>
              </template>
              <span v-else>-</span>
            </td>
          </tr>
          <tr>
            <td class="py-1 font-bold text-base">TOTAL</td>
            <td class="py-1 text-right font-bold text-base">
              IDR {{ formatPrice(totalKeseluruhan) }}
            </td>
          </tr>
        </tbody>
      </table>

      <button
        class="w-full bg-black text-white py-4 font-semibold hover:opacity-90 transition disabled:opacity-50"
        :disabled="!form.name || !form.whatsapp || !form.payment || !agreement.terms"
        @click="submitOrder"
      >
        AJUKAN PESANAN
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBookingStore } from '@/stores/bookingStore'

const bookingStore = useBookingStore()

onMounted(() => {
  bookingStore.fetchAttributesAndItems()
})

const attributes = computed(() => bookingStore.attributes || [])
const items = computed(() => bookingStore.items || [])

const selectedItems = ref({})
const collapsedAttributes = ref([])

const form = ref({
  name: '',
  whatsapp: '',
  payment: '',
  notes: '',
})

const agreement = ref({
  terms: false,
  portfolio: false,
})

const selectedPackage = computed(() => {
  return (
    bookingStore.bookings?.find((pkg) => pkg.id === bookingStore.currentSelection?.packageId) || {}
  )
})

const iconChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-black" viewBox="0 0 24 24"><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>`
const iconChevronRight = `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-black" viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"/></svg>`

function formatPrice(amount) {
  return amount.toLocaleString('id-ID')
}

function formatFullDate(dateStr) {
  if (!dateStr) return '-'
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function toggleItem(item) {
  if (!selectedItems.value[item.id]) {
    delete selectedItems.value[item.id]
  }
}

function toggleAttribute(attributeId) {
  if (collapsedAttributes.value.includes(attributeId)) {
    collapsedAttributes.value = collapsedAttributes.value.filter((id) => id !== attributeId)
  } else {
    collapsedAttributes.value.push(attributeId)
  }
}

function getItemName(id) {
  return items.value.find((item) => item.id === id)?.name || ''
}

function getItemPrice(id) {
  return items.value.find((item) => item.id === id)?.price || 0
}

const totalTambahan = computed(() => {
  return Object.entries(selectedItems.value)
    .filter(([_, checked]) => checked)
    .reduce((total, [id]) => {
      const item = items.value.find((i) => i.id === id)
      if (!item || item.isFree) return total
      return total + item.price
    }, 0)
})

const totalKeseluruhan = computed(() => {
  return (selectedPackage.value?.basePrice || 0) + totalTambahan.value
})

function submitOrder() {
  const extras = Object.entries(selectedItems.value)
    .filter(([_, checked]) => checked)
    .map(([id]) => {
      const item = items.value.find((i) => i.id === id)
      return {
        id,
        name: item.name,
        attributeId: item.attributeId,
        quantity: 1,
        price: item.price,
        isFree: item.isFree,
      }
    })

  bookingStore.currentSelection = {
    ...bookingStore.currentSelection,
    extras,
  }

  const payload = {
    name: form.value.name,
    whatsapp: form.value.whatsapp,
    payment: form.value.payment,
    notes: form.value.notes,
    extras,
    agreement: agreement.value,
    package: selectedPackage.value,
    schedule: bookingStore.currentSelection,
  }

  console.log('Pesanan dikirim:', payload)
}
</script>

<style scoped>
input[type='checkbox'] {
  transform: scale(1.2);
  margin-right: 8px;
}
</style>
