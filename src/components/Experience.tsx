import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';
import { gradients } from '../styles/gradients';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const Experience = () => {
  return (
    <section id="experience" className={`py-20 ${gradients.background}`}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className={`text-3xl font-bold text-center mb-12 ${gradients.title}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 pb-12 last:pb-0"
              variants={item}
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-[28px] bottom-0 w-[2px] bg-gradient-to-b from-purple-600 to-indigo-600"></div>
              )}
              
              <motion.div 
                className="absolute left-0 top-[6px] w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg shadow-purple-500/20"
                whileHover={{ scale: 1.2 }}
              />
              
              <motion.div 
                className="bg-white rounded-lg p-6 ml-6 shadow-lg shadow-purple-500/5"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <div className="text-gray-600 mt-2">{exp.company}</div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;