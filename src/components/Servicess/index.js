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
						Throughout my journey, I have developed a keen eye for detail and a
						deep understanding of storytelling techniques. I believe that every
						video or audio project has its unique narrative, and my goal is to
						enhance that narrative by seamlessly combining visuals, audio, and
						effects.
					</p>
					<p className="lead">
						Whether it's crafting engaging videos, perfecting audio tracks, or
						adding captivating effects, I am committed to delivering
						high-quality and impactful work. I thrive in collaborative
						environments and enjoy working closely with clients to bring their
						vision to fruition.
					</p>
				</div>
			</div>

			{/* <div className="row services-content">
        <div>
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
      </div> */}
		</section>
	);
};

Services.propTypes = {
  secTitle: PropTypes.string,
};

export default Services;
