import React from "react";
import "./Nav.css";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

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
      <h1>{'{'}SK{'}'}</h1>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>01.Home</li>
        <li>02.About</li>
        <li>03.Skills</li>
        <li>04.Projects</li>
        <li>05.Contact</li>
         
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
