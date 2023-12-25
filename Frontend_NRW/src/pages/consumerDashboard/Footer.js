import React from "react";
import "./css/Footer.css";
import {Link} from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import icon from "./Assets/icon.png"
import phonecall from './Assets/phonecall.svg'
import email from './Assets/email.svg'
import location from './Assets/location.svg'
const Footer = () => {
  return (
    <footer>
      <div className="foot1">
        <div className="jal">
          <div className="icons">
            <img className="drop-img" src={icon} alt="img" />
            <p className="foot-logo">JalSamadhan</p>
          </div>
          <h3>Digital NRW Solution</h3>
          <p>our mission is to revolutionize water management by leveraging cutting-edge technology and sustainable practices, addressing critical challenges in the supply, distribution, and conservation of water.</p>
          <ul className="footer-logo">
          <li><FaFacebook className="fb-logo" /></li>
          <li><FaInstagram className="fb-logo" /></li>
          <li><FaTwitter className="fb-logo" /></li>
          <li><FaLinkedin className="fb-logo" /></li>
        </ul>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/sessions">Online Sessions</Link>
          <Link to="/blogs">Blogs</Link>
        </div>

        <div className="support">
          <h3>Support</h3>
          <Link to="/complaint">Complaint</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/feedback">Feedback</Link>
        </div>

        <div className="contact">
        <h3>Contact Us</h3>
        <div className="contact-details">
          <div className="contact-item">
            <img src={phonecall} alt='call'/>
            <p>+91 1234567890</p>
          </div>
          <div className="contact-item">
            <img src={email} alt='email'/>
            <p>info@example.com</p>
          </div>
          <div className="contact-item">
            <img src={location} alt='loc'/>
            <p>123 Main St, Cityville</p>
          </div>
        </div>
        </div>

      </div>

      <div class="foot2">
      <div class="cpyr">© 2023 JalSamadhan. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;