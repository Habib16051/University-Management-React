import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure a better education for our next generation</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
          perferendis eveniet, fuga error voluptas harum? Eius sed, eligendi
          assumenda sint delectus nesciunt quasi maiores itaque dolor? Debitis
          sed ullam earum?
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
