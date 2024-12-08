import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ProjectType } from '../types/project';

interface ProjectModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;