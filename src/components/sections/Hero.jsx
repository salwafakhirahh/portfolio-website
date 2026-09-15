import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiShoppingBag, FiCode, FiTarget, FiZap } from 'react-icons/fi';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { profile } from '../../data/profile';

const TOKO_URL = import.meta.env.VITE_TOKO_URL || 'http://localhost:5174';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-full shadow-2xl border border-white/40 animate-pulse"></div>
            <div className="absolute inset-4 bg-white/40 backdrop-blur-md rounded-full shadow-xl border border-white/50"></div>
            <img
              src={profile.photo}
              alt={profile.fullName}
              className="relative w-full h-full rounded-full object-cover border-4 border-white/60 shadow-2xl"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -right-8 w-20 h-20 bg-roseQuartz/40 backdrop-blur-xl rounded-full border border-white/40"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-dustyRose/40 backdrop-blur-xl rounded-full border border-white/40"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40 mb-6"
          >
            <FiCode className="text-dustyRose" />
            <span className="badge-text text-dustyRose">{profile.field}</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl mb-4 font-times">
            <span className="text-gray-800">Hai, Saya</span>
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-dustyRose name-text"
            >
              {profile.fullName}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-6 p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/40"
          >
            <div className="flex items-start gap-3 mb-3">
              <FiTarget className="w-5 h-5 text-dustyRose mt-1 flex-shrink-0" />
              <div>
                <p className="label-text text-gray-500 mb-1">Visi / Prinsip Pribadi</p>
                <p className="quote-text text-gray-700 text-lg">
                  "{profile.vision}"
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/40 flex items-start gap-3">
              <FiZap className="w-5 h-5 text-dustyRose mt-0.5 flex-shrink-0" />
              <div>
                <p className="label-text text-gray-500 mb-1">Motto</p>
                <p className="font-georgia text-dustyRose font-bold text-lg italic">
                  "{profile.motto}"
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-4 justify-center md:justify-start mb-8">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-dustyRose transition-colors text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-dustyRose transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href={`${TOKO_URL}/toko`}
              className="px-8 py-3 bg-dustyRose text-white rounded-full hover:bg-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 btn-text"
            >
              <FiShoppingBag className="w-5 h-5" />
              Kunjungi Toko Rajut
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white/30 backdrop-blur-md text-gray-800 rounded-full hover:bg-white/50 transition-all duration-300 border border-white/40 shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-text"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <FiArrowDown className="w-8 h-8 text-dustyRose animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;