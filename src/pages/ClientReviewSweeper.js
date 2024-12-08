import React, { useState, useEffect } from "react";
import { Carousel, Button, Card, Rate } from "antd"; // Added Rate for star ratings
import testimonialImage from "../assets/images/o3e.png";
import backgroundImage1 from "../assets/images/o2e.jpg";
import backgroundImage2 from "../assets/images/9t.jpg";
import backgroundImage3 from "../assets/images/o3e.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anju & Dananjaya",
      feedback:
        "We can’t thank Greenart Photography enough for the amazing job they did at our wedding. They were not just photographers; they were storytellers!",
      image: testimonialImage,
      rating: 5,
    },
    {
      id: 2,
      name: "John & Emma",
      feedback:
        "The photos were a perfect blend of art and emotion, capturing every nuance of our special day. Highly recommend them!",
      image: testimonialImage,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Ravi & Priya",
      feedback:
        "Amazing experience! They truly made our wedding memorable with their incredible photography skills and attention to detail.",
      image: testimonialImage,
      rating: 5,
    },
    {
      id: 4,
      name: "Nihal & Nethmi",
      feedback:
        "Choosing Greenart Photography was the best decision we made for our wedding. Highly professional and creative!",
      image: testimonialImage,
      rating: 4,
    },
    {
      id: 5,
      name: "Sanjay & Kavya",
      feedback:
        "Every photo captured was full of life and joy. They were able to translate our happiness into beautiful memories.",
      image: testimonialImage,
      rating: 5,
    },
  ];

  const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center pb-60 pt-60  py-16 px-4 bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(100, 0, 0, 0.9), rgba(82, 0, 0, 0.7)), url(${backgroundImages[currentBgIndex]})`,
      }}
    >
      <h2 className="text-3xl md:text-4xl font-light text-white mb-10 text-center">
        Words From Our <span className="font-semibold">Happy Couples</span>
      </h2>

      <div className="w-full md:w-2/3 lg:w-1/2">
        <Carousel autoplay>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <Card
                className="shadow-lg"
                style={{
                  borderRadius: "8px",
                  background: "#fff",
                  padding: "20px",
                }}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-[#D32F2F] shadow-md mb-4"
                  />
                  <p className="text-center text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-2">
                    {testimonial.feedback}
                  </p>
                  <Rate
                    allowHalf
                    disabled
                    defaultValue={testimonial.rating}
                    style={{ color: "#D32F2F" }}
                    className="mb-2"
                  />
                  <h3 className="text-lg font-semibold text-[#1A2A40]">
                    {testimonial.name}
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>

      <Button
        type="primary"
        size="large"
        className="mt-10 px-8 py-3"
        style={{
          backgroundColor: "#1A2A40",
          borderColor: "#1A2A40",
          color: "#fff",
        }}
        onClick={() => alert("More stories coming soon!")}
      >
        More Stories Shared
      </Button>
    </div>
  );
};

export default Testimonials;
