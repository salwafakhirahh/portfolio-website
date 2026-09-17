import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaUserCircle, FaStore, FaHospital, FaIdCard, FaArrowUp, FaArrowRight
} from 'react-icons/fa';
import { projects } from '../../data/projects';

const iconMap = {
  FaUserCircle, FaStore, FaHospital, FaIdCard,
};

const Projects = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Proyek</span>
            <span className="text-dustyRose"> Saya</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon];
            const hasDetail = project.slug && project.detail;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-r from-dustyRose to-coral flex items-center justify-center relative">
                  {IconComponent && (
                    <IconComponent className="text-7xl text-white/90" />
                  )}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/30 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/30 rounded-full text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.isExternal && project.link && project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-dustyRose font-semibold hover:text-coral transition-colors"
                    >
                      {project.buttonText} <FaArrowRight className="w-3 h-3" />
                    </a>
                  ) : project.link === '/' ? (
                    <button
                      onClick={handleScrollToTop}
                      className="inline-flex items-center gap-2 text-dustyRose font-semibold hover:text-coral transition-colors bg-transparent border-none p-0 cursor-pointer"
                    >
                      {project.buttonText} <FaArrowUp className="w-3 h-3" />
                    </button>
                  ) : hasDetail ? (
                    <Link
                      to={`/proyek/${project.slug}`}
                      className="inline-flex items-center gap-2 text-dustyRose font-semibold hover:text-coral transition-colors"
                    >
                      {project.buttonText} <FaArrowRight className="w-3 h-3" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-gray-400 text-sm">
                      Detail belum tersedia
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;