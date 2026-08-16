import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Languages, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { personalInfo, educationTimeline } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            About <span className="text-gradient-primary">Sainath</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Computer Science undergraduate at UVCE Bengaluru with an unwavering passion for 
            modern web architecture, intelligent AI workflows, and algorithmic efficiency.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20"
        >
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 mb-1 font-heading">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 2-Column Content: Bio & Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 dark:text-white light:text-slate-900">
                    Academic & Technical Background
                  </h3>
                  <span className="text-xs font-mono text-indigo-400">UVCE Bengaluru • Batch of 2027</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                I am currently pursuing my <strong>B.Tech in Computer Science and Engineering (2023–2027)</strong> at the prestigious 
                <span className="text-cyan-400 font-medium"> University of Visvesvaraya College of Engineering (UVCE), Bengaluru</span>, 
                holding an academic record of <strong>CGPA 8.72</strong>.
              </p>

              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                My engineering focus combines full-stack development (React, Node.js, Express, MongoDB) with applied artificial intelligence (Google Gemini AI, Computer Vision with OpenCV) and rigorous theoretical computer science (DSA in Java/C++, Operating Systems, DBMS).
              </p>

              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                From developing <strong>AgroHire</strong> — a geospatial agricultural rental marketplace with AI recommendations — to researching <strong>Multi-Modal Steganography</strong> with AES-256 encryption, I pride myself on turning technical ideas into production-ready software.
              </p>
            </div>

            {/* Languages Known Section */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                <Languages className="w-4 h-4 text-cyan-400" />
                <span>Languages Known & Spoken</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {personalInfo.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-panel border border-white/10 text-xs font-medium text-slate-200 hover:border-cyan-500/40 transition-colors"
                  >
                    <span>{lang.flag}</span>
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">({lang.level})</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Strengths & Value Offerings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            {/* Pillar 1 */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all flex gap-4 items-start group">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-100 dark:text-white light:text-slate-900 mb-1">
                  Full-Stack Product Engineering
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  Building responsive, accessible web applications from frontend micro-interactions with React and Tailwind to resilient RESTful APIs, JWT authentication, and database schemas.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all flex gap-4 items-start group">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-600/20 to-teal-600/20 border border-cyan-500/30 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-100 dark:text-white light:text-slate-900 mb-1">
                  AI Integration & Machine Learning
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  Leveraging cutting-edge LLMs (Google Gemini API) and computer vision (OpenCV, NumPy) to build intelligent workflows, recommendation models, and multimedia tools.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all flex gap-4 items-start group">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-100 dark:text-white light:text-slate-900 mb-1">
                  Algorithms, Security & Media Cryptography
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  Strong grasp of Data Structures & Algorithms, Object-Oriented Design, and cryptographic systems including AES-256, SHA-256, and steganographic data concealment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline Section */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-100 dark:text-white light:text-slate-900 font-heading">
                Education Timeline
              </h3>
              <p className="text-xs font-mono text-slate-400">Academic milestones and educational journey</p>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-cyan-500 before:to-purple-600">
            {educationTimeline.map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-6 sm:-left-10 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0a0a0f] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Timeline Card */}
                <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 inline-block mb-1.5">
                        {item.duration}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                        {item.institution}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-500/30 text-xs font-bold text-indigo-300">
                        {item.score}
                      </span>
                      <span className="text-xs font-mono text-slate-400 px-2 py-1 rounded-lg bg-white/5 border border-white/10">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-indigo-300 dark:text-indigo-300 light:text-indigo-600 mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span> • <span className="text-slate-300">{item.degree}</span>
                  </p>

                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
