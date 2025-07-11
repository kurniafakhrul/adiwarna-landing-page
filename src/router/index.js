import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue' // Pastikan ini diimpor
import HomeView from '../views/HomeView.vue'
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
      component: () => import('../views/OurProjectView.vue'), // Menggunakan lazy loading
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue'), // atau ../views/projects/ProjectDetailView.vue tergantung struktur kamu
    },
  ],
})

export default router
