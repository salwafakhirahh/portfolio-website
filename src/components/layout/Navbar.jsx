import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag, FiUser } from 'react-icons/fi';

const TOKO_URL = import.meta.env.VITE_TOKO_URL || 'http://localhost:5174';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil', href: '/#professional' },
    { name: 'Pendidikan', href: '/#education' },
    { name: 'Tentang', href: '/#about' },
    { name: 'Keahlian', href: '/#skills' },
    { name: 'Pengalaman', href: '/#experience' },
    { name: 'Proyek', href: '/#projects' },
    { name: 'Kontak', href: '/#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/30 backdrop-blur-xl border-b border-white/40 shadow-xl' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-dustyRose">
              Portfolio
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-dustyRose transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}

            {/* Tombol ke Toko - PAKAI <a> */}
            <a
              href={`${TOKO_URL}/toko`}
              className="bg-dustyRose text-white px-5 py-2 rounded-full hover:bg-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <FiShoppingBag className="w-5 h-5" />
              Kunjungi Toko Rajut
            </a>

            {/* Tombol ke Admin - PAKAI <a> */}
            <a
              href={`${TOKO_URL}/toko/admin`}
              className="bg-white/40 backdrop-blur-md text-gray-700 px-5 py-2 rounded-full hover:bg-white/60 transition-all duration-300 border border-white/40 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <FiUser className="w-5 h-5" />
              Admin
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-dustyRose"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-white/40"
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-dustyRose transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href={`${TOKO_URL}/toko`}
            className="flex items-center gap-2 bg-dustyRose text-white px-4 py-2 rounded-full hover:bg-coral transition-all justify-center"
            onClick={() => setIsOpen(false)}
          >
            <FiShoppingBag className="w-5 h-5" />
            Kunjungi Toko Rajut
          </a>
          <a
            href={`${TOKO_URL}/toko/admin`}
            className="flex items-center gap-2 bg-white/60 backdrop-blur-md text-gray-700 px-4 py-2 rounded-full hover:bg-white/80 transition-all border border-white/40 justify-center"
            onClick={() => setIsOpen(false)}
          >
            <FiUser className="w-5 h-5" />
            Admin
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;