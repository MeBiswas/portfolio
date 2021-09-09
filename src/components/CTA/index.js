import React from "react";
import PropTypes from "prop-types";

function CTA(props) {
  return (
    <section id="cta" class="grey-section">
      <div class="row cta-content">
        <div class="col-twelve section-ads">
          <h2 class="h01">
            <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">
              {props.text}Styleshout Recommends Dreamhost.
            </a>
          </h2>

          <p class="lead">
            Looking for an awesome and reliable webhosting? Try{" "}
            <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">
              <span>DreamHost</span>
            </a>
            . Get <span>$50 off</span> when you sign up with the promocode{" "}
            <span>styleshout</span>.
          </p>

          <div class="action">
            <a
              class="button button-primary large"
              href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

CTA.propTypes = {
  text: PropTypes.string,
};

export default CTA;
