import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Stay Connected, Stay Inspired</h2>
          <p>
          Eclectika'25 is more than just an event—it's a celebration of dreams, diversity, and determination. As Central India's largest cultural fest, we strive to create unforgettable experiences through creativity, innovation, and togetherness. Stay connected with us for updates, and don’t miss the chance to be part of a legacy that celebrates the essence of art and culture. Let’s make Eclectika'25 a journey to remember!
          </p>
        </div>
        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/eclectika.nitrr/" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/eclectika_nitrr" aria-label="Twitter">
            <i class="fa-brands fa-x-twitter" style={{'color': '#ffffff'}}></i>
            </a>
            <a href="https://www.instagram.com/eclectika_nitrr/" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/eclectika-nit-raipur/" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Eclectika. All rights reserved. Built
          with ❤️ .
        </p>
      </div>
    </footer>
  );
}
