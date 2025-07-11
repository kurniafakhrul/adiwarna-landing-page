<template>
  <footer class="bg-black text-white">
    <div class="relative h-[400px] overflow-hidden bg-white">
      <img
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80"
        alt="Call to action background"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="container mx-auto px-6 relative z-10 flex h-full items-center">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 w-full">
          <h2
            class="text-3xl md:text-4xl font-semibold italic max-w-md leading-snug text-center md:text-left"
          >
            “SETIAP MOMEN — <br />
            PENUH MAKNA.”
          </h2>
          <div class="max-w-md text-sm md:text-base space-y-4 text-center md:text-left">
            <p class="text-gray-200">
              Setiap detil dalam hidupmu layak untuk diabadikan. Mari bersama-sama menciptakan
              foto-foto yang tak hanya indah, tetapi juga bermakna dan tak ternilai.
            </p>
            <div class="flex justify-center md:justify-start">
              <a
                href="#"
                class="inline-flex gap-2 px-6 py-2 text-white uppercase tracking-wide font-semibold group transition"
              >
                <span
                  class="inline-flex items-center gap-2 border-b-2 border-brand-accent-gold group-hover:border-transparent transition-colors duration-300"
                >
                  BOOK NOW
                  <svg
                    class="w-5 h-5 text-brand-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 7l5 5-5 5M6 12h12"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-black text-white">
      <div class="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 border-b border-gray-800">
        <div>
          <img src="/src/assets/logo.svg" alt="Adivarna Studio Logo" class="h-10 mb-8" />

          <div class="grid grid-cols-2 gap-8">
            <div>
              <h4 class="font-semibold mb-3 tracking-wider">Informasi</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" class="hover:text-brand-accent-gold transition-colors">Beranda</a>
                </li>
                <li>
                  <a href="#" class="hover:text-brand-accent-gold transition-colors">Our Service</a>
                </li>
                <li>
                  <a href="#" class="hover:text-brand-accent-gold transition-colors">Our Project</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-3 tracking-wider">Dukungan</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" class="hover:text-brand-accent-gold transition-colors"
                    >Tentang Kami</a
                  >
                </li>
                <li><a href="#" class="hover:text-brand-accent-gold transition-colors">FAQ</a></li>
                <li>
                  <a href="#" class="hover:text-brand-accent-gold transition-colors"
                    >Syarat & Ketentuan</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="flex gap-4 mt-8">
            <a href="#" class="bg-white p-2 rounded-full hover:opacity-80 transition">
              <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.04C6.5 2.04 2 6.53 2 12s4.5 9.96 10 9.96c5.5 0 10-4.46 10-9.96S17.5 2.04 12 2.04zm3.5 8.46h-2.25V17h-3V10.5H8.5v-2.5h1.75V6.45c0-1.77 1.08-2.75 2.67-2.75h2.08v2.5h-1.4c-.85 0-1.01.4-1.01.99v1.31h2.43l-.38 2.5z"
                />
              </svg>
            </a>
            <a href="#" class="bg-white p-2 rounded-full hover:opacity-80 transition">
              <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.71 1.04C18.4 4.31 17.01 3.75 15.5 3.75c-2.81 0-5.08 2.27-5.08 5.08 0 .4.05.78.13 1.15-4.23-.21-7.98-2.24-10.49-5.32-.44.75-.69 1.62-.69 2.55 0 1.76.9 3.32 2.27 4.22-.83-.03-1.62-.26-2.3-.64v.06c0 2.46 1.75 4.51 4.08 4.98-.43.12-.88.18-1.35.18-.33 0-.65-.03-.96-.09.65 2.02 2.53 3.48 4.76 3.52-1.74 1.36-3.93 2.18-6.32 2.18-.41 0-.81-.02-1.21-.07 2.25 1.45 4.93 2.3 7.76 2.3 9.31 0 14.4-7.72 14.4-14.4 0-.22 0-.44-.01-.66.99-.71 1.84-1.6 2.53-2.62z"
                />
              </svg>
            </a>
            <a href="#" class="bg-white p-2 rounded-full hover:opacity-80 transition">
              <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm4.4 3.6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4.7-3.3c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="mt-8 md:mt-0">
          <h3 class="text-3xl font-bold mb-6 flex items-center justify-between">
            Yuk, Hubungi Kami!
            <svg
              class="w-10 h-10 text-gray-600 hidden md:block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 7l10 10M17 7v10H7" />
            </svg>
          </h3>

          <ul class="text-gray-300 divide-y divide-gray-800">
            <li class="py-4">
              <span class="block font-light text-sm text-gray-400">Email</span>
              <p class="font-normal text-xl md:text-2xl text-white mt-1">hello@adiwarna.co</p>
            </li>
            <li class="py-4">
              <span class="block font-light text-sm text-gray-400">Telepon</span>
              <p class="font-normal text-xl md:text-2xl text-white mt-1">0812 3456 7890</p>
            </li>
            <li class="py-4">
              <span class="block font-light text-sm text-gray-400">Alamat</span>
              <p class="font-normal text-xl md:text-2xl text-white mt-1 leading-snug">
                123 Anywhere St., Any City, 12345
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-black">
        <div class="container mx-auto px-6 text-center text-xs text-gray-500 py-6">
          Copyright © 2025 ADIWERNA STUDIO | All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const text_brand_accent_gold = '#cfaa3b' // defined for use in style bindings if needed
</script>

<style scoped>
.text-brand-accent-gold {
  color: #cfaa3b;
}
.border-brand-accent-gold {
  border-color: #cfaa3b;
}
</style>
