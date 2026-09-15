import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Professional from './components/sections/Professional';
import Education from './components/sections/Education';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Certificates from './components/sections/Certificates';
import Projects from './components/sections/Projects';
import Activities from './components/sections/Activities';
import Articles from './components/sections/Articles';
import Contact from './components/sections/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-cream via-roseQuartz to-dustyRose">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Professional />
              <Education />
              <About />
              <Skills />
              <Experience />
              <Certificates />
              <Projects />
              <Activities />
              <Articles />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;