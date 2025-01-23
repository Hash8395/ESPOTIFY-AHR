import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Diaporama = () => {
  const slides = [
    {
      image: "https://via.placeholder.com/1200x500?text=Valorant+Masters+Shanghai",
      title: "Valorant Masters Shanghai 2024",
    },
    {
      image: "https://via.placeholder.com/1200x500?text=CSGO+Championship",
      title: "CSGO Championship Finals",
    },
    {
      image: "https://via.placeholder.com/1200x500?text=League+of+Legends",
      title: "League of Legends Worlds 2024",
    },
  ];

  return (
    <div className="diaporama">
      <Swiper spaceBetween={50} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <h2 className="slide-title">{slide.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Diaporama;