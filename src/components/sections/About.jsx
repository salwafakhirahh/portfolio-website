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
            <span className="text-gray-800">Tentang</span>
            <span className="text-dustyRose"> Saya</span>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tentang Saya</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Saya Salwa Fakhirah Harsya siswi SMKN 1 Jenangan yang memiliki dedikasi tinggi dalam mempelajari
                serta mengembangkan aplikasi web modern. Saya memiliki minat besar dalam menciptakan antarmka yang estetis, responsif, 
                dan mampu memberikan pengalaman pengguna yang berkualitas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Perjalanan karier saya di bidang web development bermula dari rasa keingintahuan
                terhadap mekanisme kerja sebuah situs web. Rasa keingintahuan tersebut kemudian berkembang 
                menjadi sebuah karier profesional yang berfokus pada penciptaan pengalaman digital yang bermakna dan bermanfaat.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-dustyRose">2+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-dustyRose">4+</div>
                <div className="text-sm text-gray-600">Proyek Selesai</div>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Informasi Singkat</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dustyRose/20 flex items-center justify-center">
                  <FiUser className="w-5 h-5 text-dustyRose" />
                </div>
                <span className="text-gray-700">Nama: Salwa Fakhirah Harsya</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dustyRose/20 flex items-center justify-center">
                  <FiBookOpen className="w-5 h-5 text-dustyRose" />
                </div>
                <span className="text-gray-700">Pendidikan: Sekolah Menengah Kejuruan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dustyRose/20 flex items-center justify-center">
                  <FiMapPin className="w-5 h-5 text-dustyRose" />
                </div>
                <span className="text-gray-700">Lokasi: Indonesia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;