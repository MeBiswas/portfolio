import React from "react";
// Proptypes
import PropTypes from "prop-types";

function Footer({ name }) {
  return (
    <footer>
      <div className="row">
        <div className="col-four tab-full pull-right social">
          <ul className="footer-social">
            <li>
              <a href="/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-eight tab-full">
          <div className="copyright">
            <span>© Copyright 2021</span>
            <span>
              Design and Developer by{" "}
              <a href="http://www.styleshout.com/">{name}</a>
            </span>
          </div>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <i className="fa fa-long-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string,
};

export default Footer;
