import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft, FaUserCircle, FaStore, FaHospital, FaIdCard,
} from 'react-icons/fa';
import { getProjectBySlug } from '../data/projects';

const iconMap = {
  FaUserCircle, FaStore, FaHospital, FaIdCard,
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto glass rounded-2xl p-12 text-center">
          <p className="text-4xl mb-3">😕</p>
          <p className="text-gray-700 font-medium mb-4">Proyek tidak ditemukan</p>
          <Link
            to="/"
            className="inline-block bg-dustyRose text-white px-6 py-2 rounded-full hover:bg-coral transition-all"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[project.icon];
  const detail = project.detail || {};

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-dustyRose transition-colors font-medium mb-6"
        >
          <FaArrowLeft /> Kembali ke Beranda
        </Link>

        <div className="glass rounded-3xl overflow-hidden shadow-xl mb-8">
          <div className="h-56 bg-gradient-to-r from-dustyRose to-coral flex items-center justify-center relative">
            {IconComponent && <IconComponent className="text-8xl text-white/90" />}
            <span className="absolute top-4 right-4 px-3 py-1 bg-white/30 backdrop-blur-md rounded-full text-xs font-semibold text-white">
              {project.category}
            </span>
          </div>

          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {project.title}
            </h1>
            <p className="text-gray-600 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-white/40 rounded-full text-gray-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/30 rounded-xl p-4">
                <p className="text-gray-500">Peran</p>
                <p className="font-semibold text-gray-800">{detail.role || '-'}</p>
              </div>
              <div className="bg-white/30 rounded-xl p-4">
                <p className="text-gray-500">Tahun</p>
                <p className="font-semibold text-gray-800">{detail.duration || '-'}</p>
              </div>
            </div>

            {project.link && project.link !== '#' && project.link !== '/' && (
              <a
                href={project.link}
                target={project.isExternal ? '_blank' : '_self'}
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-dustyRose text-white px-6 py-3 rounded-full hover:bg-coral transition-all font-semibold"
              >
                {project.buttonText}
              </a>
            )}
          </div>
        </div>

        {detail.background && (
          <section className="glass rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Latar Belakang</h2>
            <p className="text-gray-700 leading-relaxed">{detail.background}</p>
          </section>
        )}

        {detail.features && detail.features.length > 0 && (
          <section className="glass rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fitur Utama</h2>
            <ul className="space-y-3">
              {detail.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-dustyRose flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {detail.technologies && detail.technologies.length > 0 && (
          <section className="glass rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Teknologi yang Digunakan</h2>
            <div className="space-y-4">
              {detail.technologies.map((tech, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-dustyRose font-bold text-lg flex-shrink-0">•</span>
                  <div>
                    <p className="font-semibold text-gray-800">{tech.name}</p>
                    <p className="text-sm text-gray-600">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {detail.images && detail.images.length > 0 && (
          <section className="glass rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tangkapan Layar</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {detail.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-xl shadow-md w-full"
                />
              ))}
            </div>
          </section>
        )}

        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-dustyRose font-semibold hover:text-coral transition-colors"
          >
            <FaArrowLeft /> Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;