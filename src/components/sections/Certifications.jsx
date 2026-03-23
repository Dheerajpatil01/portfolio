import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

const certifications = [
  {
    title: "Full Stack Development",
    issuer: "Infosys Springboard",
    date: "Feb 2024",
    image: "/cert1.jpg"
  },
  {
    title: "Object Oriented Programming using C++",
    issuer: "Lovely Professional University",
    date: "Jun 2025",
    image: "/cert3.jpg"
  },
  {
    title: "Front End Development",
    issuer: "React-Hacker Rank",
    date: "Mar 2026",
    image: "/cert2.jpg"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 font-serif">
            Certifications & Training
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Professional certificates and training programs
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
              className={`group relative flex flex-col rounded-2xl overflow-hidden bg-[#1e2330] border border-slate-700/50 transition-all duration-300 ${index === 1
                ? 'shadow-[0_0_30px_rgba(41,112,255,0.25)] border-accent/30 -translate-y-2'
                : 'hover:border-accent/50 hover:shadow-[0_0_30px_rgba(41,112,255,0.15)] hover:-translate-y-2'
                }`}
            >
              {/* Certificate Image Preview Area */}
              <div className="w-full aspect-[4/3] bg-white overflow-hidden relative border-b border-slate-700/50">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                    Preview Not Found
                  </div>
                )}
                {/* Subtle overlay on the image */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Text Information Area */}
              <div className="p-8 flex flex-col items-center text-center flex-grow bg-[#1e2330]">
                <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-accent transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-accent text-sm font-medium mb-6 px-4">
                  {cert.issuer}
                </p>

                <div className="mt-auto flex items-center text-slate-400 text-sm font-medium">
                  <FiCalendar className="mr-2" size={16} />
                  {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
