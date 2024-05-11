import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const sliderForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const sliderBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={sliderForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={sliderBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Mst Mobasshirin Mitu</h3>
                  <span>Rangpur, Bangladesh</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis pariatur quod nisi at id vel laboriosam recusandae odio
                temporibus! Reiciendis unde ab fuga placeat nostrum aperiam!
                Perspiciatis quae laudantium temporibus?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Michael Jackson</h3>
                  <span>Edusity, Jordan</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis pariatur quod nisi at id vel laboriosam recusandae odio
                temporibus! Reiciendis unde ab fuga placeat nostrum aperiam!
                Perspiciatis quae laudantium temporibus?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Fatmana Akbaba</h3>
                  <span>Edusity, Turkey</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis pariatur quod nisi at id vel laboriosam recusandae odio
                temporibus! Reiciendis unde ab fuga placeat nostrum aperiam!
                Perspiciatis quae laudantium temporibus?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Mike Tyson</h3>
                  <span>USA, The Planet Earth</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis pariatur quod nisi at id vel laboriosam recusandae odio
                temporibus! Reiciendis unde ab fuga placeat nostrum aperiam!
                Perspiciatis quae laudantium temporibus?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Testimonials;
