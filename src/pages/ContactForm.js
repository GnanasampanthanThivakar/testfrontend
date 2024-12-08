import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/images/11.jpg"; // Ensure this image path is correct

function ContactUs() {
  return (
    <div className="min-h-screen bg-[#290000]">
      {/* Header Section */}
      <header
        className="relative h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed", // Parallax effect
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#290000] to-transparent opacity-90"></div>
        <Navbar />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            className="text-7xl font-light text-[#FFFAF0] tracking-wider mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-16 py-24">
        {/* Address, Phone, Email, Opening Hours Section */}
        <section className="mb-20">
          <motion.h2
            className="text-6xl font-light text-center mb-12 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact{" "}
            <span className="text-[#FFD700] font-semibold">Information</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {/* Address */}
            <div>
              <h3 className="text-2xl text-[#FFD700] font-semibold mb-2">
                Address
              </h3>
              <p className="text-[#FFFFFF]">123, Photography Lane, Jaffna</p>
            </div>
            {/* Phone */}
            <div>
              <h3 className="text-2xl text-[#FFD700] font-semibold mb-2">
                Phone
              </h3>
              <p className="text-[#FFFFFF]">+94 123 456 789</p>
            </div>
            {/* Email */}
            <div>
              <h3 className="text-2xl text-[#FFD700] font-semibold mb-2">
                Email
              </h3>
              <p className="text-[#FFFFFF]">info@photographystudio.com</p>
            </div>
            {/* Opening Hours */}
            <div>
              <h3 className="text-2xl text-[#FFD700] font-semibold mb-2">
                Opening Hours
              </h3>
              <p className="text-[#FFFFFF]">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-[#FFFFFF]">Sat: 10:00 AM - 2:00 PM</p>
              <p className="text-[#FFFFFF]">Sun: Closed</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-20">
          <motion.h2
            className="text-6xl font-light text-center mb-12 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFD700] font-semibold">Location</span>
          </motion.h2>
          <div className="relative h-96">
            <iframe
              title="Google Map - SJ Photography"
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15729.325586032452!2d79.9535764!3d9.7379703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53dcbe59876f%3A0x31c1f27b058b70b8!2sSJ%20Photography!5e0!3m2!1sen!2slk!4v1733064677091!5m2!1sen!2slk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-20">
          <motion.h2
            className="text-6xl font-light text-center mb-12 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in <span className="text-[#FFD700] font-semibold">Touch</span>
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <form className="bg-[#780000] p-8 rounded-lg shadow-lg">
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
                  className="w-full p-3 rounded-lg border border-[#ebebeb] bg-transparent text-[#FFFFFF] focus:outline-none"
                />
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
                  className="w-full p-3 rounded-lg border border-[#ffffff] bg-transparent text-[#FFFFFF] focus:outline-none"
                />
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
                  className="w-full p-3 rounded-lg border border-[#f4f4f4] bg-transparent text-[#FFFFFF] focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#D32F2F] hover:bg-[#FF0000] text-[#FFFAF0] font-semibold py-3 px-6 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default ContactUs;
