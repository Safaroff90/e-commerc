import React from "react";
import "./Slider.scss";

const Slider = () => {
 
  return (
    <div className="slider__container">
       
        <img className="slider__image" src="img/natural.jpg"  alt="slide-01" />
        <img className="slider__image" src="img/watch.jpg" alt="slide-02" />
        <img className="slider__image" src="img/red.jpg" alt="slide-03" />
      </div>
  );
};

export default Slider;
