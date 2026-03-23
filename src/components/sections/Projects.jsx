import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const codeSnippet = `// Smart Parking Management System
function initParking() {
  const system = new SecureConnection();
  system.connect().then(() => {
    console.log("Connected to MySQL DB");
    system.trackSlots();
  });
}

// Weather Forecast Web App
async function getWeather(location) {
  const data = await fetchWeatherData(location);
  renderDashboard(data);
}

// Blogging Platform
class BlogManager {
  constructor() {
    this.api = new BackendAPI();
  }
  createPost(content) {
    return this.api.post('/posts', content);
  }
}`;

const scrollingText = Array(15).fill(codeSnippet).join('\n\n');

const projects = [
  {
    title: "Online Parking System",
    subtitle: "Smart Parking Management",
    description: "• Developed a smart parking management system enabling users to locate, book, and manage parking slots online.\n• Implemented secure user authentication with PHP sessions and integrated MySQL database for booking management.\n• Enhanced parking efficiency by enabling real-time slot tracking and streamlined booking.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Dheerajpatil01?tab=repositories",
    live: "#"
  },
  {
    title: "Weather Forecast Web",
    subtitle: "Real-Time Weather Information",
    description: "• Developed a weather forecasting web application enabling users to access real-time global weather information easily.\n• Designed a responsive and user-friendly interface using HTML5, CSS, and Tailwind.\n• Delivered dynamic weather insights including temperature, humidity, and conditions.",
    tech: ["HTML5", "CSS", "Tailwind CSS"],
    github: "https://github.com/Dheerajpatil01?tab=repositories",
    live: "#"
  },
  {
    title: "Blogging Platform",
    subtitle: "Content Management System",
    description: "• Developed a responsive blogging platform enabling users to create, edit, and manage social blog content efficiently.\n• Implemented dynamic CRUD functionality using JavaScript with structured layouts and mobile-responsive UI design.\n• Improved content accessibility and user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50 dark:bg-slate-900/50 relative overflow-hidden">
      
      {/* Matrix Scrolling Code Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20 flex justify-between w-full text-green-500 font-mono text-xs md:text-sm whitespace-pre select-none overflow-hidden" 
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }} 
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex flex-col px-4"
        >
          <div>{scrollingText}</div>
          <div>{scrollingText}</div>
        </motion.div>

        <motion.div
          animate={{ y: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
          className="flex flex-col px-4 opacity-70 hidden md:flex"
        >
          <div>{scrollingText}</div>
          <div>{scrollingText}</div>
        </motion.div>

        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="flex flex-col px-4 opacity-90 hidden lg:flex"
        >
          <div>{scrollingText}</div>
          <div>{scrollingText}</div>
        </motion.div>
        
        <motion.div
          animate={{ y: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="flex flex-col px-4 opacity-60 hidden xl:flex"
        >
          <div>{scrollingText}</div>
          <div>{scrollingText}</div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-16 flex items-center">
            Projects
            <div className="h-px bg-slate-700/50 flex-grow ml-6"></div>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", bounce: 0.4 }}
            >
              <div className="glass-card rounded-xl p-8 h-full flex flex-col group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-2xl backdrop-blur-sm bg-slate-900/90 border border-slate-700/60">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
                
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <div className="text-green-500 text-4xl">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors" aria-label="GitHub Link">
                      <FiGithub size={22} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-green-400 transition-colors relative z-10">
                  {project.title}
                </h3>
                <p className="text-sm text-green-500 mb-4 font-mono relative z-10">{project.subtitle}</p>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed relative z-10">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50 relative z-10">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="text-[10px] font-mono text-green-400/80 bg-green-900/20 border border-green-800/30 px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
