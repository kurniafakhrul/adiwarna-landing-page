import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue' // Pastikan ini diimpor
import FindUsView from '../views/FindUsView.vue' // Pastikan ini diimpor
import HomeView from '../views/HomeView.vue'
import OurProjectView from '../views/OurProjectView.vue' // Pastikan ini diimpor
import OurServiceView from '../views/OurServiceView.vue' // Pastikan ini diimpor
import ProjectDetailView from '../views/ProjectDetailView.vue'
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
    },
    {
      path: '/about', // <-- Rute ini
      name: 'about',
      component: AboutView, // <-- Mengarah ke halaman yang benar
    },
    {
      path: '/projects',
      name: 'projects',
      component: OurProjectView, // Menggunakan lazy loading
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: ProjectDetailView, // atau ../views/projects/ProjectDetailView.vue tergantung struktur kamu
    },
    {
      path: '/services',
      name: 'services',
      component: OurServiceView, // Menggunakan lazy loading
    },
    {
      path: '/find-us',
      name: 'find-us',
      component: FindUsView, // Menggunakan lazy loading
    },
  ],
})

export default router
