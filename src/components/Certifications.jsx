import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  CheckCircle, 
  Bot, 
  Cloud, 
  Code, 
  Sparkles, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

const iconMap = {
  Bot: Bot,
  Cloud: Cloud,
  Code: Code,
  Award: Award,
};

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-purple-500/30 text-xs font-mono text-purple-400 mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & MILESTONES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Certifications & <span className="text-gradient-primary">Badges</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Recognized industry and technical certifications verifying foundational knowledge across AI, Cloud, and Web Development.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || Award;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-indigo-500/40 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Ambient Top Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-500/10 via-purple-500/10 to-transparent blur-2xl pointer-events-none" />

                <div>
                  {/* Top Bar with Icon & Issuer */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
                          {cert.issuer}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors font-heading">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Badges */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {cert.date}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-cyan-400 group-hover:underline flex items-center gap-1">
                    Credential Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
