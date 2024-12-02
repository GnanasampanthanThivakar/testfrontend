import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/images/group.JPG'; // Use an appropriate background image
import teamMember1 from '../assets/images/sathish.JPG'; // Add team member images
import teamMember2 from '../assets/images/jenish.JPG';
import teamMember3 from '../assets/images/harish.JPG';
import teamMember4 from '../assets/images/harithampi.JPG'; // Add more team member images
import teamMember5 from '../assets/images/harithampi2.JPG';
import teamMember6 from '../assets/images/gowtham.JPG';
import teamMember7 from '../assets/images/banu.JPG';
import teamMember8 from '../assets/images/piranavan.JPG';
import teamMember9 from '../assets/images/lathu.JPG';

function AboutUs() {
  const teamMembers = [
    { name: 'SathisThevh', role: 'Lead Photographer', image: teamMember1 },
    { name: 'Jenishan', role: 'Creative Director', image: teamMember2 },
    { name: 'Sathya', role: 'Editor', image: teamMember3 },
    { name: 'Ravithran', role: 'Senior Photographer', image: teamMember4 },
    { name: 'Vishal', role: 'Art Director', image: teamMember5 },
    { name: 'Prabha', role: 'Lighting Specialist', image: teamMember6 },
    { name: 'Anusha', role: 'Videographer', image: teamMember7 },
    { name: 'Rajesh', role: 'Production Manager', image: teamMember8 },
    { name: 'Kavitha', role: 'Customer Relations', image: teamMember9 },
  ];

  return (
    <div className="min-h-screen bg-[#290000]">
      <header
        className="relative h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed', // Parallax effect
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
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
            About Us
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </header>

      <main className="container mx-auto px-16 py-24">
        <section className="mb-20">
          <motion.h2
            className="text-6xl font-light text-center mb-12 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFFFFF] font-semibold">Story</span>
          </motion.h2>
          <motion.p
            className="text-xl text-[#FFFFFF] text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Founded in 2010, our photography studio has been capturing life's most precious moments for over a decade. We believe in the power of images to tell stories, evoke emotions, and preserve memories for generations to come.
          </motion.p>
        </section>

        <section className="mb-20">
          <motion.h2
            className="text-6xl font-light text-center mb-12 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFFFFF] font-semibold">Team</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-[#780000]  overflow-hidden shadow-md hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2 text-[#FFFFFF]">{member.name}</h3>
                  <p className="text-[#FFFFFF]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            className="text-6xl font-light text-center mb-12 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFFFFF] font-semibold">Mission</span>
          </motion.h2>
          <motion.p
            className="text-xl text-[#FFFFFF] text-center max-w-3xl mx-auto mb-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our mission is to create stunning visual narratives that capture the essence of every moment. We strive to push the boundaries of creativity while delivering exceptional quality and unparalleled customer service.
          </motion.p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;
