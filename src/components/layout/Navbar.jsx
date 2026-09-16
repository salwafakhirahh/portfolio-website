import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu, FiX, FiShoppingBag, FiUser,
} from 'react-icons/fi';

const TOKO_URL = import.meta.env.VITE_TOKO_URL || 'http://localhost:5174';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu disesuaikan dengan urutan section baru
  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Profil', href: '#professional' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Karya', href: '#projects' },
    { name: 'Sertifikat', href: '#certificates' },
    { name: 'Kegiatan', href: '#activities' },
    { name: 'Artikel', href: '#articles' },
    { name: 'Kontak', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1, scale: 1,
      transition: { duration: 0.4, type: 'spring', stiffness: 200 },
    },
    hover: { scale: 1.05, y: -2, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/40 backdrop-blur-xl border-b border-white/40 shadow-lg'
          : 'bg-white/20 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-xl lg:text-2xl font-bold text-dustyRose font-times">
              Portfolio
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                variants={itemVariants}
                whileHover={{ scale: 1.08, color: '#FBAF46', transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="px-2 xl:px-3 py-2 text-sm font-medium text-gray-700 transition-colors nav-item whitespace-nowrap relative group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-dustyRose rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'center' }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:flex items-center gap-2 flex-shrink-0"
          >
            <motion.a
              href={`${TOKO_URL}/toko`}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="bg-dustyRose text-white px-3 xl:px-4 py-2 rounded-full hover:bg-coral transition-colors duration-300 shadow-md flex items-center gap-2 text-sm whitespace-nowrap btn-text"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FiShoppingBag className="w-4 h-4" />
              </motion.div>
              <span className="hidden xl:inline">Toko Rajut</span>
              <span className="xl:hidden">Toko</span>
            </motion.a>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/admin"
                className="bg-white/50 backdrop-blur-md text-gray-700 px-3 xl:px-4 py-2 rounded-full hover:bg-white/70 transition-colors duration-300 border border-white/50 shadow-md flex items-center gap-2 text-sm whitespace-nowrap btn-text"
              >
                <FiUser className="w-4 h-4" />
                Admin
              </Link>
            </motion.div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-dustyRose p-2"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-white/40"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ x: 8, color: '#FBAF46' }}
                  whileTap={{ scale: 0.98 }}
                  className="block px-4 py-2 text-gray-700 hover:bg-dustyRose/10 rounded-lg transition-colors nav-item"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="pt-3 border-t border-white/40 space-y-2"
              >
                <motion.a
                  href={`${TOKO_URL}/toko`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 bg-dustyRose text-white px-4 py-2 rounded-full hover:bg-coral transition-colors btn-text"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <FiShoppingBag className="w-5 h-5" />
                  </motion.div>
                  Kunjungi Toko Rajut
                </motion.a>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/admin"
                    className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-md text-gray-700 px-4 py-2 rounded-full hover:bg-white/80 transition-colors border border-white/40 btn-text"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser className="w-5 h-5" />
                    Admin
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;