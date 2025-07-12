<template>
  <section class="bg-black text-white py-20 lg:py-32 lg:pb-5">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-baseline border-b border-gray-700 pb-4 mb-8">
        <h2 class="text-4xl lg:text-5xl font-light tracking-wider">CEK PESANAN</h2>
      </div>
    </div>
  </section>
  <section class="bg-white text-black py-12 px-4 lg:px-12">
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-4xl font-light">DETAIL PESANAN #123 456 7890</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-black hidden lg:block"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>

    <div class="flex items-center w-full mb-12">
      <div class="flex flex-col items-center text-black">
        <div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <p class="mt-2 text-sm font-medium">DIBUAT</p>
      </div>

      <div class="flex-auto border-t-2 border-black mx-4"></div>

      <div class="flex flex-col items-center text-black">
        <div
          class="w-8 h-8 rounded-full border-2 border-black bg-white flex items-center justify-center"
        >
          <div class="w-3 h-3 rounded-full bg-black"></div>
        </div>
        <p class="mt-2 text-sm font-medium">DIKONFIRMASI</p>
      </div>

      <div class="flex-auto border-t-2 border-gray-300 mx-4"></div>

      <div class="flex flex-col items-center text-gray-400">
        <div
          class="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center"
        ></div>
        <p class="mt-2 text-sm font-medium">SELESAI</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div class="lg:col-span-2">
        <div class="space-y-4">
          <div>
            <h2 class="font-bold text-lg mb-2">INFORMASI PEMESAN</h2>
            <div class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <p class="text-gray-500">STATUS</p>
              <p class="font-semibold text-blue-600">DIKONFIRMASI</p>

              <p class="text-gray-500">WAKTU & TANGGAL</p>
              <p class="font-semibold">15:30, 27 SEPTEMBER 2025</p>

              <p class="text-gray-500">NAMA</p>
              <p class="font-semibold">HAYU AMARYLLIS</p>

              <p class="text-gray-500">NO WHATSAPP</p>
              <p class="font-semibold">0812 3456 7890</p>

              <p class="text-gray-500">METODE BAYAR</p>
              <div class="flex items-center space-x-2">
                <p class="font-semibold">QRIS</p>
                <a href="#" class="px-2 py-0.5 bg-gray-200 text-black text-xs font-bold rounded"
                  >BUKTI TRANSAKSI</a
                >
              </div>
            </div>
          </div>

          <div class="pt-6">
            <h2 class="font-bold text-lg mb-2">CATATAN</h2>
            <p class="text-sm leading-relaxed text-gray-700">
              IN A REALM OF LIMITLESS CREATIVITY, STORYTELLING SHINES, TURNING WORDS INTO A TAPESTRY
              OF INSPIRATION. EACH SENTENCE CONNECTS US, URGING EXPLORATION OF OUR EXPERIENCES.
              LET’S EMBRACE THE POWER OF NARRATIVE IN SHAPING OUR ADVENTURES.
            </p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-bold text-lg">RINGKASAN PESANAN</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-gray-400"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div class="space-y-3 text-sm">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <img
                src="https://i.imgur.com/K8n5GXu.png"
                alt="Indoor Package"
                class="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <p class="font-semibold">PAKET INDOOR (PAS FOTO - COUPLE)</p>
                <p class="text-yellow-600 font-medium">IDR 30.000</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-gray-500">1x</p>
              <p class="font-semibold">IDR 30.000</p>
            </div>
          </div>

          <p class="font-bold pt-3">TAMBAHAN</p>

          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <img
                src="https://i.imgur.com/rN4q3aD.png"
                alt="Merah"
                class="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <p class="font-semibold">MERAH</p>
                <p class="text-yellow-600 font-medium">GRATIS</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-gray-500">1x</p>
              <p class="font-semibold">IDR 0</p>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <img
                src="https://i.imgur.com/712Xk1C.png"
                alt="Kimono"
                class="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <p class="font-semibold">KIMONO</p>
                <p class="text-yellow-600 font-medium">IDR 15.000</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-gray-500">1x</p>
              <p class="font-semibold">IDR 15.000</p>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <img
                src="https://i.imgur.com/PFC1GzC.png"
                alt="Onesie"
                class="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <p class="font-semibold">ONESIE</p>
                <p class="text-yellow-600 font-medium">IDR 15.000</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-gray-500">1x</p>
              <p class="font-semibold">IDR 15.000</p>
            </div>
          </div>

          <div class="flex justify-between items-center border-t pt-4 text-base font-bold">
            <p>TOTAL</p>
            <p>IDR 60.000</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
