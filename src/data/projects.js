const TOKO_URL = 'http://localhost:5174';

export const projects = [
  {
    id: 1,
    title: 'Toko Rajut Online',
    description: 'E-commerce untuk produk rajut dengan fitur keranjang, checkout, dan admin panel menggunakan React, Tailwind CSS, dan Supabase.',
    tech: ['React', 'Tailwind', 'Supabase'],
    link: `${TOKO_URL}/toko`,
    isExternal: true,
    icon: 'FaStore',
    buttonText: 'Lihat Toko →'
  },
  {
    id: 2,
    title: 'Portfolio Pribadi',
    description: 'Website profil dengan desain glassmorphism dan animasi interaktif menggunakan React, Tailwind CSS, dan Framer Motion.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#home',
    isExternal: false,
    icon: 'FaUserCircle',
    buttonText: 'Scroll ke Atas ↑'
  }
];