import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Let's <span className="text-gradient-primary">Connect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Whether you have an internship opportunity, project collaboration, or just want to talk tech — my inbox is always open.
          </motion.p>
        </div>

        {/* 2-Column Grid: Contact Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Direct Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-slate-100 dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Phone / Call</span>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="text-sm sm:text-base font-bold text-slate-100 dark:text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.phoneRaw, 'phone')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">Location</span>
                <p className="text-sm sm:text-base font-bold text-slate-100 dark:text-white light:text-slate-900">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                Social Profiles & Communities
              </span>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-xl border border-white/10 hover:border-cyan-500/50 flex flex-col items-center justify-center gap-2 group transition-all"
                >
                  <GithubIcon className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-xs font-semibold text-slate-200">GitHub</span>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 flex flex-col items-center justify-center gap-2 group transition-all"
                >
                  <LinkedinIcon className="w-5 h-5 text-slate-300 group-hover:text-indigo-400 transition-colors" />
                  <span className="text-xs font-semibold text-slate-200">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-xl border border-white/10 hover:border-emerald-500/50 flex flex-col items-center justify-center gap-2 group transition-all"
                >
                  <PhoneCall className="w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-xs font-semibold text-slate-200">WhatsApp</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            {/* Ambient Background Blur */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-cyan-500/10 to-indigo-500/10 blur-3xl pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-white light:text-slate-900 mb-2 font-heading">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
              Fill out the form below and I'll respond as quickly as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-sm text-slate-100 dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-sm text-slate-100 dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  placeholder="e.g. Internship Opportunity / Full-Stack Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-sm text-slate-100 dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Sainath, I was impressed by your AgroHire & Steganography projects..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-sm text-slate-100 dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-cyan-600 to-purple-600 text-white shadow-xl shadow-indigo-500/25 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Sending Message...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-semibold">Message dispatched successfully!</p>
                      <p className="text-[11px] text-slate-300">Thank you for reaching out, Sainath will reply soon.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
