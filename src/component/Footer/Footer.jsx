import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_contaner">
        <div className="footer_logo">
          <h3>LOGO</h3>
        </div>
        <div className="footer_menu">
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
        <div className="footer_comapany">
          <h6>© 2025. Website design by Debanjan with ❤️.</h6>

        </div>
      </div>
    </>
  );
};
export default Footer;
