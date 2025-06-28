import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">
          Sabba<span className="text-secondary">Hossain</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="flex items-center gap-3">
          <a href="https://github.com/sabba1010" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl hover:text-primary" />
          </a>
          <a href="https://linkedin.com/in/your-link" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl hover:text-primary" />
          </a>
          <a href="https://facebook.com/your-link" target="_blank" rel="noreferrer">
            <FaFacebook className="text-xl hover:text-primary" />
          </a>
          <a href="https://twitter.com/your-link" target="_blank" rel="noreferrer">
            <FaTwitter className="text-xl hover:text-primary" />
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
