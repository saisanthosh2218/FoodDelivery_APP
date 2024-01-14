import React from "react";
import contact_img from "./images/flat-design-illustration-customer-support_23-2148887720.avif";

const Contact = () => {
  const styling = {
    color: "darkred",
    fontFamily: "monospace",
    fontWeight: "bold",
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          minHeight: "60vh",
          alignItems: "center",
        }}
      >
        <div className="timings-div ">
          <h5>Delivery - Time</h5>
          <h6>Monday - Thursday</h6>
          <p>10:00am - 9:00pm</p>
          <h6>Friday - Sunday</h6>
          <p>11:00am - 11:00pm</p>
        </div>
        <div>
          <img src={contact_img} width={400} height={400} alt="" />
        </div>
        <div className="contact-div">
          <h4>Contact</h4>
          <p style={styling}>Location:KPHB,Beside Metro Parking. AKB Lane</p>
          <p style={styling}>Call us:123-456-7890</p>
          <p style={styling}>Queries: swiggy@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
