import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
    secondary: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;