import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutSection from "./AboutSection";
import Services from "./GallerySection1";
import PackageDetails from "./PackageDetails";
import ClientReviewSweeper from "./ClientReviewSweeper";
import heroImage1 from "../assets/images/10.jpg";
import heroImage2 from "../assets/images/01f.jpg";
import heroImage3 from "../assets/images/11.jpg";
import heroImage4 from "../assets/images/02.jpg";
import heroImage5 from "../assets/images/bc2.jpg";
import heroImage6 from "../assets/images/20.jpg";
import GallerySection1 from "./GallerySection1";
import GallerySection2 from "./GallerySection2";
import Projectcount from "./projectcount";
import Homealbum from "./Homealbum";

const Hero = () => {
  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
    heroImage6,
  ];

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="relative w-full h-screen">
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
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Hero Background ${index + 1}`}
                className="w-full h-screen object-cover"
                onError={(e) => console.error(`Failed to load image: ${image}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Rest of the content below the hero */}
      <AboutSection />
      <GallerySection1 />
      <GallerySection2 />
      <ClientReviewSweeper />
      <Projectcount />
      <Homealbum />
      <Footer />
    </div>
  );
};

export default Hero;
