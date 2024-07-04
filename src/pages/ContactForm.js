import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { CgSpinner } from 'react-icons/cg';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsLoading(false);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      <Navbar/>
      <div className="bg-gradient-to-br from-[#FFFAF0] to-[#E0E0E0] min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl font-extrabold text-center mb-12 text-[#1A2A40]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in <span className="text-[#D32F2F]">Touch</span>
          </motion.h1>

          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="lg:flex">
              <div className="lg:w-1/2 bg-[#1A2A40] p-12 text-[#FFFAF0] flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="mb-8 text-[#E0E0E0]">Fill out the form and we'll be in touch as soon as possible.</p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="h-6 w-6 mr-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span> sjphoto.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-6 w-6 mr-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+1 077475</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-6 w-6 mr-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>chankaraththai USA</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                      <a key={social} href={`#${social}`} className="text-[#FFD700] hover:text-white transition duration-300">
                        <span className="sr-only">{social}</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d={
                            social === 'facebook' ? "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" :
                            social === 'twitter' ? "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" :
                            social === 'instagram' ? "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.278.261 2.148.558 2.913.306.789.717 1.459 1.384 2.126.667.667 1.337 1.078 2.126 1.384.765.297 1.635.498 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.278-.06 2.148-.261 2.913-.558.789-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.337 1.384-2.126.297-.765.498-1.635.558-2.913.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.278-.261-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126-.667-.667-1.337-1.078-2.126-1.384-.765-.297-1.635-.498-2.913-.558C15.667.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 016.162 6.162A6.162 6.162 0 0112 18.162 6.162 6.162 0 015.838 12 6.162 6.162 0 0112 5.838zm0 1.513A4.648 4.648 0 007.352 12 4.648 4.648 0 0012 16.648 4.648 4.648 0 0016.648 12 4.648 4.648 0 0012 7.352zm6.406-1.845a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" :
                            social === 'linkedin' ? "M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.78 24 1.77 24h20.46C23.21 24 24 23.22 24 22.25V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.77a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM20.45 20.45h-3.56V14.6c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.07v6h-3.56V9h3.41v1.56h.05c.48-.91 1.66-1.88 3.41-1.88 3.64 0 4.31 2.4 4.31 5.52v6.25z" :
                            "" // default empty path
                          } />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 sm:p-12">
                <h2 className="text-3xl font-bold mb-6 text-[#1A2A40]">Send a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-[#1A2A40]">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-[#1A2A40]">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-[#1A2A40]">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-[#1A2A40]">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 text-white bg-[#1A2A40] hover:bg-[#D32F2F] rounded-md transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-2xl flex items-center space-x-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <CgSpinner className="h-6 w-6 text-green-500 animate-spin" />
            <span className="text-gray-700 font-medium">Sending message...</span>
          </motion.div>
        )}
        {showPopup && (
          <motion.div
            className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-2xl flex items-center space-x-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircleIcon className="h-6 w-6" />
            <span className="font-medium">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ContactForm;