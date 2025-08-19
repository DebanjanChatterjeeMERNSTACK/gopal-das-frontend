import "./Header.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header_container">
        <div className="header_logo">
           <img src={logo} width={100} height={100}/>
        </div>

        {/* Mobile menu button */}
        <div className="mobile_menu_btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation menu */}
        <div className={`header_menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active-link" : ""}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/book" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blogs" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/image-gallery" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Image Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/video-gallery" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Video Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Contact
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;