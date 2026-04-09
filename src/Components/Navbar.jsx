import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-16 glass-effect rounded-2xl z-50 flex items-center justify-between px-6 shadow-2xl"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center">
        <MotionLink
          to="/"
          className="text-2xl font-black tracking-tighter text-gradient"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          Sabba<span className="text-white">.dev</span>
        </MotionLink>
      </div>

      <div className="hidden lg:flex items-center gap-8">
        <ul className="flex items-center gap-6 font-medium text-sm tracking-wide">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
              <a 
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        
        <div className="h-6 w-px bg-white/10 mx-2" />

        <div className="flex items-center gap-4">
          {[
            {
              href: "https://github.com/sabba1010",
              icon: <FaGithub size={18} />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/sabba1010/",
              icon: <FaLinkedin size={18} />,
              label: "LinkedIn",
            },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-white/60 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl glass-card rounded-2xl w-52 gap-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={item === "Home" ? "/" : `#${item.toLowerCase()}`} className="py-2 active:bg-primary/20">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
