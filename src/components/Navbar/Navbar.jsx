import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaGripLines, FaTimes } from "react-icons/fa";
import { images } from "../../constants";
import { MenuItems } from "./MenuItems";
import { Link } from "react-scroll";
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

  const closeMenu = () => {
    navList.current.classList.remove("show");
    setIsOpen(false);
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
                <Link
                  to={item.url}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                  className={item.cName}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="menu-icon">
          <a
            href="https://www.linkedin.com/in/ghizlane-el-atmani-a91732214/"
            className="menu-btn"
          >
            <FaLinkedinIn />
          </a>

          <a href="https://github.com/ghizlane-elatmani" className="menu-btn">
            <FaGithub />
          </a>

          <button className="menu-btn toggle" onClick={handleClick}>
            {isOpen ? <FaTimes /> : <FaGripLines />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
