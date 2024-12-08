import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">Portfolio</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Ritam-jash" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="https://www.linkedin.com/in/ritam-jash/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              <div className="flex space-x-4 pt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;