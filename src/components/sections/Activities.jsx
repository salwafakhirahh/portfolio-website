import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBookOpen, FaLaptopCode, FaChalkboardTeacher,
  FaCode, FaIndustry, FaTrophy, FaFire
} from 'react-icons/fa';
import { activities } from '../../data/activities';

const iconMap = {
  FaBookOpen,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaCode,
  FaIndustry,
  FaTrophy,
  FaFire,
};

const Activities = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'Semua' },
    { key: 'Belajar', label: 'Belajar' },
    { key: 'Workshop', label: 'Workshop' },
    { key: 'Seminar', label: 'Seminar' },
    { key: 'Proyek', label: 'Proyek' },
    { key: 'Kunjungan', label: 'Kunjungan' },
    { key: 'Lomba', label: 'Lomba' },
    { key: 'Pelatihan', label: 'Pelatihan' },     // ← tambah
  ];

  const filtered = filter === 'all'
    ? activities
    : activities.filter((a) => a.category === filter);

  return (
    <section id="activities" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-times mb-4">
            <span className="text-gray-800">Kegiatan</span>
            <span className="text-dustyRose"> Saya</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 font-inter">
            Dokumentasi kegiatan belajar, workshop, seminar, dan proyek
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat.key
                  ? 'bg-dustyRose text-white shadow-lg'
                  : 'bg-white/40 text-gray-700 hover:bg-white/60 border border-white/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((activity, index) => {
            const IconComponent = iconMap[activity.icon];
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-dustyRose">
                    {activity.category}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-dustyRose flex items-center justify-center">
                      {IconComponent && (
                        <IconComponent className="text-white text-sm" />
                      )}
                    </div>
                    <span className="text-white text-xs font-semibold">
                      {activity.year}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-times text-lg font-bold text-gray-800 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-inter line-clamp-3">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12 font-inter">
            Belum ada kegiatan di kategori ini
          </p>
        )}
      </div>
    </section>
  );
};

export default Activities;