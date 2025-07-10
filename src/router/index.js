import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue' // Pastikan ini diimpor

const router = createRouter({
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
  ],
})

export default router
