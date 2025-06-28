import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-sm mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Sabba Hossain. All rights reserved.</p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> <a href="mailto:sabbahossain@gmail.com" className="hover:underline">sabbahossain@gmail.com</a>
          </p>
          <p className="flex items-center gap-2 mt-1">
            <FaPhone /> <a href="tel:+8801860678455" className="hover:underline">01860678455</a>
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/sabba1010"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://facebook.com/your-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-primary transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com/your-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-primary transition"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
