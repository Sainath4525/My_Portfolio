import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const BackgroundEffect = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalized offset from center (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 60;
      const y = (clientY / innerHeight - 0.5) * 60;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background base radial glow */}
      <div className="absolute inset-0 bg-[#0a0a0f] dark:bg-[#0a0a0f] light:bg-[#f8fafc] transition-colors duration-500" />

      {/* Interactive Orb 1: Electric Indigo */}
      <motion.div
        style={{ x: smoothMouseX, y: smoothMouseY }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[15%] -left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-indigo-600/30 via-violet-600/20 to-transparent blur-[120px] dark:opacity-40 light:opacity-20"
      />

      {/* Interactive Orb 2: Electric Cyan */}
      <motion.div
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-[35%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-cyan-500/25 via-blue-600/20 to-transparent blur-[130px] dark:opacity-35 light:opacity-20"
      />

      {/* Interactive Orb 3: Purple Glow */}
      <motion.div
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute -bottom-[10%] left-[20%] w-[650px] h-[650px] rounded-full bg-gradient-to-t from-purple-600/25 via-fuchsia-600/15 to-transparent blur-[140px] dark:opacity-30 light:opacity-15"
      />

      {/* Subtle Noise / Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,15,0.6)_100%)] dark:opacity-80 light:opacity-20" />

      {/* Subtle Star / Particle dots */}
      <div 
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.15] light:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
