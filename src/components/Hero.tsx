import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { gradients } from '../styles/gradients';

const Hero = () => {
  return (
    <section id="home" className={`min-h-screen ${gradients.heroPattern} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      <div className="container mx-auto px-6 py-24 pt-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-1 rounded-lg blur-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <h1 className={`relative text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 ${gradients.title} animate-gradient leading-tight`}>
                Crafting Digital Excellence
              </h1>
            </div>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Full Stack Developer passionate about creating innovative solutions 
              and delivering exceptional user experiences
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-purple-500/20"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/photo.png"
                alt="Professional portrait"
                className="relative w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;