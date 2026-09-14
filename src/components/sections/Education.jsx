import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiAward } from 'react-icons/fi';
import { FaSchool, FaBook, FaGraduationCap } from 'react-icons/fa';
import { education } from '../../data/profile';

const iconMap = {
  FaSchool: FaSchool,
  FaBook: FaBook,
  FaGraduationCap: FaGraduationCap,
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-times mb-4">
            <span className="text-gray-800">Riwayat</span>
            <span className="text-dustyRose"> Pendidikan</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 font-inter">
            Dari pendidikan dasar hingga menengah
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-dustyRose/30"></div>

          <div className="space-y-6">
            {education.map((edu, index) => {
              const IconComponent = iconMap[edu.icon];
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-dustyRose to-coral flex items-center justify-center shadow-lg border-4 border-white">
                      {IconComponent && <IconComponent className="text-2xl text-white" />}
                    </div>
                  </div>

                  <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <h3 className="font-times text-xl font-bold text-gray-800">
                        {edu.school}
                      </h3>
                      <span className={`badge-text px-3 py-1 rounded-full ${
                        edu.status === 'Lulus'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <p className="font-poppins text-dustyRose font-medium mb-2 flex items-center gap-2">
                      <FiAward className="w-4 h-4" />
                      {edu.major}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-600 font-inter">
                      <FiCalendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;