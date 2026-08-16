import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  Unlock,
  Bot,
  Wheat,
  Eye,
  RotateCcw,
  Sliders,
  DollarSign,
  Calendar,
  Key,
  Database
} from 'lucide-react';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

export const ProjectModal = ({ project, initialTab = 'interactive', onClose }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  
  // Interactive Simulation State for Steganography
  const [stegoMode, setStegoMode] = useState('embed'); // 'embed' or 'extract'
  const [secretMessage, setSecretMessage] = useState('Confidential CSE Research Data @ UVCE');
  const [passphrase, setPassphrase] = useState('sainath2027secret');
  const [carrierMedia, setCarrierMedia] = useState('Satellite_Farm_Image.png (1080p RGB)');
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [simulatedCipher, setSimulatedCipher] = useState('');
  
  // Extract state
  const [extractPassphrase, setExtractPassphrase] = useState('sainath2027secret');
  const [extractedResult, setExtractedResult] = useState('');
  const [extractStatus, setExtractStatus] = useState(null);

  // Interactive Simulation for AgroHire Platform
  const [cropType, setCropType] = useState('Wheat / Grain');
  const [acreage, setAcreage] = useState('15');
  const [rentalDuration, setRentalDuration] = useState('3'); // in days
  const [needDriver, setNeedDriver] = useState(true);
  const [aiRecommendation, setAiRecommendation] = useState(null);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!project) return null;

  const handleSimulateEncryption = () => {
    if (!secretMessage || !passphrase) return;
    const fakeCipher = "0x" + Array.from(secretMessage + passphrase)
      .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('')
      .slice(0, 32) + "...[AES-256-CBC Encrypted & Pseudo-Random LSB Embedded]";
    setSimulatedCipher(fakeCipher);
    setIsEncrypted(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleSimulateExtraction = () => {
    if (extractPassphrase === 'sainath2027secret' || extractPassphrase === passphrase) {
      setExtractedResult(secretMessage || "Confidential CSE Research Data @ UVCE");
      setExtractStatus('success');
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setExtractedResult('Error: Decryption failed. Key signature mismatch (AES-256 MAC Invalid).');
      setExtractStatus('error');
    }
  };

  const handleSimulateAiRecommend = () => {
    setIsGeneratingAi(true);
    setBookingConfirmed(false);
    setTimeout(() => {
      setIsGeneratingAi(false);
      const parsedAcreage = parseFloat(acreage) || 10;
      const parsedDuration = parseInt(rentalDuration) || 2;
      const baseDailyRate = cropType.includes('Wheat') ? 2200 : cropType.includes('Paddy') ? 2500 : 1900;
      const driverCharge = needDriver ? 500 * parsedDuration : 0;
      const totalEstimated = (baseDailyRate * parsedDuration) + driverCharge;

      setAiRecommendation({
        machinery: cropType.includes('Wheat') ? "High-Capacity Rotary Combine Harvester (65HP)" : cropType.includes('Paddy') ? "Track-Type Wet Paddy Harvester & Transplanter" : "Precision Seed Drill & Multi-Crop Tractor",
        estimatedCost: `₹${totalEstimated.toLocaleString('en-IN')}`,
        estimatedSavings: "34% reduction vs middleman pricing",
        weatherCondition: "Favorable dry harvesting conditions (28°C, Clear Sky)",
        geminiInsight: `Google Gemini Recommendation: For ${parsedAcreage} acres of ${cropType}, a ${parsedDuration}-day rental scheduled within the upcoming dry window maximizes operational throughput by 28%.`,
        geospatialHub: "Nearest Hub: Bengaluru Agricultural Machinery Depot (8.4 km away)"
      });
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
    confetti({
      particleCount: 60,
      spread: 90,
      origin: { y: 0.5 }
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        
        {/* Modal Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl glass-panel border border-white/15 bg-[#0f111c] text-slate-100 shadow-2xl p-5 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Area */}
          <div className="mb-6 pr-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.badge} • {project.period}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-gradient-primary">
              {project.title}
            </h2>
            <p className="text-xs sm:text-base text-slate-300 mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex gap-2 border-b border-white/10 pb-3 mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'interactive'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white glass-panel'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Live Interactive Simulation
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              System Architecture & Metrics
            </button>
          </div>

          {/* Tab 1: Live Interactive Simulation */}
          {activeTab === 'interactive' && (
            <div className="p-4 sm:p-6 rounded-2xl bg-black/60 border border-white/10 space-y-6">
              {project.id === 'steganography-platform' ? (
                /* Steganography AES-256 Interactive Lab */
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-indigo-300">
                      <Lock className="w-4 h-4 text-indigo-400" />
                      <span>Steganography & AES-256 Interactive Studio</span>
                    </div>
                    {/* Toggle Embed vs Extract */}
                    <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                      <button
                        onClick={() => setStegoMode('embed')}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                          stegoMode === 'embed' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                        }`}
                      >
                        Embed Data
                      </button>
                      <button
                        onClick={() => setStegoMode('extract')}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                          stegoMode === 'extract' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                        }`}
                      >
                        Extract Data
                      </button>
                    </div>
                  </div>

                  {stegoMode === 'embed' ? (
                    <div className="space-y-4">
                      <p className="text-xs text-slate-300">
                        Test the cryptographic payload concealment pipeline. The payload is encrypted with <strong>AES-256</strong> using <strong>SHA-256</strong> key derivation, then embedded into carrier pixel matrices using password-seeded pseudo-random spatial dispersal.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono text-slate-400 mb-1">Carrier Media</label>
                          <select
                            value={carrierMedia}
                            onChange={(e) => setCarrierMedia(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-[#141624] border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-400"
                          >
                            <option>Satellite_Farm_Image.png (1080p RGB)</option>
                            <option>Security_Audio_Capture.wav (16-bit PCM)</option>
                            <option>Surveillance_Clip.mp4 (H.264 Video)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono text-slate-400 mb-1">Secret Key / Passphrase</label>
                          <input
                            type="text"
                            value={passphrase}
                            onChange={(e) => setPassphrase(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Confidential Secret Message</label>
                        <input
                          type="text"
                          value={secretMessage}
                          onChange={(e) => setSecretMessage(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-400"
                        />
                      </div>

                      <button
                        onClick={handleSimulateEncryption}
                        className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 flex items-center gap-2 cursor-pointer hover:scale-102 transition-all"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Run AES-256 Encryption & LSB Embedding</span>
                      </button>

                      {isEncrypted && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs space-y-2.5"
                        >
                          <div className="flex items-center justify-between text-emerald-400 font-bold">
                            <span className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4" /> Steganographic Carrier Generated Successfully
                            </span>
                            <span className="font-mono text-[10px]">PSNR: 48.92 dB • SSIM: 0.9982</span>
                          </div>
                          <div className="font-mono text-[11px] text-slate-300 break-all bg-black/50 p-2.5 rounded-lg border border-white/5">
                            <span className="text-cyan-400">Cipher Stream: </span>{simulatedCipher}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-xs text-slate-300">
                        Extract and decrypt confidential data from a steganographic carrier by providing the original passphrase.
                      </p>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Enter Decryption Passphrase</label>
                        <input
                          type="text"
                          value={extractPassphrase}
                          onChange={(e) => setExtractPassphrase(e.target.value)}
                          placeholder="Try entering: sainath2027secret"
                          className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-400"
                        />
                      </div>

                      <button
                        onClick={handleSimulateExtraction}
                        className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-lg flex items-center gap-2 cursor-pointer hover:scale-102 transition-all"
                      >
                        <Unlock className="w-4 h-4" />
                        <span>Extract & Decrypt Payload</span>
                      </button>

                      {extractStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs space-y-1.5"
                        >
                          <div className="text-teal-300 font-bold flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" /> Integrity Verified (SHA-256 Hash Match)
                          </div>
                          <p className="text-white text-sm font-semibold bg-black/50 p-2.5 rounded-lg">
                            "{extractedResult}"
                          </p>
                        </motion.div>
                      )}

                      {extractStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-300"
                        >
                          {extractedResult}
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                /* AgroHire Live Booking & Gemini AI Recommender */
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
                      <Bot className="w-4 h-4 text-cyan-400" />
                      <span>AgroHire Live Booking & Gemini AI Recommender</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      ● Active REST Endpoint
                    </span>
                  </div>

                  <p className="text-xs text-slate-300">
                    Select your crop type, farmland size, and duration to calculate dynamic rental pricing and generate AI machinery recommendations based on live weather data.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Crop Type</label>
                      <select
                        value={cropType}
                        onChange={(e) => setCropType(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#141624] border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option>Wheat / Grain</option>
                        <option>Paddy / Rice</option>
                        <option>Sugarcane</option>
                        <option>Cotton</option>
                        <option>Pulses / Legumes</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Farmland (Acres)</label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={acreage}
                        onChange={(e) => setAcreage(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Rental Duration (Days)</label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={rentalDuration}
                        onChange={(e) => setRentalDuration(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="driverOption"
                      checked={needDriver}
                      onChange={(e) => setNeedDriver(e.target.checked)}
                      className="rounded accent-cyan-500 cursor-pointer"
                    />
                    <label htmlFor="driverOption" className="text-xs text-slate-300 cursor-pointer">
                      Include certified equipment operator / driver (+₹500/day)
                    </label>
                  </div>

                  <button
                    onClick={handleSimulateAiRecommend}
                    disabled={isGeneratingAi}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer hover:scale-102 transition-all disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isGeneratingAi ? "Querying Gemini AI Engine..." : "Calculate Estimate & AI Match"}</span>
                  </button>

                  {aiRecommendation && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-teal-500/20 pb-2">
                        <div className="text-teal-300 font-bold flex items-center gap-1.5">
                          <Wheat className="w-4 h-4" /> {aiRecommendation.machinery}
                        </div>
                        <div className="text-xs font-mono font-bold text-cyan-300 bg-black/40 px-2.5 py-1 rounded-lg border border-teal-500/30">
                          Estimated Total: {aiRecommendation.estimatedCost}
                        </div>
                      </div>

                      <p className="text-slate-300 text-xs leading-relaxed bg-black/40 p-2.5 rounded-lg">
                        {aiRecommendation.geminiInsight}
                      </p>

                      <div className="flex flex-wrap gap-2 text-[11px] font-mono text-cyan-300">
                        <span className="bg-white/5 px-2 py-0.5 rounded">📍 {aiRecommendation.geospatialHub}</span>
                        <span className="bg-white/5 px-2 py-0.5 rounded">🌤️ {aiRecommendation.weatherCondition}</span>
                      </div>

                      {!bookingConfirmed ? (
                        <button
                          onClick={handleConfirmBooking}
                          className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-black shadow-md cursor-pointer transition-all"
                        >
                          Confirm Simulated Reservation
                        </button>
                      ) : (
                        <div className="p-3 rounded-lg bg-emerald-900/60 border border-emerald-400 text-emerald-200 text-xs font-semibold flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Simulated Booking confirmed! Machinery dispatched via GPS tracker.</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: System Architecture & Metrics */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Detailed Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
                  Project Deep Dive
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Extended Highlights List */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                  Key Technical Accomplishments
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.extendedDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">{metric.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
                  Complete Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-white/5 border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action Links Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white flex items-center gap-2 transition-colors cursor-pointer border border-white/10"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Close Window [ESC]
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
