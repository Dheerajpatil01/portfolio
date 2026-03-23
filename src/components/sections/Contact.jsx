import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-16 flex items-center justify-center text-center mt-10">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Let's Connect</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open!
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center group">
                <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center mr-6 group-hover:bg-accent/20 transition-colors">
                  <FiPhone className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Phone</p>
                  <a href="tel:+918459424159" className="text-slate-300 hover:text-accent font-medium mt-1 inline-block transition-colors">
                    +91 8459424159
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center mr-6 group-hover:bg-accent/20 transition-colors">
                  <FiMail className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dheeraj.2627.patil@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent font-medium mt-1 inline-block transition-colors">
                    dheeraj.2627.patil@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center mr-6 group-hover:bg-accent/20 transition-colors">
                  <FiMapPin className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Location</p>
                  <p className="text-slate-300 font-medium mt-1">
                    Bhusawal, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
          >
            <form className="bg-[#12141d]/90 p-8 rounded-[2rem] space-y-6 border border-slate-800 shadow-2xl backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#181b21] border border-slate-700/50 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#181b21] border border-slate-700/50 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-[#181b21] border border-slate-700/50 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Hello Dheeraj, I would like to talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-accent text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-accent/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
