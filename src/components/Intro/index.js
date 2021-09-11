import React from "react";
import PropTypes from "prop-types";

function Intro(props) {
  return (
    <section id="intro">
      <div className="intro-overlay"></div>

      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>{props.preTitle}Hello, People.</h5>
            <h1>{props.title}I'm Abhipriyo Biswas.</h1>

            <p className="intro-position">
              <span>{props.position1}Front-end Developer</span>
              <span>{props.position2}UI/UX Designer</span>
            </p>

            <a className="button stroke smoothscroll" href="#about" title="">
              {props.buttonTitle}More About Me
            </a>
          </div>
        </div>
      </div>

      <ul className="intro-social">
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
    </section>
  );
}

Intro.propTypes = {
  title: PropTypes.string,
  preTitle: PropTypes.string,
  position1: PropTypes.string,
  position2: PropTypes.string,
  buttonTitle: PropTypes.string,
};

export default Intro;
