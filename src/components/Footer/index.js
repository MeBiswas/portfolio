import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer>
      <div className="row">
        <div className="col-six tab-full pull-right social">
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
            <span>© Copyright 2018 {props.copyright}</span>
            <span>
              Design by <a href="http://www.styleshout.com/">styleshout</a>
            </span>
            <span>
              Distributed by <a href="https://themewagon.com/">themewagon</a>
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
  copyright: PropTypes.string,
};

export default Footer;
