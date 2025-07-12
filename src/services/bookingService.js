// src/services/bookingService.js
const packagesDB = [
  {
    id: 'pkg1',
    location: 'Indoor',
    category: 'Pre-Wedding',
    name: 'Paket Pre-Wedding Silver',
    basePrice: 1500000,
    duration: 120,
    description: 'Sesi foto indoor dengan 2 konsep elegan.',
    imageUrls: [
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
    ],
  },
  {
    id: 'pkg3',
    location: 'Indoor',
    category: 'Self Foto',
    name: 'Paket Couple',
    basePrice: 30000,
    duration: 15,
    description: 'Sesi foto seru dan spontan untuk 2 orang.',
    imageUrls: [
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
    ],
  },
  {
    id: 'pkg3',
    location: 'Indoor',
    category: 'Pas Foto',
    name: 'Paket Couple',
    basePrice: 30000,
    duration: 15,
    description: 'Sesi foto seru dan spontan untuk 2 orang.',
    imageUrls: [
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
    ],
  },
  {
    id: 'pkg5',
    location: 'Outdoor',
    category: 'Wedding',
    name: 'Paket Dokumentasi Wedding',
    basePrice: 5000000,
    duration: 480,
    description: 'Liputan lengkap hari pernikahan Anda di lokasi outdoor.',
    imageUrls: [
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
      'https://thumbs.dreamstime.com/b/lush-elegant-beautiful-wedding-floral-background-indoor-photography-lush-elegant-beautiful-wedding-floral-background-363679157.jpg',
    ],
  },
]

const bookingService = {
  async getPackages() {
    // Ganti nama fungsi ini
    await new Promise((r) => setTimeout(r, 300))
    return packagesDB
  },
}
export default bookingService
