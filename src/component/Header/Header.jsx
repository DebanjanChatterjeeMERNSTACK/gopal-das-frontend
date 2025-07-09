import "./Header.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header_container">
        <div className="header_logo">
          <h3>LOGO</h3>
        </div>
        
        {/* Mobile menu button */}
        <div className="mobile_menu_btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Navigation menu */}
        <div className={`header_menu ${isMenuOpen ? "active" : ""}`}>
          <li>Home</li>
          <li>Books</li>
          <li>Blog</li>
          <li>Image Gallery</li>
          <li>Video Gallery</li>
          <li>Contact</li>
        </div>
      </div>
    </>
  );
};

export default Header;