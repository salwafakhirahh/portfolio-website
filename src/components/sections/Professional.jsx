import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiHome, FiTarget } from 'react-icons/fi';
import { profile } from '../../data/profile';

const Professional = () => {
  const info = [
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      label: 'Jabatan',
      value: profile.position,
    },
    {
      icon: <FiHome className="w-6 h-6" />,
      label: 'Instansi',
      value: profile.institution,
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      label: 'Bidang yang Ditekuni',
      value: profile.expertise,
    },
  ];

  return (
    <section id="professional" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-times mb-4">
            <span className="text-gray-800">Profil</span>
            <span className="text-dustyRose"> Profesional</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-dustyRose/20 flex items-center justify-center text-dustyRose mx-auto mb-4">
                {item.icon}
              </div>
              <p className="label-text text-gray-500 mb-2">{item.label}</p>
              <p className="font-times text-xl font-bold text-gray-800">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professional;