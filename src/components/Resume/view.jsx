import React from "react";
// Style
import "./style.css";
// Proptypes
import PropTypes from "prop-types";

export const ResumeComponent = ({ education, experience }) => {
	return (
		<section id="resume" className="grey-section">
			<div className="row section-intro">
				<div className="col-twelve">
					<h5>Resume</h5>
					<h1>More of my credentials.</h1>

					<p className="lead">
						My goal is to deliver exceptional work that exceeds expectations and
						leaves a lasting impact on audiences. Whether it's editing videos
						for social media, producing promotional materials, or enhancing
						audio tracks for podcasts, I am committed to bringing creativity,
						technical excellence, and a fresh perspective to every project.
					</p>
				</div>
			</div>

			<div className="row resume-timeline">
				<div className="col-twelve resume-header">
					<h2>Work Experience</h2>
				</div>

				<div className="col-twelve">
					<div
						className={
							experience.length > 1 ? "timeline-wrap" : "timeline-wrap-none"
						}
					>
						{experience.map((el, i) => (
							<div key={i} className="timeline-block">
								<div className="timeline-ico">
									<i className="fa fa-briefcase"></i>
								</div>

								<div className="timeline-header">
									<h3>{el.designation}</h3>
									<p>{el.tenure}</p>
								</div>

								<div className="timeline-content">
									<h4>{el.company}</h4>
									<p>{el.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="row resume-timeline">
				<div className="col-twelve resume-header">
					<h2>Education</h2>
				</div>

				<div className="col-twelve">
					<div
						className={
							experience.length > 1 ? "timeline-wrap" : "timeline-wrap-none"
						}
					>
						{education.map((el, i) => (
							<div key={i} className="timeline-block">
								<div className="timeline-ico">
									<i className="fa fa-graduation-cap"></i>
								</div>

								<div className="timeline-header">
									<h3>{el.course}</h3>
									<p>{el.duration}</p>
								</div>

								<div className="timeline-content">
									<h4>{el.institution}</h4>
									<p>{el.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

ResumeComponent.prototype = {
	education: PropTypes.arrayOf(
		PropTypes.shape({
			course: PropTypes.string,
			duration: PropTypes.string,
			description: PropTypes.string,
			institution: PropTypes.string,
		})
	),
	experience: PropTypes.arrayOf(
		PropTypes.shape({
			tenure: PropTypes.string,
			company: PropTypes.string,
			designation: PropTypes.string,
			description: PropTypes.string,
		})
	),
};
