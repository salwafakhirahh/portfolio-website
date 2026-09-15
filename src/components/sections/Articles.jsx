import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { articles } from '../../data/articles';

const Articles = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'Semua' },
    { key: 'Tutorial', label: 'Tutorial' },
    { key: 'Pengalaman', label: 'Pengalaman' },
    { key: 'Tulisan', label: 'Tulisan' },
  ];

  const filtered = filter === 'all'
    ? articles
    : articles.filter((a) => a.category === filter);

  const categoryColor = {
    Tutorial: 'bg-blue-100 text-blue-700',
    Pengalaman: 'bg-green-100 text-green-700',
    Tulisan: 'bg-purple-100 text-purple-700',
  };

  return (
    <section id="articles" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-times mb-4">
            <span className="text-gray-800">Artikel</span>
            <span className="text-dustyRose"> & Blog</span>
          </h2>
          <div className="w-24 h-1 bg-dustyRose mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 font-inter">
            Tulisan, tutorial, dan pengalaman seputar dunia pengembangan web
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
          {filtered.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${categoryColor[article.category] || 'bg-gray-100 text-gray-700'}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-times text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-dustyRose transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 font-inter mb-4 line-clamp-3 flex-1">
                  {article.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-inter mb-4">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <a
                  href={article.link}
                  className="inline-flex items-center gap-2 text-dustyRose font-semibold text-sm hover:text-coral transition-colors btn-text"
                >
                  Baca Selengkapnya
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12 font-inter">
            Belum ada artikel di kategori ini
          </p>
        )}
      </div>
    </section>
  );
};

export default Articles;