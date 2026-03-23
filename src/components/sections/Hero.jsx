import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import LightRays from '../LightRays';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const [showAltImage, setShowAltImage] = useState(false);
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <LightRays
          raysOrigin="top-right"
          raysColor="#ffffff"
          raysSpeed={1.2}
          lightSpread={1.2}
          rayLength={2.4}
          pulsating={false}
          fadeDistance={1.3}
          saturation={1.1}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0}
          distortion={0}
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-10">
        <div className="w-full lg:w-1/2 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-accent font-medium mb-4 text-xl md:text-2xl tracking-wide"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight"
          >
            Dheeraj Patil
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight"
          >
            I build things for the web.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="text-lg text-slate-300 mb-12 max-w-xl leading-relaxed"
          >
            I'm a Full Stack Developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building responsive, scalable, and user-centric web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 cursor-pointer shadow-lg shadow-accent/20 hover:shadow-accent/40"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-transparent border-2 border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.5 }}
            className="flex items-center gap-6"
          >
            <a href="https://github.com/Dheerajpatil01" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors hover:-translate-y-1 inline-block transform duration-300" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dheeraj-patil24" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors hover:-translate-y-1 inline-block transform duration-300" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dheeraj.2627.patil@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors hover:-translate-y-1 inline-block transform duration-300" aria-label="Email">
              <FiMail size={24} />
            </a>
          </motion.div>
        </div>

        {/* Right Side Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.4 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="relative group w-[80%] max-w-[400px]">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-red-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            {/* The Image Toggle */}
            <div className="cursor-pointer" onClick={() => setShowAltImage(!showAltImage)}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={showAltImage ? 'alt' : 'main'}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={showAltImage ? "/matrix-coding.jpg" : "/eat-sleep-code.jpg"}
                  alt="Eat. Sleep. Code. Repeat. or Alternate"
                  className="relative w-full rounded-2xl shadow-2xl object-contain transform group-hover:scale-[1.02] transition-transform duration-500 bg-[#12141d] p-2 border border-slate-700/50"
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
