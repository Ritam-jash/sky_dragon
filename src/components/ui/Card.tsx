import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;