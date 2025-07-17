import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Dashboard_header.css";

const Dashboard_header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
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
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              end
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/book"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/blog"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/image-gallery"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Image Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/video-gallery"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Video Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_header;
