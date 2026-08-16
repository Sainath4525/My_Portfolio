import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUp, 
  Heart, 
  Mail, 
  Clock, 
  MapPin, 
  Code2 
} from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const [bengaluruTime, setBengaluruTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setBengaluruTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative pt-12 pb-8 overflow-hidden">
      {/* Top Gradient Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 via-cyan-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 text-lg font-bold tracking-tight cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-xs font-mono font-black text-black">
                SK
              </div>
              <span className="font-heading text-lg font-extrabold text-white">
                Sainath
              </span>
            </a>
            <p className="text-xs font-mono text-slate-400 mt-1">
              B.Tech CSE @ UVCE Bengaluru • Full-Stack & AI Systems
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all cursor-pointer shadow-md"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </motion.button>
        </div>

        {/* Bottom Bar with Time & Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>Bengaluru, India (IST):</span>
            <span className="text-cyan-300 font-semibold">{bengaluruTime || "Loading..."}</span>
          </div>

          <div className="text-center sm:text-right">
            © {new Date().getFullYear()} Sainath. Crafted with React, Tailwind & Framer Motion.
          </div>
        </div>

      </div>
    </footer>
  );
};
