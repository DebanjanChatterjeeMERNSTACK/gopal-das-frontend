import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_contaner">
        <div className="footer_logo">
          <h3>LOGO</h3>
        </div>
        <div className="footer_menu">
          <li>Home</li>
          <li>Books</li>
          <li>Blog</li>
          <li>Image Gallery</li>
          <li>Video Gallery</li>
          <li>Contact</li>
        </div>
        <div className="footer_comapany">
          <h6>© 2025 Debanjan. Designed by SoftTech with ❤️.</h6>
        </div>
      </div>
    </>
  );
};
export default Footer;
