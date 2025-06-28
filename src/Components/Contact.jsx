import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-primary">Contact Information</h2>

      <div className="space-y-6 text-lg">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-xl text-secondary" />
          <span>Email: <a href="mailto:sabbahossain@gmail.com" className="underline hover:text-primary">sabbahossain@gmail.com</a></span>
        </div>

        <div className="flex items-center gap-4">
          <FaPhone className="text-xl text-secondary" />
          <span>Phone: <a href="tel:+8801860678455" className="hover:text-primary">+880 1860 678 455</a></span>
        </div>

        <div className="flex items-center gap-4">
          <FaWhatsapp className="text-xl text-secondary" />
          <span>WhatsApp: <a href="https://wa.me/8801860678455" target="_blank" rel="noreferrer" className="hover:text-primary">Chat on WhatsApp</a></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
