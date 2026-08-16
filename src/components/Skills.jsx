import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  BrainCircuit, 
  Globe, 
  Wrench, 
  Database, 
  Sparkles, 
  Search,
  Cpu,
  Layers,
  Terminal,
  Server,
  Cloud,
  Eye,
  Bot,
  Zap,
  Check
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  Globe: Globe,
  Wrench: Wrench,
  Database: Database,
  Cpu: Cpu,
  Layers: Layers,
  Terminal: Terminal,
  Server: Server,
  Cloud: Cloud,
  Eye: Eye,
  Bot: Bot,
  Zap: Zap,
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillCategories.map((category) => {
    const filteredSkills = category.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, skills: filteredSkills };
  }).filter((category) => {
    if (activeTab === 'all') {
      return category.skills.length > 0;
    }
    return category.category.toLowerCase().includes(activeTab.toLowerCase()) && category.skills.length > 0;
  });

  const allSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-indigo-500/30 text-xs font-mono text-indigo-400 mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Skills & <span className="text-gradient-primary">Proficiencies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            A curated inventory of programming languages, foundational CS theories, full-stack frameworks, and developer toolchains.
          </motion.p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'glass-panel text-slate-400 hover:text-slate-200 border border-white/10'
              }`}
            >
              All Skills ({allSkillsCount})
            </button>
            <button
              onClick={() => setActiveTab('programming')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'programming'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'glass-panel text-slate-400 hover:text-slate-200 border border-white/10'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setActiveTab('core')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'core'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'glass-panel text-slate-400 hover:text-slate-200 border border-white/10'
              }`}
            >
              Core CS
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'glass-panel text-slate-400 hover:text-slate-200 border border-white/10'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'tools'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'glass-panel text-slate-400 hover:text-slate-200 border border-white/10'
              }`}
            >
              Tools & Cloud
            </button>
            <button
              onClick={() => setActiveTab('databases')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'databases'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'glass-panel text-slate-400 hover:text-slate-200 border border-white/10'
              }`}
            >
              Databases & AI
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Java, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-[#12131e] dark:bg-[#12131e] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-900 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((category, catIdx) => {
              const IconComponent = iconMap[category.icon] || Code2;

              return (
                <motion.div
                  key={category.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: catIdx * 0.05 }}
                  className="glass-card p-6 rounded-3xl border border-white/10 hover:border-cyan-500/30 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-100 dark:text-white light:text-slate-900 font-heading">
                          {category.category}
                        </h3>
                        <p className="text-[11px] font-mono text-slate-400">
                          {category.skills.length} skills listed
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-5 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Pills Container */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-cyan-400/50 transition-all cursor-default group/pill shadow-sm"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color || 'from-cyan-400 to-indigo-500'} group-hover/pill:scale-125 transition-transform`} />
                          <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/5 text-slate-400">
                            {skill.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle decorative bottom accent */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Proficiency: Verified</span>
                    <span className="text-cyan-400 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Core Competency
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state if search returns nothing */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 glass-card rounded-3xl border border-white/10">
            <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-200 mb-1">No matching skills found</h4>
            <p className="text-xs text-slate-400">Try searching for Java, React, Python, DSA, or AWS.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
