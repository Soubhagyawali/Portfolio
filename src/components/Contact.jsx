import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  UserIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_i55vxv4',
        'template_o6yfn9f',
        form.current,
        'JDqsyFVJvyKT95TOf'
      )
      .then(
        () => {
          form.current.reset();
          setIsSubmitting(false);
          toast.success('Message sent successfully! ✅', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        },
        (error) => {
          console.error('Error sending message:', error);
          setIsSubmitting(false);
          toast.error('Failed to send message. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 py-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Background Glow */}
      <div className="absolute bottom-20 right-40 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-400 blur-3xl opacity-20 rounded-full" />

      <div className="container mx-auto px-6 max-w-lg relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <ChatBubbleLeftRightIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-white">Get</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              In Touch
            </span>
          </h2>
          <p className="text-gray-400 mt-2">
            Let's build something amazing together
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 shadow-xl"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Your Name
              </label>
              <div className="relative">
                <UserIcon className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Your Email
              </label>
              <div className="relative">
                <EnvelopeIcon className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Enter your message"
                className="w-full bg-gray-800/70 border border-gray-700 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className={`w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all btn-glow ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links or Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            Or reach out directly at{' '}
            <a
              href="mailto:soubhagyawali2003@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              soubhagyawali2003@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
