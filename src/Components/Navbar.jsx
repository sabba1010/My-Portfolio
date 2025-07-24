import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const navItemVariants = {
  hover: {
    scale: 1.1,
    color: "#fb923c",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const socialIconVariants = {
  hover: {
    scale: 1.2,
    color: "#fb923c",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.9 },
};

const Navbar = () => {
  return (
    <motion.div
      className="navbar bg-neutral text-white shadow-lg px-4 fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="navbar-start">
        <MotionLink
          to="/"
          className="text-2xl font-bold text-orange-400"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          Sabba<span className="text-white">Hossain</span>
        </MotionLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.li key={item} variants={navItemVariants} whileHover="hover">
              <a href={item === "Home" ? "/" : `#${item.toLowerCase()}`}>
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {[
          {
            href: "https://github.com/sabba1010",
            icon: <FaGithub size={20} />,
            label: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/sabba1010/",
            icon: <FaLinkedin size={20} />,
            label: "LinkedIn",
          },
          {
            href: "https://www.facebook.com/sabba.hossain.niloy/",
            icon: <FaFacebook size={20} />,
            label: "Facebook",
          },
          {
            href: "https://twitter.com/your-link",
            icon: <FaTwitter size={20} />,
            label: "Twitter",
          },
        ].map(({ href, icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="transition"
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {icon}
          </motion.a>
        ))}

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-white rounded-box w-52"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={item === "Home" ? "/" : `#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
