import React from "react";
import why_img from "./images/3d-illustration-smartphone-with-door-screen-with-delivery-scooter-boxes-paper-bags-24-7-online-shopping-delivery-service-concept.jpg";
import "./CSS/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img src={why_img} alt="" />
      </div>
      <div className="about-text">
        <h1>Why Swiggy?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          voluptatem esse in similique ut commodi aut! Incidunt, non, corporis
          nobis cumque dicta architecto possimus atque enim voluptates ea
          assumenda provident. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate ullam accusantium, molestias dicta dolor
          modi totam repellat corporis magnam facilis quod aut officiis. Laborum
          illo libero, deleniti voluptates repudiandae nemo.
        </p>
        <p>
          ✔ 24/7 Availability <br />
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            sapiente ab pariatur ad! Quod ipsam
          </span>
        </p>
        <p>
          ✔Fresh and Quality <br />
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            sapiente ab pariatur ad! Quod ipsam
          </span>
        </p>
        <p>
          ✔Customer Support <br />
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            sapiente ab pariatur ad! Quod ipsam
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
