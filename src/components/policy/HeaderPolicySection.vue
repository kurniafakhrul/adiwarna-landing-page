<!-- src/components/projects/HeaderProjectSection.vue -->
<template>
  <!-- Section Header (tetap) -->
  <section class="bg-black text-white py-20 lg:py-32 lg:pb-5">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-baseline border-b border-gray-700 pb-4 mb-8">
        <h2 class="text-4xl lg:text-5xl font-light tracking-wider">
          SYARAT DAN KETENTUAN - ADIWARNA
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
    </div>
  </section>

  <!-- Section Content (disesuaikan padding & spacing antar block) -->
  <section class="bg-white">
    <div class="max-w-3xl mx-auto px-6 py-12 text-gray-800 text-sm leading-relaxed space-y-6">
      <p class="text-right text-xs text-gray-400">last update: June 9, 2025</p>

      <div class="space-y-4">
        <!-- Booking & Pembayaran -->
        <div>
          <h2 class="font-semibold text-lg mb-1">📅 Booking & Pembayaran</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>Booking dianggap fix setelah DP minimal 30% dari total biaya.</li>
            <li>Sisa pembayaran (pelunasan) paling lambat dilakukan 3 hari sebelum hari H.</li>
            <li>Mohon pengertiannya, DP tidak bisa dikembalikan jika kamu membatalkan sepihak.</li>
          </ul>
        </div>

        <!-- Waktu & Durasi -->
        <div>
          <h2 class="font-semibold text-lg mb-1">⏰ Waktu & Durasi</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>
              Datang tepat waktu ya, karena keterlambatan lebih dari 30 menit bisa mengurangi waktu
              foto atau dikenakan biaya tambahan.
            </li>
            <li>Durasi sesi foto sesuai dengan paket yang kamu pilih.</li>
          </ul>
        </div>

        <!-- Hasil Foto & Revisi -->
        <div>
          <h2 class="font-semibold text-lg mb-1">✨ Hasil Foto & Revisi</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>Kamu akan menerima hasil foto yang sudah diedit sesuai style kami.</li>
            <li>
              Revisi hanya untuk hal-hal ringan seperti warna dan pencahayaan (bukan ganti pose ya
              😊).
            </li>
            <li>
              Maksimal 1x revisi gratis, revisi tambahan bisa dilakukan dengan biaya tambahan.
            </li>
          </ul>
        </div>

        <!-- Penyimpanan File -->
        <div>
          <h2 class="font-semibold text-lg mb-1">💾 Penyimpanan File</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>Kami simpan file foto kamu selama 30 hari sejak pengiriman.</li>
            <li>
              Setelah itu, kami tidak menjamin file masih tersedia ya—jadi jangan lupa langsung
              download dan backup.
            </li>
          </ul>
        </div>

        <!-- Penggunaan Foto -->
        <div>
          <h2 class="font-semibold text-lg mb-1">📸 Penggunaan Foto</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>
              Kami sangat bangga bisa jadi bagian dari momen kamu, dan mungkin akan membagikan
              beberapa foto di portofolio atau media sosial (dengan penuh rasa cinta pastinya!).
            </li>
            <li>Kalau kamu ingin fotomu tidak dipublikasikan, beri tahu kami sejak awal, ya.</li>
          </ul>
        </div>

        <!-- Hal Tak Terduga -->
        <div>
          <h2 class="font-semibold text-lg mb-1">⚠️ Hal Tak Terduga</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>
              Jika terjadi hal di luar kendali (cuaca buruk, bencana, atau kejadian tak terduga
              lainnya), kami akan bantu cari solusi terbaik bersama.
            </li>
            <li>Kalau ada pertanyaan atau butuh penyesuaian khusus, kami selalu siap bantu.</li>
          </ul>
        </div>
      </div>

      <p class="text-center pt-6 font-medium text-gray-700">
        Terima kasih sudah mempercayakan momen spesialmu ke Adiwarna Studio!
        <span class="text-yellow-500">💛</span>
      </p>
    </div>
  </section>
</template>
