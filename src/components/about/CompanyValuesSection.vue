<template>
  <section class="bg-black text-white py-20">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-12 flex-wrap gap-4">
        <h2 class="text-3xl md:text-4xl font-bold">COMPANY VALUES</h2>
        <a href="#contact" class="text-sm text-white hover:text-yellow-400 flex items-center gap-2">
          TERTARIK DENGAN KAMI <span class="text-yellow-400">→</span>
        </a>
      </div>

      <!-- Konten utama -->
      <div class="flex flex-col md:flex-row gap-10 items-stretch justify-between">
        <!-- Gambar -->
        <div class="w-full md:w-2/5">
          <div class="h-full">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
              alt="Camera value photo"
              class="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        <!-- Nilai-nilai -->
        <div class="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Value 1 -->
          <div class="flex flex-col h-full">
            <div class="flex justify-between">
              <h3 class="font-light uppercase text-2xl">PASSION FOR PRECISION</h3>
              <p class="text-yellow-400 font-light text-2xl">01</p>
            </div>
            <p class="text-sm mt-2 text-gray-300">
              Kami mengutamakan ketelitian setiap detail untuk menghasilkan karya yang sempurna dan
              profesional.
            </p>
          </div>

          <!-- Value 2 -->
          <div class="flex flex-col h-full">
            <div class="flex justify-between">
              <h3 class="font-light uppercase text-2xl">CREATIVITY UNLEASHED</h3>
              <p class="text-yellow-400 font-light text-2xl">02</p>
            </div>
            <p class="text-sm mt-2 text-gray-300">
              Kami menghadirkan ide-ide segar dan pendekatan visual yang bebas batas untuk setiap
              pemotretan.
            </p>
          </div>

          <!-- Value 3 -->
          <div class="flex flex-col h-full">
            <div class="flex justify-between">
              <h3 class="font-light uppercase text-2xl">CUSTOMER APPROACH</h3>
              <p class="text-yellow-400 font-light text-2xl">03</p>
            </div>
            <p class="text-sm mt-2 text-gray-300">
              Kami membangun hubungan yang hangat, dengan fokus pada kebutuhan dan kenyamanan klien.
            </p>
          </div>

          <!-- Value 4 -->
          <div class="flex flex-col h-full">
            <div class="flex justify-between">
              <h3 class="font-light uppercase text-2xl">TIMELESS STORIES</h3>
              <p class="text-yellow-400 font-light text-2xl">04</p>
            </div>
            <p class="text-sm mt-2 text-gray-300">
              Kami menciptakan foto yang tak lekang oleh waktu, penuh makna, dan siap dikenang
              sepanjang masa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
