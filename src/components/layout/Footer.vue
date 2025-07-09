<template>
  <footer class="bg-black text-white">
    <!-- CTA Section -->

    <div class="relative text-white h-[350px] overflow-hidden">
      <!-- Background split: atas putih, bawah hitam -->
      <div class="absolute inset-0 z-0">
        <div class="w-full h-1/2 bg-white"></div>
        <div class="w-full h-1/2 bg-black"></div>
      </div>

      <!-- Gambar di atas background -->
      <img
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover z-10 p-10"
      />
      <!-- Konten -->
      <div
        class="absolute inset-0 flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto h-full z-20 text-white"
      >
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 class="text-3xl md:text-4xl font-semibold italic max-w-lg leading-snug text-center">
            “SETIAP MOMEN — <br class="md:hidden" />
            PENUH MAKNA.”
          </h2>
          <div class="max-w-xl text-sm md:text-base space-y-4 text-center">
            <p>
              Setiap detil dalam hidupmu layak untuk diabadikan. Kami percaya bahwa setiap momen,
              sekecil apapun, memiliki cerita yang ingin dikenang. Mari bersama-sama menciptakan
              foto-foto yang tak hanya indah, tetapi juga bermakna.
            </p>
            <a
              href="#"
              class="inline-flex items-center gap-2 px-6 py-2 border border-white text-white uppercase tracking-wide font-semibold hover:bg-white hover:text-black transition"
            >
              BOOK NOW
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer -->
    <div
      class="bg-black text-white px-6 md:px-20 py-12 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 border-b border-gray-700"
    >
      <!-- Logo & Links -->
      <div>
        <h3 class="text-lg font-bold mb-4">Adivarna Studio.</h3>
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

        <!-- Social Media -->
        <div class="flex gap-3 mt-6">
          <a href="#" class="text-gray-300 hover:text-white">
            <i class="fab fa-facebook-square text-2xl"></i>
          </a>
          <a href="#" class="text-gray-300 hover:text-white">
            <i class="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" class="text-gray-300 hover:text-white">
            <i class="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" class="text-gray-300 hover:text-white">
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" class="text-gray-300 hover:text-white">
            <i class="fab fa-youtube text-2xl"></i>
          </a>
        </div>
      </div>

      <!-- Spacer -->
      <div class="hidden md:block"></div>

      <!-- Contact Section -->
      <div class="relative">
        <div
          class="md:absolute md:left-[-1.5rem] md:top-0 md:bottom-0 w-px bg-gray-700 hidden md:block"
        ></div>
        <div class="pl-0 md:pl-6 mt-6 md:mt-0">
          <h3 class="text-2xl font-bold mb-6 flex items-center gap-2">
            Yuk, Hubungi Kami!
            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </h3>
          <ul class="text-sm text-gray-300 space-y-4">
            <li>
              <span class="block font-medium text-white">Email</span>
              hello@adiwarna.co
            </li>
            <li>
              <span class="block font-medium text-white">Telepon</span>
              0812 3456 7890
            </li>
            <li>
              <span class="block font-medium text-white">Alamat</span>
              123 Anywhere St., Any City, 12345 Any State
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center text-xs text-gray-400 py-4 bg-black">
      Copyright © 2025 BCB Tech | All Rights Reserved
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
/* Tambahan jika ingin kustom font/icon */
</style>
