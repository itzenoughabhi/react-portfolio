import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">

      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
        <div className="left nav_items">ITZENOUGHABHI</div>
        <div className="right">
          <a href="#home" className="nav_items">
            HOME
          </a>
          <a href="#experience" className="nav_items">
            EXPERIENCES
          </a>
          <a href="#skills" className="nav_items">
            SKILL
          </a>
          <a href="#projects" className="nav_items">
            PROJECTS
          </a>
          <a href="#contact" className="nav_items">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
