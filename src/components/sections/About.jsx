import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center">
            About Me
            <div className="h-px bg-slate-700/50 flex-grow ml-6"></div>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 text-slate-300 leading-relaxed text-lg">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="space-y-6"
          >
            <p>
              Hello! My name is Dheeraj and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom templates—turns out hacking together HTML & CSS taught me a lot about web structure!
            </p>
            <p>
              Fast-forward to today, I'm a <span className="text-accent">full-stack developer</span> with solid knowledge of Java, React, and modern web technologies. I recently completed comprehensive <span className="text-accent">Core Java Full Stack training</span> which honed my object-oriented programming skills and full-stack capabilities.
            </p>
            <p>
              Whether it's writing clean, efficient code or designing visually appealing interfaces, I am passionate about creating tech solutions that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
          >
            <div className="glass-card p-8 rounded-2xl relative group h-full flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center z-10">
                Education
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex flex-col border-l-2 border-accent pl-4">
                  <span className="font-semibold text-lg text-slate-200">Lovely Professional University</span>
                  <span className="text-slate-400">B.Tech in Computer Science and Engineering (CGPA: 6.49)</span>
                  <span className="text-xs text-slate-500 mt-1">Aug 2023 - Present | Phagwara, Punjab</span>
                </li>
                <li className="flex flex-col border-l-2 border-slate-600 pl-4">
                  <span className="font-semibold text-lg text-slate-200">Narayana Jr College</span>
                  <span className="text-slate-400">12th - Percentage: 88.1%</span>
                  <span className="text-xs text-slate-500 mt-1">2022 - 2023 | Hyderabad, Telangana</span>
                </li>
                <li className="flex flex-col border-l-2 border-slate-600 pl-4">
                  <span className="font-semibold text-lg text-slate-200">Kendriya Vidyalaya (O.F)</span>
                  <span className="text-slate-400">10th - Percentage: 73.2%</span>
                  <span className="text-xs text-slate-500 mt-1">2020 - 2021 | Bhusawal, Maharashtra</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
