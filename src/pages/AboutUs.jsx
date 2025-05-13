import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/images/group.jpg";
import teamMember1 from "../assets/images/sathish.jpg";
import teamMember2 from "../assets/images/jenish.jpg";
import teamMember3 from "../assets/images/jenish.jpg";
import teamMember4 from "../assets/images/harithampi.jpg";
import teamMember5 from "../assets/images/harithampi2.jpg";
import teamMember6 from "../assets/images/jenish.jpg";
import teamMember7 from "../assets/images/jenish.jpg";
import teamMember8 from "../assets/images/piranavan.jpg";
import teamMember9 from "../assets/images/lathu.jpg";

const AboutUs = () => {
  const teamMembers = [
    { name: "SathisThevh", role: "Lead Photographer", image: teamMember1 },
    { name: "Jenishan", role: "Creative Director", image: teamMember2 },
    { name: "Sathya", role: "Editor", image: teamMember3 },
    { name: "Ravithran", role: "Senior Photographer", image: teamMember4 },
    { name: "Vishal", role: "Art Director", image: teamMember5 },
    { name: "Prabha", role: "Lighting Specialist", image: teamMember6 },
    { name: "Anusha", role: "Videographer", image: teamMember7 },
    { name: "Rajesh", role: "Production Manager", image: teamMember8 },
    { name: "Kavitha", role: "Customer Relations", image: teamMember9 }
  ];

  return (
    <div className="min-h-screen bg-[#290000]">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="About Us - Our photography studio's team and mission"
        />
        <meta name="keywords" content="Photography, Team, About Us, Studio" />
        <meta name="author" content="SJ Photography" />
        <title>About Us - SJ Photography</title>
      </Helmet>

      <header className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#290000] to-transparent opacity-90" />
        
        <Navbar />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light text-[#FFFAF0] tracking-wider mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.div
            className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: "10%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <section className="mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-center mb-4 sm:mb-6 md:mb-8 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFD700] font-semibold">Story</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#FFFFFF] text-center max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Founded in 2010, our photography studio has been capturing life's
            most precious moments for over a decade. We believe in the power
            of images to tell stories, evoke emotions, and preserve memories
            for generations to come.
          </motion.p>
        </section>

        <section className="mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-center mb-4 sm:mb-6 md:mb-8 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFD700] font-semibold">Team</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-[#780000] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#FFFFFF]">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#FFFFFF] opacity-90">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-center mb-4 sm:mb-6 md:mb-8 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFD700] font-semibold">Mission</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#FFFFFF] text-center max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our mission is to create stunning visual narratives that capture
            the essence of every moment. We strive to push the boundaries of
            creativity while delivering exceptional quality and unparalleled
            customer service.
          </motion.p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;