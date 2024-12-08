import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/images/group.jpg"; // Background Image
import teamMember1 from "../assets/images/sathish.jpg";
import teamMember2 from "../assets/images/jenish.jpg";
import teamMember3 from "../assets/images/harish.jpg";
import teamMember4 from "../assets/images/harithampi.jpg";
import teamMember5 from "../assets/images/harithampi2.jpg";
import teamMember6 from "../assets/images/gowtham.jpg";
import teamMember7 from "../assets/images/banu.jpg";
import teamMember8 from "../assets/images/piranavan.jpg";
import teamMember9 from "../assets/images/lathu.jpg";

function AboutUs() {
  const teamMembers = [
    { name: "SathisThevh", role: "Lead Photographer", image: teamMember1 },
    { name: "Jenishan", role: "Creative Director", image: teamMember2 },
    { name: "Sathya", role: "Editor", image: teamMember3 },
    { name: "Ravithran", role: "Senior Photographer", image: teamMember4 },
    { name: "Vishal", role: "Art Director", image: teamMember5 },
    { name: "Prabha", role: "Lighting Specialist", image: teamMember6 },
    { name: "Anusha", role: "Videographer", image: teamMember7 },
    { name: "Rajesh", role: "Production Manager", image: teamMember8 },
    { name: "Kavitha", role: "Customer Relations", image: teamMember9 },
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

      <header
        className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] bg-cover bg-center"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-[#FFFAF0] tracking-wider mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.div
            className="w-20 sm:w-24 md:w-32 h-1 bg-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-16">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-center mb-8 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFD700] font-semibold">Story</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-[#FFFFFF] text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Founded in 2010, our photography studio has been capturing life's
            most precious moments for over a decade. We believe in the power of
            images to tell stories, evoke emotions, and preserve memories for
            generations to come.
          </motion.p>
        </section>

        <section className="mb-16">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-center mb-8 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFD700] font-semibold">Team</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-[#780000] overflow-hidden shadow-md hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#FFFFFF]">
                    {member.name}
                  </h3>
                  <p className="text-[#FFFFFF]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-center mb-8 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-[#FFD700] font-semibold">Mission</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-[#FFFFFF] text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our mission is to create stunning visual narratives that capture the
            essence of every moment. We strive to push the boundaries of
            creativity while delivering exceptional quality and unparalleled
            customer service.
          </motion.p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;
