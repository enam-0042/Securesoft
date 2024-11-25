import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

import "./Carousel.css";
const linkArr = [
  "https://apps.apple.com/ca/app/tv-remote-universal-control/id6443671916",
  "https://apps.apple.com/us/app/alpha-vpn-secure-unlimited/id1594310803",
];
export const Home = ({ data, interval = 5000 }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  // Automatically change slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    // Cleanup interval on unmount
    return () => clearInterval(slideInterval);
  }, [slide, interval]);

  return (
    <div id="home" className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />

      <img
        // onClick={() => (window.location.href = "google.com")}
        onClick={() => window.open(`${linkArr[slide]}`, "_blank")}
        className="button-apple"
        src="./img/appstorebutton.png"
      />
      {/* </button> */}

      {data.map((item, idx) => {
        return (
          <img
            // style={{
            //   transform: `translateX(-${slide * 100}%)`,
            //   transition: "transform 0.3s ease-in-out",
            // }}
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide " : "slide slide-hidden "}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator " : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
