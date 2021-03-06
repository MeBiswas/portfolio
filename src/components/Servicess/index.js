import React from "react";
import PropTypes from "prop-types";

const Services = (props) => {
  return (
    <section id="services">
      <div className="overlay"></div>

      <div className="row section-intro">
        <div className="col-twelve">
          <h5>{props.secTitle}Services</h5>
          <h1>What Can I Do For You?</h1>

          <p className="lead">
            Lorem ipsum Do commodo in proident enim in dolor cupidatat
            adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
            ipsum Consectetur ut in in eu do.
          </p>
        </div>
      </div>

      <div className="row services-content">
        <div id="owl-slider" className="owl-carousel services-list">
          <div className="service">
            <span className="icon">
              <i className="icon-earth"></i>
            </span>

            <div className="service-content">
              <h3>Webdesign</h3>

              <p className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="icon-window"></i>
            </span>

            <div className="service-content">
              <h3>Web Development</h3>

              <p className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="icon-paint-brush"></i>
            </span>

            <div className="service-content">
              <h3>Branding</h3>

              <p className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="icon-toggles"></i>
            </span>

            <div className="service-content">
              <h3>UI/UX Design</h3>

              <p className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="icon-image"></i>
            </span>

            <div className="service-content">
              <h3>Graphics Design</h3>

              <p className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="icon-chat"></i>
            </span>

            <div className="service-content">
              <h3>Consultancy</h3>

              <p className="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  secTitle: PropTypes.string,
};

export default Services;
