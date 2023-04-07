import React from "react";
import "./footer.css";
import { FaCode } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className="footer__logo">
        <FaCode />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://medium.com/@rahul.012.arora">
          <BsMedium />
        </a>
        <a href="https://www.linkedin.com/in/rahul012/">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/chirpings/">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rahul Arora</small>
      </div>
    </footer>
  );
};

export default Footer;
