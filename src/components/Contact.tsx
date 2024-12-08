import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'service_hauu467',
        'template_weyxs1s',
        formRef.current,
        'b66pOzNBra7jDzcPH'
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <span>ritamjash8@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91629668****</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Bardhaman, WB</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ y: -2 }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;