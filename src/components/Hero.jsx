import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ArrowDown, 
  FileDown, 
  Sparkles, 
  Code, 
  ExternalLink,
  ChevronRight,
  GraduationCap,
  MapPin,
  Flame
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const roles = [
  "Computer Science Undergraduate",
  "Full-Stack Developer",
  "AI & ML Integrator",
  "Cybersecurity Enthusiast"
];

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentRoleIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
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
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text and CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-indigo-500/10"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Internships & AI/Web Engineering</span>
            </motion.div>

            {/* Main Greeting and Name */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl font-mono text-indigo-400 font-medium tracking-wide"
              >
                Hi there, I'm
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
              >
                <span className="text-gradient-primary">
                  {personalInfo.preferredName}
                </span>
              </motion.h1>
            </div>

            {/* Dynamic Typewriter Subtitle */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-2xl font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                {text}
                <span className="animate-pulse text-cyan-400 font-normal">|</span>
              </span>
            </div>

            {/* University & Location Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>UVCE Bengaluru (2023–2027)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>CGPA: 8.72</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Bengaluru, India</span>
              </div>
            </div>

            {/* Short Bio Paragraph */}
            <p className="max-w-xl text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-cyan-600 to-purple-600 text-white shadow-xl shadow-indigo-500/25 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Featured Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeDownloadName}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm glass-card border border-white/10 hover:border-cyan-500/50 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <FileDown className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </motion.a>
            </div>

            {/* Social Links Row */}
            <div className="pt-3 flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl glass-card border border-white/10 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all shadow-md"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl glass-card border border-white/10 hover:border-indigo-500/50 text-slate-300 hover:text-indigo-400 hover:scale-110 transition-all shadow-md"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.email}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl glass-card border border-white/10 hover:border-purple-500/50 text-slate-300 hover:text-purple-400 hover:scale-110 transition-all shadow-md"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Profile Portrait with Animated Rings */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer Pulsing Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 via-cyan-500 to-purple-600 opacity-30 blur-2xl animate-pulse-glow" />

              {/* Orbiting Rotating Dashed Ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow pointer-events-none" />

              {/* Glowing Multi-layer Gradient Border Container */}
              <div className="relative w-full h-full p-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 shadow-2xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0e0f17] relative group">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback avatar if local photo not loaded
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-white/10 opacity-40 pointer-events-none" />
                </div>
              </div>

              {/* Floating Technology Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -left-4 sm:left-0 px-3 py-1.5 rounded-xl glass-card border border-indigo-500/40 shadow-xl flex items-center gap-2 backdrop-blur-md"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500/80" />
                <span className="text-xs font-mono font-semibold text-slate-200">Full-Stack Dev</span>
              </motion.div>

              {/* Floating Technology Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -right-2 sm:right-2 px-3.5 py-1.5 rounded-xl glass-card border border-cyan-500/40 shadow-xl flex items-center gap-2 backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span className="text-xs font-mono font-semibold text-cyan-300">AI / Gemini AI</span>
              </motion.div>

              {/* Floating Technology Badge 3 */}
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -right-6 hidden sm:flex px-3 py-1 rounded-lg glass-card border border-purple-500/40 shadow-lg items-center gap-1.5"
              >
                <Code className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] font-mono text-purple-200">Java & DSA</span>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll down mouse indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex flex-col items-center justify-center cursor-pointer group"
          onClick={() => handleScrollTo('about')}
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors mb-2">
            Scroll to discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-slate-500 group-hover:border-cyan-400 flex justify-center pt-1.5 transition-colors"
          >
            <div className="w-1 h-2 rounded-full bg-cyan-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
