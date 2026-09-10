import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { FaStore, FaUserCircle } from 'react-icons/fa';

const iconMap = {
  FaStore: FaStore,
  FaUserCircle: FaUserCircle
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
            <span className="text-gray-800">My</span>
            <span className="text-dustyRose"> Projects</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="h-48 bg-gradient-to-r from-dustyRose to-coral flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="text-7xl text-white/80" />
                  )}
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
                  
                  {project.isExternal ? (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-1 text-dustyRose font-semibold hover:text-coral transition-colors"
                    >
                      {project.buttonText}
                    </a>
                  ) : (
                    <button
                      onClick={handleScrollToTop}
                      className="inline-flex items-center gap-1 text-dustyRose font-semibold hover:text-coral transition-colors cursor-pointer bg-transparent border-none p-0"
                    >
                      {project.buttonText}
                    </button>
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