import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight, 
  Activity,
  Bot,
  Wheat,
  Eye,
  CheckCircle2,
  Code
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Featured <span className="text-gradient-primary">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Engineered systems demonstrating full-stack engineering, AI algorithmic integration, and secure multimedia cryptography.
          </motion.p>
        </div>

        {/* Projects Cards Layout */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative rounded-3xl p-1 bg-gradient-to-r hover:from-indigo-500 hover:via-cyan-400 hover:to-purple-600 from-white/10 via-white/5 to-white/10 transition-all duration-500 shadow-xl"
              >
                <div className="relative rounded-[22px] bg-[#0d0e17] dark:bg-[#0d0e17] light:bg-white p-6 sm:p-8 md:p-10 overflow-hidden">
                  
                  {/* Subtle Top-Right Ambient Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Column: Project Details & Copy */}
                    <div className="lg:col-span-7 space-y-5">
                      
                      {/* Category & Badge */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/5 text-slate-300 border border-white/10">
                          {project.badge}
                        </span>
                      </div>

                      {/* Main Title & Subtitle */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors font-heading">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-indigo-400 mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description Paragraph */}
                      <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key highlights checklist */}
                      <div className="space-y-2 pt-1">
                        {project.extendedDetails.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-2">
                        <span className="text-[11px] font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                          Technologies & Frameworks
                        </span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-4">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 via-cyan-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/35 hover:scale-102 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Live Interactive Preview & Demo</span>
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl text-xs font-semibold glass-panel border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                        >
                          <GithubIcon className="w-4 h-4 text-cyan-400" />
                          <span>GitHub Repo</span>
                        </a>
                      </div>

                    </div>

                    {/* Right Column: Visual Architecture Preview & Metrics Board */}
                    <div className="lg:col-span-5">
                      <div className="relative rounded-2xl bg-[#080910] border border-white/10 p-5 sm:p-6 shadow-inner space-y-4">
                        
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                            <span className="text-[11px] font-mono text-slate-400 ml-2">
                              {project.id}.system.spec
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400">● LIVE RUNTIME</span>
                        </div>

                        {/* Visual Metric Highlights */}
                        <div className="grid grid-cols-2 gap-2.5">
                          {project.metrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col"
                            >
                              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                                {metric.label}
                              </span>
                              <span className="text-xs font-bold text-cyan-300 mt-1">
                                {metric.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Visual Mock Illustration */}
                        <div className="relative rounded-xl p-4 bg-gradient-to-tr from-indigo-950/40 via-cyan-950/30 to-purple-950/40 border border-white/5 overflow-hidden">
                          {project.id === 'agrohire' ? (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                                <span className="flex items-center gap-1.5">
                                  <Wheat className="w-4 h-4 text-emerald-400" /> AgroHire Geospatial Engine
                                </span>
                                <span className="text-[10px] text-emerald-400">99.8% Uptime</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-black/60 font-mono text-[11px] text-slate-300 space-y-1">
                                <div><span className="text-indigo-400">GET</span> /api/machinery/geo-search?lat=12.97&lon=77.59</div>
                                <div className="text-emerald-400">↳ Gemini AI: Optimal 45HP Harvester Assigned</div>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs font-mono text-purple-300">
                                <span className="flex items-center gap-1.5">
                                  <ShieldCheck className="w-4 h-4 text-purple-400" /> Steganography Crypt-Engine
                                </span>
                                <span className="text-[10px] text-cyan-400">PSNR: 48.6 dB</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-black/60 font-mono text-[11px] text-slate-300 space-y-1">
                                <div><span className="text-purple-400">POST</span> /api/stego/embed-multimodal [AES-256]</div>
                                <div className="text-cyan-400">↳ SHA-256 Pseudo-Random LSB Pixel Embedding</div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Interactive Click Invitation */}
                        <div 
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center justify-between text-xs font-mono text-indigo-400 hover:text-cyan-300 transition-colors pt-1 cursor-pointer"
                        >
                          <span>Click to launch simulation</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for Deep Dive */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};
