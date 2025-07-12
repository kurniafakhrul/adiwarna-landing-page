<template>
  <footer class="bg-black text-white">
    <!-- === SECTION 1: CTA === -->

    <!-- === SECTION 2: MAIN FOOTER === -->
    <section class="bg-black text-white py-20 lg:py-32 border-t border-gray-800">
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <!-- Kiri: Logo & Link -->
        <div>
          <img src="/src/assets/logo.svg" alt="Adivarna Studio Logo" class="h-10 mb-6" />

          <div class="grid grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-2">Informasi</h4>
              <ul class="space-y-1 text-sm text-gray-300">
                <li><a href="#" class="hover:text-white">Beranda</a></li>
                <li><a href="#" class="hover:text-white">Our Service</a></li>
                <li><a href="#" class="hover:text-white">Our Project</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Dukungan</h4>
              <ul class="space-y-1 text-sm text-gray-300">
                <li><a href="#" class="hover:text-white">Tentang Kami</a></li>
                <li><a href="#" class="hover:text-white">FAQ</a></li>
                <li><a href="#" class="hover:text-white">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>

          <!-- Sosial Media -->
          <div class="flex gap-3 mt-6">
            <a href="#" class="bg-white p-2 rounded hover:opacity-80 transition">
              <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22,12A10,10 0 1,0 12,22A10,10 0 0,0 22,12M10,17V13H8V10H10V8.5C10,6.57 11.57,5 13.5,5H16V8H14.5C14.22,8 14,8.22 14,8.5V10H16L15.5,13H14V17H10Z"
                />
              </svg>
            </a>
            <a href="#" class="bg-white p-2 rounded hover:opacity-80 transition">
              <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.71 1.04 4.28 4.28 0 0 0-7.38 3.9 12.13 12.13 0 0 1-8.8-4.46 4.28 4.28 0 0 0 1.32 5.7A4.24 4.24 0 0 1 2.8 9.7v.05a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.96A8.59 8.59 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.54 12.2-12.21v-.56A8.67 8.67 0 0 0 24 5.34a8.47 8.47 0 0 1-2.54.7Z"
                />
              </svg>
            </a>
            <a href="#" class="bg-white p-2 rounded hover:opacity-80 transition">
              <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7.75,2A5.75,5.75 0 0,0 2,7.75V16.25A5.75,5.75 0 0,0 7.75,22H16.25A5.75,5.75 0 0,0 22,16.25V7.75A5.75,5.75 0 0,0 16.25,2H7.75M12,7A5,5 0 1,1 7,12A5,5 0 0,1 12,7M18,5.5A1.5,1.5 0 1,1 16.5,7A1.5,1.5 0 0,1 18,5.5Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Kanan: Kontak -->
        <div>
          <h3 class="text-3xl font-bold mb-6 flex items-center justify-between">
            Yuk, Hubungi Kami!
            <svg
              class="w-10 h-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 7l10 10M17 7v10H7" />
            </svg>
          </h3>

          <ul class="text-sm text-gray-300 divide-y divide-gray-700">
            <li class="py-3">
              <span class="block font-light text-[14px] leading-none">Email</span>
              <p class="font-normal text-[24px] leading-none text-white">hello@adiwarna.co</p>
            </li>
            <li class="py-3">
              <span class="block font-light text-[14px] leading-none">Telepon</span>
              <p class="font-normal text-[24px] leading-none text-white">0812 3456 7890</p>
            </li>
            <li class="py-3">
              <span class="block font-light text-[14px] leading-none">Alamat</span>
              <p class="font-normal text-[24px] leading-none text-white">
                123 Anywhere St., Any City, 12345 Any State
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- BOTTOM COPYRIGHT -->
    <div class="text-center text-xs text-white py-4 bg-black border-t border-gray-800">
      Copyright © 2025 BCB Tech | All Rights Reserved
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
