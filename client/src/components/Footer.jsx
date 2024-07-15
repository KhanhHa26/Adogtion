import React from "react";
import Logo from "./Logo";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="footer-contacts">
          <h3>Contact Us</h3>
          <p>Email: nkhanhha26@gmail.com</p>
          <p>Phone: +1 929-418-5357</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/k_hapriviere/">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/khanh-ha-nguyen1/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/KhanhHa26">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        &copy; 2024 Khanh Ha Nguyen. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
