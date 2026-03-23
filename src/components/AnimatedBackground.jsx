import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-primary overflow-hidden transition-colors duration-300">
      {/* Subtle Starry Texture */}
      <div className="absolute inset-0 bg-stars opacity-40"></div>
      
      {/* Moving Cinematic Light Orbs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-accent/20 rounded-full blur-[100px] md:blur-[130px]"
      />
      
      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] min-w-[350px] min-h-[350px] bg-indigo-500/15 rounded-full blur-[100px] md:blur-[140px]"
      />

      {/* Fade at bottom into pure background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary pointer-events-none"></div>
    </div>
  );
};

export default AnimatedBackground;
