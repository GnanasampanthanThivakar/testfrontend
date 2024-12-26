import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/images/11.jpg";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      // Simulate form submission
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 3000);
    } else {
      setFormErrors(validationErrors);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[id]) {
      setFormErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#290000]">
      {/* Header Section with Parallax Effect */}
      <header
        className="relative h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#290000] to-transparent opacity-90"></div>
        <Navbar />
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl font-light text-[#FFFAF0] tracking-wider mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          ><h1>
            Contact Us
            </h1>
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </motion.div>
      </header>

      <main className="container mx-auto px-16 py-24">
        {/* Contact Information Section */}
        <section className="mb-20">
          <motion.h2
            className="text-6xl font-light text-center mb-12 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>
            Contact <span className="text-[#FFD700]">Information</span>
            </h2>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { 
                icon: MapPin, 
                title: "Address", 
                content: "123, Photography Lane, Jaffna" 
              },
              { 
                icon: Phone, 
                title: "Phone", 
                content: "+94 123 456 789" 
              },
              { 
                icon: Mail, 
                title: "Email", 
                content: "info@photographystudio.com" 
              },
              { 
                icon: Clock, 
                title: "Opening Hours", 
                content: [
                  "Mon - Fri: 9:00 AM - 6:00 PM",
                  "Sat: 10:00 AM - 2:00 PM",
                  "Sun: Closed"
                ]
              }
            ].map(({ icon: Icon, title, content }, index) => (
              <motion.div 
                key={title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <Icon color="#FFD700" size={48} className="mb-4" />
                <h2 className="text-[#FFD700] text-2xl mb-2">{title}</h2>
                {Array.isArray(content) ? (
                  content.map(line => (
                    <p key={line} className="text-[#FFFFFF]">{line}</p>
                  ))
                ) : (
                  <p className="text-[#FFFFFF]">{content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-20">
          <motion.h2
            className="text-6xl font-light text-center mb-12 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          ><h2>
            Our <span className="text-[#FFD700] font-semibold">Location</span>
            </h2>
          </motion.h2>
          <motion.div 
            className="relative h-96"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Google Map - SJ Photography"
              className="w-full h-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15729.325586032452!2d79.9535764!3d9.7379703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53dcbe59876f%3A0x31c1f27b058b70b8!2sSJ%20Photography!5e0!3m2!1sen!2slk!4v1733064677091!5m2!1sen!2slk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-20">
          <motion.h2
            className="text-6xl font-light text-center mb-12 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          ><h2>
            Get in <span className="text-[#FFD700] font-semibold">Touch</span>
            </h2>
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <motion.form 
              className="bg-[#780000] p-8 rounded-lg shadow-2xl"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {submitStatus === "success" && (
                <div className="bg-green-600 text-white p-4 rounded-lg mb-4 text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <div className="mb-6">
                <label
                  className="block text-[#FFFAF0] mb-2 font-semibold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border ${
                    formErrors.name 
                      ? "border-red-500" 
                      : "border-[#ebebeb]"
                  } bg-transparent text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FFD700]`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label
                  className="block text-[#FFFAF0] mb-2 font-semibold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border ${
                    formErrors.email 
                      ? "border-red-500" 
                      : "border-[#ffffff]"
                  } bg-transparent text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FFD700]`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label
                  className="block text-[#FFFAF0] mb-2 font-semibold"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-lg border ${
                    formErrors.message 
                      ? "border-red-500" 
                      : "border-[#f4f4f4]"
                  } bg-transparent text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FFD700]`}
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#D32F2F] hover:bg-[#FF0000] text-[#FFFAF0] font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ContactUs;