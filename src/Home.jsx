import React from "react";
import logo from "./images/swiggy.png";
import foodpic from "./images/pexels-lisa-fotios-1279330.jpg";
import min_ord from "./images/4x_-_No_min_order_x0bxuf.webp";
import live_track from "./images/4x_Live_order_zzotwy.webp";
import deli_very from "./images/4x_-_Super_fast_delivery_awv7sn.webp";
import "./CSS/Home.css";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="main-outer-div">
        <div className="outerDiv">
          <div className="logo">
            <div className="logo-container">
              <img src={logo} alt="" width={40} height={40} />
              <h3>Swiggy</h3>
            </div>
            <div>
              <Button
                onClick={() => navigate("/LoginPage")}
                style={{
                  borderRadius: 0,
                  border: "none",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/SignUpPage")}
                className="ms-2"
                style={{ borderRadius: "0" }}
                variant="warning"
              >
                SignUp
              </Button>
            </div>
          </div>
          <div className="main-head container mt-5">
            <div style={{ padding: "5px" }} className="text-input-div">
              <div className="head-text">
                <h1>Game Night?</h1>
                <p className="text-mute">
                  Order food from favourite restaurants near you
                </p>
              </div>
              <div className="input-group">
                <InputGroup className="mb-3 w-75 mt-2" size="md">
                  <Form.Control
                    className="custom-input"
                    placeholder="Enter Your Location"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    style={{ borderRadius: "0px", padding: "12px" }}
                  />
                  <Button className="btn" id="button-addon2">
                    FIND FOOD
                  </Button>
                </InputGroup>
              </div>

              <div className="mt-4 container">
                <p className="text-secondary">POPULAR CITIES IN INDIA</p>
                <p
                  style={{
                    color: "gray",
                    wordSpacing: "4px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  Ahmedabad,Bangalore,Hyderabad,Mumbai,Delhi,Kolkata, Lucknow,
                  Gujart,Patna,Thrissur, Tirupur, Warangal, Aurangabad, Agra,
                  Mangalore, Manipal, Udaipur, Amritsar, Bhubaneshwar,
                  Thiruvananthapuram and Kota. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="img-div">
          <img src={foodpic} alt="" />
        </div>
      </div>
      <div className="bootstrap-container">
        <div className="bootstrap-inner-div">
          <div className="bootstrap-img-container">
            <img src={min_ord} alt="" />
          </div>
          <div className="bootstrap-text-head mt-2">No Minimum Order</div>
          <div className="bootstrap-text mt-2">
            Order in for yourself or for the group, with no restrictions on
            order value
          </div>
        </div>
        <div className="bootstrap-container">
          <div className="bootstrap-inner-div">
            <div className="bootstrap-img-container">
              <img src={live_track} alt="" />
            </div>
            <div className="bootstrap-text-head mt-2">Live Order Tracking</div>
            <div className="bootstrap-text mt-2">
              Know where your order is at all times, from the restaurant to your
              doorstep
            </div>
          </div>
          <div className="bootstrap-container">
            <div className="bootstrap-inner-div">
              <div className="bootstrap-img-container">
                <img src={deli_very} alt="" />
              </div>
              <div className="bootstrap-text-head mt-2">
                Lightning-Fast Delivery
              </div>
              <div className="bootstrap-text mt-2">
                Experience Swiggy's superfast delivery for food delivered fresh
                & on time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
