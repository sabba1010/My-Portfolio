import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeUpScale = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/60 text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <FaEnvelope className="text-2xl" />,
              label: "Email",
              info: "sabbahossain123@gmail.com",
              href: "mailto:sabbahossain123@gmail.com",
              color: "bg-blue-500/10 text-blue-400"
            },
            {
              icon: <FaPhone className="text-2xl" />,
              label: "Phone",
              info: "+8801869678455",
              href: "tel:+8801869678455",
              color: "bg-green-500/10 text-green-400"
            },
            {
              icon: <FaWhatsapp className="text-2xl" />,
              label: "WhatsApp",
              info: "+8801869678455",
              href: "https://wa.me/8801869678455",
              color: "bg-emerald-500/10 text-emerald-400"
            },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-8 rounded-[2rem] flex flex-col items-center text-center group"
              variants={fadeUpScale}
              whileHover={{ y: -5 }}
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h4 className="text-white font-bold text-xl mb-2">{item.label}</h4>
              <p className="text-white/60 text-sm font-medium">{item.info}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
