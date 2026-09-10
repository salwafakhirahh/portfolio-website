import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
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
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 5000,
            style: {
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '16px',
              padding: '16px 24px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              color: '#1F2937',
              fontSize: '14px',
              fontWeight: '500'
            },
            success: {
              style: {
                borderLeft: '4px solid #FBAF46',
                background: 'rgba(255, 255, 255, 0.95)'
              },
              iconTheme: {
                primary: '#FBAF46',
                secondary: '#FFFFFF'
              }
            },
            error: {
              style: {
                borderLeft: '4px solid #EF4444',
                background: 'rgba(255, 255, 255, 0.95)'
              },
              iconTheme: {
                primary: '#EF4444',
                secondary: '#FFFFFF'
              }
            }
          }}
        />
      </div>
    </Router>
  );
}

export default App;