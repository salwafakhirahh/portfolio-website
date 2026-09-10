import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaUserCircle, FaDatabase, FaStore, FaCog, FaPaintBrush 
} from 'react-icons/fa';
import { SiTailwindcss, SiSupabase } from 'react-icons/si';
import { skills, capabilities } from '../../data/skills';

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJs: FaJs,
  FaReact: FaReact,
  SiTailwindcss: SiTailwindcss,
  SiSupabase: SiSupabase,
  FaUserCircle: FaUserCircle,
  FaDatabase: FaDatabase,
  FaStore: FaStore,
  FaCog: FaCog,
  FaPaintBrush: FaPaintBrush
};

const Skills = () => {
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

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = iconMap[skill.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass rounded-xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer text-center"
                  >
                    <div className="flex justify-center mb-2">
                      {IconComponent && (
                        <IconComponent 
                          className="text-4xl" 
                          style={{ color: skill.color }}
                        />
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{skill.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">What I Can Do</h3>
            <div className="grid gap-4">
              {capabilities.map((cap, index) => {
                const IconComponent = iconMap[cap.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass rounded-xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-dustyRose/20 flex items-center justify-center">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;