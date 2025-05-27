import React from "react";
import companyLogo from "@/assets/company-logo-navbar.svg";
import ThemeToggle from "./theme-toggle";
import { Link } from "react-router-dom";
import { Users, BookOpenText, BriefcaseBusiness } from "lucide-react";

interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: React.ReactNode
  items?: MenuItem[]
}

interface Logo {
  url: string
  src: string
  alt?: string
  title: string
}

interface NavBarProps {
  logo?: Logo
  menu?: MenuItem[]
}

const logo: Logo = {
  url: "/",
  src: companyLogo,
  title: "E Union Communication"
}

const homeMenu: MenuItem = {
  title: "Home",
  url: "/",
}
const aboutMenu: MenuItem = {
  title: "About",
  url: "/about",
  items: [
    {
      title: "The Team",
      url: "###",
      description: "Meet the team behind the company",
      icon: <Users className="size-5 shrink-0" />
    },
    {
      title: "Our Story",
      url: "###",
      description: "Learn about our journey and values",
      icon: <BookOpenText className="size-5 shrink-0" />
    },
    {
      title: "Careers",
      url: "###",
      description: "Join our team and grow with us",
      icon: <BriefcaseBusiness className="size-5 shrink-0" />
    },
  ]
}




const linkStyle = "font-medium text-white transition-colors transition-transform duration-200 hover:text-[var(--color-accent)] hover:scale-108 active:animate-tilt-shaking"

// w-full flex items-center justify-between px-6 py-4 bg-white shadow-md
const NavBar: React.FC = () => {
	return (
    <nav className="flex items-center justify-between space-x-6 px-6 py-4 bg-[#7F8CAA] w-full top-0">
      <div className="flex items">
        <img src={companyLogo} className="h-10 w-auto" />
      </div>

      <div className="flex space-x-6">
        <Link to="/" className={linkStyle}>Home</Link>
        <Link to="/about" className={linkStyle}>About</Link>
        <Link to="/services" className={linkStyle}>Services</Link>
        <Link to="/contact" className={linkStyle}>Contact</Link>
      </div>

      <div className="flex items-center space-x-6">
        <ThemeToggle />
        <a href="tel:0123456789">
          0123 456 789
        </a>
      </div>
    </nav>
  );
};

export default NavBar;