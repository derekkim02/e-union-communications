import React from "react";
import companyLogo from "../assets/company-logo-navbar.svg";
import { Link } from "react-router-dom";

const linkStyle = "font-medium text-white transition-colors transition-transform duration-200 hover:text-[var(--color-accent)] hover:scale-108 active:animate-tilt-shaking"

// w-full flex items-center justify-between px-6 py-4 bg-white shadow-md
const NavBar: React.FC = () => {
	return (
    <nav className="flex items-center justify-between space-x-6 px-6 py-4 bg-[#7F8CAA] w-full top-0">
      {/* Logo */}
      <div className="flex items">
        <img src={companyLogo} className="h-10 w-auto" />
      </div>
      {/* Navigation Links */}
      <div className="flex space-x-6">
		<Link to="/" className={linkStyle}>Home</Link>
		<Link to="/about" className={linkStyle}>About</Link>
		<Link to="/services" className={linkStyle}>Services</Link>
		<Link to="/contact" className={linkStyle}>Contact</Link>
      </div>
      {/* Phone Number */}
      <div className="flex items-center">
        <a href="tel:0123456789">
          0123 456 789
        </a>
      </div>
    </nav>
  );
};

export default NavBar;