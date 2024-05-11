// src/Carousel.js
import React, { useState,useEffect } from 'react';
const Carousel = ({ images, interval = 3000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    // ...
    useEffect(() => {
      const autoPlayInterval = setInterval(nextSlide, interval);
      return () => {
        clearInterval(autoPlayInterval);
      };
    }, [interval]);
    // ...
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
      height={40}
      width={40}
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};
export default Carousel;
