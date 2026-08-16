import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#0a0a0f] text-slate-100 dark:bg-[#0a0a0f] dark:text-slate-100 light:bg-[#f8fafc] light:text-slate-900 transition-colors duration-500 font-sans antialiased overflow-hidden">
        {/* Custom interactive cursor */}
        <CustomCursor />

        {/* Ambient Animated Gradient Background and Mesh */}
        <BackgroundEffect />

        {/* Top Sticky Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
