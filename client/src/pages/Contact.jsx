import React from "react";
import contactImage from "../assets/images/contact-image.png";
import Logo from "../components/Logo";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left-container">
        <h3>Let's Get In Touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:nkhanhha26@gmail.com">
          nkhanhha26@gmail.com
        </a>
        <i class="fab fa-linkedin"></i>
        <a
          class="mail-links"
          href="https://www.linkedin.com/in/khanh-ha-nguyen1/"
        >
          LinkedIn
        </a>
        <i class="fab fa-instagram"></i>
        <a href="https://www.instagram.com/k_hapriviere/">Instagram</a>
        <i class="fab fa-github"></i>
        <a className="mail-links" href="https://github.com/KhanhHa26">
          GitHub
        </a>
      </div>
      <div className="contact-right-container">
        <img src={contactImage} alt="Girl Holding a Dog" />
      </div>
    </div>
  );
};
export default Contact;
