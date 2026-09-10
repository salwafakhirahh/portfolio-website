import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiBookOpen, FiMapPin } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">About</span>
            <span className="text-dustyRose"> Me</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Saya adalah seorang Web Developer dengan semangat tinggi untuk belajar 
                dan mengembangkan aplikasi web modern. Saya senang menciptakan antarmuka 
                yang indah dengan animasi halus dan pengalaman pengguna yang luar biasa.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Perjalanan saya di dunia web development dimulai dari rasa penasaran 
                tentang bagaimana website bekerja, dan berkembang menjadi karir yang 
                fokus pada penciptaan pengalaman digital yang bermakna.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-dustyRose">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-dustyRose">5+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dustyRose/20 flex items-center justify-center">
                  <FiUser className="w-5 h-5 text-dustyRose" />
                </div>
                <span className="text-gray-700">Name: Salwa Fakhirah Harsya</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dustyRose/20 flex items-center justify-center">
                  <FiBookOpen className="w-5 h-5 text-dustyRose" />
                </div>
                <span className="text-gray-700">Education: Senior High School</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dustyRose/20 flex items-center justify-center">
                  <FiMapPin className="w-5 h-5 text-dustyRose" />
                </div>
                <span className="text-gray-700">Location: Indonesia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;