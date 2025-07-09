<!-- src/components/home/AboutSection.vue -->
<template>
  <section class="bg-white py-20 lg:py-32">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Kolom Kiri: Teks Deskripsi -->
        <div class="text-left">
          <p class="text-sm font-semibold tracking-widest text-brand-dark-blue uppercase">
            ADIWARNA STUDIO.
          </p>
          <h2 class="text-4xl lg:text-5xl font-bold text-brand-dark-blue mt-4 leading-tight">
            KAMI MENGABADIKAN<br />
            — KENANGAN PALING<br />
            BERHARGA ANDA
          </h2>
          <p class="mt-6 text-gray-600 max-w-lg">
            Setiap foto yang kami ambil adalah bagian penting dari kisah hidup Anda. Biarkan kami
            membantu menceritakan kisah itu dengan cara yang indah dan penuh makna, menangkap setiap
            momen berharga yang akan selalu Anda ingat.
          </p>
          <a href="#" class="inline-flex items-center mt-8 font-bold text-brand-dark-blue group">
            <span>TENTANG KAMI</span>
            <svg
              class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <!-- Kolom Kanan: Kolase Gambar -->
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <img
              src="https://media.istockphoto.com/id/967138082/photo/mannequin-faces-black-and-white-art-photography.jpg?s=612x612&w=0&k=20&c=p9Nql3pDKPp6x42waPv4yoP4sD2L0nb16jYUTtDGyKg="
              alt="Potret monokrom"
              class="rounded-lg shadow-lg object-cover w-full h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
              alt="Potret wanita"
              class="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </div>
          <div class="pt-10">
            <img
              src="https://image.idntimes.com/post/20210723/64451880-129937648210242-1961279609368267008-n-459d82904dc90182afc2b581cbff7d40-232b10ec99e85fd8c84333971068e99c.jpg"
              alt="Foto keluarga bahagia"
              class="rounded-lg shadow-lg object-cover w-full h-[34rem]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
