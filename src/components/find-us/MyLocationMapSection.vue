<!-- src/components/find-us/MyLocationMapSection.vue -->
<template>
  <div class="map-container">
    <!-- <LMap :zoom="15" :center="center" style="height: 400px; width: 100%">
      <LTileLayer :url="tileUrl" :attribution="attribution" />
      <LMarker :lat-lng="center" />
    </LMap> -->
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.6502981219687!2d112.02192407475833!3d-7.0503149929519475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDMnMDEuMSJTIDExMsKwMDEnMjguMiJF!5e0!3m2!1sen!2sid!4v1752337819314!5m2!1sen!2sid"
      width="100%" height="450px" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="contact-info-container">
      <div class="contact-item">
        <p class="label">Email</p>
        <p class="value">hello@adiwarna.com</p>
      </div>
      <div class="contact-item">
        <p class="label">Telepon</p>
        <p class="value">0812 3456 7890</p>
      </div>
      <div class="contact-item">
        <p class="label">Alamat</p>
        <p class="value">123 Anywhere St., Any City, 12345 Any State</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { LMap, LMarker, LTileLayer } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ref } from 'vue'

// Fix: Default Leaflet icon not loading in Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
})

// Koordinat studio (Jakarta)
// const center = ref([-7.050315, 112.024499])

// Monochrome tile (gratis, oleh CartoDB)
// const tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
// const attribution =
  // '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
</script>

<style scoped>
.map-container {
  padding: 10%;
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: auto;
}

.map-label {
  text-align: center;

  margin-top: 16px;
}

.contact-info-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 1rem 0;
}

.contact-item {
  font-weight: 400;
  flex: 1;
  min-width: 150px;
}

.contact-item .label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}
</style>
