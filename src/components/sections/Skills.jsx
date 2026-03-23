import { motion } from 'framer-motion';
import LogoLoop from '../LogoLoop';

const skillCategories = [
  {
    title: "CORE LANGUAGES",
    skills: [
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
    ]
  },
  {
    title: "ARCHITECTURE & FRAMEWORKS",
    skills: [
      { name: "NodeJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" }
    ]
  },
  {
    title: "TOOLS & ECOSYSTEM",
    skills: [
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Postman", src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", bgWhite: true }
    ]
  }
];

const LogoCard = (item) => (
  <div className="flex flex-col items-center justify-center p-2 group">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#181b21] rounded-2xl flex items-center justify-center p-3 md:p-4 mb-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] border border-slate-700/30 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(41,112,255,0.2)] hover:border-accent/40 cursor-grab active:cursor-grabbing">
      <img 
         src={item.src} 
         alt={item.name} 
         className={`w-8 h-8 md:w-10 md:h-10 object-contain pointer-events-none ${item.bgWhite ? 'bg-slate-200 p-1 rounded-full' : ''}`}
      />
    </div>
    <span className="text-slate-400 text-[10px] md:text-xs font-semibold tracking-wide text-center uppercase group-hover:text-white transition-colors">
      {item.name}
    </span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 font-serif">
            Technical Proficiency
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((categoryGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
              className="bg-[#12141d]/90 rounded-[2rem] pt-8 pb-10 px-8 border border-slate-700/50 shadow-2xl backdrop-blur-sm flex flex-col relative overflow-hidden"
            >
              {/* Card Title */}
              <h3 className="text-[#d4af37] text-sm font-bold tracking-[0.2em] uppercase mb-12 text-center md:text-left z-10">
                {categoryGroup.title}
              </h3>
              
              {/* Marquee Wrapper within the card */}
              <div className="w-[120%] -ml-[10%] relative mt-auto z-10 opacity-90 hover:opacity-100 transition-opacity duration-300">
                {/* Fade edges naturally to blend with card bg */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#12141d] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#12141d] to-transparent z-20 pointer-events-none"></div>
                
                <LogoLoop 
                  logos={categoryGroup.skills} 
                  speed={25} 
                  direction={index % 2 !== 0 ? "right" : "left"} 
                  gap={15}
                  logoHeight={140}
                  renderItem={(item) => LogoCard(item)}
                  pauseOnHover={false}
                  hoverSpeed={5}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
