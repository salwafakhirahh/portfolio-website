import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Professional from './components/sections/Professional';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Activities from './components/sections/Activities';
import Articles from './components/sections/Articles';
import Contact from './components/sections/Contact';

// Pages
import ArticleDetailPage from './pages/ArticleDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

import './index.css';

// ===== Halaman Utama (semua section) =====
function HomePage() {
  return (
    <>
      {/* 1. Hero/Beranda */}
      <Hero />

      {/* 2. Tentang Saya */}
      <About />

      {/* 3. Profil Profesional */}
      <Professional />

      {/* 4. Pendidikan */}
      <Education />

      {/* 5. Pengalaman */}
      <Experience />

      {/* 6. Keahlian */}
      <Skills />

      {/* 7. Karya/Portfolio */}
      <Projects />

      {/* 8. Sertifikat/Prestasi */}
      <Certificates />

      {/* 9. Kegiatan */}
      <Activities />

      {/* 10. Artikel/Blog */}
      <Articles />

      {/* 11. Kontak */}
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-cream via-roseQuartz to-dustyRose">
        <Navbar />
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<HomePage />} />

          {/* Halaman Detail Artikel */}
          <Route path="/artikel/:slug" element={<ArticleDetailPage />} />
          <Route path="/proyek/:slug" element={<ProjectDetailPage />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;