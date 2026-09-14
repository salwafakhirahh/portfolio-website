import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiUsers, FiTool } from 'react-icons/fi';
import {
  FaBookOpen, FaGraduationCap, FaBriefcase, FaUsers, FaLeaf,
  FaIdCard, FaHospital, FaUserCircle, FaStore
} from 'react-icons/fa';
import { experiences } from '../../data/experiences';

const iconMap = {
  FaBookOpen, FaGraduationCap, FaBriefcase, FaUsers, FaLeaf,
  FaIdCard, FaHospital, FaUserCircle, FaStore,
};

const categories = [
  { key: 'belajar', label: 'Belajar', icon: <FiBookOpen className="w-4 h-4" /> },
  { key: 'magang', label: 'Magang', icon: <FiBriefcase className="w-4 h-4" /> },
  { key: 'organisasi', label: 'Organisasi', icon: <FiUsers className="w-4 h-4" /> },
  { key: 'proyek', label: 'Proyek', icon: <FiTool className="w-4 h-4" /> },
];

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState('belajar');
  const currentExperiences = experiences[activeCategory] || [];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">My</span>
            <span className="text-dustyRose"> Journey</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">Pengalaman belajar, magang, organisasi, dan proyek</p>
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
                {experiences[cat.key]?.length || 0}
              </span>
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-dustyRose/30"></div>

          {currentExperiences.map((exp, index) => {
            const IconComponent = iconMap[exp.icon];
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-2">
                      {IconComponent && (
                        <IconComponent className="text-4xl text-dustyRose" />
                      )}
                    </div>
                    <div className="text-sm text-dustyRose font-bold">{exp.year}</div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{exp.company}</p>
                    <p className="text-gray-700 text-sm">{exp.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dustyRose rounded-full border-4 border-white shadow-lg z-10"></div>
              </motion.div>
            );
          })}

          {currentExperiences.length === 0 && (
            <p className="text-center text-gray-500 py-12">Belum ada pengalaman di kategori ini</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;