import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Resume from "../assets/Resume (1).pdf";

const MotionLink = motion(Link);

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl h-16 z-50 flex items-center justify-between px-6"
      style={{
        background: "rgba(3, 7, 18, 0.75)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "1rem",
        boxShadow: "0 4px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.08)",
      }}
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <MotionLink
        to="/"
        className="text-xl font-black tracking-tighter flex items-center gap-1 shrink-0"
        whileHover={{ scale: 1.03 }}
      >
        <span className="text-gradient">Sabba</span>
        <span className="text-white/60">.dev</span>
      </MotionLink>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-1 font-medium text-sm">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="hidden lg:flex items-center gap-3">
        {/* Social Icons */}
        <motion.a
          href="https://github.com/sabba1010"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/8 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub size={17} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/sabba1010/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/8 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin size={17} />
        </motion.a>

        {/* Divider */}
        <div className="h-5 w-px bg-white/10 mx-1" />

        {/* Hire Me */}
        <motion.a
          href={Resume}
          download
          className="px-4 py-2 rounded-lg text-sm font-bold text-white"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.9) 0%, rgba(168,85,247,0.9) 100%)",
            boxShadow: "0 0 20px -4px rgba(99,102,241,0.6)",
          }}
          whileHover={{ scale: 1.04, boxShadow: "0 0 28px -2px rgba(99,102,241,0.8)" }}
          whileTap={{ scale: 0.97 }}
        >
          Hire Me ↗
        </motion.a>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl glass-card rounded-2xl w-52 gap-1"
            style={{ background: "rgba(3,7,18,0.95)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={item === "Home" ? "/" : `#${item.toLowerCase()}`} className="py-2 text-white/70 hover:text-white rounded-lg">
                  {item}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href={Resume} download className="py-2 bg-primary/20 text-primary font-bold rounded-lg">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;


