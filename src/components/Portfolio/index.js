import React from "react";
import PropTypes from "prop-types";

function Portfolio(props) {
  return (
		<section id="portfolio">
			<div className="row section-intro">
				<div className="col-twelve">
					<h5>{props.secTitle}Portfolio</h5>
					<h1>Check Out Some of My Works.</h1>

					<p className="lead">
						Please explore my portfolio to see examples of my previous projects.
						I am excited about the opportunity to collaborate and contribute to
						your next creative endeavor. Let's create something extraordinary
						together!
					</p>
				</div>
			</div>

			<div className="row portfolio-content">
				<div className="col-twelve">
					<div id="folio-wrapper" className="block-1-2 block-mob-full stack">
						{/* <div className="bgrid folio-item">
							<div className="item-wrap">
								<img src="images/portfolio/liberty.jpg" alt="Liberty" />
								<a href="#modal-01" className="overlay">
									<div className="folio-item-table">
										<div className="folio-item-cell">
											<h3 className="folio-title">Liberty</h3>
											<span className="folio-types">Graphic Design</span>
										</div>
									</div>
								</a>
							</div>
						</div>

						<div className="bgrid folio-item">
							<div className="item-wrap">
								<img src="images/portfolio/shutterbug.jpg" alt="Shutterbug" />
								<a href="#modal-02" className="overlay">
									<div className="folio-item-table">
										<div className="folio-item-cell">
											<h3 className="folio-title">Shutterbug</h3>
											<span className="folio-types">Web Design</span>
										</div>
									</div>
								</a>
							</div>
						</div>

						<div className="bgrid folio-item">
							<div className="item-wrap">
								<img src="images/portfolio/clouds.jpg" alt="Clouds" />
								<a href="#modal-03" className="overlay">
									<div className="folio-item-table">
										<div className="folio-item-cell">
											<h3 className="folio-title">Clouds</h3>
											<span className="folio-types">Web Design</span>
										</div>
									</div>
								</a>
							</div>
						</div>

						<div className="bgrid folio-item">
							<div className="item-wrap">
								<img src="images/portfolio/beetle.jpg" alt="Beetle" />
								<a href="#modal-04" className="overlay">
									<div className="folio-item-table">
										<div className="folio-item-cell">
											<h3 className="folio-title">Beetle</h3>
											<span className="folio-types">Branding</span>
										</div>
									</div>
								</a>
							</div>
						</div>

						<div className="bgrid folio-item">
							<div className="item-wrap">
								<img src="images/portfolio/lighthouse.jpg" alt="Lighthouse" />
								<a href="#modal-05" className="overlay">
									<div className="folio-item-table">
										<div className="folio-item-cell">
											<h3 className="folio-title">Lighthouse</h3>
											<span className="folio-types">Web Development</span>
										</div>
									</div>
								</a>
							</div>
						</div>

						<div className="bgrid folio-item">
							<div className="item-wrap">
								<img src="images/portfolio/salad.jpg" alt="Salad" />
								<a href="#modal-06" className="overlay">
									<div className="folio-item-table">
										<div className="folio-item-cell">
											<h3 className="folio-title">Salad</h3>
											<span className="folio-types">Branding</span>
										</div>
									</div>
								</a>
							</div>
						</div> */}

						{/* <div id="modal-01" className="popup-modal slider mfp-hide">
							<div className="media">
								<img src="images/portfolio/modals/m-liberty.jpg" alt="" />
							</div>

							<div className="description-box">
								<h4>Liberty</h4>
								<p>
									Proin gravida nibh vel velit auctor aliquet. Aenean
									sollicitudin, lorem quis bibendum auctor, nisi elit consequat
									ipsum, nec sagittis sem nibh id elit.
								</p>

								<div className="categories">Web Development</div>
							</div>

							<div className="link-box">
								<a href="http://www.behance.net">Details</a>
								<a href="/" className="popup-modal-dismiss">
									Close
								</a>
							</div>
						</div>

						<div id="modal-02" className="popup-modal slider mfp-hide">
							<div className="media">
								<img src="images/portfolio/modals/m-shutterbug.jpg" alt="" />
							</div>

							<div className="description-box">
								<h4>Shutterbug</h4>
								<p>
									Proin gravida nibh vel velit auctor aliquet. Aenean
									sollicitudin, lorem quis bibendum auctor, nisi elit consequat
									ipsum, nec sagittis sem nibh id elit.
								</p>

								<div className="categories">Web Design</div>
							</div>

							<div className="link-box">
								<a href="http://www.behance.net">Details</a>
								<a href="/" className="popup-modal-dismiss">
									Close
								</a>
							</div>
						</div>

						<div id="modal-03" className="popup-modal slider mfp-hide">
							<div className="media">
								<img src="images/portfolio/modals/m-clouds.jpg" alt="" />
							</div>

							<div className="description-box">
								<h4>Clouds</h4>
								<p>
									Proin gravida nibh vel velit auctor aliquet. Aenean
									sollicitudin, lorem quis bibendum auctor, nisi elit consequat
									ipsum, nec sagittis sem nibh id elit.
								</p>

								<div className="categories">Web Design</div>
							</div>

							<div className="link-box">
								<a href="http://www.behance.net">Details</a>
								<a href="/" className="popup-modal-dismiss">
									Close
								</a>
							</div>
						</div>

						<div id="modal-04" className="popup-modal slider mfp-hide">
							<div className="media">
								<img src="images/portfolio/modals/m-beetle.jpg" alt="" />
							</div>

							<div className="description-box">
								<h4>Beetle</h4>
								<p>
									Proin gravida nibh vel velit auctor aliquet. Aenean
									sollicitudin, lorem quis bibendum auctor, nisi elit consequat
									ipsum, nec sagittis sem nibh id elit.
								</p>

								<div className="categories">Branding</div>
							</div>

							<div className="link-box">
								<a href="http://www.behance.net">Details</a>
								<a href="/" className="popup-modal-dismiss">
									Close
								</a>
							</div>
						</div>

						<div id="modal-05" className="popup-modal slider mfp-hide">
							<div className="media">
								<img src="images/portfolio/modals/m-lighthouse.jpg" alt="" />
							</div>

							<div className="description-box">
								<h4>Lighthouse</h4>
								<p>
									Proin gravida nibh vel velit auctor aliquet. Aenean
									sollicitudin, lorem quis bibendum auctor, nisi elit consequat
									ipsum, nec sagittis sem nibh id elit.
								</p>

								<div className="categories">Web Development</div>
							</div>

							<div className="link-box">
								<a href="http://www.behance.net">Details</a>
								<a href="/" className="popup-modal-dismiss">
									Close
								</a>
							</div>
						</div>

						<div id="modal-06" className="popup-modal slider mfp-hide">
							<div className="media">
								<img src="images/portfolio/modals/m-salad.jpg" alt="" />
							</div>

							<div className="description-box">
								<h4>Salad</h4>
								<p>
									Proin gravida nibh vel velit auctor aliquet. Aenean
									sollicitudin, lorem quis bibendum auctor, nisi elit consequat
									ipsum, nec sagittis sem nibh id elit.
								</p>

								<div className="categories">Branding</div>
							</div>

							<div className="link-box">
								<a href="http://www.behance.net">Details</a>
								<a href="/" className="popup-modal-dismiss">
									Close
								</a>
							</div>
						</div> */}

						<div className="bgrid folio-item">
							<div className="item-wrap">
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/iTp1WG328G0"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>
						</div>
						<div className="bgrid folio-item">
							<div className="item-wrap">
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/ofKQlRn_HGI"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

Portfolio.propTypes = {
  secTitle: PropTypes.string,
};

export default Portfolio;
