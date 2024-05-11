import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          aliquam iure doloremque! Quibusdam minima provident consequuntur.
          Voluptatem incidunt, sunt dignissimos, molestiae fugiat ad explicabo
          nam et necessitatibus vero nostrum eveniet?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          aliquam iure doloremque! Quibusdam minima provident consequuntur.
          Voluptatem incidunt, sunt dignissimos, molestiae fugiat ad explicabo
          nam et necessitatibus vero nostrum eveniet?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          aliquam iure doloremque! Quibusdam minima provident consequuntur.
          Voluptatem incidunt, sunt dignissimos, molestiae fugiat ad explicabo
          nam et necessitatibus vero nostrum eveniet?
        </p>
      </div>
    </div>
  );
};

export default About;
