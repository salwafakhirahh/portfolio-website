import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCertificate, FaBriefcase, FaTrophy, FaGraduationCap,
  FaIndustry, FaAward
} from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import { certificates } from '../../data/certificates';

const iconMap = {
  FaCertificate,
  FaBriefcase,
  FaTrophy,
  FaGraduationCap,
  FaIndustry,
  FaAward,
};

const categories = [
  { key: 'sertifikasi', label: 'Sertifikasi', icon: <FaCertificate className="w-4 h-4" /> },
  { key: 'pelatihan', label: 'Pelatihan', icon: <FaBriefcase className="w-4 h-4" /> },
  { key: 'penghargaan', label: 'Penghargaan', icon: <FaTrophy className="w-4 h-4" /> },
  { key: 'kompetisi', label: 'Kompetisi', icon: <FaGraduationCap className="w-4 h-4" /> },
];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('sertifikasi');
  const currentCertificates = certificates[activeCategory] || [];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-times mb-4">
            <span className="text-gray-800">Sertifikat</span>
            <span className="text-dustyRose"> & Prestasi</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 font-inter">
            Sertifikasi, pelatihan, penghargaan, dan kompetisi
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === cat.key
                  ? 'bg-dustyRose text-white shadow-lg'
                  : 'bg-white/40 text-gray-700 hover:bg-white/60 border border-white/40'
              }`}
            >
              {cat.icon}
              {cat.label}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === cat.key
                  ? 'bg-white/30'
                  : 'bg-dustyRose/20 text-dustyRose'
              }`}>
                {certificates[cat.key]?.length || 0}
              </span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {currentCertificates.map((cert, index) => {
            const IconComponent = iconMap[cert.icon];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-dustyRose to-coral flex items-center justify-center flex-shrink-0">
                    {IconComponent && (
                      <IconComponent className="text-2xl text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-dustyRose font-bold">
                        {cert.year}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-white/40 rounded-full text-gray-600">
                        {categories.find(c => c.key === activeCategory)?.label}
                      </span>
                    </div>
                    <h3 className="font-times text-lg font-bold text-gray-800 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-dustyRose font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-700 font-inter">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {currentCertificates.length === 0 && (
          <p className="text-center text-gray-500 py-12 font-inter">
            Belum ada data di kategori ini
          </p>
        )}
      </div>
    </section>
  );
};

export default Certificates;