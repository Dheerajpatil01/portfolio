import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2200; // 2.2 seconds total loading animation
    const interval = 20; 
    let currentProgress = 0;
    
    const timer = setInterval(() => {
      currentProgress += (100 / (duration / interval));
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          onLoadingComplete();
        }, 400); // Brief pause at 100% before sliding up
      }
      setProgress(currentProgress);
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d1017]"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="flex flex-col items-center relative z-10 w-full max-w-sm px-6">
        
        {/* Name Animation */}
        <div className="overflow-hidden flex text-4xl md:text-5xl font-black text-slate-100 mb-10 tracking-tighter">
          {"Dheeraj Patil".split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5, type: "spring", bounce: 0.4 }}
              className={char === ' ' ? 'w-3 md:w-4' : ''}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Loading Progress Bar */}
        <div className="w-full relative">
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent relative"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            >
              {/* Hot glowing tip on progress bar */}
              <div className="absolute top-0 right-0 bottom-0 w-4 bg-white shadow-[0_0_10px_white]"></div>
            </motion.div>
          </div>
          
          <div className="flex justify-between items-center mt-3 text-xs font-mono text-slate-400">
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
            >
              System Initialization
            </motion.span>
            <span className="text-accent">{Math.round(progress)}%</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;
