import React from "react";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section container">
        <h2>COMPANY</h2>
        <ul>
          <li>About us</li>
          <li>Team</li>
          <li>Careers</li>
          <li>Swiggy Blog</li>
          <li>Bug Bounty</li>
          <li>Swiggy One</li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>CONTACT</h2>
        <ul>
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>LEGAL</h2>
        <ul>
          <li>Terms & Conditions</li>
          <li>Refund & Cancellation</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Offer Terms</li>
          <li>Phishing & Fraud</li>
        </ul>
      </div>
      <div className="footer-section">
        <button>
          <img
            className="bn45"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
            alt="bn45"
          />
        </button>
        <button>
          <img
            className="bn46 mt-3"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="bn46"
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
