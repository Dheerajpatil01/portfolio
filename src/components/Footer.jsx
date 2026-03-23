import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-10 border-t border-slate-700/50 mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <a href="https://github.com/Dheerajpatil01" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-accent text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1">
            <FiGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/dheeraj-patil24" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-accent text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1">
            <FiLinkedin size={22} />
          </a>
          <a href="mailto:dheeraj.2627.patil@gmail.com" className="p-3 rounded-full bg-slate-800 hover:bg-accent text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1">
            <FiMail size={22} />
          </a>
        </div>
        <div className="text-center space-y-2">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Dheeraj Pravin Patil. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Full Stack Developer | Bhusawal, Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
