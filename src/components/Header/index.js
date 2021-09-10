import React, { useState } from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  // State
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <div className="row">
        <div data-test="top-bar" className="top-bar">
          <a
            href="/"
            data-test="menu-toggle"
            className={"menu-toggle" + (menu ? " is-clicked" : "")}
            onClick={(e) => {
              setMenu(!menu);
            }}
          >
            <span>Menu</span>
          </a>

          <div data-test="logo" className="logo">
            <a href="index.html">{props.logoTitle}</a>
          </div>

          <nav data-test="main-nav-wrap" id="main-nav-wrap">
            <ul
              className="main-navigation"
              style={{ display: menu ? "block" : "none" }}
            >
              <li className="current">
                <a className="smoothscroll" href="#intro" title="">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume" title="">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio" title="">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#services" title="">
                  Services
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact" title="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  logoTitle: PropTypes.string,
};

export default Header;
