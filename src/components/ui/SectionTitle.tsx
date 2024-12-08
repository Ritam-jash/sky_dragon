import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <motion.h2 
      className="text-3xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;