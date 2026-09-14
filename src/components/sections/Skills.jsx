import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython,
  FaLayerGroup, FaLaptopCode, FaServer,
  FaUserCircle, FaDatabase, FaStore, FaCog, FaPaintBrush,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { codingSkills, webDevSkills, capabilities } from '../../data/skills';

const iconMap = {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython,
  FaLayerGroup, FaLaptopCode, FaServer,
  FaUserCircle, FaDatabase, FaStore, FaCog, FaPaintBrush,
  SiTailwindcss,
};

const levelColors = {
  Pemula: 'bg-yellow-100 text-yellow-700',
  Menengah: 'bg-blue-100 text-blue-700',
  Mahir: 'bg-green-100 text-green-700',
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('coding');

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">My</span>
            <span className="text-dustyRose"> Skills</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setActiveTab('coding')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'coding'
                ? 'bg-dustyRose text-white shadow-lg'
                : 'bg-white/40 text-gray-700 hover:bg-white/60 border border-white/40'
            }`}
          >
            Coding ({codingSkills.length})
          </button>
          <button
            onClick={() => setActiveTab('webdev')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'webdev'
                ? 'bg-dustyRose text-white shadow-lg'
                : 'bg-white/40 text-gray-700 hover:bg-white/60 border border-white/40'
            }`}
          >
            Web Development ({webDevSkills.length})
          </button>
          <button
            onClick={() => setActiveTab('capabilities')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'capabilities'
                ? 'bg-dustyRose text-white shadow-lg'
                : 'bg-white/40 text-gray-700 hover:bg-white/60 border border-white/40'
            }`}
          >
            Kemampuan ({capabilities.length})
          </button>
        </div>

        {activeTab === 'coding' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {codingSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-xl p-5 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-white/40 flex items-center justify-center">
                      {IconComponent && (
                        <IconComponent className="text-2xl" style={{ color: skill.color }} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${levelColors[skill.level]}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{skill.desc}</p>
                </motion.div>
              );
            })}
          </div>
        )}

        {activeTab === 'webdev' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {webDevSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-xl p-5 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-dustyRose/20 flex items-center justify-center mb-3">
                    {IconComponent && (
                      <IconComponent className="text-2xl" style={{ color: skill.color }} />
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{skill.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${levelColors[skill.level]}`}>
                    {skill.level}
                  </span>
                  <p className="text-xs text-gray-500 mt-2">{skill.desc}</p>
                </motion.div>
              );
            })}
          </div>
        )}

        {activeTab === 'capabilities' && (
          <div className="grid gap-4 max-w-3xl mx-auto">
            {capabilities.map((cap, index) => {
              const IconComponent = iconMap[cap.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-xl p-4 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-dustyRose/20 flex items-center justify-center flex-shrink-0">
                      {IconComponent && (
                        <IconComponent className="text-2xl text-dustyRose" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{cap.name}</h4>
                      <p className="text-sm text-gray-600">{cap.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;