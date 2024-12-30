import React from "react";
import { Carousel, Card, Rate } from "antd";
import { QuoteIcon } from "lucide-react";
import backgroundImage from "../assets/images/05.png"; // Static background
import testimonialImage from "../assets/images/gl2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anju & Dananjaya",
      feedback:
        "We can't thank Greenart Photography enough for the amazing job they did at our wedding. They were not just photographers; they were storytellers!",
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

  return (
    <div
      className="relative flex flex-col       items-center justify-center py-16 px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Static background
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className=" text-white mb-12 text-center tracking-wider">
          Words from <span className=" text-[#FFD700]">Our Couples</span>
        </h2>

        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
          <Carousel
            dots={true}
            dotsClass="custom-dots"
            effect="fade"
            autoplay={true}
            autoplaySpeed={5000}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <Card
                  className="shadow-xl border-none transition-transform duration-300 transform hover:scale-105"
                  style={{
                    borderRadius: "16px",
                    padding: "30px",
                    background: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex flex-col items-center text-center relative">
                    <QuoteIcon
                      className="absolute top-0 left-0 text-[#D32F2F] opacity-20"
                      size={64}
                    />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 object-cover rounded-full border-4 border-[#D32F2F] shadow-lg mb-6 z-10"
                    />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 italic relative z-10">
                      "{testimonial.feedback}"
                    </p>
                    <Rate
                      allowHalf
                      disabled
                      defaultValue={testimonial.rating}
                      style={{ color: "#D32F2F", fontSize: "20px" }}
                      className="mb-4"
                    />
                    <h3 className="text-xl font-semibold text-[#1A2A40] tracking-wider">
                      {testimonial.name}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
