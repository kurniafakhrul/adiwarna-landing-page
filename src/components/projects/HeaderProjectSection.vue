<!-- src/components/projects/HeaderProjectSection.vue -->
<template>
  <section class="bg-black text-white py-20 lg:py-32">
    <div class="container mx-auto px-6">
      <!-- Header Section -->
      <div class="flex justify-between items-baseline border-b border-gray-700 pb-4 mb-8">
        <h2 class="text-4xl lg:text-5xl font-light tracking-wider">
          CERITA MEREKA, DALAM FOTO KAMI
        </h2>
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

      <!-- Gambar Utama -->
      <div class="w-full h-[60vh] bg-gray-800">
        <img
          src="https://hellostoryteller.com/wp-content/uploads/2021/05/HSbnw1.jpg"
          alt="Tim Adiwarna Studio"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>
