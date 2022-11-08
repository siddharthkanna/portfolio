import React from "react";
import "./Nav.css";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-scroll";


function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <h1 className="sk">{'{'}SK{'}'}</h1>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li><Link activeClass="active" to="intro" smooth={true} duration={500}>01.Home</Link></li>
        <li><Link activeClass="active" to="aboutt" smooth={true} duration={500}>02.About</Link></li>
        <li><Link activeClass="active" to="skills" smooth={true} duration={500}>03.Skills</Link></li>
        <li><Link activeClass="active" to="project" smooth={true} duration={500}>04.Projects</Link></li>
        <li><Link activeClass="active" to="contact" smooth={true} duration={500}>05.Contact</Link></li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={23} style={{ color: "#fff" }} />
        ) : (
          <RiMenu3Fill size={23} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Nav;
