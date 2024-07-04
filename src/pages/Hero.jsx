import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AboutSection from './AboutSection';
import Services from './Services';
import PackageDetails from './PackageDetails';
import TeamSection from './TeamSection';
import HeroGallery from './HeroGallery';

import AdminYouTubeLink from '../components/AdminYouTubeLink';
import ClientReviewSweeper from './ClientReviewSweeper';
import heroImage1 from '../assets/images/10t.png';
import heroImage2 from '../assets/images/bc1.png';
import heroImage3 from '../assets/images/bc2.png';
import heroImage4 from '../assets/images/bc3.png';
import heroImage5 from '../assets/images/bc2.png';
import heroImage6 from '../assets/images/bc1.png';

const Hero = () => {
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6];

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="relative h-screen bg-cover bg-center">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full"
          speed={1000}
          fadeEffect={{ crossFade: true }}
          watchSlidesProgress={true}
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Hero Background ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                onLoad={(e) => e.target.classList.remove('opacity-0')}
                onError={(e) => console.error(`Failed to load image: ${image}`)}
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="font-playfair text-5xl mb-4">
              <span className="text-[#FF8A80]">SJ</span>{' '}
              <span className="text-[#D7CCC8]">Photography</span>
            </h1>
            <p className="font-roboto text-xl mb-8">
              Capturing the magic of your love story
            </p>
          </div>
        </div>
      </div>
     
      <AboutSection />
      <Services />
      
      <PackageDetails />
   
    <ClientReviewSweeper/>
      <Footer />
    </div>
  );
};

export default Hero;
