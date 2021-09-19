import React from "react";
// Proptypes
import PropTypes from "prop-types";

export const AboutComponent = ({
	title,
	skills,
	profile,
	skillsTitle,
	profileTitle,
}) => {
  const { dob, job, name, email, website } = { ...profile[0] };
	return (
		<section id="about">
			<div className="row section-intro">
				<div className="col-twelve">
					<h5>About</h5>
					<h1>Let me introduce myself.</h1>

					<div className="intro-info">
						<img src="images/profile-pic.jpg" alt="Profile_Picture" />
						<p className="lead">{title}</p>
					</div>
				</div>
			</div>

			<div className="row about-content">
				<div className="col-six tab-full">
					<h3>Profile</h3>
					<p>{profileTitle}</p>

					<ul className="info-list">
						<li>
							<strong>Fullname:</strong>
							<span>{name}</span>
						</li>
						<li>
							<strong>Birth Date:</strong>
							<span>{dob}</span>
						</li>
						<li>
							<strong>Job:</strong>
							<span>
								{job.map((el, i) => (
									<React.Fragment key={i}>{el} </React.Fragment>
								))}
							</span>
						</li>
						<li>
							<strong>Website:</strong>
							<span>{website}</span>
						</li>
						<li>
							<strong>Email:</strong>
							<span>{email}</span>
						</li>
					</ul>
				</div>

				<div className="col-six tab-full">
					<h3>Skills</h3>
					<p>{skillsTitle}</p>

					<ul className="skill-bars">
						{skills.map((el, i) => (
							<li key={i}>
								<div className={`progress percent${el.proficiency}`}>
									<span>{el.proficiency}%</span>
								</div>
								<strong>{el.skill}</strong>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="row button-section">
				<div className="col-twelve">
					<a
						href="#contact"
						title="Hire Me"
						className="button stroke smoothscroll"
					>
						Hire Me
					</a>
					<a href="/" title="Download CV" className="button button-primary">
						Download CV
					</a>
				</div>
			</div>
		</section>
	);
};

AboutComponent.propTypes = {
	title: PropTypes.string,
	// skills: PropTypes.string,
	// profile: PropTypes.string,
	skillsTitle: PropTypes.string,
	profileTitle: PropTypes.string,
};
