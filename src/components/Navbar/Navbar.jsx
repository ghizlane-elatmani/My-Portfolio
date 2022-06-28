import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaGripLines, FaTimes } from "react-icons/fa";
import { images } from "../../constants";
import { MenuItems } from "./MenuItems";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navList = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      console.log("navList: ", navList.current);
      navList.current.classList.remove("show");
    } else {
      navList.current.classList.add("show");
    }
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <nav className={navbar ? "Navbar active" : "Navbar"}>
      <div className="nav-container">
        <img src={images.logo} alt="" className="nav-logo" />

        <ul className="nav-list" ref={navList}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="menu-icon">
          <button className="menu-btn">
            <FaLinkedinIn />
          </button>

          <button className="menu-btn">
            <FaGithub />
          </button>

          <button className="menu-btn toggle" onClick={handleClick}>
            {isOpen ? <FaTimes /> : <FaGripLines />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
