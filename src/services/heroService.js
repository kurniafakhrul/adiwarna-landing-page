// src/services/heroService.js
const heroDataDB = [
  {
    id: 'HERO-001',
    title: 'Tara & Lea’s Wedding',
    description: 'Pernikahan Tara & Lea di tepi danau berlangsung hangat dan penuh cinta.',
    date: '06 / 25',
    imageUrl:
      'https://img.wattpad.com/story_parts/1037339494/images/16709004297cf336348503621773.jpg',
  },
  {
    id: 'HERO-002',
    title: 'Summer Collection Catalogue',
    description: 'Sesi foto katalog untuk koleksi musim panas dengan tema ceria.',
    date: '07 / 25',
    imageUrl: 'https://pbs.twimg.com/media/FQ2W7koVcAApbEu.jpg',
  },
  {
    id: 'HERO-003',
    title: 'Urban Explorer',
    description: 'Menjelajahi sudut-sudut kota yang tersembunyi dalam sebuah potret.',
    date: '01 / 25',
    imageUrl: 'https://i.pinimg.com/736x/a1/c9/f3/a1c9f34dadc1fe5efd171e97551489de.jpg',
  },
  {
    id: 'HERO-004',
    title: 'Street Photography',
    description: 'Mengabadikan momen-momen spontan di jalanan kota.',
    date: '12 / 25',
    imageUrl: 'https://i.pinimg.com/736x/76/fb/73/76fb733d5d75a2622ea27bd2a0c76165.jpg',
  },
]

const heroService = {
  async getHeroData() {
    await new Promise((r) => setTimeout(r, 2000))
    return heroDataDB
  },
}

export default heroService
