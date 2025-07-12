import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue' // Pastikan ini diimpor
import FAQView from '../views/FAQView.vue' // Pastikan ini diimpor
import FindUsView from '../views/FindUsView.vue' // Pastikan ini diimpor
import HomeView from '../views/HomeView.vue'
import OurProjectView from '../views/OurProjectView.vue' // Pastikan ini diimpor
import OurServiceView from '../views/OurServiceView.vue' // Pastikan ini diimpor
import PolicyView from '../views/PolicyView.vue' // Pastikan ini diimpor
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import BookingView from '../views/BookingView.vue'
import CheckOutView from '@/views/CheckOutView.vue'

// --- TAMBAHKAN BLOK INI ---

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // Jika ada posisi scroll yang tersimpan (misalnya saat menekan tombol back/forward browser),
    // gunakan posisi tersebut.
    if (savedPosition) {
      return savedPosition
    }
    // Jika tidak, selalu scroll ke paling atas.
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'default', // Tambahkan judul untuk halaman ini
      },
    },
    {
      path: '/about', // <-- Rute ini
      name: 'about',
      component: AboutView, // <-- Mengarah ke halaman yang benar
      meta: {
        layout: 'default', // Tambahkan judul untuk halaman ini
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: OurProjectView, // Menggunakan lazy loading
      meta: {
        layout: 'default', // Tambahkan judul untuk halaman ini
      },
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: ProjectDetailView, // atau ../views/projects/ProjectDetailView.vue tergantung struktur kamu
      meta: {
        layout: 'default', // Tambahkan judul untuk halaman ini
      },
    },
    {
      path: '/services',
      name: 'services',
      component: OurServiceView, // Menggunakan lazy loading
      meta: {
        layout: 'default', // Tambahkan judul untuk halaman ini
      },
    },
    {
      path: '/find-us',
      name: 'find-us',
      component: FindUsView, // Menggunakan lazy loading
      meta: {
        layout: 'default', // Tambahkan judul untuk halaman ini
      },
    },

    {
      path: '/policy',
      name: 'policy',
      component: PolicyView, // Menggunakan lazy loading
      meta: {
        layout: 'default', // Tambahkan judul untuk halaman ini
      },
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQView, // Menggunakan lazy loading
      meta: {
        layout: 'default', // Tambahkan judul untuk halaman ini
      },
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingView,
      meta: {
        layout: 'booking-layout', // Tambahkan judul untuk halaman ini
      },
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView,
      meta: {
        layout: 'booking-layout', // Tambahkan judul untuk halaman ini
      },
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckOutView,
      meta: {
        layout: 'booking-layout', // Tambahkan judul untuk halaman ini
      },
    },
  ],
})

export default router
